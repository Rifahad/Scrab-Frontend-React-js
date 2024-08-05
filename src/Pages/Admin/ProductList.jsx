import { useEffect, useState } from "react";
import ProductCard from "../../Components/Admin/ProductCard";
import axios from "axios";
import Swal from "sweetalert2";

function ProductList() {

  const [product, setProduct] = useState([]);
  console.log(product);

  async function listProduct() {
    const response = await  axios.get("http://localhost:7000/adminproducts")
    setProduct(response.data.adminCard);
  }
  useEffect(() => {
    listProduct();
  }, []);

  // product delete function
  const productdelete = (id) => {
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
            `http://localhost:7000/productdelete?id=${id}`
          );
          if (response.status === 200) {
            setProduct(product.filter((user) => user._id !== id));
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
        {product.map((val) => (
          <ProductCard
            key={val._id}
            data={val}
            carddelete={productdelete}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
