
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/internet-solutions" className="text-gray-700 hover:text-sinet-dark font-medium">
              Internet Solutions
            </Link>
            <Link to="/enterprise-solutions" className="text-gray-700 hover:text-sinet-dark font-medium">
              Enterprise Solutions
            </Link>
            <Link to="/customer-services" className="text-gray-700 hover:text-sinet-dark font-medium">
              Customer Services
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-sinet-dark font-medium">
              About Us
            </Link>
            <Button className="bg-sinet-dark hover:bg-sinet-darkest text-white">Sign Up</Button>
            <Button variant="outline" className="border-sinet-dark text-sinet-dark hover:bg-sinet-light">Kh</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 focus:outline-none focus:text-sinet-dark"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 space-y-2">
            <Link to="/internet-solutions" className="block px-4 py-2 text-gray-700 hover:bg-sinet-light rounded">
              Internet Solutions
            </Link>
            <Link to="/enterprise-solutions" className="block px-4 py-2 text-gray-700 hover:bg-sinet-light rounded">
              Enterprise Solutions
            </Link>
            <Link to="/customer-services" className="block px-4 py-2 text-gray-700 hover:bg-sinet-light rounded">
              Customer Services
            </Link>
            <Link to="/about-us" className="block px-4 py-2 text-gray-700 hover:bg-sinet-light rounded">
              About Us
            </Link>
            <div className="px-4 py-2 flex space-x-2">
              <Button className="w-full bg-sinet-dark hover:bg-sinet-darkest text-white">Sign Up</Button>
              <Button variant="outline" className="border-sinet-dark text-sinet-dark hover:bg-sinet-light">Kh</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
