import React, { useState } from 'react';
import Transactions from './Transactions';
import PropertyListing from './PropertyListings';
import Notifications from './Notification';

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState('transactions');

  return (
    <div className="max-w-7xl mx-auto p-8 flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 bg-gray-100 rounded-md shadow-lg mb-8 lg:mb-0">
        <ul>
          <li className="mb-4">
            <button
              className={`text-lg font-semibold w-full text-left ${activeSection === 'transactions' ? 'text-blue-500' : ''}`}
              onClick={() => setActiveSection('transactions')}
            >
              Transaction History
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`text-lg font-semibold w-full text-left ${activeSection === 'property' ? 'text-blue-500' : ''}`}
              onClick={() => setActiveSection('property')}
            >
              Property Listings
            </button>
          </li>
          <li className="mb-4">
            <button
              className={`text-lg font-semibold w-full text-left ${activeSection === 'notifications' ? 'text-blue-500' : ''}`}
              onClick={() => setActiveSection('notifications')}
            >
              Notifications
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 lg:ml-8">
        {activeSection === 'transactions' && <Transactions />}
        {activeSection === 'property' && <PropertyListing />}
        {activeSection === 'notifications' && <Notifications />}
      </main>
    </div>
  );
};

export default UserDashboard;
