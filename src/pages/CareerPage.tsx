import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection"; // Assuming this is in src/components/

const CareerPage: React.FC = () => {
  const jobOpenings = [
    { id: 1, title: "Sales Executives, Phnom Penh", count: 2 },
    { id: 2, title: "Sales Executives SHV, Bavet, Siem Reap", count: 2 },
    { id: 3, title: "Senior Sales Executive", count: 1 },
    { id: 4, title: "Technical Support Officers", count: 4 },
    { id: 5, title: "Sales Executive (Chinese-Speaking)", count: 2 },
    { id: 6, title: "Technical Support Officers (Chinese-Speaking)", count: 3 },
    { id: 7, title: "Accounting & Administration Manager", count: 1 },
    { id: 8, title: "Marketing Executive", count: 1 },
  ];

  // Define the path to your hero image
  const heroImagePath = "assets/about_us/career_banner.png"; // IMPORTANT: Replace with your actual image path

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Section: Join Our Team (Hero) */}
        <section
          className="relative py-20 md:py-28 text-white text-center bg-teal-500 overflow-hidden" // Added overflow-hidden
        >
          {/* Background Image using <img> tag */}
          <img
            src={heroImagePath}
            alt="Join SINET Team - Career opportunities" // Add descriptive alt text
            className="absolute inset-0 w-full h-full object-cover z-0" // Positioned behind content
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>{" "}
          {/* Increased opacity slightly for better contrast */}
          {/* Content container */}
          <div className="container mx-auto px-4 relative z-20">
            {" "}
            {/* Ensure content is above overlay and image */}
            <AnimatedSection yOffset={-20}>
              <h1 className="text-4xl md:text-5xl font-bold">JOIN OUR TEAM</h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Section: Working with SINET */}
        <section className="bg-gray-50 py-12 md:py-16 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <AnimatedSection yOffset={30}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                WORKING WITH SINET
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1} yOffset={20}>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                SINET is a Specialist Dedicated Internet and Telecom Service
                Provider in Cambodia with strong focus on engineering excellence
                and reliable support. We are driven by our endearing love of
                communication technologies and by the use of those technologies
                to facilitate business and human connections.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} yOffset={20}>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                We are an equal-opportunity employer and our people come from
                various backgrounds and all walks of life. We put alot of
                dedications on developing and training people, and always give
                opportunities to staff to transfer to different roles within the
                company as long as they are willing to learn.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} yOffset={20}>
              <p className="text-gray-700 text-lg leading-relaxed">
                We do not give too much emphasis on degrees and certificates.
                However we look more on candidates with the right mindset, and
                with ability to think critically and communicate effectively.
                Regardless of whether there are any job openings listed below,
                if you are the type who always try to improve yourself and
                believe that career fulfilment comes from honest hardwork and
                continuous learnings, then just drop your CV with our HR; we
                always have works available for people like you.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Section: Current Openings */}
        <section className="bg-white py-12 md:py-16 overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatedSection yOffset={30} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 md:mb-12">
                CURRENT OPENINGS
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {jobOpenings.map((job, index) => (
                <AnimatedSection
                  key={job.id}
                  delay={0.1 + index * 0.05}
                  yOffset={15}
                >
                  <p className="text-gray-700 text-lg">
                    {job.id}. {job.title} (x{job.count})
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section: How to Apply */}
        <section className="bg-teal-50 py-12 md:py-16 overflow-hidden">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <AnimatedSection yOffset={30}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                HOW TO APPLY
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1} yOffset={20}>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                For detail job description and application, please contact our
                HR via:
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} yOffset={20}>
              <p className="text-gray-700 text-lg leading-relaxed">
                Email:{" "}
                <a
                  href="mailto:hr@sinet.com.kh"
                  className="text-teal-600 hover:text-teal-700 font-medium underline"
                >
                  hr@sinet.com.kh
                </a>
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} yOffset={20}>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                or call{" "}
                <a
                  href="tel:+85581201999"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  +855 81 201 999
                </a>
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4} yOffset={20}>
              <p className="text-gray-700 text-lg leading-relaxed mb-2">
                Address: SINET Building, #93, Preah Sihanouk Blvd, Phnom Penh,
                Cambodia.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.5} yOffset={20}>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Only short-listed candidates will be contacted for interview.
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;
