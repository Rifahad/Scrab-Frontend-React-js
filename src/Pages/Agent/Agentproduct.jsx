import Axios from '../../Instance/Instance';
import { useEffect, useState } from 'react';

const Agentproduct = () => {
  const [agentcard, setAgentcard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  // Added loading state
  const [error, setError] = useState(null);  // Added error state

  const getData = async () => {
    try {
      const response = await Axios.get('/getagentproduct');
      setAgentcard(response.data.Agent);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data. Please try again later.');
    } finally {
      setIsLoading(false);  // Ensure loading state is updated
    }
  };

  useEffect(() => {
    let isMounted = true;  // Track if the component is mounted

    if (isMounted) {
      getData();
    }

    return () => {
      isMounted = false;  // Clean up flag on unmount
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className='text-4xl font-black pb-6'>Agent Products</h1>
      <br />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {agentcard.length > 0 ? (
            agentcard.map((item, index) => (
              <div key={index} className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-[#5F8F15]">
                <div className="relative">
                  <img
                    className="w-full h-48 object-fill"
                    src={item?.Url}
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
            ))
          ) : (
            <p>There are no cards available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Agentproduct;
