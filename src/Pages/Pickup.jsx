import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object({
  full_name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  zipcode: Yup.string().required('Zipcode is required'),
  killogram: Yup.number(),
});

const initialValues = {
  full_name: '',
  email: '',
  address: '',
  city: '',
  country: '',
  state: '',
  zipcode: '',
  killogram: 0,
};

const handleLocation = async (setFieldValue) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
          params: { lat: latitude, lon: longitude, format: 'json' },
        });
        const { address } = response.data;
        setFieldValue('address', address.road || '');
        setFieldValue('city', address.city || address.town || address.village || '');
        setFieldValue('country', address.country || '');
        setFieldValue('state', address.state || '');
        setFieldValue('zipcode', address.postcode || '');
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
};

const handleSubmit = async (values, { setSubmitting }) => {
  console.log('Form Values:', values);
  try {
    const response = await axios.post('/pickup', values);
    console.log('Server Response:', response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
  setSubmitting(false);
};

const Pickup = () => {
  return (
    <div className="p-6 bg-white flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
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
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="full_name">Full Name</label>
                        <Field type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        <ErrorMessage name="full_name" component="div" className="text-red-500" />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="email">Email Address</label>
                        <Field type="email" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="address">Address / Street</label>
                        <Field type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        <ErrorMessage name="address" component="div" className="text-red-500" />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="city">City</label>
                        <Field type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        <ErrorMessage name="city" component="div" className="text-red-500" />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="country">Country / region</label>
                        <Field type="text" name="country" id="country" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        <ErrorMessage name="country" component="div" className="text-red-500" />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="state">State / province</label>
                        <Field type="text" name="state" id="state" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        <ErrorMessage name="state" component="div" className="text-red-500" />
                      </div>

                      <div className="md:col-span-1">
                        <label htmlFor="zipcode">Zipcode</label>
                        <Field type="text" name="zipcode" id="zipcode" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        <ErrorMessage name="zipcode" component="div" className="text-red-500" />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="killogram">How many kilogram items approximately do you have?</label>
                        <Field type="number" name="killogram" id="killogram" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        <ErrorMessage name="killogram" component="div" className="text-red-500" />
                      </div>

                      <div className="md:col-span-5 text-right">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={isSubmitting}>
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
}

export default Pickup;
