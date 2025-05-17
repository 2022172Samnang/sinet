// src/components/HomePackages.tsx
import React from "react";
import { Link } from "react-router-dom";
import ServiceCategory from "@/components/ServiceCategory";
import ServicePackage from "@/components/ServicePackage";

interface HomePackagesProps {
  navbarOffset: string;
  gridCols?: number; // To allow dynamic number of columns
  excludeLink?: string; // To exclude specific packages by link
}

const HomePackages: React.FC<HomePackagesProps> = ({
  navbarOffset,
  gridCols,
  excludeLink,
}) => {
  const homePackagesData = [
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
      imagePath: "assets/internet_solutions/compare-all-packages.png", // Note: Path seems to point to a business-related image, ensure this is intended.
      isActionCard: true, // Mark this as an action card to hide the button in ServicePackage
    },
  ];

  const cols = gridCols ?? 4; // Default to 4 columns if gridCols is not provided
  const filteredPackages = excludeLink
    ? homePackagesData.filter((pkg) => pkg.link !== excludeLink)
    : homePackagesData;

  // Determine grid column classes based on `cols`
  let smColsClass = "grid-cols-1";
  let mdColsClass = "md:grid-cols-2"; // Default for medium screens
  let lgColsClass = `lg:grid-cols-${cols}`; // Default for large screens

  if (cols <= 1) {
    // If 1 column is specified or implied, it applies to all breakpoints.
    mdColsClass = "";
    lgColsClass = "";
  } else if (cols === 2) {
    // If 2 columns are specified, md:grid-cols-2 is sufficient.
    lgColsClass = "";
  } else if (cols === 3) {
    // If 3 columns are specified, apply from md breakpoint.
    mdColsClass = "md:grid-cols-3";
    lgColsClass = ""; // md:grid-cols-3 will cover this.
  }
  // For cols === 4 or more, the default lg:grid-cols-${cols} will apply.

  const gridClass = ["grid", smColsClass, mdColsClass, lgColsClass, "gap-6"]
    .filter(Boolean)
    .join(" ");

  // Conditional minimum height class.
  // Apply if gridCols is explicitly set and is 3 or less (or adjust as needed).
  // Let's use a similar min-height for consistency, adjust if card content differs significantly.
  // This condition means if you pass gridCols={3}, it gets min-height.
  // If gridCols is not passed (defaults to 4), no specific min-height is added here by default.
  const linkMinHeightClass = gridCols && gridCols <= 3 ? "min-h-[28rem]" : "";

  return (
    <div
      id="home-internet"
      style={{
        paddingTop: navbarOffset,
        marginTop: `-${navbarOffset}`,
      }}
    >
      <ServiceCategory title="HOME INTERNET" type="home">
        <div className={gridClass}>
          {filteredPackages.map((pkg, index) => (
            <Link
              key={index}
              to={pkg.link || "#"}
              className={`block h-full ${linkMinHeightClass}`.trim()}
            >
              {/* Ensure ServicePackage component can handle isActionCard prop */}
              <ServicePackage {...pkg} />
            </Link>
          ))}
        </div>
      </ServiceCategory>
    </div>
  );
};

export default HomePackages;
