import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection"; // Assuming this is in src/components/
import { Button } from "@/components/ui/button"; // Assuming this path
import {
  Zap, // For Dedicated Fiber (lightning bolt for speed)
  Gauge, // For Peak Hour Performance
  UploadCloud, // For Upload Speed
  Gamepad2, // For Lag Free Gaming
  MonitorSmartphone, // For HD Streaming
  Share2, // For Non-Blocking/Torrent (sharing icon)
  UserCheck, // For Dedicated Account Manager
  ShieldCheck, // For 24/7 Monitoring (could also use Clock)
} from "lucide-react";

interface Package {
  name: string;
  speed: string;
  suitability: string;
  id: string; // For key and potentially linking to signup form
}

// Updated interface for combined feature data
interface DetailedCommonFeature {
  icon: React.ElementType;
  displayTitle: string; // Title shown below icon by default
  overlayTitle: string; // Title for the overlay box
  description: string; // Description for the overlay box
  id: string; // Unique ID for keys
}

const CompareAllPackagesPage: React.FC = () => {
  const businessPackages: Package[] = [
    {
      name: "Fiber Edge",
      speed: "50 Mbps",
      suitability: "Suitable For Small Business",
      id: "fiber-edge",
    },
    {
      name: "Fiber Plus",
      speed: "120 Mbps",
      suitability: "Suitable For Small Business",
      id: "fiber-plus",
    },
    {
      name: "Fiber Biz",
      speed: "180 Mbps",
      suitability: "Suitable For Medium Business",
      id: "fiber-biz",
    },
    {
      name: "Fiber Pro",
      speed: "350 Mbps",
      suitability: "Suitable For Large Business",
      id: "fiber-pro",
    },
    {
      name: "Fiber Max",
      speed: "500 Mbps",
      suitability: "Suitable For Enterprise",
      id: "fiber-max",
    },
    {
      name: "Fiber One",
      speed: "800 Mbps",
      suitability: "Suitable For Large Enterprise",
      id: "fiber-one",
    },
  ];

  const commonFeaturesList: Array<{ icon: React.ElementType; title: string }> =
    [
      { icon: Zap, title: "Dedicated Fiber per customer" },
      { icon: Gauge, title: "Superior Peak Hour Performance" },
      { icon: UploadCloud, title: "Superior Upload Speed" },
      { icon: Gamepad2, title: "Lag Free Gaming" },
      {
        icon: MonitorSmartphone,
        title: "HD Streaming & High Speed Access",
      },
      {
        icon: Share2,
        title: "No Compression, Non Blocking",
      },
      { icon: UserCheck, title: "Dedicated Account Manager" },
      { icon: ShieldCheck, title: "24/7 Network Monitoring" },
    ];

  const featureDescriptionsList: Array<{
    icon: React.ElementType;
    title: string;
    description?: string;
  }> = [
    {
      icon: Zap,
      title: "Active Ethernet Connection",
      description:
        "With SINET's Active Ethernet, you get a direct fiber connection from our network, providing you with fast, stable, and symmetrical speeds of up to 1 Gbps for both downloads and uploads.",
    },
    {
      icon: Gauge,
      title: "Reliable Speeds",
      description:
        "With SINET internet, you'll always experience reliable speeds, no matter the time or day. Thanks to our backup systems and smart traffic management, we ensure full bandwidth even during peak hours from 7 PM to 11 PM.",
    },
    {
      icon: UploadCloud,
      title: "Symmetrical Bandwidth",
      description:
        "With symmetrical bandwidth, SINET customers can quickly upload photos, share files, and interact on social media, all thanks to the fast upload speeds that only Active Ethernet technology can provide.",
    },
    {
      icon: Gamepad2,
      title: "International Gaming",
      description:
        "With direct connections to International operators and Gaming Hubs in Hong Kong, Singapore, & Europe, SINET users get to enjoy ultra low-latency and lag-free gaming experience end-to-end.",
    },
    {
      icon: MonitorSmartphone,
      title: "Global Network Access",
      description:
        "SINET connects to both local and global networks, giving customers smooth HD video streaming and easy access to popular services like YouTube, Netflix, and more.",
    },
    {
      icon: Share2,
      title: "Uncompressed Traffic",
      description:
        "SINET never compresses customer traffic to save bandwidth. We provide clear, direct IP connectivity to the internet, with no throttling on file sharing, torrents, or any specific apps.",
    },
    {
      icon: UserCheck,
      title: "Dedicated Account Executive",
      description:
        "Each customer will be cared by Dedicated Account Executive regardless of which package you subscribe.",
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Tech Support",
      description:
        "SINET dedicated Tech support team work around the clock to monitor the network and support any issues you may have either by phone or email.",
    },
  ];

  const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<number | null>(
    null
  );

  const detailedCommonFeatures: DetailedCommonFeature[] =
    commonFeaturesList.map((cf, index) => {
      const descFeature = featureDescriptionsList[index];
      return {
        icon: cf.icon,
        displayTitle: cf.title,
        overlayTitle: descFeature.title,
        description: descFeature.description || "Details not available.",
        id: `common-feature-${index}-${cf.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      };
    });

  const scrollToSignUp = (packageName?: string) => {
    const signUpSection = document.getElementById("signup-form");
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: "smooth" });
      const packageSelect = document.getElementById(
        "package-select"
      ) as HTMLSelectElement | null;
      if (packageSelect && packageName) {
        const optionToSelect = Array.from(packageSelect.options).find((opt) =>
          opt.value.includes(packageName)
        );
        if (optionToSelect) {
          packageSelect.value = optionToSelect.value;
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Business Internet Packages Section */}
        <section className="py-12 md:py-16 bg-sky-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection yOffset={30} className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                Business Internet Packages
              </h1>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6 mb-10">
              {businessPackages.map((pkg, index) => (
                <AnimatedSection
                  key={pkg.id}
                  delay={0.1 + index * 0.05}
                  yOffset={20}
                  className="bg-white p-6 rounded-xl shadow-lg text-center flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-brown-700 mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-2xl font-bold text-teal-600 mb-2">
                      {pkg.speed}
                    </p>
                    <p className="text-xs text-gray-600 mb-4 h-10 flex items-center justify-center">
                      {pkg.suitability}
                    </p>
                  </div>
                  <Button
                    onClick={() => scrollToSignUp(pkg.name)}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 text-sm font-medium rounded-md"
                  >
                    ORDER NOW
                  </Button>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection
              delay={0.5}
              yOffset={20}
              className="text-center text-gray-700"
            >
              <p className="text-lg mb-1">
                Contact our Sales Team for more information by Whatsapp or
                Telegram via
              </p>
              <p className="text-xl font-semibold mb-1">
                <a
                  href="tel:+85581801999"
                  className="text-teal-600 hover:underline"
                >
                  +855 81 801 999
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+85581801999"
                  className="text-teal-600 hover:underline"
                >
                  +855 81 801 999
                </a>
              </p>
              <p className="text-lg">
                Email:{" "}
                <a
                  href="mailto:sales@sinet.com.kh"
                  className="text-teal-600 hover:underline"
                >
                  sales@sinet.com.kh
                </a>
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Common Features Section - UPDATED */}
        <section className="py-12 md:py-16 bg-emerald-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection yOffset={30} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                COMMON FEATURES
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center mb-16">
              {detailedCommonFeatures.map((feature, index) => (
                // Wrapper div to handle hover and layout
                <div
                  key={feature.id}
                  className="flex flex-col items-center justify-start p-2 relative cursor-default min-h-[180px]"
                  onMouseEnter={() => setHoveredFeatureIndex(index)}
                  onMouseLeave={() => setHoveredFeatureIndex(null)}
                >
                  <AnimatedSection
                    delay={0.1 + index * 0.05}
                    yOffset={20}
                    // className can be simplified if AnimatedSection doesn't need specific styling for this context
                    // or keep its original intended classes if it does.
                    // For this example, we assume AnimatedSection primarily handles the animation itself.
                    className="w-full h-full" // Make AnimatedSection fill the wrapper if needed
                  >
                    {/* Default Icon and Title */}
                    <div className="text-center">
                      {" "}
                      {/* This div might now be part of AnimatedSection's children */}
                      <div className="bg-black text-white p-4 rounded-full mb-3 shadow-md inline-block">
                        <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
                      </div>
                      <h4 className="text-sm md:text-base font-semibold text-gray-700 px-1">
                        {feature.displayTitle}
                      </h4>
                    </div>
                  </AnimatedSection>

                  {/* Overlay with detailed title and description - position relative to the outer div */}
                  {hoveredFeatureIndex === index && (
                    <div className="absolute inset-0 bg-teal-500 text-white p-4 rounded-lg shadow-xl flex flex-col z-10 overflow-hidden">
                      <h5 className="text-lg font-semibold mb-2 text-center flex-shrink-0">
                        {feature.overlayTitle}
                      </h5>
                      <div className="overflow-y-auto flex-grow custom-scrollbar-overlay">
                        <p className="text-sm leading-snug text-center">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sign Up Section */}
        <div
          id="signup-form"
          className="bg-sky-50 py-12 md:py-16 overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <AnimatedSection yOffset={30} className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">SIGN UP</h2>
            </AnimatedSection>

            <AnimatedSection
              delay={0.1}
              yOffset={20}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                <div className="mb-5">
                  <label
                    htmlFor="package-select"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Select Package / Inquiry
                  </label>
                  <select
                    id="package-select"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">-- Select a Package --</option>
                    {businessPackages.map((pkg) => (
                      <option key={pkg.id} value={`${pkg.name} - ${pkg.speed}`}>
                        {pkg.name} - {pkg.speed}
                      </option>
                    ))}
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="signup-name"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="signup-name"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-phone"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="signup-phone"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="signup-email"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="signup-email"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-address"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Company / Address
                    </label>
                    <input
                      type="text"
                      id="signup-address"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="signup-comment"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Comment / Questions
                  </label>
                  <textarea
                    id="signup-comment"
                    rows={4}
                    placeholder="Any specific requirements or questions..."
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  ></textarea>
                </div>

                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg font-semibold rounded-md">
                  Send Inquiry
                </Button>
              </div>

              <div className="text-center mt-8 text-gray-600">
                <p className="mb-2">
                  Or Chat with our Sales Team by Whatsapp or Telegram via{" "}
                  <a
                    href="tel:+85581801999"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    +855 81 801 999
                  </a>
                </p>
                <p className="mb-2">
                  or call{" "}
                  <a
                    href="tel:+85581801999"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    +855 81 801 999
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:sales@sinet.com.kh"
                    className="text-teal-600 hover:underline font-medium"
                  >
                    sales@sinet.com.kh
                  </a>
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompareAllPackagesPage;

// Optional: Add to your global CSS file (e.g., src/app/globals.css) for custom scrollbars in the overlay
/*
.custom-scrollbar-overlay::-webkit-scrollbar {
  width: 5px;
}
.custom-scrollbar-overlay::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.custom-scrollbar-overlay::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
}
.custom-scrollbar-overlay::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.6);
}
.custom-scrollbar-overlay {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1);
}
*/
