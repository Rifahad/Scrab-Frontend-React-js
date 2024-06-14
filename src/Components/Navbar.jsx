import { useState } from "react";
import { FaTruckPickup } from "react-icons/fa";
import { BsFillTrash2Fill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("Collections");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (text) => {
    setSelected(text);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDoubleClick = () => {
    navigate('/admin');
  };

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="bg-white rounded shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <BsFillTrash2Fill
              className="text-[40px] text-[#5F8F15] transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white"
              onDoubleClick={handleDoubleClick}
            />
            <h2 className="font-normal text-2xl leading-6 text-[#5F8F15]">
              ECO SCRAP
            </h2>
          </div>

          <ul className="hidden md:flex flex-auto space-x-2">
            <li
              onClick={() => handleSelect("Home")}
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F8F15] ${
                selected === "Home"
                  ? "text-white bg-[#5F8F15]"
                  : "text-gray-600 border border-white bg-gray-50"
              } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
            >
              <Link
                to="/"
                className={selected === "Home" ? "text-white" : "text-gray-600"}
              >
                Home
              </Link>
            </li>
            <li
              onClick={() => handleSelect("Products")}
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F8F15] ${
                selected === "Products"
                  ? "text-white bg-[#5F8F15]"
                  : "text-gray-600 border border-white bg-gray-50"
              } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
            >
              <Link
                to="/products"
                className={
                  selected === "Products" ? "text-white" : "text-gray-600"
                }
              >
                Products
              </Link>
            </li>
            <li
              onClick={() => handleSelect("Contact")}
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F8F15] ${
                selected === "Contact"
                  ? "text-white bg-[#5F8F15]"
                  : "text-gray-600 border border-white bg-gray-50"
              } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
            >
              <Link
                to="/contact"
                className={
                  selected === "Contact" ? "text-white" : "text-gray-600"
                }
              >
                Contact
              </Link>
            </li>
            <li
              onClick={() => handleSelect("About Us")}
              className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F8F15] ${
                selected === "About Us"
                  ? "text-white bg-[#5F8F15]"
                  : "text-gray-600 border border-white bg-gray-50"
              } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
            >
              <Link
                to="/about-us"
                className={
                  selected === "About Us" ? "text-white" : "text-gray-600"
                }
              >
                About Us
              </Link>
            </li>
          </ul>

          <div className="flex space-x-5 justify-center items-center pl-2">
            <Link to={"/pickup/"}>
              <button
                className={`flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F8F15] ${
                  selected
                    ? "text-white bg-[#5F8F15]"
                    : "text-gray-600 border border-white bg-gray-50"
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                <FaTruckPickup className="text-[25px]" />
                PickUp
              </button>
            </Link>
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
                <li
                  onClick={() => handleSelect("Home")}
                  className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-[#5F8F15] focus:text-[#5F8F15] focus:outline-none ${
                    selected === "Home" ? "font-bold" : ""
                  }`}
                >
                  <Link to="/" className="flex items-center">
                    <span className="ml-2">Home</span>
                  </Link>
                </li>
                <li
                  onClick={() => handleSelect("Products")}
                  className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-[#5F8F15] focus:text-[#5F8F15] focus:outline-none ${
                    selected === "Products" ? "font-bold" : ""
                  }`}
                >
                  <Link to="/products" className="flex items-center">
                    <span className="ml-2">Products</span>
                  </Link>
                </li>
                <li
                  onClick={() => handleSelect("Contact")}
                  className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-[#5F8F15] focus:text-[#5F8F15] focus:outline-none ${
                    selected === "Contact" ? "font-bold" : ""
                  }`}
                >
                  <Link to="/contact" className="flex items-center">
                    <span className="ml-2">Contact</span>
                  </Link>
                </li>
                <li
                  onClick={() => handleSelect("About Us")}
                  className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-[#5F8F15] focus:text-[#5F8F15] focus:outline-none ${
                    selected === "About Us" ? "font-bold" : ""
                  }`}
                >
                  <Link to="/about-us" className="flex items-center">
                    <span className="ml-2">About Us</span>
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
