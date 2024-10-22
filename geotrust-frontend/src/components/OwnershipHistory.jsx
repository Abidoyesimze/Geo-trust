import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFileContract } from 'react-icons/fa';

const OwnershipHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const ownershipRecords = [
    {
      id: 1,
      owner: 'Alice Johnson',
      date: 'Jan 10, 2022',
      details: 'Transferred to Alice Johnson via Smart Contract #0xA12345',
      documentLink: 'https://ipfs.io/ipfs/Qm123abc',
    },
    {
      id: 2,
      owner: 'Bob Smith',
      date: 'Mar 15, 2021',
      details: 'Transferred to Bob Smith via Smart Contract #0xB54321',
      documentLink: 'https://ipfs.io/ipfs/Qm456xyz',
    },
    {
      id: 3,
      owner: 'Charlie Brown',
      date: 'Aug 20, 2020',
      details: 'Transferred to Charlie Brown via Smart Contract #0xC98765',
      documentLink: 'https://ipfs.io/ipfs/Qm789def',
    },
  ];

  const filteredRecords = ownershipRecords.filter((record) =>
    record.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          Land Ownership History
        </motion.h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by Owner Name"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>

        {/* Ownership History Timeline */}
        <div className="space-y-6">
          {filteredRecords.length > 0 ? (
            filteredRecords.map((record) => (
              <motion.div 
                key={record.id}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{record.owner}</h3>
                  <p className="text-sm text-gray-500">{record.date}</p>
                </div>
                <p className="text-gray-700">{record.details}</p>
                <a
                  href={record.documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-blue-500 hover:underline"
                >
                  <FaFileContract className="mr-2" />
                  View Ownership Document
                </a>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              No records found.
            </motion.p>
          )}
        </div>

        {/* Smart Contract Verification Section */}
        <section className="mt-16 bg-blue-100 py-8 px-6 rounded-lg shadow-lg">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Verify Ownership on Blockchain
          </motion.h2>
          <p className="text-center mb-6">
            Verify the authenticity of ownership transfers by checking the associated smart contract.
          </p>
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter Smart Contract Address"
              className="p-3 w-full md:w-1/2 border rounded-lg shadow-sm focus:outline-none"
            />
            <motion.button
              className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
            >
              Verify
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OwnershipHistory;
