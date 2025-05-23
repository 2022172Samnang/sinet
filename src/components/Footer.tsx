import React from "react";
import { Link } from "react-router-dom";
// Logo import is removed as it's not used in the updated footer

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white pt-12 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Column 1: About SINET */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About SINET</h3>
            <p className="text-sm">
              {" "}
              {/* Adjusted font size for potentially longer text */}
              We are a Specialist Dedicated Internet Service Provider with
              strong focus on Engineering excellence and customer service since
              2009.
            </p>
          </div>

          {/* Column 2: Internet Solutions */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Internet Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#business-internet" // Assuming hash link to section on homepage
                  className="text-white hover:text-black"
                >
                  Business Internet
                </Link>
              </li>
              <li>
                <Link
                  to="/#home-internet" // Assuming hash link to section on homepage
                  className="text-white hover:text-black"
                >
                  Home Internet
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Enterprise Solutions */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Enterprise Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/enterprise-solution/dplc"
                  className="text-white hover:text-black"
                >
                  DPLC
                </Link>
              </li>
              <li>
                <Link
                  to="/enterprise-solution/iplc"
                  className="text-white hover:text-black"
                >
                  IPLC
                </Link>
              </li>
              <li>
                <Link
                  to="/enterprise-solution/ip-transit"
                  className="text-white hover:text-black"
                >
                  IP Transit
                </Link>
              </li>
              <li>
                <Link
                  to="/enterprise-solution/virtual-private-server"
                  className="text-white hover:text-black"
                >
                  Virtual Private Server
                </Link>
              </li>
              <li>
                <a
                  href="https://www.chaktomuk-dc.com.kh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-black"
                >
                  Data Center
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Service */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/customer-service/technical-support"
                  className="text-white hover:text-black"
                >
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: About Us */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about-us/company-profile" // Mapped from "Company Overview"
                  className="text-white hover:text-black"
                >
                  Company Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/our-network" // Mapped from "Network Coverage"
                  className="text-white hover:text-black"
                >
                  Network Coverage
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/why-sinet"
                  className="text-white hover:text-black"
                >
                  Why SINET?
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/our-clients" // New item, assuming path
                  className="text-white hover:text-black"
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/careers"
                  className="text-white hover:text-black"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 text-center">
          <p className="text-white">
            © {new Date().getFullYear()} SINET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
