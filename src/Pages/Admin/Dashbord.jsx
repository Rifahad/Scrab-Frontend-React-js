import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import { FaRoute, FaBuilding, FaUsers } from 'react-icons/fa';  
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";  
import Todo from "../../Components/Admin/Todo"
const Dashboard = () => {  
  const [userData, setUserData] = useState([]);

  const [userCount, setUserCount] = useState(0);  
  const [agentCount, setAgentCount] = useState(0);  
  const [pickupCount, setPickupCount] = useState(0);  
  const [agentPickupCount, setAgentPickupCount] = useState(0);  
  const [chartData, setChartData] = useState([]);  
   const fetchUser=async()=> {
    try {
      const response = await axios.get("http://localhost:7000/Users");
      setUserData(response.data.userData);
      setFilterdata(response.data.userData);
    } catch (error) {
      console.log(
        error,
        "error in fetching user data from backend to frontend"
      );
    }
  }


  const fetchTotalUserCount = async () => {  
    try {  
      const response = await axios.get('http://localhost:7000/dashboard/totalUserCount');  
      setUserCount(response.data.count);  
      updateChartData(response.data.count, agentCount, pickupCount, agentPickupCount);  
    } catch (error) {  
      console.error('Error fetching total user count:', error);  
    }  
  };  

  const fetchTotalAgentCount = async () => {  
    try {  
      const response = await axios.get('http://localhost:7000/dashboard/totalAgentCount');  
      setAgentCount(response.data.count);  
      updateChartData(userCount, response.data.count, pickupCount, agentPickupCount);  
    } catch (error) {  
      console.error('Error fetching total agent count:', error);  
    }  
  };  

  const fetchTotalPickupCount = async () => {  
    try {  
      const response = await axios.get('http://localhost:7000/dashboard/totalPickupCount');  
      setPickupCount(response.data.count);  
      updateChartData(userCount, agentCount, response.data.count, agentPickupCount);  
    } catch (error) {  
      console.error('Error fetching total pickup count:', error);  
    }  
  };  

  const fetchTotalAgentPickupCount = async () => {  
    try {  
      const response = await axios.get('http://localhost:7000/dashboard/totalAgentPickupCount');  
      setAgentPickupCount(response.data.count);  
      updateChartData(userCount, agentCount, pickupCount, response.data.count);  
    } catch (error) {  
      console.error('Error fetching total agent pickup count:', error);  
    }  
  };  

  const updateChartData = (user, agent, pickup, agentPickup) => {
    // Create separate data structures for user and agent counts
    const userData = [{ name: 'Users', count: user }];
    const agentData = [{ name: 'Companies', count: agent }];

    setChartData({ user: userData, agent: agentData }); // Update state with objects
  };

  useEffect(() => {  
    fetchUser()
    fetchTotalUserCount();  
    fetchTotalAgentCount();  
    fetchTotalPickupCount();  
    fetchTotalAgentPickupCount();  
  }, []);  

  return (  
    <>  
      <div className="flex min-h-screen w-full flex-col bg-muted/40">  
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">  
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">  
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">  
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">  
                <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">  
                  <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Users</h3>  
                  <FaUsers />  
                </div>  
                <div className="p-6">  
                  <div className="text-2xl font-bold">{userCount}</div>  
                  <p className="text-xs text-muted-foreground">+ Total users count in month</p>  
                </div>  
              </div>  
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">  
                <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">  
                  <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Companies</h3>  
                  <FaBuilding />  
                </div>  
                <div className="p-6">  
                  <div className="text-2xl font-bold">{agentCount}</div>  
                  <p className="text-xs text-muted-foreground">+ Total companies count in month</p>  
                </div>  
              </div>  
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">  
                <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">  
                  <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Pickups</h3>  
                  <FaRoute />  
                </div>  
                <div className="p-6">  
                  <div className="text-2xl font-bold">{pickupCount}</div>  
                  <p className="text-xs text-muted-foreground">+ Total pickups</p>  
                </div>  
              </div>  
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">  
                <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">  
                  <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Agent Pickups</h3>  
                  <FaRoute />  
                </div>  
                <div className="p-6">  
                  <div className="text-2xl font-bold">{agentPickupCount}</div>  
                  <p className="text-xs text-muted-foreground">+ Total agent pickups</p>  
                </div>  
              </div>  
            </div>  
          </main>  
        </div>  
        <div className="flex flex-col items-center space-y-8">  
        <div className="flex flex-wrap gap-5">
        <LineChart width={400} height={200} data={chartData.user}> {/* Access user data */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>

        <LineChart width={400} height={200} data={chartData.agent}> {/* Access agent data */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </div> 
  <div className="">  
    <Todo />  
  </div>  
  {/* ************************** */}

  <div className="bg-white bg-opacity-15 shadow-md rounded-lg">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Users Details</h2>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
           
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-center">Name </th>
                <th className="px-4 py-2 text-center">Image </th>
                <th className="px-4 py-2 text-center">Phone </th>
                <th className="px-4 py-2 text-center">Location </th>
                <th className="px-4 py-2 text-center">Country </th>
       
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr
                  key={index}
                  id={`user-${user._id}`}
                  className="hover:bg-gray-100 hover:bg-opacity-25"
                >
                  <td className="px-4 py-2 text-center">{user.full_name}</td>
                  <td className="px-4 py-2 text-center">
                    <img
                      src={
                        "http://localhost:7000//assets/pickupImage/" +
                        user.pickupImage
                      }
                      className="w-32 h-32"
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-2 text-center">{user.phone}</td>
                  <td className="px-4 py-2 text-center">{user.address}</td>
                  <td className="px-4 py-2 text-center">{user.country}</td>
                 
                  <td className="px-4 py-2 flex items-center justify-center space-x-2">
                  
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>
      </div>  
    </>  
  );  
};  

export default Dashboard;