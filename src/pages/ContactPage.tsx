// src/pages/ContactPage.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm"; // Your existing ContactForm component
import { MapPin } from "lucide-react"; // For an optional icon next to the map title

// import ScrollToTop from "@/components/utils/ScrollToTop"; // Optional

const ContactPage = () => {
  // No need to define packageOptions here as ContactForm.tsx handles it internally.

  // Optional: Google Maps Embed Code
  const googleMapsEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.773460014897!2d104.9162910749059!3d11.56389088862051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951443614997f%3A0x376f7dd700481570!2sSINET%20Head%20Office!5e0!3m2!1sen!2skh!4v1678888888888!5m2!1sen!2skh"; // Replace with your actual SINET Head Office map embed src

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {" "}
      {/* Overall page background */}
      {/* <ScrollToTop /> */}
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
