import React, { useState } from "react";

const UserList = () => {
  const users = [
    {
      name: "Ajmal",
      email: "ajmalcc@.com",
      Location: "Kannur",
      country: "India",
      date: "21-10-2024",
    },
    {
      name: "najas",
      email: "najas123@.com",
      Location: "Kannur",
      country: "India",
      date: "31-10-2024",
    },
  ];

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="bg-white bg-opacity-15 shadow-md rounded-lg">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Orders</h2>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <input
                type="date"
                value={startDate}
                onChange={handleStartDateChange}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={endDate}
                onChange={handleEndDateChange}
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
                <th className="px-4 py-2 text-center">email</th>
                <th className="px-4 py-2 text-center">Location</th>
                <th className="px-4 py-2 text-center">Country</th>
                <th className="px-4 py-2 text-center">date</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 hover:bg-opacity-25"
                >
                  <td className="px-4 py-2 text-center">{user.name}</td>
                  <td className="px-4 py-2 text-center">{user.email}</td>
                  <td className="px-4 py-2 text-center">{user.Location}</td>
                  <td className="px-4 py-2 text-center">{user.country}</td>
                  <td className="px-4 py-2 text-center">{user.date}</td>
                  <td className="px-4 py-2 flex items-center justify-center space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">
                      Download PDF
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
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
