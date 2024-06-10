import axios from "axios";
import React, { useEffect, useState } from "react";

const UserList = () => {


  const [userData,setUserData] =useState([])
  const [startDate, setStartDate] = useState("");
  const [filterdata,setFilterdata] =useState([])

  const handleStartDateChange = async(e) => {
    setStartDate(e.target.value);
    const searchDate = e.target.value
    const filteredData = filterdata.filter(person => person.createdAt.startsWith(searchDate));
    setUserData(filteredData)
  };

async function fatchuser(){
  try {
    const response = await axios.get('http://localhost:7000/Users')
    setUserData(response.data.userData)
    setFilterdata(response.data.userData)
  } catch (error) {
    console.log(error,'error in fatching usr in backend to frondend');
  }
}

useEffect(()=>{
fatchuser()
},[])


// delete btn 

async function deleteDoc(id){
  console.log(id);
  try {
    console.log('here delete');
    const response = await axios.post(`http://localhost:7000/admin/User/delete?id=${id}`);
    if(response.status ==200){
      setUserData(userData.filter(user => user._id !== id));
    }
    
  } catch (error) {
    console.log(error,'error in delete doc check into the delete btn ');
  }
}


  return (
    <div className="bg-white bg-opacity-15 shadow-md rounded-lg">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Orders</h2>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <input
                type="date"
                name='startDate'
                value={startDate}
                onChange={handleStartDateChange}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
           
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-center">Name</th>
                <th className="px-4 py-2 text-center">phone</th>
                <th className="px-4 py-2 text-center">Location</th>
                <th className="px-4 py-2 text-center">Country</th>
                <th className="px-4 py-2 text-center">Date / Time</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>

              {userData.map((user, index) => (
               
                <tr
                  key={index}
                  className="hover:bg-gray-100 hover:bg-opacity-25"
                >
        
                  <td className="px-4 py-2 text-center">{user. full_name}</td>
                  <td className="px-4 py-2 text-center">{user.phone}</td>
                  <td className="px-4 py-2 text-center">{user.address}</td>
                  <td className="px-4 py-2 text-center">{user.country}</td>
                  <td className="px-4 py-2 text-center">{new Date(user.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-2 flex items-center justify-center space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">
                      Download PDF
                    </button>
                    <button  onClick={()=>deleteDoc(user._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
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
  );
};

export default UserList;
