import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Check,
  Lock,
  Globe,
  Server,
  ArrowUp,
  Shield,
  DollarSign,
  Handshake,
} from "lucide-react";

const IPLCService = () => {
  const features = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secured International Connection",
      description:
        "End-to-end encryption for secure data transfer across borders.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Point-to-Point Connectivity",
      description: "Direct connection between international locations.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Coverage",
      description: "Connect to major business hubs worldwide.",
    },
    {
      icon: <ArrowUp className="h-8 w-8" />,
      title: "Low Latency",
      description:
        "Optimized routes for minimal delay in international traffic.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Scalable Bandwidth",
      description: "Flexible options to meet growing business needs.",
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock support and network monitoring.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Scalable Bandwidth",
      description: "Flexible options to meet growing business needs.",
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "24/7 Monitoring",
      description: "Round-the-clock support and network monitoring.",
    },
  ];
  const recommendations = [
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Multinational Corporations",
      description:
        "Ideal for companies with operations in multiple countries requiring secure and reliable connectivity.",
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "International Business Partners",
      description:
        "Perfect for businesses collaborating with partners across borders, ensuring seamless communication.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-100 to-white my-4">
        <div className="relative">
          <img
            src="assets/enterprise_solutions/network.png"
            alt="Network Visual"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2">
              IPLC
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
              (International Private Leased Circuit)
            </h2>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">
            HOW IT WORKS
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            An International Private Leased Circuit (IPLC) is a dedicated
            telecommunication line that connects two or more locations across
            different countries. It provides a secure, high-speed,
            point-to-point connection for reliable data, voice, or video
            communication between global offices, data centers, or business
            branches.
          </p>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            {/* <div className="flex justify-between items-center">
              <div className="text-center">
                <img
                  src="/head-office-icon.png"
                  alt="Head Office"
                  className="h-16 mx-auto mb-2"
                />
                <p className="text-teal-800 font-semibold">Head Office</p>
              </div>
              <div className="text-center">
                <img
                  src="/dplc-network-icon.png"
                  alt="DPLC Network"
                  className="h-16 mx-auto mb-2"
                />
                <p className="text-teal-800 font-semibold">DPLC Network</p>
              </div>
              <div className="text-center">
                <img
                  src="/regional-offices-icon.png"
                  alt="Regional Offices"
                  className="h-16 mx-auto mb-2"
                />
                <p className="text-teal-800 font-semibold">Regional Offices</p>
              </div> */}
            {/* </div> */}
            <img src="assets/enterprise_solutions/iplc_network.png" alt="" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-teal-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
            FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-teal-600 text-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended For Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
            RECOMMENDED FOR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-teal-600 text-white p-6 rounded-lg shadow-md text-center"
              >
                {rec.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{rec.title}</h3>
                <p>{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-teal-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">PRICING</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
            SINET supports Flat or Burstable Bandwidth based on
            industry-standard 95 Percentile billing.
          </p>
          <p className="text-lg text-gray-700">
            Price depends on setup, bandwidth, and SLA.
          </p>
        </div>
      </section>

      {/* Sign Up Section */}
      <div id="signup" className="bg-sinet-light/30 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">SIGN UP</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Select Package
                </label>
                <select className="w-full p-2 border rounded">
                  <option>DPLC - Standard</option>
                  <option>DPLC - Premium</option>
                  <option>DPLC - Enterprise</option>
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
                <textarea
                  className="w-full p-2 border rounded"
                  rows={4}
                ></textarea>
              </div>

              <Button className="w-full bg-sinet hover:bg-sinet-dark text-white py-3">
                Send
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="mb-2">
                Or Chat with our Sales Team by Whatsapp or Telegram via +855 81
                801 999
              </p>
              <p className="mb-2">or call +855 81 801 999</p>
              <p>Email: sales@sinet.com.kh</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IPLCService;
