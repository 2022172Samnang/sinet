import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white pt-12 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center">
              <div className="flex items-center">
                <img
                  className="w-32 h-18"
                  src="assets/sinet_logo_white.png"
                  alt=""
                />
              </div>
            </Link>
            <p className="mt-4">
              Leading Internet Service Provider in Cambodia offering high-speed
              fiber internet for home and business.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Internet Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/business-internet"
                  className="text-white hover:text-black"
                >
                  Business Internet
                </Link>
              </li>
              <li>
                <Link
                  to="/home-internet"
                  className="text-white hover:text-black"
                >
                  Home Internet
                </Link>
              </li>
              <li>
                <Link to="/fiber-edge" className="text-white hover:text-black">
                  Fiber Edge
                </Link>
              </li>
              <li>
                <Link to="/fiber-plus" className="text-white hover:text-black">
                  Fiber Plus
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Enterprise Solutions
            </h3>
            <ul className="space-y-2">
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
                  to="/hardware-sales"
                  className="text-white hover:text-black"
                >
                  Hardware Sales
                </Link>
              </li>
              <li>
                <Link
                  to="/network-security"
                  className="text-white hover:text-black"
                >
                  Network Security
                </Link>
              </li>
              <li>
                <Link
                  to="/ddos-protection"
                  className="text-white hover:text-black"
                >
                  DDoS Protection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-white hover:text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us/our-network"
                  className="text-white hover:text-black"
                >
                  Our Network
                </Link>
              </li>
              <li>
                <Link
                  to="/customer-services"
                  className="text-white hover:text-black"
                >
                  Customer Services
                </Link>
              </li>
              <li>
                <Link
                  to="/customer-service/payment-options"
                  className="text-white hover:text-black"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white hover:text-black">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-black">
                  Contact
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
