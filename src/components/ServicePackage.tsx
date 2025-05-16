import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you have this Button component

interface ServicePackageProps {
  title: string;
  imagePath?: string;
  special?: string;
  // Add a prop to identify the "See all packages" card if not relying solely on title
  isActionCard?: boolean; // Example: true if it's "See all packages"
}

const ServicePackage: React.FC<ServicePackageProps> = ({
  title,
  imagePath,
  special,
  isActionCard, // Use this to determine if it's the "See all packages" card
}) => {
  // Determine if this is the "See all packages" card or a similar card that shouldn't have a button.
  // You can pass a specific prop or check the title/link.
  // For this example, I'll use the 'isActionCard' prop. If not provided, default to checking title.
  const shouldHideButton =
    isActionCard ?? title === "See all Business Packages & Prices";

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* This 'relative' container will take the full height of its parent. */}
      <div className="relative w-full h-full">
        {/* Image or placeholder container - now fills the relative parent */}
        {imagePath ? (
          <img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover" // Image will fill this container
          />
        ) : (
          // Placeholder if no image - displays title in center
          <div className="w-full h-full bg-gradient-to-br from-sinet-light to-sinet flex items-center justify-center p-6">
            <div className="text-white text-3xl font-bold text-center">
              {title}
            </div>
          </div>
        )}

        {/* Special badge - positioned independently */}
        {special && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1.5 rounded-md text-sm font-semibold shadow-md z-10">
            {special}
          </div>
        )}

        {/* Button overlay at bottom right of image - Render only if not a card that should hide it */}
        {!shouldHideButton && (
          <div className="absolute bottom-4 right-4 z-10">
            <Button className="bg-sinet-dark hover:bg-sinet-darkest w-32 h-10 sm:w-36 sm:h-12 text-sm sm:text-base">
              SIGN UP
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePackage;
