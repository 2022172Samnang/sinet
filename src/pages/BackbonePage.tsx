import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Network, Globe, Server, Layers } from "lucide-react";

const BackbonePage = () => {
  const heroBgImagePath = "assets/about_us/head_bg.png"; // Define path for hero background image
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Backbone Hero Section */}
      <section className="py-16 text-white relative overflow-hidden">
        {/* Background Image using <img> tag */}
        <img
          src={heroBgImagePath} // Use the defined path
          alt="SINET Network Backbone Infrastructure" // Descriptive alt text
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        />

        {/* Optional color overlay if you still want your teal tint underneath */}
        <div className="absolute inset-0 bg-teal-500 mix-blend-multiply z-10"></div>

        {/* your actual content on top */}
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center relative z-10">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              OUR BACKBONE
              <br />
              NETWORK
            </h1>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-lg leading-relaxed">
              SINET owns and operates one of the most advanced and mature
              domestic and international network backbones in Cambodia. We
              design and build our network & infrastructure with a long-term
              view. Telecom Operators, Internet Service Providers, Banks,
              Microfinance Institutions, national and international corporates
              look to SINET for high-performance and reliable connectivity
              domestically as well as internationally.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance - Backbone Statistics Section */}
      <section className="py-16 bg-teal-500 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">AT A GLANCE</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">200G</span>
              <span className="text-lg">BTI DWDM Core</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">51</span>
              <span className="text-lg">Backbone POPs</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">6</span>
              <span className="text-lg">
                International
                <br />
                Partners
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">6,000km</span>
              <span className="text-lg">Underground Fiber</span>
            </div>
          </div>
        </div>
      </section>

      {/* Backbone Network Map */}
      <section className="bg-gray-200">
        <div className="relative overflow-hidden min-h-[500px] md:min-h-[650px]">
          <video
            className="absolute inset-0 w-full h-full object-contain"
            src="assets/about_us/sinet_network_vdo.mp4"
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Access Network Description */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            OUR ACCESS NETWORK
          </h2>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700">
              With SINET, you need not worry on where you or your business,
              factory or branch office is located in Cambodia. Our fiber optic
              service is available virtually everywhere, whether in cities or
              remote districts.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance - Access Network Statistics */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            AT A GLANCE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">220</span>
              <span className="text-lg text-gray-700">Domestic POPs</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">
                20,000km
              </span>
              <span className="text-lg text-gray-700">Last Mile Fiber</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">
                1Gbps
              </span>
              <span className="text-lg text-gray-700">Port Anywhere</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">
                10Gbps
              </span>
              <span className="text-lg text-gray-700">Uplink Per POP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="bg-gray-300">
        <div className="container mx-auto px-4 md:px-8">
          {/* <div className="bg-gray-200 p-4 inline-block mb-8 rounded">
            <p className="text-sm text-gray-700">
              Click on the map to <br />
              see each province's <br />
              fiber optic coverage
            </p>
          </div> */}

          <div className="w-full flex justify-center">
            <img
              src="assets/about_us/coverage_map.png"
              alt="SINET Coverage Map"
              className="max-w-2xl w-full h-auto border border-gray-300"
            />
          </div>
        </div>
      </section>

      {/* NEW SECTION: IP Network */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            OUR NETWORK COVERAGE
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-6">
              SINET operates a highly resilient and redundant IP backbone
              completed with industry standard best practices in routing and
              network security, with multiple gateways to International hubs in
              Singapore, Hong Kong and Kuala Lumpur.
            </p>
            <p className="text-lg text-gray-700">
              We have peering connections with numerous domestic networks,
              international networks and Content Delivery Networks both
              privately and via public exchanges, including but not limited to
              HKIX, Equinix, MYIX, Amsterdam IX, BBIX, Google, Facebook, Apple,
              Akamai, Cloudflare, Zenlayer & Limelight.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance - IP Network Statistics */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            AT A GLANCE
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">4</span>
              <span className="text-lg text-gray-700">International POPs</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">10</span>
              <span className="text-lg text-gray-700">Internet Exchanges</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">6</span>
              <span className="text-lg text-gray-700">Tier 1 Transits</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">210</span>
              <span className="text-lg text-gray-700">
                BGP Peering
                <br />
                Partners
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">40G</span>
              <span className="text-lg text-gray-700">Juniper IP Core</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">10G</span>
              <span className="text-lg text-gray-700">
                SDN-Based
                <br />
                MetroEthernet
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">3</span>
              <span className="text-lg text-gray-700">
                Autonomous
                <br />
                Systems
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2 text-gray-800">
                IPv4/v6
              </span>
              <span className="text-lg text-gray-700">Dual Stacks</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BackbonePage;
