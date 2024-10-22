import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, Home, Users, Clock } from 'lucide-react';

const DashboardOverview = () => {
  const metrics = [
    { id: 1, title: 'Total Properties', value: 120, change: 5, color: 'bg-green-500', icon: Home },
    { id: 2, title: 'Total Transactions', value: 75, change: -2, color: 'bg-blue-500', icon: DollarSign },
    { id: 3, title: 'Active Users', value: 200, change: 15, color: 'bg-yellow-500', icon: Users },
    { id: 4, title: 'Pending Approvals', value: 10, change: 3, color: 'bg-red-500', icon: Clock },
  ];

  const propertyListings = [
    { id: 1, address: '123 Main St', type: 'Apartment', price: 250000, status: 'For Sale' },
    { id: 2, address: '456 Elm St', type: 'House', price: 450000, status: 'Under Contract' },
    { id: 3, address: '789 Oak Ave', type: 'Condo', price: 180000, status: 'For Sale' },
    { id: 4, address: '101 Pine Rd', type: 'Townhouse', price: 350000, status: 'Sold' },
  ];

  const recentTransactions = [
    { id: 1, property: '123 Main St', buyer: 'John Doe', amount: 245000, date: '2024-03-15' },
    { id: 2, property: '456 Elm St', buyer: 'Jane Smith', amount: 440000, date: '2024-03-10' },
    { id: 3, property: '789 Oak Ave', buyer: 'Bob Johnson', amount: 178000, date: '2024-03-05' },
  ];

  const userActivityData = [
    { name: 'Week 1', activeUsers: 150 },
    { name: 'Week 2', activeUsers: 180 },
    { name: 'Week 3', activeUsers: 200 },
    { name: 'Week 4', activeUsers: 220 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Dashboard Overview
        </motion.h1>

        {/* Metrics section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <motion.div 
              key={metric.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow rounded-lg p-4"
            >
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-sm font-medium">{metric.title}</h3>
                <metric.icon className={`h-6 w-6 ${metric.color} text-white p-1 rounded-full`} />
              </div>
              <div className="text-2xl font-bold mt-2">{metric.value}</div>
              <p className="text-xs text-muted mt-1">
                {metric.change > 0 ? (
                  <span className="text-green-600 flex items-center">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    {metric.change}% from last month
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    {Math.abs(metric.change)}% from last month
                  </span>
                )}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Property Listings and Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow rounded-lg p-6"
          >
            <h3 className="text-lg font-medium mb-4">Recent Property Listings</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b-2 py-2">Address</th>
                  <th className="border-b-2 py-2">Type</th>
                  <th className="border-b-2 py-2">Price</th>
                  <th className="border-b-2 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {propertyListings.map((listing) => (
                  <tr key={listing.id}>
                    <td className="border-b py-2">{listing.address}</td>
                    <td className="border-b py-2">{listing.type}</td>
                    <td className="border-b py-2">${listing.price.toLocaleString()}</td>
                    <td className="border-b py-2">
                      <span className={`px-2 py-1 rounded text-xs ${listing.status === 'For Sale' ? 'bg-green-200 text-green-800' : listing.status === 'Under Contract' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>
                        {listing.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow rounded-lg p-6"
          >
            <h3 className="text-lg font-medium mb-4">Recent Transactions</h3>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b-2 py-2">Property</th>
                  <th className="border-b-2 py-2">Buyer</th>
                  <th className="border-b-2 py-2">Amount</th>
                  <th className="border-b-2 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td className="border-b py-2">{transaction.property}</td>
                    <td className="border-b py-2">{transaction.buyer}</td>
                    <td className="border-b py-2">${transaction.amount.toLocaleString()}</td>
                    <td className="border-b py-2">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* User Activity Trend */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">User Activity Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardOverview;
