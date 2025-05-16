import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Network, Globe, Award, Shield, Map, Users, Cpu } from "lucide-react";

interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
  id: string;
}

const WhySinet = () => {
  const [hoveredAdvantageIndex, setHoveredAdvantageIndex] = useState<
    number | null
  >(null);

  const advantages: Advantage[] = [
    {
      id: "active-ethernet",
      icon: Network,
      title: "Dedicated Active Ethernet Last Mile",
      description:
        "Each customer is given dedicated fiber access directly to our POPs. Independent studies have shown that Active Ethernet is superior to GPON in almost every point including speed, reliability, security, and fault recovery.",
    },
    {
      id: "international-upstream",
      icon: Globe,
      title: "Redundant And Direct International Upstream",
      description:
        "SINET connects to Hong Kong, Singapore and Malaysia Internet Hubs directly. This allows us to offer International-standard service with uncompromised speed, latency and packet delivery.",
    },
    {
      id: "resilient-backbone",
      icon: Shield,
      title: "Resilient Backbone Structure",
      description:
        "We have protected DWDM backbone of up to 200Gbps with multiple fiber cores and paths between Phnom Penh, Vietnam Borders and Thailand Border since 2012. Our first move into DWDM gives us technical maturity.",
    },
    {
      id: "engineering-excellence",
      icon: Cpu,
      title: "Technical & Engineering Excellence",
      description:
        "We build our company with strong focus on technical and engineering excellence. We have some of the most experienced people in ICT, and used advanced technologies and best practices in network, system and data center.",
    },
    {
      id: "nationwide-coverage",
      icon: Map,
      title: "Nationwide Coverage",
      description:
        "By owning all telecom facilities instead of leasing, SINET can offer faster and unparalleled turn-around time in network provisioning and fault restoration whether in Phnom Penh or in remote districts.",
    },
    {
      id: "long-term-commitment",
      icon: Award,
      title: "Long Term Commitment To ICT",
      description:
        "Through our investment and direct ownership of network infrastructure, SINET has demonstrated and will continue to demonstrate our long term and unprecedented commitment to ICT business in Cambodia.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section - UPDATED with interactive advantages */}
      <section className="py-16 bg-sky-50 text-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold text-center mb-16 text-teal-600">
            WHY SINET
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.id}
                className="flex flex-col items-center text-center p-6 relative cursor-default min-h-[220px] sm:min-h-[240px] md:min-h-[260px] bg-white rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl"
                onMouseEnter={() => setHoveredAdvantageIndex(index)}
                onMouseLeave={() => setHoveredAdvantageIndex(null)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="bg-black text-white p-4 rounded-full mb-4 shadow-md inline-block">
                    <advantage.icon className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                    {advantage.title}
                  </h3>
                </div>

                {hoveredAdvantageIndex === index && (
                  <div
                    className="absolute inset-0 bg-teal-500 text-white p-5 rounded-xl shadow-2xl flex flex-col z-10 items-center justify-center transition-opacity duration-300 ease-in-out"
                    style={{ opacity: 1 }}
                  >
                    <div className="overflow-y-auto custom-scrollbar-overlay w-full max-h-full flex items-center justify-center">
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center px-2">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            NATIONAL PARTNERS
          </h2>
          <div className="flex justify-center">
            <img
              className="w-full h-auto" // Removed max-w-4xl
              src="assets/about_us/ntl_partners.png"
              alt="National Partners"
            />
          </div>
        </div>
      </section>

      {/* International Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            INTERNATIONAL PARTNERS
          </h2>
          <div className="flex justify-center">
            <img
              className="w-full h-auto" // Removed max-w-4xl
              src="assets/about_us/inter_ntl_partners.png"
              alt="International Partners"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhySinet;

// Optional: Add to your global CSS file (e.g., src/app/globals.css) for custom scrollbars in the overlay
/*
.custom-scrollbar-overlay::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar-overlay::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.custom-scrollbar-overlay::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}
.custom-scrollbar-overlay::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.7);
}
.custom-scrollbar-overlay {
  scrollbar-width: thin; 
  scrollbar-color: rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.1); 
}
*/
