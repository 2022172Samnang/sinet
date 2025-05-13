import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import {
  Menu,
  X,
  Globe,
  Building,
  HelpCircle,
  Info,
  Server,
  Users,
  CreditCard,
  Network,
  Briefcase,
  FileText,
  Phone,
  ShoppingCart,
  Shield,
  Code,
  Box,
  Cpu,
  Database,
  Layout,
  Zap,
} from "lucide-react";
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

  // Define sublinks with icons
  const internetSolutionsLinks = [
    {
      to: "/",
      label: "Business Internet",
      description: "50Mbps +",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      to: "/",
      label: "Home Internet",
      description: "15Mbps +",
      icon: <Zap className="w-4 h-4" />,
    },
  ];

  const enterpriseSolutionsLinks = [
    {
      to: "/enterprise-solution/ip-transit",
      label: "IP Transit",
      description: "Wholesale Internet",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      to: "/enterprise-solution/dplc",
      label: "DPLC",
      description: "Domestic Connectivity",
      icon: <Network className="w-4 h-4" />,
    },
    {
      to: "/enterprise-solution/iplc",
      label: "IPLC",
      description: "International Connectivity",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      to: "/enterprise-solution/hardware-sales",
      label: "Hardware Sales",
      description: "High Speed Router",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      external: true,
      href: "https://www.chaktomuk-dc.com.kh/",
      label: "Data Centre",
      description: "Colocation",
      icon: <Server className="w-4 h-4" />,
    },
    {
      to: "/enterprise-solution/virtual-private-server",
      label: "Virtual Private Server",
      description: "Fast & Reliable Server",
      icon: <Box className="w-4 h-4" />,
    },
  ];

  const customerServicesLinks = [
    {
      to: "/customer-service/technical-support",
      label: "Technical Support",
      description: "24/7 Hotline",
      icon: <Phone className="w-4 h-4" />,
    },
    {
      to: "/customer-service/payment-options",
      label: "Payment Options",
      description: "Online and Offline Options",
      icon: <CreditCard className="w-4 h-4" />,
    },
  ];

  const aboutUsLinks = [
    {
      to: "/about-us/our-network",
      label: "Our Network",
      description: "Nationwide infrastructure",
      icon: <Network className="w-4 h-4" />,
    },
    // {
    //   to: "/about-us/metro-link",
    //   label: "MetroLink",
    //   description: "Underground Metro Fiber",
    //   icon: <Code className="w-4 h-4" />,
    // },
    {
      to: "/about-us/why-sinet",
      label: "Why SINET?",
      description: "Why Not?",
      icon: <HelpCircle className="w-4 h-4" />,
    },
    // {
    //   to: "/about-us/our-customers",
    //   label: "Our Clients",
    //   description: "They Trust Us",
    //   icon: <Users className="w-4 h-4" />,
    // },
    {
      to: "/about-us/company-profile",
      label: "Company Profile",
      description: "Who we are",
      icon: <FileText className="w-4 h-4" />,
    },
    {
      to: "/about-us/careers",
      label: "Careers",
      description: "Work with us",
      icon: <Briefcase className="w-4 h-4" />,
    },
    // {
    //   to: "/category/press-release",
    //   label: "Press Release",
    //   description: "Press Release",
    //   icon: <FileText className="w-4 h-4" />,
    // },
  ];

  // Helper function to render hover cards
  const renderHoverCard = (triggerLabel, links, basePath, icon) => (
    <HoverCard openDelay={0} closeDelay={200}>
      <HoverCardTrigger asChild>
        <Link
          to={basePath}
          className="text-gray-700 hover:text-sinet-dark font-medium flex items-center space-x-1"
        >
          {icon}
          <span>{triggerLabel}</span>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-96 p-0">
        <div className="grid grid-cols-2 gap-2 p-4">
          {links.map((link, i) =>
            link.external ? (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-2 hover:bg-sinet-light rounded transition-colors"
              >
                {link.icon}
                <div>
                  <div className="font-medium">{link.label}</div>
                  <div className="text-sm text-gray-500">
                    {link.description}
                  </div>
                </div>
              </a>
            ) : (
              <Link
                key={i}
                to={link.to}
                className="flex items-center space-x-2 p-2 hover:bg-sinet-light rounded transition-colors"
              >
                {link.icon}
                <div>
                  <div className="font-medium">{link.label}</div>
                  <div className="text-sm text-gray-500">
                    {link.description}
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {renderHoverCard(
              "Internet Solutions",
              internetSolutionsLinks,
              "/",
              <Globe className="w-5 h-5" />
            )}
            {renderHoverCard(
              "Enterprise Solutions",
              enterpriseSolutionsLinks,
              "/",
              <Building className="w-5 h-5" />
            )}
            {renderHoverCard(
              "Customer Services",
              customerServicesLinks,
              "/",
              <HelpCircle className="w-5 h-5" />
            )}
            {renderHoverCard(
              "About Us",
              aboutUsLinks,
              "/",
              <Info className="w-5 h-5" />
            )}
            <Button className="bg-sinet-dark hover:bg-sinet-darkest text-white">
              Sign Up
            </Button>
            <Button
              variant="outline"
              className="border-sinet-dark text-sinet-dark hover:bg-sinet-light"
            >
              Kh
            </Button>
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
              <Link
                to="/internet-solution"
                className="block px-4 py-2 text-gray-700 hover:bg-sinet-light rounded font-medium"
              >
                Internet Solutions
              </Link>
              <div className="ml-4 mt-1 flex flex-row flex-wrap gap-2 bg-gray-50 rounded-md p-2">
                {internetSolutionsLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="inline-block px-4 py-1 text-gray-600 hover:bg-sinet-light rounded text-sm flex items-center space-x-2"
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <Link
                to="/enterprise-solution"
                className="block px-4 py-2 text-gray-700 hover:bg-sinet-light rounded font-medium"
              >
                Enterprise Solutions
              </Link>
              <div className="ml-4 mt-1 flex flex-row flex-wrap gap-2 bg-gray-50 rounded-md p-2">
                {enterpriseSolutionsLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="inline-block px-4 py-1 text-gray-600 hover:bg-sinet-light rounded text-sm flex items-center space-x-2"
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <Link
                to="/customer-service"
                className="block px-4 py-2 text-gray-700 hover:bg-sinet-light rounded font-medium"
              >
                Customer Services
              </Link>
              <div className="ml-4 mt-1 flex flex-row flex-wrap gap-2 bg-gray-50 rounded-md p-2">
                {customerServicesLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="inline-block px-4 py-1 text-gray-600 hover:bg-sinet-light rounded text-sm flex items-center space-x-2"
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <Link
                to="/about-us"
                className="block px-4 py-2 text-gray-700 hover:bg-sinet-light rounded font-medium"
              >
                About Us
              </Link>
              <div className="ml-4 mt-1 flex flex-row flex-wrap gap-2 bg-gray-50 rounded-md p-2">
                {aboutUsLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="inline-block px-4 py-1 text-gray-600 hover:bg-sinet-light rounded text-sm flex items-center space-x-2"
                  >
                    <span aria-hidden="true">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="px-4 py-2 flex space-x-2">
              <Button className="w-full bg-sinet-dark hover:bg-sinet-darkest text-white">
                Sign Up
              </Button>
              <Button
                variant="outline"
                className="border-sinet-dark text-sinet-dark hover:bg-sinet-light"
              >
                Kh
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
