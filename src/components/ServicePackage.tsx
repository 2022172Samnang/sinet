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
  startingPrice,
  description,
  bulletPoints,
  imagePath,
  special,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        {/* Placeholder for image/graphic */}
        <div className="bg-gradient-to-br from-sinet-light to-sinet h-112 flex items-center justify-center">
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
        </div>

        {/* Special badge if provided */}
        {special && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            {special}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        {startingPrice && (
          <div className="mb-3">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-sinet-dark">
              ${startingPrice}
            </p>
          </div>
        )}

        {description && <p className="text-gray-600 mb-4">{description}</p>}

        {bulletPoints && bulletPoints.length > 0 && (
          <ul className="text-gray-600 mb-4 pl-5">
            {bulletPoints.map((point, index) => (
              <li key={index} className="list-disc mb-1">
                {point}
              </li>
            ))}
          </ul>
        )}

        <Button className="w-full mt-2 bg-sinet-dark hover:bg-sinet-darkest">
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default ServicePackage;
