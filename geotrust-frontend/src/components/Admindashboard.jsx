import React, { useState } from 'react';
import PropertyListing from './PropertyListings';
import Transaction from './Transactions';
import MapPage from './Maps';
import OwnershipHistory from './OwnershipHistory';

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('ownershipHistory');

  const renderPage = () => {
    switch (activePage) {
      case 'ownershipHistory':
        return <OwnershipHistory />;
      case 'transactions':
        return <Transaction />;
      case 'maps':
        return <MapPage />;
      case 'propertiesListing':
        return <PropertyListing />;
      default:
        return <OwnershipHistory />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      
      <div className="w-full lg:w-1/4 bg-gray-600 text-white p-6 lg:h-screen">
        <h2 className="text-xl lg:text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li
            className={`cursor-pointer ${activePage === 'ownershipHistory' ? 'font-bold' : ''}`}
            onClick={() => setActivePage('ownershipHistory')}
          >
            Ownership History
          </li>
          <li
            className={`cursor-pointer ${activePage === 'transactions' ? 'font-bold' : ''}`}
            onClick={() => setActivePage('transactions')}
          >
            Transaction History
          </li>
          <li
            className={`cursor-pointer ${activePage === 'maps' ? 'font-bold' : ''}`}
            onClick={() => setActivePage('maps')}
          >
            Maps
          </li>
          <li
            className={`cursor-pointer ${activePage === 'propertiesListing' ? 'font-bold' : ''}`}
            onClick={() => setActivePage('propertiesListing')}
          >
            Property Listing
          </li>
        </ul>
      </div>

      
      <div className="w-full lg:w-3/4 p-4 lg:p-6 overflow-auto">
        {renderPage()}
      </div>
    </div>
  );
};

export default AdminDashboard;
