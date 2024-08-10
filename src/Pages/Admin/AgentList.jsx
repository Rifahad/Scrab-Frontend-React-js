import axios from "axios";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const AgentProductList = () => {
  const [agent, setAgent] = useState([]);

  const Getagent = async () => {
    const response = await axios.get("http://localhost:7000/companydata");
    console.log(response.data.Agent, "datagotted");
    setAgent(response.data.Agent);
    console.log(agent, "saved data");
  };
  useEffect(() => {
    Getagent();
  }, []);

  async function deleteDoc(id) {
    try {
      const response = await axios.post(
        `http://localhost:7000/admin/User/delete?id=${id}`
      );
      if (response.status === 200) {
        setAgent(agent.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.log(error, "error in delete doc check into the delete btn");
    }
  }

  return (
    <>
      <div className="bg-white bg-opacity-15 shadow-md rounded-lg">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">All Orders</h2>
            <div className="flex items-center space-x-2"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-center">Name </th>
                  <th className="px-4 py-2 text-center">location </th>

                  <th className="px-4 py-2 text-center">Phone </th>
                  <th className="px-4 py-2 text-center">Kilogram </th>
                  <th className="px-4 py-2 text-center">Actions </th>
                </tr>
              </thead>
              <tbody>
                {agent.map((user, index) => (
                  <tr
                    key={index}
                    id={`user-${user._id}`}
                    className="hover:bg-gray-100 hover:bg-opacity-25"
                  >
                    <td className="px-4 py-2 text-center">
                      {user.Companyname}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {" "}
                      <FaLocationDot  className="text-red-500" /> kanuur
                    </td>

                    <td className="px-4 py-2 text-center">{user.phone}</td>
                    <td className="px-4 py-2 text-center">{user.kilogram}</td>
                    <td className="px-4 py-2 flex items-center justify-center space-x-2">
                      <button
                        onClick={() => deleteDoc(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                      >
                        Delete Order
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentProductList;
