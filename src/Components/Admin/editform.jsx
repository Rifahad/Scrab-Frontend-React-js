import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (productId) {
      // Fetch product data from API
      fetch(`http://localhost:7000/products/${productId}`)
        .then((response) => response.json())
        .then((data) =>
          setProduct({
            title: data.title,
            price: data.price,
            image: data.Image, // Ensure correct image property name
          })
        )
        .catch((error) => console.error("Error fetching product data:", error));
    }
  }, [productId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", product.price);

    const fileInput = event.target.elements.image;
    if (fileInput.files.length > 0) {
      formData.append("image", fileInput.files[0]);
    }

    try {
      const response = await fetch(
        `http://localhost:7000/products/${productId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.success) {
        alert("Product updated successfully");
        navigate("/admin/adminProduct"); // Redirect to the product list page
      } else {
        // Handle error (e.g., show an error message)
        alert("Error updating product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (!product.title && !product.price && !product.image) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="mx-auto w-full max-w-[550px] bg-white border rounded">
          <form
            className="py-4 px-9"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Edit Products Here:
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Product Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                value={product.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="price"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Add Price:
              </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Product Price"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                value={product.price}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Upload Image Here
              </label>
              <div className="mb-8">
                <input
                  type="file"
                  name="image"
                  id="file"
                  className="sr-only"
                  accept="image/*"
                />
                <label
                  htmlFor="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Confirm adding Products
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
