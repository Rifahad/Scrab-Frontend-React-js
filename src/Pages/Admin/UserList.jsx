import axios from "axios";
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Logo from "../../assets/img/Logo.png";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [filterdata, setFilterdata] = useState([]);

  const handleStartDateChange = async (e) => {
    const searchDate = e.target.value;
    setStartDate(searchDate);
    const filteredData = filterdata.filter((person) =>
      person.createdAt.startsWith(searchDate)
    );
    setUserData(filteredData);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:7000/Users", {
          signal: abortController.signal,
        });
        setUserData(response.data.userData);
        setFilterdata(response.data.userData);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUser();

    return () => {
      abortController.abort();
    };
  }, []);

  const deleteDoc = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:7000/admin/User/delete?id=${id}`
      );
      if (response.status === 200) {
        setUserData((prevUserData) =>
          prevUserData.filter((user) => user._id !== id)
        );
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const downloadPDF = (user) => {
    const input = document.getElementById(`user-${user._id}`);
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();

      // Create an image element and set its source to the imported logo
      const img = new Image();
      img.src = Logo;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imgData = canvas.toDataURL("image/png");

        pdf.addImage(imgData, "PNG", 10, 10, 50, 20); // Adjust the position and size as needed
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(0, 128, 0);
        pdf.setFontSize(20);
        pdf.text("User Order Details", pdfWidth / 2, 40, { align: "center" });
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(12);
        pdf.text(`Name: ${user.full_name}`, 10, 60);
        pdf.text(`Phone: ${user.phone}`, 10, 70);
        pdf.text(`Location: ${user.address}`, 10, 80);
        pdf.text(`Country: ${user.country}`, 10, 90);
        pdf.text(
          `Date/Time: ${new Date(user.createdAt).toLocaleString()}`,
          10,
          100
        );

        pdf.save(`${user.full_name}_details.pdf`);
      };
    });
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
                name="startDate"
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
                <th className="px-4 py-2 text-center">Image</th>
                <th className="px-4 py-2 text-center">Phone</th>
                <th className="px-4 py-2 text-center">Location</th>
                <th className="px-4 py-2 text-center">Country</th>
                <th className="px-4 py-2 text-center">Date / Time</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr
                  key={user._id}
                  id={`user-${user._id}`}
                  className="hover:bg-gray-100 hover:bg-opacity-25"
                >
                  <td className="px-4 py-2 text-center">{user.full_name}</td>
                  <td className="px-4 py-2 text-center">
                    <img
                      src={user.Url}
                      className="w-32 h-32"
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-2 text-center">{user.phone}</td>
                  <td className="px-4 py-2 text-center">{user.address}</td>
                  <td className="px-4 py-2 text-center">{user.country}</td>
                  <td className="px-4 py-2 text-center">
                    {new Date(user.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-2 flex items-center justify-center space-x-2">
                    <button
                      onClick={() => downloadPDF(user)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                    >
                      Download PDF
                    </button>
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
  );
};

export default UserList;
