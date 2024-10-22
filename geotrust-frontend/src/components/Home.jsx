import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImage from "../assets/background.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Map from "./Maps"; 

const Home = () => {
  

  return (
    <div>
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <motion.div 
            className="text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-6xl font-bold">Secure Your Land Ownership with GeoTrust</h1>
            <p className="mt-4 text-md md:text-lg">Immutable, transparent, and secure land transactions.</p>
            <div className="mt-6 flex justify-center flex-wrap gap-4">
              
              <motion.button 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.1 }}
              >
                <Link to="/seller-dashboard">Sellers Dashboard</Link>
              </motion.button>
              <motion.button 
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                whileHover={{ scale: 1.1 }}
              >
                <Link to="/admin-dashboard">Admin Dashboard</Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            How GeoTrust Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mt-4">1. Sign Up</h3>
              <p className="mt-2 text-sm md:text-base">Register your account and connect your wallet to start exploring available properties.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mt-4">2. List or Purchase Property</h3>
              <p className="mt-2 text-sm md:text-base">As a seller, list your property. As a buyer, browse verified properties and place secure bids.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mt-4">3. Instant Ownership</h3>
              <p className="mt-2 text-sm md:text-base">Ownership transfers automatically via smart contracts, ensuring instant, tamper-proof records.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mt-4">4. Get Verified</h3>
              <p className="mt-2 text-sm md:text-base">Easily verify your property ownership through the immutable blockchain record.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Explore Properties Near You
          </motion.h2>
          <p className="mb-8 text-sm md:text-base">Zoom in and explore available properties or regions GeoTrust operates in:</p>
          {/* Interactive Map Component */}
          <div className="h-64 sm:h-80 lg:h-96">
            <Map />
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Key Benefits of GeoTrust
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaCheckCircle className="text-green-500 text-4xl mx-auto"/>
              <h3 className="text-lg md:text-xl font-semibold mt-4">Blockchain Security</h3>
              <p className="mt-2 text-sm md:text-base">Your land transactions are secured by smart contracts, ensuring tamper-proof records.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaCheckCircle className="text-green-500 text-4xl mx-auto"/>
              <h3 className="text-lg md:text-xl font-semibold mt-4">Transparency</h3>
              <p className="mt-2 text-sm md:text-base">Every step of the transaction is visible to all parties, reducing fraud and disputes.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FaCheckCircle className="text-green-500 text-4xl mx-auto"/>
              <h3 className="text-lg md:text-xl font-semibold mt-4">Instant Ownership</h3>
              <p className="mt-2 text-sm md:text-base">Ownership transfers happen instantly, without lengthy paperwork or manual processes.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What Our Users Say
          </motion.h2>
          <div className="carousel">
            {/* Testimonial carousel */}
            <div className="testimonial-item">
              <p className="text-sm md:text-base">"GeoTrust made transferring land ownership a breeze. The process was transparent, secure, and fast!"</p>
              <h4 className="mt-4 text-sm md:text-base">- Jane Doe</h4>
            </div>
            <div className="testimonial-item">
              <p className="text-sm md:text-base">"The blockchain technology ensures that all records are tamper-proof. I feel confident about my investment."</p>
              <h4 className="mt-4 text-sm md:text-base">- John Smith</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 GeoTrust. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
