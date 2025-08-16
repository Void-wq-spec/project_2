import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Plus, Home } from 'lucide-react';

function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Campus Resource Hub
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/resources"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/resources')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Browse Resources</span>
            </Link>
            <Link
              to="/add-guide"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/add-guide')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Add Guide</span>
            </Link>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden flex space-x-2">
            <Link
              to="/"
              className={`p-2 rounded-md ${
                isActive('/') ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Home className="w-5 h-5" />
            </Link>
            <Link
              to="/resources"
              className={`p-2 rounded-md ${
                isActive('/resources') ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="w-5 h-5" />
            </Link>
            <Link
              to="/add-guide"
              className={`p-2 rounded-md ${
                isActive('/add-guide') ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Plus className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;