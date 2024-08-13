import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Ensure you have SweetAlert2 installed and imported
import { useNavigate } from 'react-router-dom';
const CardForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmitting = async (e) => {
        e.preventDefault();
        try {
            console.log(formData,'form data');
            
            const formDataObj = new FormData();
            formDataObj.append("file", formData.file); 
            formDataObj.append("title", formData.title);
            formDataObj.append("price", formData.price);

            const response = await axios.post('http://localhost:7000/companycard', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Success:', response.data);
            if (response.data) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
              
                    navigate('/admin/Agentproducts');
             

            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
    };
    
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto w-full max-w-[550px] bg-white border rounded">
                <form action='/card' className="py-4 px-9" onSubmit={handleSubmitting} method='post' encType='multipart/form-data'>
                    <div className="mb-5">
                        <label htmlFor="title" className="mb-3 block text-base font-medium text-[#07074D]">
                            Add company Products Here:
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={handleChange}
                            placeholder="Product Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                            value={formData.title}
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="price" className="mb-3 block text-base font-medium text-[#07074D]">
                            Add Price:
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            onChange={handleChange}
                            placeholder="Product Price"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-green-500 focus:shadow-md"
                            value={formData.price}
                            required
                        />
                    </div>

                    <div className="mb-6 pt-4">
                        <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                            Upload Image Here
                        </label>
                        <div className="mb-8">
                            <input type="file" name="file" id="file" className="sr-only" onChange={handleChange} required accept="image/*"/>
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
                        <button
                            type="submit" // Add this to ensure the form is submitted
                            className="hover:shadow-form w-full rounded-md bg-green-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Confirm adding Products
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CardForm;
