
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FiberEdge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-100 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-4">Fiber Edge</h1>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">50 Mbps</h2>
                <div className="text-xl text-gray-700 mb-4">Starting from $44</div>
                <div className="text-lg font-medium text-gray-800 mb-8">
                  Buy 10 months, Get 2 months Free!
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
                  Sign Up
                </Button>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase">Features</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>50 Mbps Download/Upload Speed</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Faster Than Average Broadband</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Unlimited Usage</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>HD Quality Streaming</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>No Cache/No Proxy</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Compatible with IP Home security System (Fiber Edge+ Only)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Information Section */}
        <section className="py-10 bg-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-teal-100 rounded-lg p-6">
              <h3 className="text-center text-lg font-medium text-gray-800 mb-4">For More Information:</h3>
              <div className="text-center">
                <p className="mb-2">Phone: +855 81 801 999</p>
                <p>
                  Telegram direct: 
                  <a 
                    href="https://t.me/SINET_KH" 
                    className="text-teal-700 hover:underline ml-1"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    https://t.me/SINET_KH
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FiberEdge;
