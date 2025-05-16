import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDesktopCategory, setActiveDesktopCategory] = useState(null);
  const leaveTimeoutRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    if (isMobileMenuOpen) setActiveDesktopCategory(null);
  }, [isMobileMenuOpen]);

  const handleMouseEnterNavItem = (item) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setActiveDesktopCategory(item);
  };

  const handleMouseLeaveNavArea = () => {
    leaveTimeoutRef.current = setTimeout(
      () => setActiveDesktopCategory(null),
      300
    ); // Slightly increased delay
  };

  const handleMouseEnterSubMenu = () => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
  };

  const closeAllMenus = () => {
    setActiveDesktopCategory(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const internetSolutionsLinks = [
    {
      to: "/#business-internet",
      label: "Business Internet",
      icon: <Building />,
    },
    { to: "/#home-internet", label: "Home Internet", icon: <Zap /> },
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
      basePath: "/enterprise-solutions",
      icon: <Building className="w-5 h-5" />,
      subLinks: enterpriseSolutionsLinks,
    },
    {
      label: "Customer Services",
      basePath: "/customer-services",
      icon: <HelpCircle className="w-5 h-5" />,
      subLinks: customerServicesLinks,
    },
    {
      label: "About Us",
      basePath: "/about-us",
      icon: <Info className="w-5 h-5" />,
      subLinks: aboutUsLinks,
    },
  ];

  const handleHashLinkClick = (pathWithHash) => {
    closeAllMenus();
    const [path, hash] = pathWithHash.split("#");
    const currentPath =
      window.location.pathname.replace(
        import.meta.env.BASE_URL.slice(0, -1),
        ""
      ) || "/";

    if ((path === "" || path === "/") && currentPath === "/") {
      // Check if target is root and current is root
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // Add offset for sticky navbar
          const navbarHeight = navRef.current?.offsetHeight || 0;
          if (navbarHeight > 0) {
            const elementPosition =
              element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navbarHeight - 20, // 20px extra padding
              behavior: "smooth",
            });
          }
          return;
        }
      }
    }
    navigate(pathWithHash);
  };

  const renderHorizontalSubMenuItem = (link, index) => {
    const commonItemClasses =
      "flex flex-col items-center text-center group p-3 rounded-md hover:bg-black/10 min-w-[120px] max-w-[160px]"; // Adjusted min/max width, padding

    // --- CHANGED icon styling ---
    const iconElement = React.cloneElement(link.icon, {
      className: "w-8 h-8 mb-2 text-black", // Icon color black, adjusted size/margin
    });

    // --- CHANGED label styling ---
    const labelElement = (
      <span className="text-sm font-medium text-black leading-tight whitespace-nowrap">
        {" "}
        {/* Text black, ensure no wrap */}
        {link.label}
      </span>
    );

    const descriptionElement = link.description && (
      <span className="text-[10px] text-gray-700 mt-0.5">
        {" "}
        {/* Darker gray for description if any */}
        {link.description}
      </span>
    );

    const commonProps = {
      key: index,
      className: commonItemClasses,
    };

    if (link.to && link.to.includes("#")) {
      return (
        <button
          type="button"
          onClick={() => handleHashLinkClick(link.to)}
          {...commonProps}
        >
          {iconElement}
          {labelElement}
          {descriptionElement}
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
        {labelElement}
        {descriptionElement}
      </a>
    ) : (
      <Link to={link.to} {...commonProps} onClick={closeAllMenus}>
        {iconElement}
        {labelElement}
        {descriptionElement}
      </Link>
    );
  };

  return (
    <nav
      ref={navRef} // Added ref here
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
                <Link
                  to={item.basePath}
                  className="text-gray-700 hover:text-sinet-brand-teal font-medium flex items-center space-x-1.5 px-2 lg:px-3 py-2 rounded-md"
                  onClick={(e) => {
                    const currentPath =
                      window.location.pathname.replace(
                        import.meta.env.BASE_URL.slice(0, -1),
                        ""
                      ) || "/";
                    if (
                      item.label === "Internet Solutions" &&
                      currentPath === "/"
                    ) {
                      // Allow default hash scroll if any sub-item will be clicked, or just stay on page.
                      // Do not close menu immediately if hovering over for sub-menu.
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
            {/* Ensure your sinet-dark/darkest/light are defined in tailwind.config.js */}
            <Link to="/contact" onClick={closeAllMenus}>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white ml-2 lg:ml-3 px-4 py-2 text-sm">
                {" "}
                {/* Using teal as placeholder */}
                Sign Up
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 px-3 py-2 text-sm" /* Using teal as placeholder */
              onClick={closeAllMenus}
            >
              Kh
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none focus:text-teal-600 p-2" /* Using teal as placeholder */
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
            className="hidden md:block absolute top-full left-0 right-0 w-full bg-teal-500 shadow-xl z-40" // Main teal background for submenu bar
            onMouseEnter={handleMouseEnterSubMenu}
            onMouseLeave={handleMouseLeaveNavArea}
          >
            <div className="container mx-auto flex justify-center items-start flex-wrap gap-x-2 sm:gap-x-3 lg:gap-x-4 gap-y-2 px-4 py-4">
              {" "}
              {/* Adjusted padding and gaps */}
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
                  const currentPath =
                    window.location.pathname.replace(
                      import.meta.env.BASE_URL.slice(0, -1),
                      ""
                    ) || "/";
                  if (
                    item.label === "Internet Solutions" &&
                    currentPath === "/"
                  ) {
                    // Allow default behavior for Link to handle hash on same page
                  } else {
                    closeAllMenus();
                  }
                }}
                className="block px-3 py-2.5 text-gray-800 hover:bg-gray-100 rounded font-semibold"
              >
                {item.label}
              </Link>
              <div className="ml-3 mt-1 mb-2 flex flex-col space-y-0.5 bg-gray-50 rounded-md p-2">
                {item.subLinks.map((link, index) => {
                  const mobileIcon = React.cloneElement(link.icon, {
                    className: "w-4 h-4 text-gray-600",
                  });
                  if (link.to && link.to.includes("#")) {
                    return (
                      <button
                        type="button"
                        key={index}
                        onClick={() => handleHashLinkClick(link.to)}
                        className="flex items-center space-x-2.5 px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded text-sm w-full text-left"
                      >
                        {mobileIcon}
                        <span>{link.label}</span>
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
                      className="flex items-center space-x-2.5 px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded text-sm"
                    >
                      {mobileIcon}
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      key={index}
                      to={link.to}
                      onClick={closeAllMenus}
                      className="flex items-center space-x-2.5 px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded text-sm"
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
            <Link to="/contact" onClick={closeAllMenus}>
              {" "}
              {/* Corrected to /contact */}
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Sign Up
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
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
