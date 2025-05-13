import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Network, Globe, Award, Shield, Map } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhySinet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-teal-500 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">WHY SINET</h1>

          {/* Top advantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <Network className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Dedicated Active Ethernet Last Mile
              </h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <Globe className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Redundant And Direct International Upstream
              </h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <Shield className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Resilient Backbone Structure
              </h3>
            </div>
          </div>

          {/* Bottom advantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-teal-600 p-6 rounded-lg">
              <p className="text-white">
                We build our company with strong focus on technical and
                engineering excellence. We have some of the most experienced
                people in ICT, and used advanced technologies and best practices
                in network, system and data center.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Map className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Nationwide Coverage
              </h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <Award className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Long Term Commitment To ICT
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed advantages */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-teal-500 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <p>
                  Each customer is given dedicated fiber access directly our
                  POPs. Independent studies have shown that Active Ethernet is
                  superior to GPON in almost every point including speed,
                  reliability, security and fault recovery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-teal-500 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <p>
                  SINET connects to Hong Kong, Singapore and Malaysia Internet
                  Hubs directly. This allows us to offer International-standard
                  service with uncompromised speed, latency and packet delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-teal-500 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <p>
                  We have protected DWDM backbone of up to 200Gbps with multiple
                  fiber cores and paths between Phnom Penh, Vietnam Borders and
                  Thailand Border since 2012. Our first move into DWDM gives us
                  technical maturity.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-teal-500 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <p>
                  We build our company with strong focus on technical and
                  engineering excellence. We have some of the most experienced
                  people in ICT, and used advanced technologies and best
                  practices in network, system and data center.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-teal-500 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <p>
                  By owning all telecom facilities instead of leasing, SINET can
                  offer faster and unparalleled turn-around time in network
                  provisioning and fault restoration whether in Phnom Penh or in
                  remote districts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-teal-500 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <p>
                  Through our investment and direct ownership of network
                  infrastructure, SINET has demonstrated and will continue to
                  demonstrate our long term and unprecedented commitment to ICT
                  business in Cambodia.
                </p>
              </CardContent>
            </Card>
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
            {/* The images would be displayed here - placeholders used for now */}
            {/* {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-gray-100 p-4 h-24 flex items-center justify-center rounded">
                <span className="text-gray-400">Partner Logo</span>
              </div>
            ))} */}
            <img
              className="w-full h-auto"
              src="assets/about_us/ntl_partners.png"
              alt=""
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
            {/* The images would be displayed here - placeholders used for now */}
            {/* {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-gray-100 p-4 h-24 flex items-center justify-center rounded">
                <span className="text-gray-400">Partner Logo</span>
              </div>
            ))} */}
            <img
              className="w-full h-auto"
              src="assets/about_us/inter_ntl_partners.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhySinet;
