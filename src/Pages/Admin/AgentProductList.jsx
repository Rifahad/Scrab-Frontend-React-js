import { useEffect, useState } from "react";
import AgentProductCard from "../../Components/Admin/AgentCard";
import axios from "axios";
import Swal from "sweetalert2";

function AgentProductList() {

  const [agentproduct, setagentProduct] = useState([]);

  async function listProduct() {
    const response = await  axios.get("http://localhost:7000/adminagentProduct")
    console.log(response.data.Agent,'data gooted from backend');
    setagentProduct(response.data.Agent);
    
  }
  useEffect(() => {
    listProduct();
  }, []);

  // product delete function
  const agentproductdelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log("delete here", id);
          const response = await axios.post(
            `http://localhost:7000/adminagentProductdelete?id=${id}`
          );
          if (response.status === 200) {
            setagentProduct(agentproduct.filter((product) => product._id !== id));
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          } else {
            Swal.fire(
              "Error!",
              "There was an error deleting your product.",
              "error"
            );
          }
          console.log(response.status);
        } catch (error) {
          console.log(error, "error in product delete");
          Swal.fire(
            "Error!",
            "There was an error deleting your product.",
            "error"
          );
        }
      }
    });
  };  
  return (
    <>
      <div className="flex flex-wrap gap-3">
        {agentproduct.map((val) => (
          <AgentProductCard
            key={val._id}
            data={val}
            carddelete={agentproductdelete}
          />
        ))}
      </div>
    </>
  );
}

export default AgentProductList;
