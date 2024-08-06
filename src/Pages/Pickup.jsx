import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  full_name: Yup.string().required("Full Name is required"),
  phone: Yup.number().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  zipcode: Yup.string().required("Zipcode is required"),
  pickupImage: Yup.mixed().required("Image is required"),
});

const initialValues = {
  full_name: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  state: "",
  zipcode: "",
  pickupImage: null,
};

const handleLocation = async (setFieldValue) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse`,
            {
              params: {
                lat: latitude,
                lon: longitude,
                format: "json",
              },
            }
          );

          const { address } = response.data;
          console.log("Nominatim Response:", address);

          const street = address.road || address.pedestrian || address.footway || address.cycleway || address.residential || address.path || "";

          setFieldValue("address", street || "");
          setFieldValue("city", address.city || address.town || address.village || "");
          setFieldValue("country", address.country || "");
          setFieldValue("state", address.state || "");
          setFieldValue("zipcode", address.postcode || "");
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Error retrieving your location. Please try again.");
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

const handleSubmit = async (values, { resetForm, setSubmitting }, navigate) => {
  try {
    const formData = new FormData();
    formData.append("full_name", values.full_name);
    formData.append("phone", values.phone);
    formData.append("address", values.address);
    formData.append("city", values.city);
    formData.append("country", values.country);
    formData.append("state", values.state);
    formData.append("zipcode", values.zipcode);
    formData.append("pickupImage", values.pickupImage);

    const response = await axios.post(
      "http://localhost:7000/pickup",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Server Response:", response.data);
    if (response.status === 200) {
      resetForm();
      navigate("/");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }

  setSubmitting(false);
  console.log("Form submission complete");
};

const Pickup = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => handleSubmit(values, actions, navigate)}
        >
          {({ setFieldValue, isSubmitting, resetForm }) => (
            <Form>
              <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Personal Details</p>
                    <button
                      type="button"
                      onClick={() => handleLocation(setFieldValue)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
                    >
                      Use Current Location
                    </button>
                    {previewImage && (
                      <div className="mt-4">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="h-40 w-full object-cover rounded"
                        />
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Full Name</label>
                        <Field
                          type="text"
                          name="full_name"
                          id="full_name"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        <ErrorMessage
                          name="full_name"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="phone">Phone number</label>
                        <Field
                          type="number"
                          name="phone"
                          id="phone"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Phone number"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="address">Address / Street</label>
                        <Field
                          type="text"
                          name="address"
                          id="address"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        <ErrorMessage
                          name="address"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="city">City</label>
                        <Field
                          type="text"
                          name="city"
                          id="city"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="country">Country / region</label>
                        <Field
                          type="text"
                          name="country"
                          id="country"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="state">State / province</label>
                        <Field
                          type="text"
                          name="state"
                          id="state"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        <ErrorMessage
                          name="state"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="zipcode">Pincode</label>
                        <Field
                          type="text"
                          name="zipcode"
                          id="zipcode"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        />
                        <ErrorMessage
                          name="zipcode"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="pickupImage">Upload Image of Items</label>
                        <input
                          type="file"
                          name="pickupImage"
                          id="pickupImage"
                          accept="image/*;capture=camera"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            setFieldValue("pickupImage", file);
                            setPreviewImage(URL.createObjectURL(file));
                          }}
                        />
                        <ErrorMessage
                          name="pickupImage"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="md:col-span-5 text-right">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Pickup;
