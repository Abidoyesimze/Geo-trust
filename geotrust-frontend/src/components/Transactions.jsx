import React from 'react';
import { motion } from 'framer-motion';

// Sample transaction data
const transactions = [
  {
    id: 1,
    type: 'Purchase',
    date: '2024-09-15',
    amount: '200,000',
    status: 'Completed',
  },
  {
    id: 2,
    type: 'Sale',
    date: '2024-09-20',
    amount: '350,000',
    status: 'Pending',
  },
  {
    id: 3,
    type: 'Purchase',
    date: '2024-09-25',
    amount: '500,000',
    status: 'Completed',
  },
  {
    id: 4,
    type: 'Sale',
    date: '2024-09-30',
    amount: '700,000',
    status: 'Cancelled',
  },
  {
    id: 5,
    type: 'Purchase',
    date: '2024-09-28',
    amount: '150,000',
    status: 'Completed',
  },
];

const Transactions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Transaction History
        </motion.h1>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-2 sm:px-4 text-left">Transaction ID</th>
                <th className="py-2 px-2 sm:px-4 text-left">Type</th>
                <th className="py-2 px-2 sm:px-4 text-left">Date</th>
                <th className="py-2 px-2 sm:px-4 text-left">Amount</th>
                <th className="py-2 px-2 sm:px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <motion.tr
                  key={transaction.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border-b"
                >
                  <td className="py-4 px-2 sm:px-4">{transaction.id}</td>
                  <td className="py-4 px-2 sm:px-4">{transaction.type}</td>
                  <td className="py-4 px-2 sm:px-4">{transaction.date}</td>
                  <td className="py-4 px-2 sm:px-4">${transaction.amount}</td>
                  <td
                    className={`py-4 px-2 sm:px-4 ${
                      transaction.status === 'Completed'
                        ? 'text-green-500'
                        : transaction.status === 'Pending'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}
                  >
                    {transaction.status}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* No transactions message */}
        {transactions.length === 0 && (
          <motion.p
            className="text-center text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            No transactions found.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Transactions;
