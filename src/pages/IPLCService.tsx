import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button"; // Assuming not used directly here
import {
  Lock, // For "Secure"
  Globe, // For "Global Coverage"
  Zap, // For "Ultra Low Latency"
  Filter, // For "No Filtering" (or other icon like SearchX, SlidersHorizontal)
  BarChartBig, // For "Up to 10Gbps"
  ShieldCheck, // For "Up to 99.99%"
  Waypoints, // For "Hub-Spoke Or Star Topology"
  Layers3, // For "Single or Multiple Vlans"
  TowerControl, // For "International Telecom Operator" icon
  Building2, // For "Multi-National Corporation" icon (building part)
  Users, // For "Multi-National Corporation" icon (people part)
} from "lucide-react";
import SignUpForm from "@/components/SignUpForm";

const IPLCService = () => {
  // --- UPDATED FEATURES CONTENT ONLY ---
  const features = [
    {
      icon: <Lock className="h-8 w-8" />, // Your original icon class
      title: "Secure",
      description: "Secured SDH or DWDM Backbone Architecture",
    },
    {
      icon: <Waypoints className="h-8 w-8" />, // Your original icon class
      title: "Hub-Spoke Or Star Topology",
      description: "Point-to-Point or Point-to-Multipoints",
    },
    {
      icon: <Globe className="h-8 w-8" />, // Your original icon class
      title: "Global Coverage",
      description: "Anywhere in the world and anywhere in Cambodia",
    },
    {
      icon: <Layers3 className="h-8 w-8" />, // Your original icon class
      title: "Single or Mutliple Vlans", // Typo "Mutliple" from image
      description: "Support physical or virtual network",
    },
    {
      icon: <Zap className="h-8 w-8" />, // Your original icon class
      title: "Ultra Low Latency",
      description: "Optimized for shortest & best throughput.",
    },
    {
      icon: <Filter className="h-8 w-8" />, // Your original icon class (or SearchX etc.)
      title: "No Filtering",
      description: "Direct Layer 1 or Layer 2. No filtering, no snooping.",
    },
    {
      icon: <BarChartBig className="h-8 w-8" />, // Your original icon class
      title: "Up to 10Gbps",
      description: "Ultimate Scalability",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />, // Your original icon class
      title: "Up to 99.99%",
      description: "Always-On Availability",
    },
  ];

  // --- UPDATED RECOMMENDATIONS CONTENT ONLY ---
  const recommendations = [
    {
      icon: <TowerControl className="h-10 w-10" />, // Your original icon class
      title: "International Telecom Operator",
      description:
        "Best fit for International Telecom Operators which required dedicated leased line between their international head office and branch office.",
    },
    {
      // For the dual icon, you'll need to handle this in your rendering logic if it's not already set up
      // For simplicity here, I'll pick one. If your original code rendered multiple, keep that.
      // Or, you can pass an array of icons if your rendering logic supports it.
      // To match the image with two icons, your rendering logic would need to handle `icons` array.
      // If your component expects a single `icon` prop, choose one or modify the component.
      // For now, I'll assume your original rendering logic might need adjustment for dual icons.
      // Let's provide both if you modify your component, or choose one.
      // Option A: Single Icon (if component expects one)
      // icon: <Building2 className="h-10 w-10" />,
      // Option B: Array of Icons (if component can render this)
      icons: [
        // You would need to adjust your rendering code to map this array if you use this
        <Building2 key="building" className="h-10 w-10" />,
        <Users key="users" className="h-10 w-10" />,
      ],
      // If your component *only* takes a single `icon` prop, you'll have to choose one or modify the component
      // For example, if it only takes one:
      icon: <Building2 className="h-10 w-10" />, // Defaulting to one if your component is simple
      title: "Multi-National Corporation",
      description:
        "For International businesses with multiple branches, franchises, or sales offices who wish to set up branch office in Cambodia.",
    },
  ];

  const packageOptions = [
    { value: "iplc-standard", label: "IPLC - Standard" }, // Adjusted for IPLC
    { value: "iplc-premium", label: "IPLC - Premium" },
    { value: "iplc-enterprise", label: "IPLC - Enterprise" },
    { value: "iplc-custom", label: "IPLC - Custom Inquiry" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-100 to-white my-4">
        <div className="relative">
          <img
            src="assets/enterprise_solutions/network.png" // Ensure path is correct
            alt="Network Visual"
            className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
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
        <div className="container mx-auto text-center px-4">
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
          <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <img
              src="assets/enterprise_solutions/iplc_network.png" // Ensure path is correct
              alt="IPLC Network Diagram"
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </section>

      {/* Features Section (Using your original styling) */}
      <section id="features" className="py-16 bg-teal-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
            FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                // KEEPING YOUR ORIGINAL STYLING FOR THE FEATURE CARD
                className="bg-teal-600 text-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {feature.icon}{" "}
                  {/* Icon will use its predefined className="h-8 w-8" */}
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

      {/* Recommended For Section (Using your original styling) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-800 mb-10">
            RECOMMENDED FOR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                // KEEPING YOUR ORIGINAL STYLING FOR THE RECOMMENDATION CARD
                className="bg-teal-600 text-white p-6 rounded-lg shadow-md text-center"
              >
                {/* 
                  This part depends on how your original code rendered the icon(s).
                  If 'rec.icons' (array) was used, your original map function would handle it.
                  If only 'rec.icon' (single) was used, the dual icon from image needs custom handling or component change.
                  Here, I'm assuming it expects a single 'rec.icon' for simplicity based on common patterns.
                */}
                {rec.icon}{" "}
                {/* Icon will use its predefined className="h-10 w-10" */}
                {/* If you had logic to render rec.icons (array), it would go here instead of rec.icon */}
                {/* Example for dual icons if your original map had such logic: */}
                {/* {rec.icons && <div className="flex justify-center space-x-2">{rec.icons.map(iconJsx => iconJsx)}</div>} */}
                <h3 className="text-xl font-semibold mt-4 mb-2">{rec.title}</h3>
                <p>{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-teal-50">
        <div className="container mx-auto text-center px-4">
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
      <div id="signup">
        <SignUpForm
          title="Sign Up" // More specific title
          packageOptions={packageOptions}
        />
      </div>

      <Footer />
    </div>
  );
};

export default IPLCService;
