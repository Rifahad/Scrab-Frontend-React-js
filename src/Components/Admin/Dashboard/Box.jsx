import React from "react";

const DashboardBox = ({ icon: Icon, Name, count, para }) => {
  return (
    <div className="border  p-4 rounded-lg flex  ml-1 flex-col items-center w-56">
      <div className="mb-4">
      <Icon className="w-6 h-6 text-gray-800" />
      </div>
      <h5 className=" text-lg font-semibold mb-2">{Name}</h5>
      <p className=" text-xl font-bold mb-2">{count}</p>
      <div className="w-full border-t border-white my-2" />
      <p className="">{para}</p>
    </div>
  );
};

export default DashboardBox;
