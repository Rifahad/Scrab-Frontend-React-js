import React, { useEffect, useState } from "react";
import Axios from "../Instance/Instance";

function Products() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance

    async function fetchProducts() {
      try {
        const response = await Axios.post("/Products", null, {
          signal: controller.signal, // Pass the signal for request cancellation
        });
        setCards(response.data.carddetails);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error fetching products:", error);
        }
      }
    }

    fetchProducts();

    return () => {
      controller.abort(); // Cancel request on unmount
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id} // Ensure unique key
            className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-[#5F8F15]"
          >
            <div className="relative">
              <img
                className="w-full h-48 object-fill"
                src={card?.Url}
                alt="card Image"
              />
            </div>
            <div className="px-6 py-4">
              <div className="text-xl font-semibold text-gray-800">{card.title}</div>
              <p className="text-gray-600">₹{card.price}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">Tkm Products</span>
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
  );
}

export default Products;
