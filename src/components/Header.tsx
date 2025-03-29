import React from 'react';
import { Search, Bell, Settings, UserCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 right-0 left-0 md:left-64 z-10">
      <div className="flex items-center justify-between px-4 py-4 pl-16 md:pl-1">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">Dashboards</span>
          <span className="text-gray-400">/</span>
          <span className="font-medium">Sales</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search here"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 w-64"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <UserCircle size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;