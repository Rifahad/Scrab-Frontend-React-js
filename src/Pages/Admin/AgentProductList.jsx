import { useEffect, useState } from "react";
import AgentProductCard from "../../Components/Admin/AgentCard";
import axios from "axios";
import Swal from "sweetalert2";

function AgentProductList() {
  const [agentProduct, setAgentProduct] = useState([]);

  // Fetch products
  useEffect(() => {
    let isMounted = true; // Flag to track component mounting status

    const listProduct = async () => {
      try {
        const response = await axios.get("http://localhost:7000/adminagentProduct");
        if (isMounted) {
          setAgentProduct(response.data.Agent);
        }
      } catch (error) {
        console.error(error, "error fetching products");
      }
    };

    listProduct();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  // Delete product
  const agentProductDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.post(`http://localhost:7000/adminagentProductdelete?id=${id}`);
        if (response.status === 200) {
          setAgentProduct((prevProducts) =>
            prevProducts.filter((product) => product._id !== id)
          );
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
        } else {
          Swal.fire("Error!", "There was an error deleting your product.", "error");
        }
      } catch (error) {
        console.error(error, "error in product delete");
        Swal.fire("Error!", "There was an error deleting your product.", "error");
      }
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {agentProduct.map((val) => (
          <AgentProductCard
            key={val._id}
            data={val}
            cardDelete={agentProductDelete} // 'cardDelete' here
            />
        ))}
      </div>
    </>
  );
}

export default AgentProductList;
