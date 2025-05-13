
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySelector from "@/components/CategorySelector";
import ServiceCategory from "@/components/ServiceCategory";
import ServicePackage from "@/components/ServicePackage";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

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
    },
    {
      title: "See all Business Packages & Prices",
      description:
        "Compare all our business packages and find the perfect solution for your company.",
      link: "/business-internet",
      imagePath: "assets/internet_solutions/compare-all-packages.png",
    },
  ];

  const homePackages = [
    {
      title: "FIBER HOME",
      startingPrice: "22.00",
      bulletPoints: ["15 Mbps", "Perfect for small households"],
      imagePath: "assets/internet_solutions/fiber-home.png",
    },
    {
      title: "FIBER PRIME",
      startingPrice: "28.00",
      bulletPoints: ["25 Mbps", "For gaming and streaming"],
      imagePath: "assets/internet_solutions/fiber-prime.png",
    },
    {
      title: "SINET - First Class",
      startingPrice: "30.99",
      bulletPoints: ["30 Mbps", "Premium support"],
      imagePath: "assets/internet_solutions/first-class.png",
    },
    {
      title: "Compare All Packages",
      description: "Find the perfect home internet package for your needs.",
      link: "/home-internet",
      imagePath: "assets/internet_solutions/all-business-packages.png",
    },
  ];

  const enterprisePackages = [
    {
      title: "IP Transit",
      description:
        "High-speed, low-latency global connectivity for ISPs and enterprises.",
      imagePath: "assets/internet_solutions/iplc.png",
      link: "/enterprise-solution/ip-transit",
    },
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
    },
    {
      title: "Network Security Services",
      description:
        "Protect your business with our advanced security solutions.",
      imagePath: "assets/internet_solutions/network-sec.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      {/* <CategorySelector /> */}

      <ServiceCategory title="BUSINESS INTERNET" type="business">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessPackages.map((pkg, index) => (
            <Link key={index} to={pkg.link || "#"} className="block">
              <ServicePackage {...pkg} />
            </Link>
          ))}
        </div>
      </ServiceCategory>

      <ServiceCategory title="HOME INTERNET" type="home">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homePackages.map((pkg, index) => (
            <ServicePackage key={index} {...pkg} />
          ))}
        </div>
      </ServiceCategory>

      <ServiceCategory title="ENTERPRISE SOLUTIONS" type="enterprise">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enterprisePackages.map((pkg, index) => (
            <Link key={index} to={pkg.link || "#"} className="block">
              <ServicePackage key={index} {...pkg} />
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
