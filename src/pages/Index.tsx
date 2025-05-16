// src/pages/Index.tsx
import React from "react";
// import { Link } from "react-router-dom"; // Link is not directly used here now
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import CategorySelector from "@/components/CategorySelector"; // Commented out as per your code
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

// Import the new components
import BusinessPackages from "@/components/BusinessPackages";
import HomePackages from "@/components/HomePackages";
import EnterprisePackages from "@/components/EnterprisePackages";

// Assuming Navbar height is roughly 64px (h-16 in Navbar.tsx)
// You can make this a constant or pass it as a prop if it changes.
const NAVBAR_HEIGHT_OFFSET = "80px"; // Adjust this value based on your actual Navbar height

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      {/* <CategorySelector /> */}
      <BusinessPackages navbarOffset={NAVBAR_HEIGHT_OFFSET} />
      <HomePackages navbarOffset={NAVBAR_HEIGHT_OFFSET} />
      <EnterprisePackages /> {/* This section didn't have the offset logic */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
