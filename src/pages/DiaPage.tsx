import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection"; // Assuming this is in src/components/
import { Button } from "@/components/ui/button"; // Assuming this path
import {
  CheckSquare,
  Building2,
  ServerCog,
  Factory,
  Truck,
  Globe,
  Landmark,
} from "lucide-react";
import BusinessPackages from "@/components/BusinessPackages";

interface Plan {
  name: string;
  speed: string;
}

interface Feature {
  text: string;
}

interface BestForItem {
  name: string[];
  icon: React.ElementType;
}

const NAVBAR_HEIGHT_OFFSET = "80px"; // Adjust this value based on your actual Navbar height
const currentPackageLink = "/dia"; // The link of the package this page is about

const DiaPage: React.FC = () => {
  const plans: Plan[] = [
    { name: "DIA EDGE", speed: "50Mbps" },
    { name: "DIA PLUS", speed: "100Mbps" },
    { name: "DIA PRO", speed: "300Mbps" },
    { name: "DIA ONE", speed: "500Mbps" },
  ];

  const diaPackageOptions = plans.map((plan) => `${plan.name} - ${plan.speed}`);
  diaPackageOptions.push("DIA - Custom Inquiry"); // Add a custom option

  const features: Feature[] = [
    { text: "Guarantees Uptime (99.99%)" },
    { text: "Dedicated Bandwidth" },
    { text: "More Secured" },
    { text: "Uncontested and Low Latency" },
    { text: "Prioritized Support 24/7" },
    { text: "Tailored For All Business Sizes" },
  ];

  const bestForItems: BestForItem[] = [
    { name: ["Enterprises &", "Corporations"], icon: Building2 },
    { name: ["Technology &", "Digital Services"], icon: ServerCog },
    { name: ["Industrial", "Businesses"], icon: Factory },
    { name: ["Logistic", "Services"], icon: Truck },
    { name: ["E-Commerce"], icon: Globe },
    { name: ["Financial", "Institutions"], icon: Landmark },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-teal-100 via-emerald-50 to-sky-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Left Side - Product Info */}
              <AnimatedSection
                yOffset={30}
                className="w-full lg:w-1/2 text-center lg:text-left"
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-orange-700/90 mb-1 drop-shadow-sm">
                  Dedicated Internet Access
                </h1>
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-700/90 mb-3 drop-shadow-sm">
                  (DIA)
                </h2>
                <p className="text-3xl sm:text-4xl font-bold text-teal-600 mb-8 drop-shadow-md">
                  With DDoS Protection
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {plans.map((plan, index) => (
                    <AnimatedSection
                      key={plan.name}
                      delay={0.1 + index * 0.1}
                      yOffset={20}
                      className="bg-black text-white p-3 rounded-lg shadow-md text-center"
                    >
                      <div className="font-semibold text-sm sm:text-base">
                        {plan.name}
                      </div>
                      <div className="text-lg sm:text-xl font-bold">
                        {plan.speed}
                      </div>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection delay={0.5} yOffset={20}>
                  <p className="text-3xl font-semibold text-gray-800 mb-6">
                    Starting from{" "}
                    <span className="text-teal-600 font-bold">$44</span>
                  </p>
                </AnimatedSection>

                <AnimatedSection
                  delay={0.6}
                  yOffset={20}
                  className="bg-teal-100/70 p-4 rounded-lg shadow text-gray-700 text-center"
                >
                  <p className="font-semibold mb-1">
                    Contact Us for More Info:
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+85581801999"
                      className="text-teal-700 font-medium hover:underline"
                    >
                      +855 81 801 999
                    </a>
                  </p>
                  <p>
                    Telegram Direct:{" "}
                    <a
                      href="https://t.me/SINET_KH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 font-medium hover:underline"
                    >
                      https://t.me/SINET_KH
                    </a>
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.7} yOffset={20} className="mt-10">
                  <p className="text-2xl md:text-3xl font-bold text-black text-center lg:text-left">
                    Buy 10 months, Get 2 months Free!
                  </p>
                </AnimatedSection>
              </AnimatedSection>

              {/* Right Side - Features */}
              <AnimatedSection
                yOffset={30}
                delay={0.2}
                className="w-full lg:w-1/2 lg:pl-8"
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                  FEATURES
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <AnimatedSection
                      key={index}
                      delay={0.3 + index * 0.1}
                      xOffset={20}
                      className="flex items-center text-gray-700 text-lg"
                    >
                      <CheckSquare className="h-7 w-7 text-teal-600 mr-3 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </AnimatedSection>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Best For Section */}
        <section className="py-12 md:py-16 bg-gray-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection yOffset={30} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 md:mb-12">
                BEST FOR
              </h2>
            </AnimatedSection>

            <AnimatedSection
              delay={0.1}
              yOffset={20}
              className="bg-teal-500 p-6 md:p-10 rounded-xl shadow-xl"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
                {bestForItems.map((item, index) => (
                  <AnimatedSection
                    key={index}
                    delay={0.2 + index * 0.08}
                    yOffset={20}
                    className="flex flex-col items-center text-white"
                  >
                    <item.icon
                      className="h-16 w-16 md:h-20 md:w-20 mb-3 text-gray-800 bg-white p-3 rounded-full shadow-inner"
                      strokeWidth={1.5}
                    />
                    {item.name.map((line) => (
                      <span
                        key={line}
                        className="block font-medium text-sm md:text-base"
                      >
                        {line}
                      </span>
                    ))}
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Sign Up Section */}
        {/* Using standard Tailwind colors, replace bg-gray-100 with bg-sinet-light/30 if defined */}
        <div id="signup" className="bg-gray-100 py-12 md:py-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection yOffset={30} className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">SIGN UP</h2>
            </AnimatedSection>

            <AnimatedSection
              delay={0.1}
              yOffset={20}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                <div className="mb-5">
                  <label
                    htmlFor="dia-package"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Select Package
                  </label>
                  <select
                    id="dia-package"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  >
                    {diaPackageOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
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
                    placeholder="Any specific requirements or questions..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  ></textarea>
                </div>

                {/* Replace bg-teal-500 with bg-sinet and hover:bg-teal-600 with hover:bg-sinet-dark if defined */}
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg font-semibold rounded-md">
                  Send
                </Button>
              </div>

              <div className="text-center mt-8 text-gray-600">
                <p className="mb-2">
                  Or Chat with our Sales Team by Whatsapp or Telegram via{" "}
                  <a
                    href="tel:+85581801999"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    +855 81 801 999
                  </a>
                </p>
                <p className="mb-2">
                  or call{" "}
                  <a
                    href="tel:+85581801999"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    +855 81 801 999
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:sales@sinet.com.kh"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    sales@sinet.com.kh
                  </a>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <BusinessPackages navbarOffset="80px" gridCols={4} excludeLink="/dia" />
      <Footer />
    </div>
  );
};

export default DiaPage;
