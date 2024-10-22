// AddProperty.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AddProperty = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setPropertyDetails((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., uploading the data to a server.
    console.log('Property Details:', propertyDetails);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Add New Property
        </motion.h1>

        <motion.form
          className="bg-white p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Property Title</label>
            <input
              type="text"
              name="title"
              value={propertyDetails.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={propertyDetails.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={propertyDetails.price}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={propertyDetails.location}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Property Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            whileHover={{ scale: 1.05 }}
          >
            Add Property
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default AddProperty;
