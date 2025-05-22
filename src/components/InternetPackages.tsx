// src/components/InternetPackages.tsx
import React from "react";

interface ContactInfo {
  phone: string;
  telegramDisplay: string;
  telegramLink: string;
}

// Common contact information
const commonContactInfo: ContactInfo = {
  phone: "+855 81 801 999",
  telegramDisplay: "https://t.me/SINET_KH",
  telegramLink: "https://t.me/SINET_KH",
};

interface PackageDetail {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  price?: string;
  descriptionLines?: string[];
  features?: string[];
  contactSectionId?: string; // To link sign up button, e.g., to a contact form section
}

// Define package details - ensure image paths are correct
const packages: PackageDetail[] = [
  {
    id: "business",
    title: "BUSINESS INTERNET",
    imageSrc: "assets/homepage/business_packages.jpg", // Added leading slash
    imageAlt: "Business Internet Offer",
    price: "Price starting from $40",
    descriptionLines: [
      "Reliable, High-speed internet designed",
      "for Business",
    ],
    contactSectionId: "#contact",
  },
  {
    id: "home",
    title: "HOME INTERNET",
    imageSrc: "assets/homepage/home_packages.jpg", // Added leading slash
    imageAlt: "Home Internet Offer",
    price: "Price starting from $22",
    descriptionLines: [
      "First, Reliable internet built for",
      "everyday home life",
    ],
    contactSectionId: "#contact",
  },
  {
    id: "enterprise",
    title: "ENTERPRISE SOLUTIONS",
    imageSrc: "assets/homepage/enterprise_packages.jpg", // Added leading slash
    imageAlt: "Enterprise Internet Solutions",
    features: ["> DPLC", "> IPLC", "> IP Transit", "> Virtual Private Server"],
    contactSectionId: "#contact",
  },
];

interface InternetPackagesProps {
  navbarOffset?: string; // For scroll-to-section adjustment
}

const InternetPackages: React.FC<InternetPackagesProps> = ({
  navbarOffset,
}) => {
  const sectionStyle = navbarOffset ? { scrollMarginTop: navbarOffset } : {};

  return (
    <div>
      {/* Section 1: Combined Internet Packages Overview */}
      <section
        id="internet-packages-overview"
        className="py-12 md:py-16 bg-cyan-50"
        style={sectionStyle}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-10">
            {packages.map((pkg) => (
              <div key={pkg.id} className="text-center flex flex-col">
                <h2 className="text-xl lg:text-2xl font-bold text-cyan-700 mb-4 md:mb-6">
                  {pkg.title}
                </h2>
                <div className="flex flex-col items-center flex-grow">
                  <img
                    src={pkg.imageSrc}
                    alt={pkg.imageAlt}
                    className="w-full h-40 sm:h-44 md:h-72 object-cover rounded-lg shadow-md mb-5"
                  />
                  {pkg.price && (
                    <h3 className="text-2xl text-teal-500 font-semibold text-gray-800 mb-2">
                      {pkg.price}
                    </h3>
                  )}
                  {pkg.descriptionLines &&
                    pkg.descriptionLines.map((line, index) => (
                      <p
                        key={index}
                        className="text-lg text-gray-700 mb-1 last:mb-4"
                      >
                        {line}
                      </p>
                    ))}
                  {pkg.features && (
                    <ul className="list-none mb-4 space-y-1 text-lg text-left inline-block mx-auto">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="text-gray-800">
                          <span className="text-cyan-600 mr-2 font-semibold"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto pt-2">
                    <a
                      href={pkg.contactSectionId || "#contact"}
                      className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 px-8 rounded-lg shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
                    >
                      SIGN UP
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center font-bold mt-10 md:mt-16 pt-6 md:pt-8">
            <p className="text-base md:text-lg text-gray-800">
              Contact Us for More Info: Phone:{" "}
              <strong className="font-semibold">
                {commonContactInfo.phone}
              </strong>
              , Telegram direct:{" "}
              <a
                href={commonContactInfo.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-cyan-600 hover:text-cyan-700 underline"
              >
                {commonContactInfo.telegramDisplay}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Section: OUR NETWORK COVERAGE */}
      <section
        id="network-coverage"
        className="py-12 md:py-16 bg-cyan-50"
        style={sectionStyle}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-cyan-700">
            OUR NETWORK COVERAGE
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <p className="text-md md:text-lg text-gray-700 mb-4 leading-relaxed">
              SINET operates a highly resilient and redundant IP backbone
              completed with industry standard best practices in routing and
              network security, with multiple gateways to International hubs in
              Singapore, Hong Kong and Kular Lumpur.
            </p>
            <p className="text-md md:text-lg text-gray-700 leading-relaxed">
              We have peering connections with numerous domestic networks,
              international networks and Content Delivery Networks both
              privately and via public exchanges, including but not limited to
              HKIX, Equinix, MYIX, Amsterdam IX, BBIX, Google, Facebook, Apple,
              Akamai, Cloudflare, Zenlayer & Limelight.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-lg">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="assets/about_us/sinet_network_vdo.mp4"
                autoPlay
                muted
                loop
                playsInline // Important for iOS autoplay
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternetPackages;
