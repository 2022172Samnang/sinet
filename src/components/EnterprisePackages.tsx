// src/components/EnterprisePackages.tsx
import React from "react";
import { Link } from "react-router-dom";
import ServiceCategory from "@/components/ServiceCategory";
import ServicePackage from "@/components/ServicePackage";

const EnterprisePackages: React.FC = () => {
  const enterprisePackagesData = [
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
    // Enterprise Solutions does not need an ID or padding/margin for scrolling from navbar
    // based on the original code's requirements.
    <ServiceCategory title="ENTERPRISE SOLUTIONS" type="enterprise">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {enterprisePackagesData.map((pkg, index) => (
          <Link key={index} to={pkg.link || "#"} className="block h-full">
            <ServicePackage {...pkg} />
          </Link>
        ))}
      </div>
    </ServiceCategory>
  );
};

export default EnterprisePackages;
