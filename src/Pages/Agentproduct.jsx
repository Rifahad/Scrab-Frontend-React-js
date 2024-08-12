import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Agentproduct = () => {
  const [agentcard, setAgentcard] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:7000/getagentproduct');
      console.log(response.data.Agent, 'data gotted');
      setAgentcard(response.data.Agent);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(agentcard, 'data saved in state');
  }, [agentcard]);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {agentcard.map((item, index) => (
            <div key={index} className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-[#5F8F15]">
              <div className="relative">
                <img
                  className="w-full h-48 object-fill"
                  // src={'http://localhost:7000/' + item.Image}
                  alt="card Image"
                />
              </div>
              <div className="px-6 py-4">
                <div className="text-xl font-semibold text-gray-800">{item.title}</div>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
              <div className="px-6 py-4">
                <a href="#" className="text-[#5F8F15] hover:underline">
                  Learn more..
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Agentproduct;
