
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';

const FiberPlus = () => {
  const features = [
    "120 Mbps Download/Upload Speed",
    "Faster Than Average Broadband",
    "Unlimited Usage",
    "HD Quality Streaming",
    "No Cache/No Proxy",
    "Compatible with IP Camera System and Remote Access"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Navigation Tabs */}
      <div className="bg-sinet text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 text-center">
            <Link to="/fiber-plus" className="flex flex-col items-center p-6 bg-sinet-light">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span>Fiber Plus</span>
            </Link>
            <Link to="#features" className="flex flex-col items-center p-6 hover:bg-sinet-light transition-colors">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <span>Features</span>
            </Link>
            <Link to="#how-it-works" className="flex flex-col items-center p-6 hover:bg-sinet-light transition-colors">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <span>How it works?</span>
            </Link>
            <Link to="#pricing" className="flex flex-col items-center p-6 hover:bg-sinet-light transition-colors">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <span>Pricing</span>
            </Link>
            <Link to="#signup" className="flex flex-col items-center p-6 hover:bg-sinet-light transition-colors">
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </div>
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sinet-light/30 to-white">
          <div className="container mx-auto py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-sinet-light/40 p-8 rounded-lg text-center">
                <h1 className="text-4xl font-bold text-sinet-dark mb-2">Fiber Plus</h1>
                <h2 className="text-5xl font-bold text-gray-800 mb-4">120 Mbps</h2>
                <p className="text-xl mb-2">Starting from $44</p>
                <div className="bg-sinet-dark text-white py-2 px-4 rounded-lg inline-block mb-4">
                  Buy 10 months, Get 2 months Free!
                </div>
                <div className="text-sinet text-left mt-4">
                  <p>Contact Us for More Info:</p>
                  <p>Phone: +855 81 801 999,</p>
                  <p>Telegram direct: https://t.me/SINET_KH</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-sinet mb-4">FEATURES</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-sinet mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sign Up Section */}
        <div id="signup" className="bg-sinet-light/30 py-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">SIGN UP</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Select Package</label>
                  <select className="w-full p-2 border rounded">
                    <option>Fiber Plus - 120 Mbps</option>
                    <option>Fiber Edge - 15 Mbps</option>
                    <option>Fiber Prime - 25 Mbps</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full p-2 border rounded" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Address</label>
                    <input type="text" className="w-full p-2 border rounded" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Comment</label>
                  <textarea className="w-full p-2 border rounded" rows={4}></textarea>
                </div>
                
                <Button className="w-full bg-sinet hover:bg-sinet-dark text-white py-3">Send</Button>
              </div>
              
              <div className="text-center mt-6">
                <p className="mb-2">Or Chat with our Sales Team by Whatsapp or Telegram via +855 81 801 999</p>
                <p className="mb-2">or call +855 81 801 999</p>
                <p>Email: sales@sinet.com.kh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FiberPlus;
