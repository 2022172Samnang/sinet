import React from "react";
import { Button } from "@/components/ui/button";

interface ServicePackageProps {
  title: string;
  startingPrice?: string;
  description?: string;
  bulletPoints?: string[];
  imagePath?: string;
  special?: string;
}

const ServicePackage: React.FC<ServicePackageProps> = ({
  title,
  imagePath,
  special,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        {/* Image or placeholder container */}
        <div className="bg-gradient-to-br from-sinet-light to-sinet h-[28rem] flex items-center justify-center">
          {imagePath ? (
            <img
              src={imagePath}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-white text-xl font-bold p-6 text-center">
              {title}
            </div>
          )}

          {/* Special badge */}
          {special && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              {special}
            </div>
          )}

          {/* Button overlay at bottom right of image */}
          <div className="absolute bottom-4 right-4">
            <Button className="bg-sinet-dark hover:bg-sinet-darkest">
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePackage;
