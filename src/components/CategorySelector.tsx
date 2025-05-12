
import React from 'react';
import { Link } from 'react-router-dom';

const CategorySelector = () => {
  return (
    <div className="bg-sinet-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <Link 
            to="/business-internet" 
            className="flex flex-col items-center p-6 text-white border-r border-white/20 hover:bg-sinet-darkest transition-colors">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            <span className="text-center">Business Internet</span>
          </Link>
          
          <Link 
            to="/home-internet" 
            className="flex flex-col items-center p-6 text-white border-r border-white/20 hover:bg-sinet-darkest transition-colors">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <span className="text-center">Home Internet</span>
          </Link>
          
          <Link 
            to="/enterprise-solutions" 
            className="flex flex-col items-center p-6 text-white border-r border-white/20 hover:bg-sinet-darkest transition-colors">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <span className="text-center">Enterprise Solutions</span>
          </Link>
          
          <Link 
            to="/customer-services" 
            className="flex flex-col items-center p-6 text-white hover:bg-sinet-darkest transition-colors">
            <div className="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <span className="text-center">Customer Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
