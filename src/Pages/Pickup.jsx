import React, { useState } from 'react';
import { BsFillTrash2Fill } from 'react-icons/bs';

function Pickup() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    state: '',
    zipcode: '',
    billing_same: false,
    soda: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSodaChange = (amount) => {
    setFormData((prevData) => ({
      ...prevData,
      soda: Math.max(0, prevData.soda + amount),
    }));
  };

  const handleClear = () => {
    setFormData({
      full_name: '',
      email: '',
      address: '',
      city: '',
      country: '',
      state: '',
      zipcode: '',
      billing_same: false,
      soda: 0,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen p-6 bg-white flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Personal Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="country">Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={formData.country}
                        onChange={handleChange}
                      />
                      <button
                        tabIndex="-1"
                        type="button"
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        onClick={() => setFormData((prevData) => ({ ...prevData, country: '' }))}
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabIndex="-1"
                        type="button"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-[#5F8F15]"
                        onClick={() => setFormData((prevData) => ({ ...prevData, country: 'USA' }))}
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="state">State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={formData.state}
                        onChange={handleChange}
                      />
                      <button
                        tabIndex="-1"
                        type="button"
                        className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        onClick={() => setFormData((prevData) => ({ ...prevData, state: '' }))}
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button
                        tabIndex="-1"
                        type="button"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-[#5F8F15]"
                        onClick={() => setFormData((prevData) => ({ ...prevData, state: 'CA' }))}
                      >
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value={formData.zipcode}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="billing_same"
                        id="billing_same"
                        className="form-checkbox"
                        checked={formData.billing_same}
                        onChange={handleChange}
                      />
                      <label htmlFor="billing_same" className="ml-2">Are you a new customer ?</label>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="soda">How many killogram items approximately you have?</label>
                    <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <button
                        tabIndex="-1"
                        type="button"
                        className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-[#5F8F15]"
                        onClick={() => handleSodaChange(-1)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <input
                        name="soda"
                        id="soda"
                        placeholder="0"
                        className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value={formData.soda}
                        onChange={(e) => handleChange(e)}
                      />
                      <button
                        tabIndex="-1"
                        type="button"
                        className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-[#5F8F15]"
                        onClick={() => handleSodaChange(1)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <button type="submit" className="bg-[#5F8F15] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </form>

        <button onClick={handleClear} className="md:absolute bottom-0 right-0 p-4 float-right">
          <BsFillTrash2Fill className='text-[40px] text-[#5F8F15] transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white' />
        </button>
      </div>
    </div>
  );
}

export default Pickup;
