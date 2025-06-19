// src/pages/CompanyOverview.tsx (or wherever your file is)
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection"; // Adjust path as needed

const CompanyOverview: React.FC = () => {
  const coreValues = [
    {
      title: "Customer First",
      description:
        "We prioritize our customers in every decision, delivering personalized solutions and exceptional support to build lifelong partnerships",
    },
    {
      title: "Ownership",
      description:
        "We take full responsibility for our work, outcomes, and SINET’s reputation–acting with pride and accountability.",
    },
    {
      title: "Nation-Focused",
      description:
        "We don’t just serve Cambodia; we invest in its digital future by bridging urban-rural divides and enabling progress.",
    },
    {
      title: "Network Excellence",
      description:
        "We build and maintain Asia’s most reliable infrastructure, ensuring 24/7 performance and cutting-edge technology.",
    },
    {
      title: "Ethical Integrity",
      description:
        "We act with honesty and transparency, earning trust through fair practices–even when no one is watching.",
    },
    {
      title: "Community Growth",
      description:
        "We measure success not just in profits, but in lives improved through connectivity and local partnerships.",
    },
    {
      title: "Team Together",
      description:
        "We collaborate across departments, valuing diverse skills to achieve shared goals faster and smarter.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Section: About SINET */}
        <section className="bg-teal-50 py-12 md:py-16 overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <AnimatedSection yOffset={30}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                ABOUT SINET
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2} yOffset={25}>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Founded in 2009, SINET is a specialist provider of dedicated
                Internet and telecommunications services, distinguished by
                engineering excellence, resilient infrastructure, and responsive
                support.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} yOffset={25}>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                With a nationwide, Metro-Ethernet fibre backbone and more than
                200 fully owned points of presence, our network reaches not only
                Cambodia’s major cities and provincial hubs but also remote
                districts and rural villages, ensuring ubiquitous high-speed
                connectivity.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4} yOffset={25}>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                We deliver secure broadband solutions for households seeking
                reliable streaming and smart-home readiness, and we furnish
                mission-critical, enterprise-grade links for corporates and
                finance institutions that demand low-latency performance, robust
                uptime, and scalable capacity for core banking, cloud, and
                data-centre integration.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.5} yOffset={20}>
              <p className="text-gray-700 text-lg leading-relaxed">
                SINET is a registered trademark of S.I. Group Co. Ltd., a
                Cambodia-based conglomerate with over 20 years of experience in
                key industries, including Trading, Property, FMCG, Travel,
                Hospitality, and ICT.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section: Our Mission */}
        <section className="bg-white py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/backgrounds/network_subtle_pattern.png')] opacity-5 bg-repeat"></div>
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <AnimatedSection yOffset={30}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                OUR MISSION
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2} yOffset={20}>
              <p className="text-gray-700 text-lg leading-relaxed">
                We deliver reliable, high-quality ICT solutions as a one-stop
                provider, enabling businesses and communities to thrive. Through
                engineering excellence and unmatched service, we support
                Cambodia’s sustainable development in the digital era.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section: Our Vision */}
        <section className="bg-teal-50 py-12 md:py-16 overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <AnimatedSection yOffset={30}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                OUR VISION
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2} yOffset={20}>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower Cambodia’s digital future with seamless, high-speed
                connectivity, driving economic growth and linking our nation to
                global opportunities.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section: Core Values */}
        <section className="bg-white py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/backgrounds/network_subtle_pattern.png')] opacity-5 bg-repeat"></div>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <AnimatedSection yOffset={30} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 md:mb-12">
                CORE VALUES
              </h2>
            </AnimatedSection>
            <div className="space-y-8">
              {coreValues.map((value, index) => (
                <AnimatedSection
                  key={index}
                  delay={0.1 + index * 0.1} // Staggered delay for each item
                  yOffset={20}
                  className="grid md:grid-cols-[minmax(180px,_1fr)_3fr] gap-x-6 gap-y-2 items-start"
                >
                  <div>
                    {" "}
                    {/* This div will be the direct child animated by stagger if used on parent */}
                    <h3 className="text-teal-600 font-semibold text-xl underline decoration-teal-500/70 underline-offset-4">
                      {value.title}
                    </h3>
                  </div>
                  <div>
                    {" "}
                    {/* This div will be the direct child animated by stagger if used on parent */}
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyOverview;
