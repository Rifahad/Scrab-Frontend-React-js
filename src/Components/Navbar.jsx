import { useState } from "react";
import { FaTruckPickup } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/Logo.png";

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
    setDropdownOpen(!dropdownOpen);
  };

  const handleDoubleClick = () => {
    navigate("/admin");
  };

  return (
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
              <FaTruckPickup className="text-[25px] " />
              PickUp
            </button>
          </div>

          <div
            className="block md:hidden w-8 h-8 relative cursor-pointer"
            onClick={toggleDropdown}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H11"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {dropdownOpen && (
              <ul className="p-2 w-40 border-r bg-white absolute rounded z-40 right-0 shadow mt-2 top-10">
                <li>
                  <Link
                    to="/"
                    onClick={() => handleSelect("Home")}
                    className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-primary focus:text-primary focus:outline-none ${
                      selected === "Home" ? "font-bold" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    onClick={() => handleSelect("Products")}
                    className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-primary focus:text-primary focus:outline-none ${
                      selected === "Products" ? "font-bold" : ""
                    }`}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => handleSelect("Contact")}
                    className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-primary focus:text-primary focus:outline-none ${
                      selected === "Contact" ? "font-bold" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    onClick={() => handleSelect("About Us")}
                    className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-primary focus:text-primary focus:outline-none ${
                      selected === "About Us" ? "font-bold" : ""
                    }`}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
