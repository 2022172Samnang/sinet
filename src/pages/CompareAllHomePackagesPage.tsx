import React, { useState } from "react"; // Added useState
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Zap, // For Dedicated Fiber
  Gauge, // For Peak Hour Performance
  UploadCloud, // For Upload Speed
  Gamepad2, // For Lag Free Gaming
  MonitorSmartphone, // For HD Streaming
  Share2, // For Non-Blocking/Torrent
  UserCheck, // For Dedicated Account Manager
  ShieldCheck, // For 24/7 Monitoring
} from "lucide-react";

interface PricingDetail {
  label: string;
  fiberHome: string | React.ReactNode;
  fiberPrime: string | React.ReactNode;
  sinetEco: string | React.ReactNode;
  sinetPremium: string | React.ReactNode;
  sinetFirstClass: string | React.ReactNode;
  isHeader?: boolean;
  isFooter?: boolean;
  labelClass?: string;
}

// Updated interface for combined feature data
interface DetailedCommonFeature {
  icon: React.ElementType;
  displayTitle: string; // Title shown below icon by default
  overlayTitle: string; // Title for the overlay box
  description: string; // Description for the overlay box
  id: string; // Unique ID for keys
}

const CompareAllHomePackagesPage: React.FC = () => {
  const pricingTableDetails: PricingDetail[] = [
    {
      label: "HOME",
      fiberHome: "FIBER HOME",
      fiberPrime: "FIBER PRIME",
      sinetEco: "SINET-ECO",
      sinetPremium: "SINET-PREMIUM",
      sinetFirstClass: "SINET-FIRST CLASS",
      isHeader: true,
      labelClass:
        "bg-transparent text-teal-600 font-semibold text-lg justify-start h-full",
    },
    {
      label: "Download Bandwidth",
      fiberHome: "15 Mbps",
      fiberPrime: "30 Mbps",
      sinetEco: "20 Mbps",
      sinetPremium: "30 Mbps",
      sinetFirstClass: "40 Mbps",
    },
    {
      label: "Upload Bandwidth",
      fiberHome: "15 Mbps",
      fiberPrime: "30 Mbps",
      sinetEco: "20 Mbps",
      sinetPremium: "30 Mbps",
      sinetFirstClass: "40 Mbps",
    },
    {
      label: "IP Address",
      fiberHome: "Private IP (NAT)",
      fiberPrime: "Public IP (DHCP)",
      sinetEco: "Public IP (DHCP)",
      sinetPremium: "Public IP (DHCP)",
      sinetFirstClass: "Public IP (DHCP)",
    },
    {
      label: "Installation (Under 350 m)",
      fiberHome: "$100",
      fiberPrime: "$100",
      sinetEco: "$100",
      sinetPremium: "$100",
      sinetFirstClass: "$100",
    },
    {
      label: "Price",
      fiberHome: (
        <>
          $22/month <br />
          <span className="text-xs">Buy 10 months, Get 2 months free!</span>
        </>
      ),
      fiberPrime: (
        <>
          $28/month <br />
          <span className="text-xs">Buy 10 months, Get 2 months free!</span>
        </>
      ),
      sinetEco: (
        <>
          $19.99/month <br />
          <span className="text-xs">Buy 12 months, Get 2 months free!</span>
        </>
      ),
      sinetPremium: (
        <>
          $25.99/month <br />
          <span className="text-xs">Buy 12 months, Get 2 months free!</span>
        </>
      ),
      sinetFirstClass: (
        <>
          $30.99/month <br />
          <span className="text-xs">Buy 12 months, Get 2 months free!</span>
        </>
      ),
    },
    {
      label: "Availability",
      fiberHome: (
        <>
          All main cities except <br /> Poipet, Sihanoukville, Bavet & Chhrey
          Thom. <br />
          <span className="text-xs block mt-1">
            Price may vary is some private buildings and commercial zone.
          </span>
        </>
      ),
      fiberPrime: (
        <>
          All main cities except <br /> Poipet, Sihanoukville, Bavet & Chhrey
          Thom. <br />
          <span className="text-xs block mt-1">
            Price may vary is some private buildings and commercial zone.
          </span>
        </>
      ),
      sinetEco: (
        <>
          All main cities except <br /> Poipet, Sihanoukville, Bavet & Chhrey
          Thom. <br />
          <span className="text-xs block mt-1">
            Price may vary is some private buildings and commercial zone.
          </span>
        </>
      ),
      sinetPremium: (
        <>
          All main cities except <br /> Poipet, Sihanoukville, Bavet & Chhrey
          Thom. <br />
          <span className="text-xs block mt-1">
            Price may vary is some private buildings and commercial zone.
          </span>
        </>
      ),
      sinetFirstClass: (
        <>
          All main cities except <br /> Poipet, Sihanoukville, Bavet & Chhrey
          Thom. <br />
          <span className="text-xs block mt-1">
            Price may vary is some private buildings and commercial zone.
          </span>
        </>
      ),
    },
    {
      label: "Order",
      fiberHome: "ORDER NOW",
      fiberPrime: "ORDER NOW",
      sinetEco: "ORDER NOW",
      sinetPremium: "ORDER NOW",
      sinetFirstClass: "ORDER NOW",
      isFooter: true,
    },
  ];

  // Original data arrays (will be merged)
  const commonFeaturesList: Array<{ icon: React.ElementType; title: string }> =
    [
      { icon: Zap, title: "Dedicated Fiber per customer" },
      { icon: Gauge, title: "Superior Peak Hour Performance" },
      { icon: UploadCloud, title: "Superior Upload Speed" },
      { icon: Gamepad2, title: "Lag Free Gaming" },
      {
        icon: MonitorSmartphone,
        title: "HD Streaming and High Speed Access", // Shortened for better display
      },
      {
        icon: Share2,
        title: "No Compression, Non Blocking", // Shortened
      },
      { icon: UserCheck, title: "Dedicated Account Manager" },
      { icon: ShieldCheck, title: "24/7 Network Monitoring" }, // Shortened
    ];

  const featureDescriptionsList: Array<{
    icon: React.ElementType;
    title: string;
    description?: string;
  }> = [
    {
      description:
        "With SINET's Active Ethernet, you get a direct fiber connection from our network, providing you with fast, stable, and symmetrical speeds of up to 1 Gbps for both downloads and uploads.",
      icon: Zap,
      title: "Active Ethernet Connection", // Adding titles for overlay, can be same as commonFeaturesList title
    },
    {
      description:
        "With SINET internet, you'll always experience reliable speeds, no matter the time or day. Thanks to our backup systems and smart traffic management, we ensure full bandwidth even during peak hours from 7 PM to 11 PM.",
      icon: Gauge,
      title: "Reliable Speeds",
    },
    {
      description:
        "With symmetrical bandwidth, SINET customers can quickly upload photos, share files, and interact on social media, all thanks to the fast upload speeds that only Active Ethernet technology can provide.",
      icon: UploadCloud,
      title: "Symmetrical Bandwidth",
    },
    {
      description:
        "With direct connections to International operators and Gaming Hubs in Hong Kong, Singapore, & Europe, SINET users get to enjoy ultra low-latency and lag-free gaming experience end-to-end.",
      icon: Gamepad2,
      title: "International Gaming",
    },
    {
      description:
        "SINET connects to both local and global networks, giving customers smooth HD video streaming and easy access to popular services like YouTube, Netflix, and more.",
      icon: MonitorSmartphone,
      title: "Global Network Access",
    },
    {
      description:
        "SINET never compresses customer traffic to save bandwidth. We provide clear, direct IP connectivity to the internet, with no throttling on file sharing, torrents, or any specific apps.",
      icon: Share2,
      title: "Uncompressed Traffic",
    },
    {
      description:
        "Each customer will be cared by Dedicated Account Executive regardless of which package you subscribe.",
      icon: UserCheck,
      title: "Dedicated Account Executive",
    },
    {
      description:
        "SINET dedicated Tech support team work around the clock to monitor the network and support any issues you may have either by phone or email.",
      icon: ShieldCheck,
      title: "Dedicated Tech Support",
    },
  ];

  // State to track hovered feature index
  const [hoveredFeatureIndex, setHoveredFeatureIndex] = useState<number | null>(
    null
  );

  // Merge commonFeatures and featureDescriptions
  const detailedCommonFeatures: DetailedCommonFeature[] =
    commonFeaturesList.map((cf, index) => {
      const descFeature = featureDescriptionsList[index]; // Assuming lists are in corresponding order
      return {
        icon: cf.icon,
        displayTitle: cf.title, // Title shown below icon
        overlayTitle: descFeature.title || cf.title, // Title for the overlay, fallback to cf.title
        description: descFeature.description || "Details not available.",
        id: `common-feature-home-${index}-${cf.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      };
    });

  const scrollToSignUp = (planName?: string) => {
    const signUpSection = document.getElementById("signup-form-all-home");
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: "smooth" });
      const packageSelect = document.getElementById(
        "package-select-all-home"
      ) as HTMLSelectElement | null;
      if (packageSelect && planName) {
        // Try to match the plan name format from the buttons: "FIBER HOME", "FIBER PRIME", etc.
        // The button passes the plan name directly.
        const optionToSelect = Array.from(packageSelect.options).find((opt) =>
          opt.value
            .toUpperCase()
            .startsWith(planName.toUpperCase().split(" - ")[0])
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

      <main className="flex-1">
        {/* Pricing Table Section */}
        <section className="py-12 md:py-16 bg-sky-100">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10 md:mb-12">
              FEATURES AND PRICING
            </h1>
            <div className="max-w-6xl mx-auto shadow-xl rounded-lg overflow-hidden">
              <div className="grid grid-cols-[1.5fr_repeat(5,_1fr)] md:grid-cols-[minmax(150px,_1.5fr)_repeat(5,_1fr)] bg-white text-sm">
                {pricingTableDetails.map((detail, index) => (
                  <React.Fragment key={index}>
                    <div
                      className={`p-2 md:p-3 border-b border-r border-gray-200 flex items-center 
                        ${
                          detail.labelClass ||
                          (detail.isHeader
                            ? "bg-transparent text-teal-600 font-semibold text-base md:text-lg justify-start h-full"
                            : "bg-teal-500 text-white font-medium")
                        }
                        ${detail.isFooter ? "bg-transparent" : ""}
                        ${index === 0 ? "rounded-tl-lg" : ""} 
                        ${
                          index === pricingTableDetails.length - 1 &&
                          detail.isFooter
                            ? "rounded-bl-lg border-b-0"
                            : ""
                        }
                        ${
                          index > 0 &&
                          index < pricingTableDetails.length - 1 &&
                          !detail.isFooter
                            ? "min-h-[60px]"
                            : ""
                        }
                        ${
                          detail.label === "Availability"
                            ? "min-h-[120px] md:min-h-[100px]"
                            : ""
                        }
                        `}
                    >
                      {!detail.isHeader && !detail.isFooter ? (
                        detail.label
                      ) : detail.isHeader ? (
                        <span className="pl-1 md:pl-2">{detail.label}</span>
                      ) : (
                        ""
                      )}
                    </div>
                    {[
                      "fiberHome",
                      "fiberPrime",
                      "sinetEco",
                      "sinetPremium",
                      "sinetFirstClass",
                    ].map((planKey, planIndex) => (
                      <div
                        key={planKey}
                        className={`p-2 md:p-3 border-b border-gray-200 text-center flex flex-col justify-center items-center
                          ${planIndex < 4 ? "border-r" : ""} 
                          ${
                            detail.isHeader
                              ? "bg-slate-700 text-white font-bold text-base md:text-lg h-full"
                              : "bg-gray-50 text-gray-700"
                          }
                          ${
                            detail.isFooter
                              ? "bg-gray-50 py-3 md:py-4 border-b-0"
                              : ""
                          }
                          ${
                            index === 0 && detail.isHeader && planIndex === 4
                              ? "rounded-tr-lg"
                              : ""
                          }
                          ${
                            index === pricingTableDetails.length - 1 &&
                            detail.isFooter &&
                            planIndex === 4
                              ? "rounded-br-lg"
                              : ""
                          }
                          ${
                            index > 0 &&
                            index < pricingTableDetails.length - 1 &&
                            !detail.isFooter
                              ? "min-h-[60px]"
                              : ""
                          }
                          ${
                            detail.label === "Availability"
                              ? "min-h-[120px] md:min-h-[100px]"
                              : ""
                          }
                          `}
                      >
                        {detail.isFooter ? (
                          <Button
                            onClick={() =>
                              scrollToSignUp(
                                pricingTableDetails.find((d) => d.isHeader)?.[
                                  planKey as keyof PricingDetail
                                ] as string
                              )
                            }
                            className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-md"
                          >
                            ORDER NOW
                          </Button>
                        ) : (
                          detail[planKey as keyof PricingDetail]
                        )}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common Features Section - UPDATED */}
        <section className="py-12 md:py-16 bg-sky-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              COMMON FEATURES
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center mb-16 max-w-8xl mx-auto">
              {detailedCommonFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center justify-start p-2 relative cursor-default min-h-[180px]" // Added relative, min-height
                  onMouseEnter={() => setHoveredFeatureIndex(index)}
                  onMouseLeave={() => setHoveredFeatureIndex(null)}
                >
                  {/* Default Icon and Title */}
                  <div className="text-center">
                    <div className="bg-black text-white p-4 rounded-full mb-3 shadow-md inline-block">
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10" />
                    </div>
                    <h4 className="text-sm md:text-base font-semibold text-gray-700 px-1">
                      {feature.displayTitle}
                    </h4>
                  </div>

                  {/* Overlay with detailed title and description */}
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
            {/* The old featureDescriptions grid is now REMOVED */}
          </div>
        </section>

        {/* Sign Up Section */}
        <div id="signup-form-all-home" className="bg-sky-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              SIGN UP
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                <div className="mb-5">
                  <label
                    htmlFor="package-select-all-home"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Select Package
                  </label>
                  <select
                    id="package-select-all-home"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">-- Select a Home Package --</option>
                    <option value="FIBER HOME - 15 Mbps">
                      FIBER HOME - 15 Mbps
                    </option>
                    <option value="FIBER PRIME - 30 Mbps">
                      FIBER PRIME - 30 Mbps
                    </option>
                    <option value="SINET-ECO - 20 Mbps">
                      {" "}
                      {/* Simplified for matching */}
                      SINET-ECO (20G Global)
                    </option>
                    <option value="SINET-PREMIUM - 30 Mbps">
                      {" "}
                      {/* Simplified for matching */}
                      SINET-PREMIUM (30G Global)
                    </option>
                    <option value="SINET-FIRST CLASS - 40 Mbps">
                      {" "}
                      {/* Simplified for matching */}
                      SINET-FIRST CLASS (40G Global)
                    </option>
                    <option value="General Inquiry">
                      General Inquiry for Home Internet
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="signup-name-ah"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="signup-name-ah"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-phone-ah"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="signup-phone-ah"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="signup-email-ah"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="signup-email-ah"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-address-ah"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="signup-address-ah"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="signup-comment-ah"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Comment / Questions
                  </label>
                  <textarea
                    id="signup-comment-ah"
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompareAllHomePackagesPage;

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
