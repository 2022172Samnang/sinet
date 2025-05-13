import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  text: string;
}

interface PricingDetail {
  label: string;
  sinetEco: string | React.ReactNode;
  sinetPremium: string | React.ReactNode;
  sinetFirstClass: string | React.ReactNode;
  isHeader?: boolean;
  isFooter?: boolean;
  labelClass?: string; // For custom styling of labels
}

const FiberFirstClassPage: React.FC = () => {
  const packageName = "SINET-First Class";
  const packageSpeed = "40 Mbps";
  const startingPrice = "$30.99";
  const promotion = "Buy 10 months, Get 2 months Free!"; // As per hero, pricing table says 12 months

  const heroFeatures: Feature[] = [
    { text: "40 Mbps Download/Upload Speed" },
    { text: "Faster Than Average Broadband" },
    { text: "Unlimited Usage" },
    { text: "HD Quality Streaming" },
    { text: "No Cache/No Proxy" },
    { text: "Private IP" },
  ];

  const pricingTableDetails: PricingDetail[] = [
    {
      label: "Home Internet",
      sinetEco: "SINET-ECO",
      sinetPremium: "SINET-PREMIUM",
      sinetFirstClass: "SINET-FIRST CLASS",
      isHeader: true,
      labelClass:
        "bg-transparent text-teal-600 font-semibold text-lg justify-start h-full",
    },
    {
      label: "Global Bandwidth",
      sinetEco: "20 Mbps",
      sinetPremium: "30 Mbps",
      sinetFirstClass: "40 Mbps",
    },
    {
      label: "Local Bandwidth",
      sinetEco: "80 Mbps",
      sinetPremium: "120 Mbps",
      sinetFirstClass: "160 Mbps",
    },
    {
      label: "IP Address",
      sinetEco: "Private IP (NAT)",
      sinetPremium: "Private IP (NAT)",
      sinetFirstClass: "Private IP (NAT)",
    },
    {
      label: "Installation (Under 350 m)",
      sinetEco: "$100",
      sinetPremium: "$100",
      sinetFirstClass: "$100",
    },
    {
      label: "Price",
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
      sinetEco: "Borey, Residential Building Partner, and selected zone",
      sinetPremium: "Borey, Residential Building Partner, and selected zone",
      sinetFirstClass: "Borey, Residential Building Partner, and selected zone",
    },
    {
      label: "Order",
      sinetEco: "ORDER NOW",
      sinetPremium: "ORDER NOW",
      sinetFirstClass: "ORDER NOW",
      isFooter: true,
    },
  ];

  const scrollToSignUp = (planName?: string) => {
    const signUpSection = document.getElementById("signup-form-first-class");
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: "smooth" });
      const packageSelect = document.getElementById(
        "package-select-first-class"
      ) as HTMLSelectElement | null;
      if (packageSelect && planName) {
        // Attempt to find an option that includes the planName.
        // This is a bit more robust if option values are more complex.
        const optionToSelect = Array.from(packageSelect.options).find((opt) =>
          opt.value.includes(planName.split(" - ")[0])
        ); // Match by base name
        if (optionToSelect) {
          packageSelect.value = optionToSelect.value;
        } else {
          // Fallback if exact match not found, or select a default
          const defaultOption = Array.from(packageSelect.options).find((opt) =>
            opt.value.includes("SINET-First Class")
          );
          if (defaultOption) packageSelect.value = defaultOption.value;
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
              {/* Left Side - Package Details */}
              <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-3 italic drop-shadow-sm">
                  {packageName}
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 drop-shadow">
                  {packageSpeed}
                </h2>
                <div className="text-xl text-gray-700 mb-4">
                  Starting from{" "}
                  <span className="font-semibold">{startingPrice}</span>
                </div>
                <div className="text-lg font-medium text-gray-800 mb-8">
                  {promotion}
                </div>
              </div>

              {/* Right Side - Features Card */}
              <div className="md:w-1/2">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 uppercase text-center md:text-left">
                    Features
                  </h3>
                  <ul className="space-y-4">
                    {heroFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table Section */}
        <section className="py-12 md:py-16 bg-blue-100">
          {" "}
          {/* Light blue background for pricing */}
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10 md:mb-12">
              PRICING
            </h2>
            <div className="max-w-5xl mx-auto shadow-xl rounded-lg overflow-hidden">
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[minmax(150px,_1.5fr)_1fr_1fr_1fr] bg-white">
                {pricingTableDetails.map((detail, index) => (
                  <React.Fragment key={index}>
                    {/* Label Column */}
                    <div
                      className={`p-3 md:p-4 border-b border-r border-gray-200 flex items-center 
                        ${
                          detail.labelClass ||
                          (detail.isHeader
                            ? "bg-transparent text-teal-600 font-semibold text-lg justify-start h-full"
                            : "bg-teal-500 text-white font-medium")
                        }
                        ${detail.isFooter ? "bg-transparent" : ""}`}
                    >
                      {!detail.isHeader && !detail.isFooter ? (
                        detail.label
                      ) : detail.isHeader ? (
                        <span className="pl-0 md:pl-4">{detail.label}</span>
                      ) : (
                        ""
                      )}
                    </div>

                    {/* SINET-ECO Column */}
                    <div
                      className={`p-3 md:p-4 border-b border-r border-gray-200 text-center flex flex-col justify-center items-center
                        ${
                          detail.isHeader
                            ? "bg-slate-700 text-white font-bold text-lg h-full"
                            : "bg-gray-50 text-gray-700"
                        }
                        ${detail.isFooter ? "bg-gray-50 py-4" : ""}`}
                    >
                      {detail.isFooter ? (
                        <Button
                          onClick={() => scrollToSignUp("SINET-ECO")}
                          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md text-sm"
                        >
                          {String(detail.sinetEco)}
                        </Button>
                      ) : (
                        detail.sinetEco
                      )}
                    </div>

                    {/* SINET-PREMIUM Column */}
                    <div
                      className={`p-3 md:p-4 border-b border-r border-gray-200 text-center flex flex-col justify-center items-center
                        ${
                          detail.isHeader
                            ? "bg-slate-700 text-white font-bold text-lg h-full"
                            : "bg-gray-50 text-gray-700"
                        }
                        ${detail.isFooter ? "bg-gray-50 py-4" : ""}`}
                    >
                      {detail.isFooter ? (
                        <Button
                          onClick={() => scrollToSignUp("SINET-PREMIUM")}
                          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md text-sm"
                        >
                          {String(detail.sinetPremium)}
                        </Button>
                      ) : (
                        detail.sinetPremium
                      )}
                    </div>

                    {/* SINET-FIRST CLASS Column */}
                    <div
                      className={`p-3 md:p-4 border-b border-gray-200 text-center flex flex-col justify-center items-center
                        ${
                          detail.isHeader
                            ? "bg-slate-700 text-white font-bold text-lg h-full"
                            : "bg-gray-50 text-gray-700"
                        }
                        ${detail.isFooter ? "bg-gray-50 py-4" : ""}`}
                    >
                      {detail.isFooter ? (
                        <Button
                          onClick={() => scrollToSignUp("SINET-FIRST CLASS")}
                          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md text-sm"
                        >
                          {String(detail.sinetFirstClass)}
                        </Button>
                      ) : (
                        detail.sinetFirstClass
                      )}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sign Up Section */}
        <div id="signup-form-first-class" className="bg-sky-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              SIGN UP
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl">
                <div className="mb-5">
                  <label
                    htmlFor="package-select-first-class"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Select Package
                  </label>
                  <select
                    id="package-select-first-class"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">-- Select a Package --</option>
                    <option value="SINET-ECO - 20 Mbps Global / 80 Mbps Local">
                      SINET-ECO (20G/80L)
                    </option>
                    <option value="SINET-PREMIUM - 30 Mbps Global / 120 Mbps Local">
                      SINET-PREMIUM (30G/120L)
                    </option>
                    <option value="SINET-FIRST CLASS - 40 Mbps Global / 160 Mbps Local">
                      SINET-FIRST CLASS (40G/160L)
                    </option>
                    <option value="General Inquiry">
                      General Inquiry for Home Internet
                    </option>
                  </select>
                </div>

                {/* ... rest of the form fields (Name, Phone, Email, Address, Comment) ... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="signup-name-fc"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="signup-name-fc"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-phone-fc"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="signup-phone-fc"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="signup-email-fc"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="signup-email-fc"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="signup-address-fc"
                      className="block text-gray-700 mb-2 font-medium"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="signup-address-fc"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="signup-comment-fc"
                    className="block text-gray-700 mb-2 font-medium"
                  >
                    Comment / Questions
                  </label>
                  <textarea
                    id="signup-comment-fc"
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
                {/* ... rest of the contact info ... */}
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

        {/* Contact Information Box */}
        {/* <section className="py-10 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-gradient-to-tr from-sky-300 via-cyan-200 to-emerald-300 rounded-lg p-6 shadow-lg">
              <h3 className="text-center text-lg font-semibold text-slate-800 mb-4">
                For More Information:
              </h3>
              <div className="text-center text-slate-700">
                <p className="mb-2">
                  Phone:{" "}
                  <a
                    href="tel:+85581801999"
                    className="font-medium hover:underline text-slate-800"
                  >
                    +855 81 801 999
                  </a>
                </p>
                <p>
                  Telegram direct:
                  <a
                    href="https://t.me/SINET_KH"
                    className="font-medium hover:underline text-slate-800 ml-1 break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://t.me/SINET_KH
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
};

export default FiberFirstClassPage;
