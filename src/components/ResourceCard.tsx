import React, { useState } from 'react';
import { ExternalLink, Share, Copy, Instagram, Check } from 'lucide-react';
import { Resource } from '../context/ResourceContext';

interface ResourceCardProps {
  resource: Resource;
}

function ResourceCard({ resource }: ResourceCardProps) {
  const [copied, setCopied] = useState(false);

  const getCategoryColor = (category: string) => {
    const colors = {
      'DSA': 'from-blue-500 to-blue-600',
      'Programming': 'from-purple-500 to-purple-600',
      'IoT': 'from-green-500 to-green-600',
      'AI/ML': 'from-pink-500 to-pink-600',
      'Aptitude': 'from-yellow-500 to-yellow-600',
      'Semester Notes': 'from-indigo-500 to-indigo-600',
      'Competitive Exams': 'from-red-500 to-red-600',
      'More': 'from-gray-500 to-gray-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(resource.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleShareToInstagram = () => {
    const text = `Check out this amazing resource: ${resource.title}`;
    const url = `https://www.instagram.com/share?url=${encodeURIComponent(resource.url)}&title=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group">
      {/* Category Badge */}
      <div className={`h-2 bg-gradient-to-r ${getCategoryColor(resource.category)}`}></div>
      
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(resource.category)}`}>
            {resource.category}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={handleCopyLink}
              className="p-2 text-gray-400 hover:text-blue-500 transition-colors rounded-full hover:bg-blue-50"
              title="Copy link"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handleShareToInstagram}
              className="p-2 text-gray-400 hover:text-pink-500 transition-colors rounded-full hover:bg-pink-50"
              title="Share to Instagram"
            >
              <Instagram className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
          {resource.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {resource.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {resource.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
          {resource.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              +{resource.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Added {new Date(resource.dateAdded).toLocaleDateString()}
          </span>
          
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Open Resource</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResourceCard;