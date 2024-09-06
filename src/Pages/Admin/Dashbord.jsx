import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRoute, FaBuilding, FaUsers } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import Todo from "../../Components/Admin/Todo"; // Assuming you have this component

const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState([]); // Fix: declare this state
  const [userCount, setUserCount] = useState(0);
  const [agentCount, setAgentCount] = useState(0);
  const [pickupCount, setPickupCount] = useState(0);
  const [agentPickupCount, setAgentPickupCount] = useState(0);
  const [chartData, setChartData] = useState({ user: [], agent: [] }); // Initialize with empty arrays

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const userResponse = await axios.get("http://localhost:7000/Users", {
          signal: controller.signal,
        });
        setUserData(userResponse.data.userData);
        setFilterData(userResponse.data.userData); // Fix: set data correctly

        const userCountResponse = await axios.get(
          "http://localhost:7000/dashboard/totalUserCount",
          { signal: controller.signal }
        );
        setUserCount(userCountResponse.data.count);

        const agentCountResponse = await axios.get(
          "http://localhost:7000/dashboard/totalAgentCount",
          { signal: controller.signal }
        );
        setAgentCount(agentCountResponse.data.count);

        const pickupCountResponse = await axios.get(
          "http://localhost:7000/dashboard/totalPickupCount",
          { signal: controller.signal }
        );
        setPickupCount(pickupCountResponse.data.count);

        const agentPickupCountResponse = await axios.get(
          "http://localhost:7000/dashboard/totalAgentPickupCount",
          { signal: controller.signal }
        );
        setAgentPickupCount(agentPickupCountResponse.data.count);

        updateChartData(
          userCountResponse.data.count,
          agentCountResponse.data.count,
          pickupCountResponse.data.count,
          agentPickupCountResponse.data.count
        );
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cleanup the request on component unmount
    };
  }, []);

  const updateChartData = (user, agent) => {
    const userData = [{ name: "Users", count: user }];
    const agentData = [{ name: "Companies", count: agent }];

    setChartData({ user: userData, agent: agentData });
  };

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* User Count Card */}
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

              {/* Agent Count Card */}
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

              {/* Pickup Count Card */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
                  <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Pickups</h3>
                  <FaRoute />
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold">{pickupCount}</div>
                  <p className="text-xs text-muted-foreground">+ Total pickups count in month</p>
                </div>
              </div>

              {/* Agent Pickup Count Card */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="space-y-1.5 p-6 flex flex-row items-center justify-between pb-2">
                  <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">Agent Pickups</h3>
                  <FaRoute />
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold">{agentPickupCount}</div>
                  <p className="text-xs text-muted-foreground">+ Total agent pickups count in month</p>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="flex flex-wrap gap-5">
              {/* User Data Line Chart */}
              <LineChart width={400} height={200} data={chartData.user}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>

              {/* Agent Data Line Chart */}
              <LineChart width={400} height={200} data={chartData.agent}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#82ca9d" />
              </LineChart>
            </div>

            {/* Todo and Users Table */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Todo Component */}
              <Todo />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
