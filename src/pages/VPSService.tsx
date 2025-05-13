import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Wrench, // For Carrier-grade technology (gears/tools)
  Network, // For Dedicated Bandwidth
  ShieldCheck, // For Safe & Secure Data Center & Up to 99.99%
  UserCheck, // For Experienced Engineers
  Lock, // For Reliable & Secured
  Cpu, // For High Performance
  Laptop, // For Any OS
  KeyRound, // For Root Access
  Rabbit, // For Ultra Low Latency
  DatabaseBackup, // For Free Offsite Backup
  SlidersHorizontal, // For Any HW Configurations
  Lightbulb, // For IT Start Ups
  Building2, // For Corporate IT Department
} from "lucide-react";

const VPSService = () => {
  const howItWorksItems = [
    {
      title: "Carrier-grade technology",
      description:
        "Get the best possible speed & reliability with carrier-grade servers including CPU, RAM, SSD and OS.",
      icon: <Wrench className="h-12 w-12 text-teal-500" />,
    },
    {
      title: "Dedicated Bandwidth",
      description:
        "Enjoy the lowest possible latency and highest server throughput thanks to our unparalleled expertise in network optimization.",
      icon: <Network className="h-12 w-12 text-teal-500" />,
    },
    {
      title: "Safe & Secure Data Center",
      description:
        "Keep your data safe in both physical access and network access.",
      icon: <ShieldCheck className="h-12 w-12 text-teal-500" />,
    },
    {
      title: "Experienced Engineers",
      description:
        "Supported 24/7 by expertises in server, system and network security.",
      icon: <UserCheck className="h-12 w-12 text-teal-500" />,
    },
  ];

  const features = [
    {
      title: "Reliable & Secured",
      description:
        "Keep your data safe and secured in our international standard Data Center.",
      bgColor: "bg-teal-500",
      icon: <Lock className="h-8 w-8 text-white" />,
    },
    {
      title: "High Performance",
      description: "Carrier-grade processor, RAMs, HDD & Network Cards.",
      bgColor: "bg-white",
      icon: <Cpu className="h-8 w-8 text-teal-500" />,
      textColor: "text-gray-800",
    },
    {
      title: "Any OS",
      description: "Linux, Unix, FreeBSD, or Windows Server.",
      bgColor: "bg-teal-500",
      icon: <Laptop className="h-8 w-8 text-white" />,
    },
    {
      title: "Root Access",
      description: "Full flexibility and manageability.",
      bgColor: "bg-white",
      icon: <KeyRound className="h-8 w-8 text-teal-500" />,
      textColor: "text-gray-800",
    },
    {
      title: "Ultra Low Latency",
      description:
        "Optimized for shortest & best throughput for domestic & global access.",
      bgColor: "bg-white",
      icon: <Rabbit className="h-8 w-8 text-teal-500" />,
      textColor: "text-gray-800",
    },
    {
      title: "Free Offsite Backup",
      description: "All VPS Disk are fully backup to an off-site storage",
      bgColor: "bg-teal-500",
      icon: <DatabaseBackup className="h-8 w-8 text-white" />,
    },
    {
      title: "Any HW Configurations",
      description:
        "Ultimate Scalability and Flexibility by mix and match your hardware requirement.",
      bgColor: "bg-white",
      icon: <SlidersHorizontal className="h-8 w-8 text-teal-500" />,
      textColor: "text-gray-800",
    },
    {
      title: "Up to 99.99%",
      description: "Always-On Availability",
      bgColor: "bg-teal-500",
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
    },
  ];

  const recommendations = [
    {
      title: "IT Start Ups",
      description:
        "or StartUps which operate on a lean business model, with our VPS, there is no need to have huge investment in hardware and infrastructure.",
      icon: <Lightbulb className="h-16 w-16 text-white" />,
    },
    {
      title: "Corporate IT Department",
      description:
        "For corporates which require development servers or off-site computing hub on the fly.",
      icon: <Building2 className="h-16 w-16 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-teal-600 text-white py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          {/* Placeholder background image, replace with actual VPS hero background */}
          <img
            src="assets/enterprise_solutions/network.png" // This path is from the example, ideally use a VPS specific image
            alt="Virtual Private Server Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Virtual Private Server
          </h1>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        {" "}
        {/* Slightly off-white background */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            HOW IT WORKS
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-4">
            SINET offer virtual private servers in different operating system
            flavors for businesses needing rapid deployment and cost-effective
            computing.
          </p>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Concentrate on your computing works, rather than spending your
            budget and time on hardware investment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
              >
                <div className="flex-shrink-0 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-teal-600 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            FEATURES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bgColor} ${
                  feature.textColor || "text-white"
                } p-6 rounded-lg shadow-md flex flex-col items-center text-center`}
              >
                <div className="mb-4 flex-shrink-0">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
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
                className="bg-teal-600/70 p-8 rounded-lg shadow-lg text-center flex flex-col items-center" // Slightly transparent darker teal cards
              >
                <div className="mb-6 flex-shrink-0">{rec.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{rec.title}</h3>
                <p className="text-base">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">PRICING</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Price depends on setup, bandwidth and SLA.
          </p>
        </div>
      </section>

      {/* Sign Up Section */}
      <div id="signup" className="bg-gray-100 py-16">
        {" "}
        {/* Matched other light backgrounds */}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            SIGN UP
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-xl">
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
                  <option>VPS - Basic</option>
                  <option>VPS - Standard</option>
                  <option>VPS - Pro</option>
                  <option>VPS - Custom</option>
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
                    type="text"
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
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  rows={4}
                ></textarea>
              </div>

              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg font-semibold rounded-md">
                Send
              </Button>
            </div>

            <div className="text-center mt-8 text-gray-600">
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

export default VPSService;
