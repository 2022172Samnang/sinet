import React from "react";
import { Link } from "react-router-dom";
import ServiceCategory from "@/components/ServiceCategory";
import ServicePackage from "@/components/ServicePackage";

interface BusinessPackagesProps {
  navbarOffset: string;
  gridCols?: number;
  excludeLink?: string;
}

const BusinessPackages: React.FC<BusinessPackagesProps> = ({
  navbarOffset,
  gridCols,
  excludeLink,
}) => {
  const businessPackagesData = [
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

  const cols = gridCols ?? 4; // Default to 4 columns if gridCols is not provided
  const filteredPackages = excludeLink
    ? businessPackagesData.filter((pkg) => pkg.link !== excludeLink)
    : businessPackagesData;

  // Determine grid column classes based on `cols`
  let smColsClass = "grid-cols-1";
  let mdColsClass = "md:grid-cols-2";
  let lgColsClass = `lg:grid-cols-${cols}`;

  if (cols <= 1) {
    mdColsClass = "";
    lgColsClass = "";
  } else if (cols === 2) {
    lgColsClass = "";
  }

  // If gridCols prop is 3, make it 3 columns from md breakpoint.
  if (gridCols === 3) {
    mdColsClass = "md:grid-cols-3";
    lgColsClass = "";
  }

  const gridClass = ["grid", smColsClass, mdColsClass, lgColsClass, "gap-6"]
    .filter(Boolean)
    .join(" ");

  // Conditional minimum height class.
  // Apply this only when the gridCols prop is explicitly 3.
  // Increased from 24rem to 28rem. Adjust as needed.
  // e.g., "min-h-[26rem]", "min-h-[30rem]", "min-h-[450px]"
  const linkMinHeightClass = gridCols === 3 ? "min-h-[28rem]" : "";

  return (
    <div
      id="business-internet"
      style={{
        paddingTop: navbarOffset,
        marginTop: `-${navbarOffset}`,
      }}
    >
      <ServiceCategory title="BUSINESS INTERNET" type="business">
        <div className={gridClass}>
          {filteredPackages.map((pkg) => (
            <Link
              key={pkg.link}
              to={pkg.link || "#"}
              className={`block h-full ${linkMinHeightClass}`.trim()}
            >
              <ServicePackage {...pkg} />
            </Link>
          ))}
        </div>
      </ServiceCategory>
    </div>
  );
};

export default BusinessPackages;
