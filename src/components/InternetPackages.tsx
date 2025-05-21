// src/components/InternetPackages.tsx
import React from "react";

interface ContactInfo {
  phone: string;
  telegramDisplay: string;
  telegramLink: string;
}

// Common contact information (can still be shared)
const commonContactInfo: ContactInfo = {
  phone: "+855 81 801 999",
  telegramDisplay: "https://t.me/SINET_KH",
  telegramLink: "https://t.me/SINET_KH",
};

interface InternetPackagesProps {
  navbarOffset?: string; // For scroll-to-section adjustment
}

const InternetPackages: React.FC<InternetPackagesProps> = ({
  navbarOffset,
}) => {
  const sectionStyle = navbarOffset ? { scrollMarginTop: navbarOffset } : {};

  return (
    <div>
      {/* Section 1: BUSINESS INTERNET */}
      <section
        id="business-internet"
        className="py-12 md:py-16 bg-white"
        style={sectionStyle}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-cyan-600">
            BUSINESS INTERNET
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image Column */}
            <div className="md:w-1/2 flex justify-center p-2 md:p-4">
              <img
                src="assets/homepage/business_packages.jpg"
                alt="Business man with network graphics"
                className="max-w-md w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
            {/* Text Content Column */}
            <div className="md:w-1/2 flex flex-col justify-center p-2 md:p-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                Price Starting from $40
              </h2>
              <h3 className="text-md md:text-lg font-bold text-gray-700 mb-1 leading-relaxed">
                Reliable, high-speed internet
              </h3>
              <h3 className="text-md md:text-lg font-bold text-gray-700 mb-1 leading-relaxed">
                designed for Business
              </h3>
              <div className="mt-4 md:mt-6 text-sm md:text-base text-cyan-600">
                <p className="font-semibold">Contact Us for More Info:</p>
                <p>Phone: {commonContactInfo.phone},</p>
                <p>
                  Telegram direct:{" "}
                  <a
                    href={commonContactInfo.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80"
                  >
                    {commonContactInfo.telegramDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: HOME INTERNET */}
      <section
        id="home-internet"
        className="py-12 md:py-16 bg-cyan-50"
        style={sectionStyle} // Assuming sectionStyle is defined as in your previous full component
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-cyan-700">
            HOME INTERNET
          </h2>
          {/* Changed: Removed md:flex-row-reverse and swapped column order */}
          <div className="flex flex-col justify-center md:flex-row items-center gap-8 md:gap-12">
            {/* Text Content Column (Now appears first in DOM and visually left on md) */}
            <div className="flex flex-col justify-center p-2 md:px-16 md:p-4 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                Price Starting from $22
              </h2>
              <h3 className="text-md md:text-lg font-bold text-gray-700 mb-1 leading-relaxed">
                First, Reliable internet built for
              </h3>
              <h3 className="text-md md:text-lg font-bold text-gray-700 mb-1 leading-relaxed">
                everyday home life
              </h3>
              <div className="mt-4 md:mt-6 text-sm md:text-base text-cyan-700">
                <p className="font-semibold">Contact Us for More Info:</p>
                {/* Assuming commonContactInfo is available in this scope */}
                <p>Phone: {commonContactInfo.phone},</p>
                <p>
                  Telegram direct:{" "}
                  <a
                    href={commonContactInfo.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80"
                  >
                    {commonContactInfo.telegramDisplay}
                  </a>
                </p>
              </div>
            </div>
            {/* Image Column (Now appears second in DOM and visually right on md) */}
            <div className="flex justify-center p-2 md:p-4">
              <img
                src="assets/homepage/home_packages.jpg"
                alt="Couple using laptop on a sofa"
                className="max-w-md w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: ENTERPRISE SOLUTIONS */}
      <section
        id="enterprise-solutions"
        className="py-12 md:py-16 bg-white"
        style={sectionStyle}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-cyan-600">
            ENTERPRISE SOLUTIONS
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image Column */}
            <div className="md:w-1/2 flex justify-center p-2 md:p-4">
              <img
                src="assets/homepage/enterprise_packages.jpg"
                alt="Cityscape with network solution icons"
                className="max-w-md w-full h-auto object-contain rounded-lg shadow-md"
              />
            </div>
            {/* Text Content Column */}
            <div className="md:w-1/2 flex flex-col justify-center p-2 md:p-4 text-center md:text-left">
              <ul className="list-none my-4 md:my-6 space-y-2 inline-block text-left mx-auto md:mx-0">
                {["DPLC", "IPLC", "IP Transit", "Virtual Private Server"].map(
                  (feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-md md:text-lg text-gray-800"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-semibold">{feature}</span>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-4 md:mt-6 text-sm md:text-base text-cyan-600">
                <p className="font-semibold">Contact Us for More Info:</p>
                <p>Phone: {commonContactInfo.phone},</p>
                <p>
                  Telegram direct:{" "}
                  <a
                    href={commonContactInfo.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80"
                  >
                    {commonContactInfo.telegramDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternetPackages;
