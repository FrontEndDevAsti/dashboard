import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import ChannelsChart from './components/ChannelsChart';
import RevenueChart from './components/RevenueChart';
import SalesByCountry from './components/SalesByCountry';
import SalesByAge from './components/SalesByAge';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Header />
      
      <main className="md:ml-64 pt-24 px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatsCard
            title="Sales"
            value="$230,220"
            change="55%"
            period="since last month"
            isPositive={true}
          />
          <StatsCard
            title="Customers"
            value="3,200"
            change="12%"
            period="since last month"
            isPositive={true}
          />
          <StatsCard
            title="Avg. Revenue"
            value="$1,200"
            change="$213"
            period="since last month"
            isPositive={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChannelsChart />
          <RevenueChart />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesByAge />
          <SalesByCountry />
        </div>
      </main>
    </div>
  );
}

export default App;