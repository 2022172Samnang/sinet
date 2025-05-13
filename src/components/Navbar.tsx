import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming this is ShadCN UI Button or similar
import Logo from "./Logo"; // Ensure this component exists and is imported
import {
  Menu,
  X,
  Globe,
  Building,
  HelpCircle,
  Info,
  Server,
  CreditCard,
  Network,
  Briefcase,
  FileText,
  Phone,
  Shield,
  Box,
  Cpu,
  Zap,
  Router as RouterIcon, // Renamed to avoid conflict with react-router
  MapPin,
  Cloud,
} from "lucide-react";

// IMPORTANT: Define this color in your tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'sinet-brand-teal': '#008080', // Replace with SINET's actual teal/green hex code
//         'sinet-dark': '#your_dark_color',
//         'sinet-light': '#your_light_color',
//         'sinet-darkest': '#your_darkest_color',
//       },
//     },
//   },
// };

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDesktopCategory, setActiveDesktopCategory] = useState(null);
  const leaveTimeoutRef = useRef(null);
  const navRef = useRef(null); // Ref for the main nav element

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      setActiveDesktopCategory(null);
    }
  }, [isMobileMenuOpen]);

  const handleMouseEnterNavItem = (item) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    setActiveDesktopCategory(item);
  };

  const handleMouseLeaveNavArea = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveDesktopCategory(null);
    }, 200);
  };

  const handleMouseEnterSubMenu = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
  };

  const closeAllMenus = () => {
    setActiveDesktopCategory(null);
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Define sublinks
  const internetSolutionsLinks = [
    {
      to: "/",
      label: "Business Internet",
      description: "50Mbps +",
      icon: <Zap />,
    },
    { to: "/", label: "Home Internet", description: "15Mbps +", icon: <Zap /> },
  ];

  const enterpriseSolutionsLinks = [
    { to: "/enterprise-solution/dplc", label: "DPLC", icon: <MapPin /> },
    { to: "/enterprise-solution/iplc", label: "IPLC", icon: <Globe /> },
    {
      to: "/enterprise-solution/ip-transit",
      label: "IP Transit",
      icon: <Cloud />,
    },
    {
      to: "/enterprise-solution/hardware-sales",
      label: "Hardware Sales",
      icon: <RouterIcon />,
    },
    {
      external: true,
      href: "https://www.chaktomuk-dc.com.kh/",
      label: "Data Centre",
      icon: <Server />,
    },
    {
      to: "/enterprise-solution/virtual-private-server",
      label: "Virtual Private Server",
      icon: <Shield />,
    },
  ];

  const customerServicesLinks = [
    {
      to: "/customer-service/technical-support",
      label: "Technical Support",
      icon: <Phone />,
    },
    {
      to: "/customer-service/payment-options",
      label: "Payment Options",
      icon: <CreditCard />,
    },
  ];

  const aboutUsLinks = [
    { to: "/about-us/our-network", label: "Our Network", icon: <Network /> },
    { to: "/about-us/why-sinet", label: "Why SINET?", icon: <HelpCircle /> },
    {
      to: "/about-us/company-profile",
      label: "Company Profile",
      icon: <FileText />,
    },
    { to: "/about-us/careers", label: "Careers", icon: <Briefcase /> },
  ];

  const mainNavItems = [
    {
      label: "Internet Solutions",
      basePath: "/",
      icon: <Globe className="w-5 h-5" />,
      subLinks: internetSolutionsLinks,
    },
    {
      label: "Enterprise Solutions",
      basePath: "/",
      icon: <Building className="w-5 h-5" />,
      subLinks: enterpriseSolutionsLinks,
    },
    {
      label: "Customer Services",
      basePath: "/",
      icon: <HelpCircle className="w-5 h-5" />,
      subLinks: customerServicesLinks,
    },
    {
      label: "About Us",
      basePath: "/",
      icon: <Info className="w-5 h-5" />,
      subLinks: aboutUsLinks,
    },
  ];

  // Renders items for the horizontal desktop sub-menu
  const renderHorizontalSubMenuItem = (link, index) => {
    const commonProps = {
      key: index,
      className:
        "flex flex-col items-center text-center text-white transition-colors group w-32 p-2 rounded-md hover:bg-black/10", // Adjusted width and padding
      onClick: closeAllMenus,
    };
    const iconElement = React.cloneElement(link.icon, {
      className: "w-9 h-9 mb-1.5 text-current", // Adjusted icon size and margin
    });

    return link.external ? (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
      >
        {iconElement}
        <span className="text-xs font-medium leading-tight">{link.label}</span>
      </a>
    ) : (
      <Link to={link.to} {...commonProps}>
        {iconElement}
        <span className="text-xs font-medium leading-tight">{link.label}</span>
      </Link>
    );
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-white shadow-sm"
      onMouseLeave={handleMouseLeaveNavArea}
    >
      <div className="container mx-auto px-4">
        {" "}
        {/* Removed py-2 to consolidate padding control */}
        <div className="flex justify-between items-center h-16">
          {" "}
          {/* Fixed height for navbar */}
          <Link to="/" onClick={closeAllMenus} className="flex-shrink-0">
            <Logo />
          </Link>
          {/* Desktop Navigation Main Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnterNavItem(item)}
                className="h-full flex items-center" // Ensure div takes full height for consistent hover area
              >
                <Link
                  to={item.basePath}
                  className="text-gray-700 hover:text-sinet-dark font-medium flex items-center space-x-1.5 px-2 lg:px-3 py-2 rounded-md"
                  onClick={closeAllMenus}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}
            <Button
              className="bg-sinet-dark hover:bg-sinet-darkest text-white ml-2 lg:ml-3 px-4 py-2 text-sm"
              onClick={closeAllMenus}
            >
              Sign Up
            </Button>
            <Button
              variant="outline"
              className="border-sinet-dark text-sinet-dark hover:bg-sinet-light px-3 py-2 text-sm"
              onClick={closeAllMenus}
            >
              Kh
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none focus:text-sinet-dark p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal SubMenu - Full Width Background */}
      {activeDesktopCategory &&
        activeDesktopCategory.subLinks &&
        activeDesktopCategory.subLinks.length > 0 && (
          <div
            className="hidden md:block absolute top-full left-0 right-0 w-full bg-teal-500 shadow-xl z-40" // Changed to sinet-brand-teal
            onMouseEnter={handleMouseEnterSubMenu}
            onMouseLeave={handleMouseLeaveNavArea} // If mouse leaves submenu, start timer to close
          >
            {/* Container for centering the content within the full-width bar */}
            <div className="container mx-auto flex justify-center items-start flex-wrap gap-x-1 sm:gap-x-2 lg:gap-x-3 gap-y-2 px-4 py-3">
              {" "}
              {/* Reduced py and gaps */}
              {activeDesktopCategory.subLinks.map((subLink, index) =>
                renderHorizontalSubMenuItem(subLink, index)
              )}
            </div>
          </div>
        )}

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-40 bg-white shadow-lg border-t py-2 space-y-1">
          {mainNavItems.map((item) => (
            <div key={item.label} className="px-2">
              <Link
                to={item.basePath}
                onClick={closeAllMenus}
                className="block px-3 py-2.5 text-gray-800 hover:bg-sinet-light rounded font-semibold"
              >
                {item.label}
              </Link>
              <div className="ml-3 mt-1 mb-2 flex flex-col space-y-0.5 bg-gray-50 rounded-md p-2 ">
                {item.subLinks.map((link, index) => {
                  const mobileIcon = React.cloneElement(link.icon, {
                    className: "w-4 h-4 text-gray-600",
                  });
                  return link.external ? (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAllMenus}
                      className="flex items-center space-x-2.5 px-3 py-1.5 text-gray-700 hover:bg-sinet-light rounded text-sm"
                    >
                      {mobileIcon}
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={link.to}
                      onClick={closeAllMenus}
                      className="flex items-center space-x-2.5 px-3 py-1.5 text-gray-700 hover:bg-sinet-light rounded text-sm"
                    >
                      {mobileIcon}
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="px-4 pt-2 pb-3 flex space-x-2">
            <Button
              className="bg-sinet-dark hover:bg-sinet-darkest text-white"
              onClick={closeAllMenus}
            >
              Sign Up
            </Button>
            <Button
              variant="outline"
              className="border-sinet-dark text-sinet-dark hover:bg-sinet-light"
              onClick={closeAllMenus}
            >
              Kh
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
