import Axios from "../../Instance/Instance";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const AgentList = () => {
  const [agent, setAgent] = useState([]);
  const [loading, setLoading] = useState(true); // Optional: For loading state management

  // Fetch agent data
  useEffect(() => {
    let isMounted = true; // Flag to track component mounting status

    const Getagent = async () => {
      try {
        const response = await Axios.get("/companydata");
        if (isMounted) {
          setAgent(response.data.Agent);
        }
      } catch (error) {
        console.error(error, "error fetching agent data");
      } finally {
        if (isMounted) {
          setLoading(false); // Set loading to false if needed
        }
      }
    };

    Getagent();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  // Delete document
  const deleteDoc = async (id) => {
    try {
      const response = await Axios.post(
        `/admin/adminAgentlistDelete?id=${id}`
      );
      if (response.status === 200) {
        setAgent((prevAgents) => prevAgents.filter((user) => user._id !== id));
      }
    } catch (error) {
      console.error(error, "error in delete doc");
    }
  };

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
                  <th className="px-4 py-2 text-center">Location </th>
                  <th className="px-4 py-2 text-center">Phone </th>
                  <th className="px-4 py-2 text-center">Kilogram </th>
                  <th className="px-4 py-2 text-center">Actions </th>
                </tr>
              </thead>
              <tbody>
                {agent.map((user) => (
                  <tr
                    key={user._id}
                    className="hover:bg-gray-100 hover:bg-opacity-25"
                  >
                    <td className="px-4 py-2 text-center">{user.Companyname}</td>
                    <td className="px-4 py-2 text-center">
                      <FaLocationDot className="text-red-500" /> {user.location}
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

export default AgentList;
