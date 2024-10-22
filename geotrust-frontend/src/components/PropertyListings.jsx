import React, { useState } from 'react';
import { motion } from 'framer-motion';
import luxury from "../assets/luxury.jpeg";
import modern from "../assets/modern.jpeg";
import cottage from "../assets/cottage.jpeg";
import beach from "../assets/beach.jpeg";
import family from "../assets/family.jpeg";
import pent from "../assets/pent.jpeg";

// Sample property data
const properties = [
  {
    id: 1,
    title: 'Luxury Villa in Bali',
    price: '1,200,000',
    description: 'A beautiful luxury villa with stunning ocean views.',
    image: [luxury]
  },
  {
    id: 2,
    title: 'Modern Apartment in New York',
    price: '800,000',
    description: 'A stylish apartment located in the heart of Manhattan.',
    image: [modern]
  },
  {
    id: 3,
    title: 'Charming Cottage in the Countryside',
    price: '450,000',
    description: 'A cozy cottage surrounded by nature.',
    image: [cottage]
  },
  {
    id: 4,
    title: 'Beachfront Property in Florida',
    price: '2,500,000',
    description: 'Luxury living right on the beach.',
    image: [beach]
  },
  {
    id: 5,
    title: 'Spacious Family Home in Texas',
    price: '350,000',
    description: 'A lovely family home with a big backyard.',
    image: [family]
  },
  {
    id: 6,
    title: 'Penthouse in San Francisco',
    price: '3,000,000',
    description: 'A stunning penthouse with panoramic city views.',
    image: [pent]
  },
];

const PropertyListing = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Filter properties based on price range
  const filteredProperties = properties.filter((property) => {
    const price = parseInt(property.price.replace(/,/g, ''));
    const min = minPrice ? parseInt(minPrice) : 0;
    const max = maxPrice ? parseInt(maxPrice) : Infinity;
    return price >= min && price <= max;
  });

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Available Properties
        </motion.h1>

        {/* Price Range Filter */}
        <div className="flex justify-center mb-10">
          <input
            type="number"
            placeholder="Min Price"
            className="p-3 w-1/4 border rounded-lg shadow-sm focus:outline-none mr-2"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Price"
            className="p-3 w-1/4 border rounded-lg shadow-sm focus:outline-none"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <motion.div
              key={property.id}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={property.image} alt={property.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <p className="text-lg text-gray-600">${property.price}</p>
              <p className="text-gray-700 mt-2">{property.description}</p>
              <motion.button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.05 }}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* No properties message */}
        {filteredProperties.length === 0 && (
          <motion.p
            className="text-center text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            No properties found in this price range.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PropertyListing;
