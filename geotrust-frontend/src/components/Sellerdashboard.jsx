import React, { useState, useEffect } from 'react';
import PropertyListing from './PropertyListings';
import Transaction from './Transactions';
import MapPage from './Maps';
import AddProperty from './AddProperty';
import Notifications from './Notification';


 

const SellerDashboard = () => {
  // State to manage the currently active section
  const [activeSection, setActiveSection] = useState('map'); // Default to 'map'

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white border-r p-4">
        <nav className="flex flex-col items-start">
          <h2 className="text-xl font-semibold mb-6">Seller Dashboard</h2>

          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setActiveSection('map')}
                className={`text-gray-700 hover:text-blue-500 ${activeSection === 'map' ? 'font-bold text-blue-500' : ''}`}
              >
                Map
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('propertyListing')}
                className={`text-gray-700 hover:text-blue-500 ${activeSection === 'propertyListing' ? 'font-bold text-blue-500' : ''}`}
              >
                Property Listing
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('transaction')}
                className={`text-gray-700 hover:text-blue-500 ${activeSection === 'transaction' ? 'font-bold text-blue-500' : ''}`}
              >
                Transaction History
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('property')}
                className={`text-gray-700 hover:text-blue-500 ${activeSection === 'property' ? 'font-bold text-blue-500' : ''}`}
              >
                Add New Property
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('notifications')}
                className={`text-gray-700 hover:text-blue-500 ${activeSection === 'notifications' ? 'font-bold text-blue-500' : ''}`}
              >
                Notifications
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-6 overflow-auto">
        {activeSection === 'map' && (
          <section id="map" className="mb-8">
            <MapPage />
          </section>
        )}

        {activeSection === 'propertyListing' && (
          <section id="propertyListing" className="mb-8">
            <PropertyListing />
          </section>
        )}

        {activeSection === 'transaction' && (
          <section id="transaction" className="mb-8">
            <Transaction />
          </section>
        )}

        {activeSection === 'property' && (
          <section id="property" className="mb-8">
            <AddProperty />
          </section>
        )}
        {activeSection === 'notifications' && (
          <section id='notifications' className='mb-8'>
            <Notifications />
          </section>
        )}
      </main>
    </div>
  );
};

export default SellerDashboard;
