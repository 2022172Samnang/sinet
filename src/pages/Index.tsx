// src/pages/Index.tsx
import React from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import CategorySelector from "@/components/CategorySelector"; // Commented out as per your code
import ServiceCategory from "@/components/ServiceCategory";
import ServicePackage from "@/components/ServicePackage";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

// Assuming Navbar height is roughly 64px (h-16 in Navbar.tsx)
// You can make this a constant or pass it as a prop if it changes.
const NAVBAR_HEIGHT_OFFSET = "80px"; // Adjust this value based on your actual Navbar height

const Index = () => {
  const businessPackages = [
    {
      title: "FIBER EDGE",
      startingPrice: "40.00",
      bulletPoints: [
        "Starting from 50Mbps",
        "Buy 10 Months, Get 2 Months Free",
      ],
      imagePath: "assets/internet_solutions/fiber-edge.jpg",
      special: "Special Offer",
      link: "/fiber-edge",
    },
    {
      title: "FIBER PLUS",
      startingPrice: "120.00",
      bulletPoints: ["Starting from 30Mbps", "For medium businesses"],
      imagePath: "assets/internet_solutions/fiber-plus.png",
      link: "/fiber-plus",
    },
    {
      title: "DIA with DDoS Protection",
      startingPrice: "150.00",
      imagePath: "assets/internet_solutions/dia-ddos.png",
      bulletPoints: ["Starting from 50Mbps", "Advanced security protection"],
      link: "/dia",
    },
    {
      title: "See all Business Packages & Prices",
      description:
        "Compare all our business packages and find the perfect solution for your company.",
      link: "/compare-all-packages",
      imagePath: "assets/internet_solutions/compare-all-packages.png",
    },
  ];

  const homePackages = [
    {
      title: "FIBER HOME",
      startingPrice: "22.00",
      bulletPoints: ["15 Mbps", "Perfect for small households"],
      link: "/fiber-home",
      imagePath: "assets/internet_solutions/fiber-home.png",
    },
    {
      title: "FIBER PRIME",
      startingPrice: "28.00",
      bulletPoints: ["25 Mbps", "For gaming and streaming"],
      imagePath: "assets/internet_solutions/fiber-prime.png",
      link: "/fiber-prime",
    },
    {
      title: "SINET - First Class",
      startingPrice: "30.99",
      bulletPoints: ["30 Mbps", "Premium support"],
      imagePath: "assets/internet_solutions/first-class.png",
      link: "/first-class",
    },
    {
      title: "Compare All Packages",
      description: "Find the perfect home internet package for your needs.",
      link: "/home-internet/compare-all",
      imagePath: "assets/internet_solutions/all-business-packages.png",
    },
  ];

  const enterprisePackages = [
    {
      title: "IPLC",
      description:
        "International Private Leased Circuit for your global business needs.",
      imagePath: "assets/internet_solutions/iplc.png",
      link: "/enterprise-solution/iplc",
    },
    {
      title: "Hardware Sales",
      description: "High-quality networking equipment for your business.",
      imagePath: "assets/internet_solutions/hardware-sale.png",
      link: "/enterprise-solution/hardware-sales",
    },
    {
      title: "Network Security Services",
      description:
        "Protect your business with our advanced security solutions.",
      imagePath: "assets/internet_solutions/network-sec.png",
      link: "/enterprise-solution/network-security",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      {/* <CategorySelector /> */}

      {/* --- ADDED id and style for paddingTop --- */}
      <div
        id="business-internet"
        style={{
          paddingTop: NAVBAR_HEIGHT_OFFSET,
          marginTop: `-${NAVBAR_HEIGHT_OFFSET}`,
        }}
      >
        <ServiceCategory title="BUSINESS INTERNET" type="business">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessPackages.map((pkg, index) => (
              <Link key={index} to={pkg.link || "#"} className="block h-full">
                <ServicePackage {...pkg} />
              </Link>
            ))}
          </div>
        </ServiceCategory>
      </div>

      {/* --- ADDED id and style for paddingTop --- */}
      <div
        id="home-internet"
        style={{
          paddingTop: NAVBAR_HEIGHT_OFFSET,
          marginTop: `-${NAVBAR_HEIGHT_OFFSET}`,
        }}
      >
        <ServiceCategory title="HOME INTERNET" type="home">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homePackages.map((pkg, index) => (
              <Link key={index} to={pkg.link || "#"} className="block h-full">
                <ServicePackage {...pkg} />
              </Link>
            ))}
          </div>
        </ServiceCategory>
      </div>

      {/* Enterprise Solutions does not need an ID for scrolling from navbar based on current reqs */}
      <ServiceCategory title="ENTERPRISE SOLUTIONS" type="enterprise">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enterprisePackages.map((pkg, index) => (
            <Link key={index} to={pkg.link || "#"} className="block h-full">
              <ServicePackage {...pkg} />
            </Link>
          ))}
        </div>
      </ServiceCategory>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
