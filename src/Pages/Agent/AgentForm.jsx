import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const AgentForm = () => {
  const navigate = useNavigate();
  const [agentData, setAgentData] = useState({
    companyName: "",
    scrapImage: null,
    phone: "+91",
    tonAmount: 500,
    message: "",
    
  });

  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setAgentData({ ...agentData, scrapImage: e.target.files[0] });
  };

  const handleChange = (e) => {
    setAgentData({ ...agentData, [e.target.name]: e.target.value });
    if (e.target.name === "tonAmount") {
      validateInput(e.target.value);
    }
  };

  const validateInput = (value) => {
    if (value < 500) {
      setError("Please enter more than 500.");
    } else {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (agentData.tonAmount < 500) {
      setError("Please enter more than 500.");
      return;
    }

    const formData = new FormData();
    formData.append("companyName", agentData.companyName);
    formData.append("companyImage", agentData.scrapImage);
    formData.append("phone", agentData.phone);
    formData.append("tonAmount", agentData.tonAmount);
    formData.append("message", agentData.message);

    try {
      console.log(agentData, "formdata");
      const response = await axios.post(
        "http://localhost:7000/pickupcompany",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.msg === 'complete the form please') {
        alert('Please complete the form');
      }

      if (response.status === 200) {
        console.log("Form submitted successfully");
        setAgentData({
          companyName: "",
          scrapImage: null,
          phone: "",
          tonAmount: "",
          message: "",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const companyCheck = ()=>{
    // const response = axios.get('/companycheck')
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mx-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-green-400 text-4xl lg:text-5xl">
              Share Details About <br /> Scrap You Have
            </h1>
            
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Company Name*"
                name="companyName"
                value={agentData.companyName}
                onChange={handleChange}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
                name="scrapImage"
                onChange={handleFileChange}
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="phone"
                placeholder="Phone *"
                name="phone"
                value={agentData.phone}
                onChange={handleChange}
                maxLength={13}
                required
              />
              <div className="relative">
                <input
                  className={`w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
                    error && "border-red-500"
                  }`}
                  type="text"
                  placeholder="How Many Ton You Have ?*"
                  name="tonAmount"
                  value={agentData.tonAmount}
                  onChange={handleChange}
                  maxLength={1000}
                  required
                />
                {error && (
                  <p className="text-red-500 text-xs italic mt-1 absolute">
                    {error}
                  </p>
                )}
              </div>
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                name="message"
                value={agentData.message}
                onChange={handleChange}
                maxLength={250}
              ></textarea>
            </div>
            <div className="my-2 w-full   lg:w-1/4">
              <button
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>

<Link  to='/ExistingAgent'>

          <button 
                type="submit"
                className="uppercase text-sm font-bold tracking-wide bg-red-400  hover:bg-red-600 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Existing company
                
              </button> 
              </Link>
        </div>
        <div className="w-full lg:-mt-12 lg:ml-[950px] md:ml-[550px] lg:w-2/6 px-8 py-12 shadow-inner bg-opacity-25 rounded backdrop-blur-md">
          <div className="flex flex-col text-black">
            <h1 className="font-bold uppercase text-green-400 text-4xl my-4">
              Drop in our office
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur
              vitae nibh viverra, auctor turpis sed, scelerisque ex.
            </p>
            <div className="flex my-4 w-full lg:w-1/2">
              <div className="flex flex-col">
                <FaMapMarkerAlt className="text-green-300 text-2xl mr-2 transform transition-transform duration-300 hover:scale-150 hover:text-green-400" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-green-400">Main Office</h2>
                <p className="text-gray-400">
                  5555 Tailwind RD, Pleasant Grove, UT 73533
                </p>
              </div>
            </div>
            <div className="flex my-4 w-full lg:w-1/2">
              <div className="flex flex-col">
                <FaPhone className="text-green-300 text-2xl mr-2 transform transition-transform duration-300 hover:scale-150 hover:text-green-400" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl text-green-400">Call Us</h2>
                <p className="text-gray-400">Tel: 813 7869 563</p>
                <p className="text-gray-400">gmail: mubeensiraj13@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-5 my-4 w-full lg:w-1/2">
              <a href="">
                <FaWhatsapp className="text-xl text-green-400 transform transition-transform duration-300 hover:scale-150" />
              </a>
              <a href="https://www.instagram.com/mubeen3_07/">
                <FaInstagram className="text-xl text-green-400 transform transition-transform duration-300 hover:scale-150" />
              </a>
              <FaFacebookF className="text-xl text-green-400 transform transition-transform duration-300 hover:scale-150" />
              <FaLinkedinIn className="text-xl text-green-400 transform transition-transform duration-300 hover:scale-150" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentForm;
