
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
            <HoverCard openDelay={0} closeDelay={200}>
              <HoverCardTrigger asChild>
                <Link to="/internet-solutions" className="text-gray-700 hover:text-sinet-dark font-medium">
                  Internet Solutions
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-0">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <Link to="/business-internet" className="block p-2 hover:bg-sinet-light rounded transition-colors">
                    <div className="font-medium">Business Internet</div>
                    <div className="text-sm text-gray-500">Solutions for businesses</div>
                  </Link>
                  <Link to="/home-internet" className="block p-2 hover:bg-sinet-light rounded transition-colors">
                    <div className="font-medium">Home Internet</div>
                    <div className="text-sm text-gray-500">Fast reliable home connections</div>
                  </Link>
                </div>
              </HoverCardContent>
            </HoverCard>
            
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
            <div>
              <Link to="/internet-solutions" className="block px-4 py-2 text-gray-700 hover:bg-sinet-light rounded font-medium">
                Internet Solutions
              </Link>
              <div className="ml-4 mt-1 space-y-1 bg-gray-50 rounded-md p-2">
                <Link to="/business-internet" className="block px-4 py-1 text-gray-600 hover:bg-sinet-light rounded text-sm">
                  Business Internet
                </Link>
                <Link to="/home-internet" className="block px-4 py-1 text-gray-600 hover:bg-sinet-light rounded text-sm">
                  Home Internet
                </Link>
              </div>
            </div>
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
