
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import SignUpForm from "@/components/SignUpForm";
import ContactForm from "@/components/ContactForm";

const FiberPlus = () => {
  const features = [
    "120 Mbps Download/Upload Speed",
    "Faster Than Average Broadband",
    "Unlimited Usage",
    "HD Quality Streaming",
    "No Cache/No Proxy",
    "Compatible with IP Camera System and Remote Access",
  ];

  const packageOptions = [
    { value: "fiber-plus-120mbps", label: "Fiber Plus - 120 Mbps" },
    { value: "fiber-edge-15mbps", label: "Fiber Edge - 15 Mbps" },
    { value: "fiber-prime-25mbps", label: "Fiber Prime - 25 Mbps" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-sinet-light/30 to-white">
          <div className="container mx-auto py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-sinet-light/40 p-8 rounded-lg text-center">
                <h1 className="text-4xl font-bold text-sinet-dark mb-2">
                  Fiber Plus
                </h1>
                <h2 className="text-5xl font-bold text-gray-800 mb-4">
                  120 Mbps
                </h2>
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
        <div id="signup">
          <SignUpForm 
            packageOptions={packageOptions} 
            selectedPackage="fiber-plus-120mbps"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FiberPlus;
