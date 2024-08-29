import React, { useState, useEffect } from 'react';  
import axios from 'axios';  
import { FaRoute, FaBuilding, FaUsers } from 'react-icons/fa';  
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";  
import Todo from "../../Components/Admin/Todo";

const Dashboard = () => {  
  const [userData, setUserData] = useState([]);
  const [userCount, setUserCount] = useState(0);  
  const [agentCount, setAgentCount] = useState(0);  
  const [pickupCount, setPickupCount] = useState(0);  
  const [agentPickupCount, setAgentPickupCount] = useState(0);  
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:7000/Users", { signal: controller.signal });
        setUserData(userResponse.data.userData);
        setFilterdata(userResponse.data.userData);

        const userCountResponse = await axios.get('http://localhost:7000/dashboard/totalUserCount', { signal: controller.signal });
        setUserCount(userCountResponse.data.count);

        const agentCountResponse = await axios.get('http://localhost:7000/dashboard/totalAgentCount', { signal: controller.signal });
        setAgentCount(agentCountResponse.data.count);

        const pickupCountResponse = await axios.get('http://localhost:7000/dashboard/totalPickupCount', { signal: controller.signal });
        setPickupCount(pickupCountResponse.data.count);

        const agentPickupCountResponse = await axios.get('http://localhost:7000/dashboard/totalAgentPickupCount', { signal: controller.signal });
        setAgentPickupCount(agentPickupCountResponse.data.count);

        updateChartData(
          userCountResponse.data.count,
          agentCountResponse.data.count,
          pickupCountResponse.data.count,
          agentPickupCountResponse.data.count
        );
      } catch (error) {
        if (error.name !== 'CanceledError') {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cleanup the request on component unmount
    };
  }, []);

  const updateChartData = (user, agent, pickup, agentPickup) => {
    const userData = [{ name: 'Users', count: user }];
    const agentData = [{ name: 'Companies', count: agent }];

    setChartData({ user: userData, agent: agentData });
  };

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
            <LineChart width={400} height={200} data={chartData.user}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>

            <LineChart width={400} height={200} data={chartData.agent}>
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
