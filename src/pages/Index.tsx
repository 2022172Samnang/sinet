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
      link: "/dia", // Make sure this matches a route in App.tsx
    },
    {
      title: "See all Business Packages & Prices",
      description:
        "Compare all our business packages and find the perfect solution for your company.",
      link: "/compare-all-packages", // Make sure this matches a route in App.tsx
      imagePath: "assets/internet_solutions/compare-all-packages.png",
    },
  ];

  const homePackages = [
    {
      title: "FIBER HOME",
      startingPrice: "22.00",
      bulletPoints: ["15 Mbps", "Perfect for small households"],
      link: "/fiber-home", // This link should now work
      imagePath: "assets/internet_solutions/fiber-home.png",
    },
    {
      title: "FIBER PRIME",
      startingPrice: "28.00",
      bulletPoints: ["25 Mbps", "For gaming and streaming"],
      imagePath: "assets/internet_solutions/fiber-prime.png",
      link: "/fiber-prime", // Add a link if this page exists
    },
    {
      title: "SINET - First Class",
      startingPrice: "30.99",
      bulletPoints: ["30 Mbps", "Premium support"],
      imagePath: "assets/internet_solutions/first-class.png",
      link: "/first-class", // Add a link if this page exists
    },
    {
      title: "Compare All Packages", // This should probably be "Compare Home Packages"
      description: "Find the perfect home internet package for your needs.",
      link: "/home-internet/compare-all", // Example: create a specific comparison page for home packages
      imagePath: "assets/internet_solutions/all-business-packages.png", // Consider a different image
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
      link: "/enterprise-solution/hardware-sales", // Add link if this page exists
    },
    {
      title: "Network Security Services",
      description:
        "Protect your business with our advanced security solutions.",
      imagePath: "assets/internet_solutions/network-sec.png",
      link: "/enterprise-solution/network-security", // Add link if this page exists
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
            <Link key={index} to={pkg.link || "#"} className="block h-full">
              {" "}
              {/* Added h-full */}
              <ServicePackage {...pkg} />
            </Link>
          ))}
        </div>
      </ServiceCategory>

      <ServiceCategory title="HOME INTERNET" type="home">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homePackages.map((pkg, index) => (
            // CORRECTED PART: Wrap ServicePackage with Link
            <Link key={index} to={pkg.link || "#"} className="block h-full">
              {" "}
              {/* Added h-full */}
              <ServicePackage {...pkg} />
            </Link>
          ))}
        </div>
      </ServiceCategory>

      <ServiceCategory title="ENTERPRISE SOLUTIONS" type="enterprise">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enterprisePackages.map((pkg, index) => (
            <Link key={index} to={pkg.link || "#"} className="block h-full">
              {" "}
              {/* Added h-full */}
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
