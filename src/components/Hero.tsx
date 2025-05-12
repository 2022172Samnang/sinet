import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-sinet-light to-white relative overflow-hidden min-h-[300px] md:min-h-[400px]">
      {/* make video display in the middle of the div vertically */}
      <div className="bg-gradient-to-b from-sinet-light to-white relative overflow-hidden min-h-[300px] md:min-h-[400px]">
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="assets/intro_vdo.mov"
            poster="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg"
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0"></div>
        </div>
      </div>

      {/* Pattern overlay - reducing the number for better performance with video */}
      <div className="absolute inset-0 z-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `scale(${0.5 + Math.random()})`,
              opacity: Math.random() * 0.5 + 0.25,
            }}
          >
            <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
