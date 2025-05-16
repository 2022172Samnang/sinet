// src/pages/FiberHomePage.tsx

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomePackages from "@/components/HomePackages";

interface Feature {
  text: string;
}

const FiberHomePage: React.FC = () => {
  const packageName = "Fiber Home";
  const packageSpeed = "15 Mbps";
  const startingPrice = "$22";
  const promotion = "Buy 10 months, Get 2 months Free!";

  const features: Feature[] = [
    { text: "15 Mbps Download/Upload Speed" },
    { text: "Faster Than Average Broadband" },
    { text: "Unlimited Usage" },
    { text: "HD Quality Streaming" },
    { text: "No Cache/No Proxy" },
    { text: "Private IP" },
  ];

  const scrollToSignUp = () => {
    const signUpSection = document.getElementById("signup-form");
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-50 py-16">
          <div className="container mx-auto px-4 md:px-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              {/* Left Side - Package Details */}
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold text-amber-700 mb-3 italic drop-shadow-sm">
                  {packageName}
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 drop-shadow">
                  {packageSpeed}
                </h2>
                <div className="text-2xl text-gray-700 mb-4">
                  Starting from{" "}
                  <span className="font-semibold">{startingPrice}</span>
                </div>
                <div className="text-xl font-medium text-gray-800 mb-8">
                  {promotion}
                </div>
                <Button
                  onClick={scrollToSignUp}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-xl rounded-md"
                >
                  Sign Up
                </Button>
              </div>

              {/* Right Side - Features Card */}
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6 uppercase text-center md:text-left">
                    Features
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0 mt-1" />{" "}
                        {/* Adjusted mt slightly */}
                        <span className="text-gray-700 text-lg">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Section */}
        <div id="signup-form" className="bg-sky-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
              {" "}
              {/* Increased mb */}
              SIGN UP
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                <div className="mb-5">
                  <label
                    htmlFor="package-select"
                    className="block text-gray-700 mb-2 font-medium text-lg"
                  >
                    Package of Interest
                  </label>
                  <input
                    type="text"
                    id="package-select"
                    readOnly
                    value={`${packageName} - ${packageSpeed}`}
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed focus:ring-teal-500 focus:border-teal-500 text-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="signup-name"
                      className="block text-gray-700 mb-2 font-medium text-lg"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="signup-name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-phone"
                      className="block text-gray-700 mb-2 font-medium text-lg"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="signup-phone"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="signup-email"
                      className="block text-gray-700 mb-2 font-medium text-lg"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="signup-email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-address"
                      className="block text-gray-700 mb-2 font-medium text-lg"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="signup-address"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-lg"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="signup-comment"
                    className="block text-gray-700 mb-2 font-medium text-lg"
                  >
                    Comment / Questions
                  </label>
                  <textarea
                    id="signup-comment"
                    rows={4}
                    placeholder="Any specific requirements or questions..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 text-lg"
                  ></textarea>
                </div>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-xl font-semibold rounded-md">
                  Send Inquiry
                </Button>
              </div>

              <div className="text-center mt-8 text-gray-600">
                <p className="mb-2 text-lg">
                  Or Chat with our Sales Team by Whatsapp or Telegram via{" "}
                  <a
                    href="tel:+85581801999"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    +855 81 801 999
                  </a>
                </p>
                <p className="mb-2 text-lg">
                  or call{" "}
                  <a
                    href="tel:+85581801999"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    +855 81 801 999
                  </a>
                </p>
                <p className="text-lg">
                  Email:{" "}
                  <a
                    href="mailto:sales@sinet.com.kh"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    sales@sinet.com.kh
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section (Commented out in original, remains commented) */}
        {/* <section className="py-10 bg-emerald-50"> ... </section> */}
      </main>
      <HomePackages
        navbarOffset="80px"
        gridCols={3}
        excludeLink="/fiber-home"
      />

      <Footer />
    </div>
  );
};

export default FiberHomePage;
