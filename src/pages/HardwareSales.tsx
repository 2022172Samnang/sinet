import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const HardwareSales: React.FC = () => {
  const product = {
    name: "TP-LINK Archer C9",
    mainTitle: "", // Added title for overlay
    tagline: "Higher Speed Needs More Powerful WiFi",
    description: [
      "Ensure smooth and long-term usability with the right device fit for SINET high speed Internet Service.",
      "A right WiFi router eliminates the vast majority of slowness and instability complaints.",
      "TP-LINK Archer C9 is one of the most suitable and best valued WiFi routers for homes and small businesses at only $160.",
    ],
    price: 160,
    imageUrl: "assets/enterprise_solutions/hardware-sale.png", // Make sure this path is correct from /public
    logoUrl: "assets/sinet_logo_white.png", // Make sure this path is correct from /public
  };
  const productDisplayItems = [product, product, product];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />

      {productDisplayItems.map((item, index) => (
        <section
          key={index}
          className={`py-8 md:py-10 ${
            index > 0 ? "pt-0 md:pt-0" : ""
          } bg-gray-100`}
        >
          <div className="container mx-auto px-4">
            <div
              className={`flex flex-col md:gap-8 ${
                index === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center bg-white p-6 md:p-8 rounded-lg shadow-xl overflow-hidden`}
            >
              {/* Image container with fixed responsive height */}
              <div className="relative w-full md:w-2/5 mb-6 md:mb-0 h-[280px] sm:h-[300px] md:h-[320px]">
                {/* Background image */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Tint layer that also centers the "Hardware Sales" text */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 z-0">
                  {item.mainTitle && (
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight">
                      {(() => {
                        const parts = item.mainTitle.split(" ");
                        if (parts.length > 1) {
                          return (
                            <>
                              {parts[0]}
                              <br />
                              {parts.slice(1).join(" ")}
                            </>
                          );
                        }
                        return item.mainTitle;
                      })()}
                    </h2>
                  )}
                </div>
                {/* Logo top-left, on top of the tint and text layer */}
                <div className="absolute top-4 left-4 z-10">
                  <img
                    src={item.logoUrl}
                    alt="SINET Logo"
                    className="w-16 md:w-20 opacity-95"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full md:w-3/5 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                  {item.tagline}
                </h3>
                {item.description.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-600 mb-2 text-sm md:text-base"
                  >
                    {/* Re-added $160 formatting */}
                    {paragraph.includes("$160")
                      ? paragraph.replace("$160", "$160.")
                      : paragraph}
                  </p>
                ))}
                <div className="mt-5 md:mt-6">
                  <Button
                    onClick={() => {
                      const signup = document.getElementById("signup-form");
                      signup?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-md text-base md:text-lg"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">PRICING</h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            SINET supports Flat or Burstable Bandwidth based on
            industry-standard 95 Percentile billing.
            <br />
            Price depends on setup, bandwidth and SLA.
          </p>
        </div>
      </section>

      {/* Sign Up Section */}
      <div id="signup-form" className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            SIGN UP
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
              <div className="mb-5">
                <label
                  htmlFor="package"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Select Package
                </label>
                <select
                  id="package"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                >
                  <option>
                    {product.name} - ${product.price}
                  </option>
                  <option>Other Hardware Inquiry</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="comment"
                  className="block text-gray-700 mb-2 font-medium"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  placeholder="Any specific requests or questions about the hardware..."
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>

              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg font-semibold rounded-md">
                Send
              </Button>
            </div>

            <div className="text-center mt-8 text-gray-600 text-sm md:text-base">
              <p className="mb-2">
                Or chat with our Sales Team via WhatsApp/Telegram: +855 81 801
                999
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

export default HardwareSales;
