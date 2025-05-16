import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
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
  CreditCard,
  Network,
  Briefcase,
  FileText,
  Phone,
  Shield,
  Zap,
  Router as RouterIcon,
  MapPin,
  Cloud,
} from "lucide-react";

// ... (tailwind.config.js comment) ...

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDesktopCategory, setActiveDesktopCategory] = useState(null);
  const leaveTimeoutRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

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
    }, 200); // Increased delay for better UX
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

  // --- MODIFIED internetSolutionsLinks ---
  const internetSolutionsLinks = [
    {
      to: "/#business-internet", // Scroll to business-internet section on the Index page
      label: "Business Internet",
      description: "High-speed for your enterprise", // Updated description
      icon: <Building className="w-4 h-4 sm:w-5 sm:h-5" />, // Example icon
    },
    {
      to: "/#home-internet", // Scroll to home-internet section on the Index page
      label: "Home Internet",
      description: "Reliable internet for your home", // Updated description
      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />, // Example icon
    },
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
      basePath: "/", // The page where these sections exist
      icon: <Globe className="w-5 h-5" />,
      subLinks: internetSolutionsLinks,
    },
    {
      label: "Enterprise Solutions",
      basePath: "/enterprise-solutions", // Example, adjust if needed
      icon: <Building className="w-5 h-5" />,
      subLinks: enterpriseSolutionsLinks,
    },
    {
      label: "Customer Services",
      basePath: "/customer-services", // Example, adjust if needed
      icon: <HelpCircle className="w-5 h-5" />,
      subLinks: customerServicesLinks,
    },
    {
      label: "About Us",
      basePath: "/about-us", // Example, adjust if needed
      icon: <Info className="w-5 h-5" />,
      subLinks: aboutUsLinks,
    },
  ];

  // Function to handle navigation and scrolling for hash links
  const handleHashLinkClick = (pathWithHash) => {
    closeAllMenus();
    const [path, hash] = pathWithHash.split("#");

    // If navigating to the same page (or root for these links) with a hash
    if (
      path === "" ||
      path ===
        window.location.pathname.replace(
          import.meta.env.BASE_URL.slice(0, -1),
          ""
        )
    ) {
      // Adjust for basename
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return; // Prevent further navigation if already on the page and scrolled
        }
      }
    }
    // If navigating to a different page, or hash element not found, let Link/navigate handle it
    // Forcing navigation to ensure the page loads if it's different, then hash scrolling will occur
    navigate(pathWithHash);
  };

  const renderHorizontalSubMenuItem = (link, index) => {
    const commonProps = {
      key: index,
      className:
        "flex flex-col items-center text-center text-white transition-colors group w-32 p-2 rounded-md hover:bg-black/10",
    };
    const iconElement = React.cloneElement(link.icon, {
      className: "w-9 h-9 mb-1.5 text-current",
    });

    // --- MODIFIED to use handleHashLinkClick for relevant links ---
    if (link.to && link.to.includes("#")) {
      return (
        <button
          type="button"
          onClick={() => handleHashLinkClick(link.to)}
          {...commonProps}
        >
          {iconElement}
          <span className="text-xs font-medium leading-tight">
            {link.label}
          </span>
          {link.description && (
            <span className="text-[10px] text-gray-200 mt-0.5">
              {link.description}
            </span>
          )}
        </button>
      );
    }

    return link.external ? (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        {...commonProps}
        onClick={closeAllMenus}
      >
        {iconElement}
        <span className="text-xs font-medium leading-tight">{link.label}</span>
        {link.description && (
          <span className="text-[10px] text-gray-200 mt-0.5">
            {link.description}
          </span>
        )}
      </a>
    ) : (
      <Link to={link.to} {...commonProps} onClick={closeAllMenus}>
        {iconElement}
        <span className="text-xs font-medium leading-tight">{link.label}</span>
        {link.description && (
          <span className="text-[10px] text-gray-200 mt-0.5">
            {link.description}
          </span>
        )}
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
        <div className="flex justify-between items-center h-16">
          <Link to="/" onClick={closeAllMenus} className="flex-shrink-0">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => handleMouseEnterNavItem(item)}
                className="h-full flex items-center"
              >
                {/* --- MODIFIED main nav item Link for Internet Solutions --- */}
                <Link
                  to={item.basePath} // This will navigate to the page
                  className="text-gray-700 hover:text-sinet-brand-teal font-medium flex items-center space-x-1.5 px-2 lg:px-3 py-2 rounded-md"
                  onClick={(e) => {
                    // If it's the internet solutions and we are already on root, don't prevent default hash scroll
                    // Otherwise, close menus and let Link navigate
                    if (
                      item.label === "Internet Solutions" &&
                      window.location.pathname.replace(
                        import.meta.env.BASE_URL.slice(0, -1),
                        ""
                      ) === "/"
                    ) {
                      // Allow default behavior for Link to handle hash on same page
                    } else {
                      closeAllMenus();
                    }
                  }}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </div>
            ))}
            <Link to="/contact" onClick={closeAllMenus}>
              {" "}
              {/* Assuming you have a /contact route */}
              <Button className="bg-sinet-dark hover:bg-sinet-darkest text-white ml-2 lg:ml-3 px-4 py-2 text-sm">
                Sign Up
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-sinet-dark text-sinet-dark hover:bg-sinet-light px-3 py-2 text-sm"
              onClick={closeAllMenus}
            >
              Kh
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none focus:text-sinet-brand-teal p-2"
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

      {activeDesktopCategory &&
        activeDesktopCategory.subLinks &&
        activeDesktopCategory.subLinks.length > 0 && (
          <div
            className="hidden md:block absolute top-full left-0 right-0 w-full bg-teal-500 shadow-xl z-40" // Or sinet-brand-teal
            onMouseEnter={handleMouseEnterSubMenu}
            onMouseLeave={handleMouseLeaveNavArea}
          >
            <div className="container mx-auto flex justify-center items-start flex-wrap gap-x-1 sm:gap-x-2 lg:gap-x-3 gap-y-2 px-4 py-3">
              {activeDesktopCategory.subLinks.map((subLink, index) =>
                renderHorizontalSubMenuItem(subLink, index)
              )}
            </div>
          </div>
        )}

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-40 bg-white shadow-lg border-t py-2 space-y-1">
          {mainNavItems.map((item) => (
            <div key={item.label} className="px-2">
              <Link
                to={item.basePath}
                onClick={(e) => {
                  if (
                    item.label === "Internet Solutions" &&
                    window.location.pathname.replace(
                      import.meta.env.BASE_URL.slice(0, -1),
                      ""
                    ) === "/"
                  ) {
                    // Allow default behavior for Link to handle hash on same page
                  } else {
                    closeAllMenus();
                  }
                }}
                className="block px-3 py-2.5 text-gray-800 hover:bg-sinet-light rounded font-semibold"
              >
                {item.label}
              </Link>
              <div className="ml-3 mt-1 mb-2 flex flex-col space-y-0.5 bg-gray-50 rounded-md p-2">
                {item.subLinks.map((link, index) => {
                  const mobileIcon = React.cloneElement(link.icon, {
                    className: "w-4 h-4 text-gray-600",
                  });

                  // --- MODIFIED for mobile to use handleHashLinkClick for relevant links ---
                  if (link.to && link.to.includes("#")) {
                    return (
                      <button
                        type="button"
                        key={index}
                        onClick={() => handleHashLinkClick(link.to)}
                        className="flex items-center space-x-2.5 px-3 py-1.5 text-gray-700 hover:bg-sinet-light rounded text-sm w-full text-left"
                      >
                        {mobileIcon}
                        <span>{link.label}</span>
                        {/* {link.description && <span className="text-xs text-gray-500 ml-auto">{link.description}</span>} */}
                      </button>
                    );
                  }

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
                      {/* {link.description && <span className="text-xs text-gray-500 ml-auto">{link.description}</span>} */}
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
                      {/* {link.description && <span className="text-xs text-gray-500 ml-auto">{link.description}</span>} */}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="px-4 pt-2 pb-3 flex space-x-2">
            <Link to="/conatct" onClick={closeAllMenus}>
              <Button className="bg-sinet-dark hover:bg-sinet-darkest text-white">
                Sign Up
              </Button>
            </Link>
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
