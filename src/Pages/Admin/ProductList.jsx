import { useEffect, useState } from "react";
import ProductCard from "../../Components/Admin/ProductCard";
import Axios from '../../Instance/Instance'
import Swal from "sweetalert2";

function ProductList() {
  const [product, setProduct] = useState([]);

  // Function to fetch products
  const listProduct = async (abortController) => {
    try {
      const response = await Axios.get("/adminproduct", {
        signal: abortController.signal,
      });
      setProduct(response.data.adminCard);
    } catch (error) {
      if (Axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
      } else {
        console.error("Error fetching products:", error);
      }
    }
  };

  useEffect(() => {
    // Create an AbortController instance
    const abortController = new AbortController();

    // Call the function to list products
    listProduct(abortController);

    // Cleanup function to abort the request on component unmount
    return () => {
      abortController.abort();
    };
  }, []);

  // Product delete function
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
          const response = await Axios.post(
            `/productdelete?id=${id}`
          );
          if (response.status === 200) {
            setProduct((prevProduct) => prevProduct.filter((user) => user._id !== id));
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          } else {
            Swal.fire("Error!", "There was an error deleting your product.", "error");
          }
        } catch (error) {
          console.error("Error in product delete:", error);
          Swal.fire("Error!", "There was an error deleting your product.", "error");
        }
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-3">
      {product.map((val) => (
        <ProductCard
          key={val._id}
          data={val}
          carddelete={productdelete}
        />
      ))}
    </div>
  );
}

export default ProductList;
