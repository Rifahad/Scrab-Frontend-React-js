import { useState } from 'react';
import { FaTruckPickup } from "react-icons/fa";
import { BsFillTrash2Fill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [selected, setSelected] = useState('Collections');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (text) => {
    setSelected(text);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="bg-white rounded shadow-lg py-5 px-7">
        <nav className="flex justify-between">
          <div className="flex items-center space-x-3 lg:pr-16 pr-6">
            <BsFillTrash2Fill className='text-[40px] text-[#5F8F15] transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white' />
            <h2 className="font-normal text-2xl leading-6 text-[#5F8F15]">PMK</h2>
          </div>

          <ul className="hidden md:flex flex-auto space-x-2">
            {['Home', 'Products', 'Contact', 'Utility', 'About Us'].map((item) => (
              <li
                key={item}
                onClick={() => handleSelect(item)}
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F8F15] ${
                  selected === item ? 'text-white bg-[#5F8F15]' : 'text-gray-600 border border-white bg-gray-50'
                } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
              >
                <a href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className={selected === item ? 'text-white' : 'text-gray-600'}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-5 justify-center items-center pl-2">
          <Link to={'/pickup/'}>
            <button  className={`flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5F8F15] ${
              selected ? 'text-white bg-[#5F8F15]' : 'text-gray-600 border border-white bg-gray-50'
            } cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`} ><FaTruckPickup className='text-[25px]'  />PickUp</button>
            </Link>
          </div>

          <div className="block md:hidden w-8 h-8 relative cursor-pointer" onClick={toggleDropdown}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                {['Collections', 'Arts', 'Space', 'Game', 'Utility', 'Cards'].map((item) => (
                  <li
                    key={item}  
                    onClick={() => handleSelect(item)}
                    className={`cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-[#5F8F15] focus:text-[#5F8F15] focus:outline-none ${
                      selected === item ? 'font-bold' : ''
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="ml-2">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
