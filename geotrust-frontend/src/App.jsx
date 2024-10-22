import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { WagmiProvider, createClient } from 'wagmi';
// import { config } from "../src/config"; 
import Navbar from "./components/Navbar";
import Home from './components/Home';
import PropertyListings from './components/PropertyListings';
import Transactions from './components/Transactions';
import OwnershipHistory from './components/OwnershipHistory';
import Maps from './components/Maps';
import ExploreProperties from './components/Explore';
import AdminDashboard from './components/Admindashboard';
import SellerDashboard from './components/Sellerdashboard';
import UserDashboard from './components/Userdashboard';
import Notifications from './components/Notification';
import NotAuthorized from './components/Unauthorized';
import DashboardOverview from './components/Dashboard';
import AddProperty from './components/AddProperty';
import Connect from "./components/connect";
import FAQ from './components/Faq';

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { arbitrum, mainnet } from '@reown/appkit/networks';

const projectId = 'YOUR_PROJECT_ID';

const networks = [arbitrum, mainnet];

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}


createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true 
  }
})

  

function App() {
  return (
    
      <Router>
        <Navbar>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertyListings />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/ownership-history" element={<OwnershipHistory />} />
            <Route path="/maps" element={<Maps />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />} />
            <Route path='/seller-dashboard' element={<SellerDashboard />} />
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/dashboard" element={<DashboardOverview />} />
            <Route path="/property" element={<AddProperty />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/explore" element={<ExploreProperties />} />
            {/* Not Authorized Route */}
            <Route path="/not-authorized" element={<NotAuthorized />} />
          </Routes>
        </Navbar>
      </Router>
    
  );
}

export default App;
