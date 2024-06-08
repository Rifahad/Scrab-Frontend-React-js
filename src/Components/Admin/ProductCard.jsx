import  { useState } from "react";
import GifImage from '../../assets/GifImage.gif'

function ProductCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-green-500 md:max-w-sm">
        <div className="absolute top-4 right-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg text-sm p-1.5"
            type="button"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          <div
            id="dropdown"
            className={`${
              isOpen ? "" : "hidden"
            } z-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-lg shadow-green-500/50 w-44 absolute right-4 mt-2`}
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <a
                  href="/edit"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="/deleteProduct"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="object-cover w-full h-80"
          src={GifImage}
          alt="Demo Image"
        />
        <div className="p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
            PAPER
          </h5>
          <p>$ 15</p>
          <p className="mb-3 font-normal text-black">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;