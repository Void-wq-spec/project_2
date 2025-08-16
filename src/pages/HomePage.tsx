import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Code, Cpu, Brain, Calculator, FileText, Trophy, ArrowRight, Users, Star, TrendingUp } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { useResources } from '../context/ResourceContext';

function HomePage() {
  const { setSearchTerm, setSelectedCategory } = useResources();

  const categories = [
    { name: 'DSA', icon: Code, color: 'from-blue-500 to-blue-600', description: 'Data Structures & Algorithms' },
    { name: 'Programming', icon: BookOpen, color: 'from-purple-500 to-purple-600', description: 'Programming Languages & Frameworks' },
    { name: 'IoT', icon: Cpu, color: 'from-green-500 to-green-600', description: 'Internet of Things & Embedded Systems' },
    { name: 'AI/ML', icon: Brain, color: 'from-pink-500 to-pink-600', description: 'Artificial Intelligence & Machine Learning' },
    { name: 'Aptitude', icon: Calculator, color: 'from-yellow-500 to-yellow-600', description: 'Quantitative Aptitude & Reasoning' },
    { name: 'Semester Notes', icon: FileText, color: 'from-indigo-500 to-indigo-600', description: 'Academic Course Materials' },
    { name: 'Competitive Exams', icon: Trophy, color: 'from-red-500 to-red-600', description: 'GATE, CAT, JEE & More' }
  ];

  const stats = [
    { label: 'Total Resources', value: '500+', icon: BookOpen },
    { label: 'Happy Students', value: '10K+', icon: Users },
    { label: 'Categories', value: '8+', icon: Star },
    { label: 'Weekly Updates', value: '50+', icon: TrendingUp }
  ];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white opacity-10 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            All Your College Guides
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              in One Place
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Access thousands of study materials, guides, and resources curated specifically for college students. 
            Your academic success starts here!
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <SearchBar placeholder="Search for guides, notes, tutorials..." />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/resources"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <span>Explore Resources</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/add-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Add New Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover resources organized by subject areas to help you excel in your studies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/resources"
                onClick={() => handleCategoryClick(category.name)}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                  <span>Explore Resources</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Ace Your Exams?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Join thousands of students who are already using our platform to excel in their studies. 
            Start exploring now!
          </p>
          <Link
            to="/resources"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Search className="w-5 h-5 mr-2" />
            Start Learning Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;