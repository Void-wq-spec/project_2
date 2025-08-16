import React from 'react';
import { Search } from 'lucide-react';
import { useResources } from '../context/ResourceContext';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  placeholder?: string;
}

function SearchBar({ placeholder = "Search resources..." }: SearchBarProps) {
  const { searchTerm, setSearchTerm } = useResources();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate('/resources');
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 text-lg rounded-full border-0 shadow-lg focus:ring-4 focus:ring-blue-200 focus:outline-none bg-white text-gray-900 placeholder-gray-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
      </div>
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;