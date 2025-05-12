import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center">
        <img className="w-32 h-18" src="assets/sinet-logo.png" alt="" />
      </div>
    </Link>
  );
};

export default Logo;
