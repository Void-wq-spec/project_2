import React from 'react';
import { BookOpen, Instagram, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Campus Resource Hub</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your one-stop destination for all college study materials, guides, and resources. 
              Empowering students with easy access to quality educational content.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/kabirosky?igsh=ZG10OTVuZ2NkaXVu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@kabirosky</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Browse Resources
                </Link>
              </li>
              <li>
                <Link to="/add-guide" className="text-gray-300 hover:text-white transition-colors">
                  Add New Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li>DSA & Algorithms</li>
              <li>Programming</li>
              <li>IoT & Embedded</li>
              <li>AI & Machine Learning</li>
              <li>Aptitude & Reasoning</li>
              <li>Semester Notes</li>
              <li>Competitive Exams</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Kabir Singh for students everywhere
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              © 2024 Campus Resource Hub by Kabir Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;