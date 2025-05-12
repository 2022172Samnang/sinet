
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-sinet-light to-white relative overflow-hidden min-h-[300px] md:min-h-[400px]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video 
          className="absolute min-w-full min-h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-server-in-a-data-center-10757-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Reliable Internet Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Connecting homes and businesses with high-speed fiber internet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-sinet-dark hover:bg-sinet-darkest text-white px-6 py-2 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-2 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Pattern overlay - reducing the number for better performance with video */}
      <div className="absolute inset-0 z-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${0.5 + Math.random()})`,
            opacity: Math.random() * 0.5 + 0.25
          }}>
            <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none">
              <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
