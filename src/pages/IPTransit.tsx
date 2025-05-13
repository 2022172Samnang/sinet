
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Network,
  Globe,
  Server,
  Shield,
  Wifi,
  Building,
  ArrowUp,
  Lock,
} from "lucide-react";

const IPTransit = () => {
  const features = [
    {
      title: "Tier 1",
      description: "Upstream in Hong Kong & Singapore",
      bgColor: "bg-teal-400",
      icon: <Globe className="h-8 w-8 text-white" />,
    },
    {
      title: "30+ CDN",
      description: "Private & Public Peerings",
      bgColor: "bg-white",
      icon: <Network className="h-8 w-8 text-teal-500" />,
      textColor: "text-gray-800",
    },
    {
      title: "Up to 40Gbps",
      description: "Ultimate Scalability",
      bgColor: "bg-teal-400",
      icon: <ArrowUp className="h-8 w-8 text-white" />,
    },
    {
      title: "Ultra Low Latency",
      description: "Optimized for shortest & best throughput",
      bgColor: "bg-white",
      icon: <Server className="h-8 w-8 text-teal-500" />,
      textColor: "text-gray-800",
    },
    {
      title: "No Filtering",
      description: "Direct IP. No Proxy. No compression",
      bgColor: "bg-white",
      icon: <Shield className="h-8 w-8 text-teal-500" />,
      textColor: "text-gray-800",
    },
    {
      title: "Burst & Flat Rate",
      description: "Ultimate Flexibility",
      bgColor: "bg-teal-400",
      icon: <ArrowUp className="h-8 w-8 text-white" />,
    },
    {
      title: "Dual Stack BGP",
      description: "End to end IPv4/IPv6",
      bgColor: "bg-white",
      icon: <Network className="h-8 w-8 text-teal-500" />,
      textColor: "text-gray-800",
    },
    {
      title: "99.999%",
      description: "Always-On Availability",
      bgColor: "bg-teal-400",
      icon: <Lock className="h-8 w-8 text-white" />,
    },
  ];

  const howItWorks = [
    {
      title: "Carrier-grade technology",
      description: "Get the best possible speed & reliability with carrier-grade BGP equipment, redundancy, and automatic fail-over in splits milliseconds.",
      icon: <Shield className="h-12 w-12 text-teal-500" />,
    },
    {
      title: "Dedicated bandwidth",
      description: "Enjoy the lowest possible latency and highest internet bandwidth with our internet nodes in Singapore, Hong Kong, Tokyo, Europe and the US thanks to our specialists in network optimization.",
      icon: <Server className="h-12 w-12 text-teal-500" />,
    },
    {
      title: "Safe & Secure Data Center",
      description: "Available with SINET's MetroLink underground & Fiber network between Phnom Penh and major cities.",
      icon: <Lock className="h-12 w-12 text-teal-500" />,
    },
    {
      title: "Experienced Engineers",
      description: "Supported 24/7 by specialist engineers with best practices, optimization and security with over 35+ year combined experiences.",
      icon: <Network className="h-12 w-12 text-teal-500" />,
    },
  ];

  const recommendations = [
    {
      title: "ISP or Mobile Operators",
      description: "ISPs, Telecom or Mobile Operators who require large bandwidth to resell and redistribute to end users.",
      icon: <Wifi className="h-16 w-16 text-white" />,
    },
    {
      title: "Large Corporate",
      description: "IP Transit is suitable for corporates with their own IP address space and ASN.",
      icon: <Building className="h-16 w-16 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-teal-600 text-white py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="assets/enterprise_solutions/network.png"
            alt="Network Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">IP Transit</h1>
          <p className="text-xl md:text-2xl">(Internet Protocol Transit)</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FEATURES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${
                  feature.bgColor
                } ${feature.textColor || "text-white"} p-6 rounded-md shadow-md`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Feature Display */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">FEATURES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="transform -rotate-6 bg-teal-500 text-white p-6 rounded-sm shadow-md">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Tier 1</h3>
                <p>Upstream in Hong Kong & Singapore</p>
              </div>
            </div>
            <div className="transform -rotate-6 bg-teal-500 text-white p-6 rounded-sm shadow-md">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">30+ CDN</h3>
                <p>Private & Public Peerings</p>
              </div>
            </div>
            <div className="transform -rotate-6 bg-teal-500 text-white p-6 rounded-sm shadow-md">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Up to 40Gbps</h3>
                <p>Ultimate Scalability</p>
              </div>
            </div>
            <div className="transform -rotate-6 bg-teal-500 text-white p-6 rounded-sm shadow-md">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Ultra Low Latency</h3>
                <p>Optimized for shortest & best throughput</p>
              </div>
            </div>
            <div className="transform -rotate-6 bg-teal-500 text-white p-6 rounded-sm shadow-md">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">No Filtering</h3>
                <p>Direct IP. No Proxy. No compression</p>
              </div>
            </div>
            <div className="transform -rotate-6 bg-teal-500 text-white p-6 rounded-sm shadow-md">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Burst & Flat Rate</h3>
                <p>Ultimate Flexibility</p>
              </div>
            </div>
            <div className="transform -rotate-6 bg-teal-500 text-white p-6 rounded-sm shadow-md">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Dual Stack BGP</h3>
                <p>End to end IPv4/IPv6</p>
              </div>
            </div>
            <div className="transform -rotate-6 bg-teal-500 text-white p-6 rounded-sm shadow-md">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">99.999%</h3>
                <p>Always-On Availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            HOW IT WORKS
          </h2>
          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10">
            SINET operate one of the premier IP transit services in Cambodia, offering high-speed, low-latency and few hops to 
            international upstream and content delivery network.
          </p>
          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10">
            Unlike other operators in Cambodia, SINET guarantee direct connection to Global Tier 1 operators, giving our customers the 
            lowest possible latency and the shortest as-path.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {howItWorks.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-teal-600 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended For Section */}
      <section className="py-16 bg-teal-500 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            RECOMMENDED FOR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-teal-600/50 p-8 rounded-lg text-center"
              >
                <div className="flex justify-center mb-6">{rec.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{rec.title}</h3>
                <p className="text-lg">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">PRICING</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
            SINET supports Flat or Burstable Bandwidth based on industry-standard 95 Percentile billing.
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
                  <option>IP Transit - 100Mbps</option>
                  <option>IP Transit - 500Mbps</option>
                  <option>IP Transit - 1Gbps</option>
                  <option>IP Transit - Custom</option>
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

export default IPTransit;
