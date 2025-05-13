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

const DPLCService = () => {
  const features = [
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Secured",
      description: "Secured SDH or MetroEthernet Backbone Network.",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Hub-Spoke or Star Topology",
      description: "Point-to-Point or Point-to-Multipoints.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Nationwide Coverage",
      description: "Anywhere in Cambodia.",
    },
    {
      icon: <ArrowUp className="h-8 w-8" />,
      title: "Ultra Low Latency",
      description: "Optimized for shortest & best throughput.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "No Filtering Layer 2",
      description: "Ultimate Scalability.",
    },
    {
      icon: <Check className="h-8 w-8" />,
      title: "Up to 10Gbps",
      description: "Always On Availability.",
    },
  ];

  const recommendations = [
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Bank and Microfinances",
      description:
        "Best fit for financial institutions which require secure and fast connection between branches without the need to go through public internet.",
    },
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "Nationwide Businesses",
      description:
        "For businesses with multiple branches, franchises, or sales offices in different provinces in the cities or rural areas.",
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
            src="assets/enterprise_solutions/fiber_edge.png"
            alt="Network Visual"
            className="w-full h-auto"
          />
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-8 text-right">
            <h1 className="text-4xl font-bold text-teal-800 mb-4">
              Buy 10 months, get 2 months Free!
            </h1>
            <p className="text-xl text-gray-700">
              Secure and reliable connectivity for your business
            </p>
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
            A Domestic Private Leased Circuit (DPLC) is a dedicated
            telecommunication line that connects two or more locations within
            the same country. It is a point-to-point private connection that
            ensures high-speed and secure data, voice, or video communication
            between offices, data centers, or business branches.
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
            <img src="assets/enterprise_solutions/dplc_network.png" alt="" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-teal-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
            FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default DPLCService;
