import React from "react";

interface ServiceCategoryProps {
  title: string;
  type: "business" | "home" | "enterprise";
  children: React.ReactNode;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  title,
  type,
  children,
}) => {
  // Define background color based on type
  const getBgColor = () => {
    switch (type) {
      case "business":
        return "bg-white";
      case "home":
        return "bg-sinet-light bg-opacity-30";
      case "enterprise":
        return "bg-white";
      default:
        return "bg-white";
    }
  };

  // Define the title color based on type
  const getTitleColor = () => {
    switch (type) {
      case "business":
        return "text-sinet-dark";
      case "home":
        return "text-sinet-dark";
      case "enterprise":
        return "text-sinet-dark";
      default:
        return "text-sinet-dark";
    }
  };

  return (
    <div className={`py-16 ${getBgColor()}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          <span className={`${getTitleColor()}`}>{title.split(" ")[0]} </span>
          <span className="text-gray-800">{title.split(" ")[1]}</span>
        </h2>
        {children}
      </div>
    </div>
  );
};

export default ServiceCategory;
