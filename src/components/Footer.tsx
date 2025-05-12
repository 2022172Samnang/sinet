
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600">
              Leading Internet Service Provider in Cambodia offering high-speed fiber internet for home and business.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Internet Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/business-internet" className="text-gray-600 hover:text-sinet-dark">Business Internet</Link></li>
              <li><Link to="/home-internet" className="text-gray-600 hover:text-sinet-dark">Home Internet</Link></li>
              <li><Link to="/fiber-edge" className="text-gray-600 hover:text-sinet-dark">Fiber Edge</Link></li>
              <li><Link to="/fiber-plus" className="text-gray-600 hover:text-sinet-dark">Fiber Plus</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Enterprise Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/iplc" className="text-gray-600 hover:text-sinet-dark">IPLC</Link></li>
              <li><Link to="/hardware-sales" className="text-gray-600 hover:text-sinet-dark">Hardware Sales</Link></li>
              <li><Link to="/network-security" className="text-gray-600 hover:text-sinet-dark">Network Security</Link></li>
              <li><Link to="/ddos-protection" className="text-gray-600 hover:text-sinet-dark">DDoS Protection</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-600 hover:text-sinet-dark">About Us</Link></li>
              <li><Link to="/customer-services" className="text-gray-600 hover:text-sinet-dark">Customer Services</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-sinet-dark">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-sinet-dark">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} SINET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
