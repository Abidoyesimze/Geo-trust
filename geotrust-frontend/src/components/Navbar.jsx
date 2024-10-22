import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import ConnectButton from './connect';
import { toast } from 'react-toastify';
import { Menu } from 'lucide-react'; 

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="GeoTrust Logo" className="h-14 w-50" />
          
          
          <button 
            className="text-white lg:hidden" 
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>

          
          <ul className="hidden lg:flex space-x-6 items-center">
            <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
            <li><Link to="/dashboard" className="text-white hover:text-gray-200">Overview</Link></li>
            <li><Link to="/explore" className="text-white hover:text-gray-200">Explore Properties</Link></li>
            <li><Link to="/faq" className="text-white hover:text-gray-200">FAQ</Link></li>
            <li><w3m-button /></li>
          </ul>
        </div>

        
        {isOpen && (
          <div className="lg:hidden">
            <ul className="space-y-2 bg-gray-600 p-4">
              <li><Link to="/" className="block text-white hover:text-gray-200">Home</Link></li>
              <li><Link to="/dashboard" className="block text-white hover:text-gray-200">Overview</Link></li>
              <li><Link to="/explore" className="block text-white hover:text-gray-200">Explore Properties</Link></li>
              <li><Link to="/faq" className="block text-white hover:text-gray-200">FAQ</Link></li>
              <li><w3m-button /></li>
            </ul>
          </div>
        )}
      </nav>

      <main className="">
        {children}
      </main>
    </div>
  );
};

export default Layout;
