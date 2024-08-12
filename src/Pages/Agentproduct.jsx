import axios from 'axios';
import React, { useEffect } from 'react';

const getData = ()=>{
  const response = axios.get('http://localhost:7000/getagentproduct')
}
useEffect(()=>{

  getData()
},[])

const Agentproduct = () => {
  return (
   <>
    <div   className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">



        <div     className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-[#5F8F15]">
          <div className="relative">
            <img
              className="w-full h-48 object-fill"
              // src={'http://localhost:7000/' +card.Image}
              alt="card Image"
            />
          </div>
          <div className="px-6 py-4">
            <div className="text-xl font-semibold text-gray-800">tv</div>
            <p className="text-gray-600">₹</p>
          </div>
      
          <div className="px-6 py-4">
            <a href="#" className="text-[#5F8F15] hover:underline">
              Learn more..
            </a>
          </div>
        </div>
   


      
        
        
       


      </div>
    </div>
   
   </>
  );
}

export default Agentproduct;
