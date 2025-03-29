import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart2,
  Users, 
  ShoppingBag, 
  Settings,
  LogOut,
  ChevronDown,
  Menu,
  FileText,
  UserCircle,
  Grid,
  Key
} from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        className={`md:hidden fixed top-3 left-4 z-50 p-2 bg-white rounded-lg shadow-md transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-screen bg-white z-40 transition-transform duration-300 w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:shadow-md
      `}>
        <div className="p-5 border-b border-gray-200">
          <h1 className="text-xl font-semibold">Creative Tim</h1>
        </div>
        
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-medium">Brooklyn Alice</p>
              <p className="text-sm text-gray-500">Admin</p>
            </div>
          </div>

          <nav className="space-y-1">
            {/* Dashboards dropdown */}
            <div>
              <button 
                onClick={() => setIsDashboardOpen(!isDashboardOpen)}
                className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <LayoutDashboard size={20} />
                  <span>Dashboards</span>
                </div>
                <ChevronDown size={16} className={`transform transition-transform ${isDashboardOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDashboardOpen && (
                <div className="ml-8 space-y-1 mt-1">
                  <a href="#" className="block p-2 rounded-lg text-gray-600 hover:bg-gray-100">
                    Analytics
                  </a>
                  <a href="#" className="block p-2 rounded-lg bg-gray-900 text-white">
                    Sales
                  </a>
                </div>
              )}
            </div>

            <div className="pt-4">
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase mb-2">PAGES</p>
              <div className="space-y-1">
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <FileText size={20} />
                  <span>Pages</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <UserCircle size={20} />
                  <span>Account</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <Users size={20} />
                  <span>Team</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <Grid size={20} />
                  <span>Applications</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <ShoppingBag size={20} />
                  <span>E-commerce</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <Key size={20} />
                  <span>Authentication</span>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="px-2 text-xs font-semibold text-gray-400 uppercase mb-2">DOCS</p>
              <div className="space-y-1">
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <BarChart2 size={20} />
                  <span>Basic</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <Grid size={20} />
                  <span>Components</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                  <FileText size={20} />
                  <span>Change Log</span>
                </a>
              </div>
            </div>
          </nav>
        </div>


      </div>
    </>
  );
};

export default Sidebar;