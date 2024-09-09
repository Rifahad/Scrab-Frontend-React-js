import { useState } from "react";
import { FaTruckPickup } from "react-icons/fa";
import { IoMdHelp, IoMdHome } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/Logo.png";
import { FaShop } from "react-icons/fa6";

const Navbar = () => {
  const [selected, setSelected] = useState("Collections");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (text, path) => {
    setSelected(text);
    setDropdownOpen(false);
    navigate(path);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDoubleClick = () => {
    navigate("/admin");
  };

  return (
    <>
      <div className="2xl:container 2xl:mx-auto mb-2">
        <div className="bg-white rounded shadow-lg py-5 px-7">
          <nav className="flex justify-between">
            <div className="flex items-center space-x-3 lg:pr-16 pr-6">
              <img
                src={Logo}
                onDoubleClick={handleDoubleClick}
                className="w-12"
                alt="Logo"
              />
              <h2 className="text-2xl leading-6 text-black font-black">
                Eco Scrap
              </h2>
            </div>

            <ul className="hidden md:flex flex-auto space-x-2">
              <li
                onClick={() => handleSelect("Home", "/")}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  selected === "Home"
                    ? "text-white bg-primary"
                    : "text-gray-600 border border-white bg-gray-50"
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Home
              </li>
              <li
                onClick={() => handleSelect("Products", "/products")}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  selected === "Products"
                    ? "text-white bg-primary"
                    : "text-gray-600 border border-white bg-gray-50"
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Products
              </li>
              <li
                onClick={() => handleSelect("Contact", "/contact")}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  selected === "Contact"
                    ? "text-white bg-primary"
                    : "text-gray-600 border border-white bg-gray-50"
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                Contact
              </li>
              <li
                onClick={() => handleSelect("About Us", "/about-us")}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  selected === "About Us"
                    ? "text-white bg-primary"
                    : "text-gray-600 border border-white bg-gray-50"
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                About Us
              </li>
            </ul>

            <div className="flex space-x-5 justify-center items-center pl-2">
              <button
                onClick={() => navigate("/pickup")}
                className={`flex items-center bg-primary gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                  selected === "PickUp"
                    ? "text-white bg-primary"
                    : "text-white border border-white bg-gray-50"
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                <FaTruckPickup className="text-[25px]" />
                PickUp
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div className="md:hidden w-full fixed bottom-0 h-24 bg-white z-50 flex items-center justify-center gap-2">
        <Link to="/help"> <IoMdHelp className="fixed bottom-24 right-8 text-4xl animate-pulse text-primary" /></Link>
        <Link
          to="/"
          className="w-16 h-16 bg-white shadow-inner shadow-black rounded-full flex items-center justify-center"
        >
          <IoMdHome className="text-3xl" />
        </Link>
        <Link
          to="/products"
          className="w-16 h-16 bg-white shadow-inner shadow-black rounded-full flex items-center justify-center"
        >
          <AiFillProduct className="text-3xl" />
        </Link>
        <Link
          to="/pickup"
          className="w-24 h-24 bg-white shadow-inner shadow-primary rounded-full flex items-center justify-center"
        >
          <FaTruckPickup className="text-5xl text-primary" />
        </Link>
        <Link
          to="/about-us"
          className="w-16 h-16 bg-white shadow-inner shadow-black rounded-full flex items-center justify-center"
        >
          <FaShop className="text-3xl" />
        </Link>
        <Link
          to="/contact"
          className="w-16 h-16 bg-white shadow-inner shadow-black rounded-full flex items-center justify-center"
        >
          <BiSolidContact className="text-3xl" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
