// components/ContactForm.tsx
import React from "react";
import SignUpForm from "./SignUpForm";

const ContactForm = () => {
  const packageOptions = [
    { value: "fiber-edge", label: "Fiber Edge" },
    { value: "fiber-plus", label: "Fiber Plus" },
    { value: "dia-ddos", label: "DIA with DDoS Protection" },
    { value: "fiber-home", label: "Fiber Home" },
    { value: "fiber-prime", label: "Fiber Prime" },
    { value: "first-class", label: "SINET - First Class" },
  ];

  return (
    <>
      <div
        id="contact"
        className="bg-sinet-light bg-opacity-30 flex flex-col items-center justify-center min-h-screen py-16"
      >
        {/* 
          Using `container` for responsive max-width. 
          `mx-auto` for horizontal centering.
          `px-4` for standard horizontal padding. Adjusted from px-12 for more typical spacing.
          You can use `max-w-7xl` or other max-width if `container` isn't specific enough.
        */}
        <div className="container mx-auto px-4 lg:pl-48 w-full">
          <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-24 md:items-start">
            {" "}
            {/* Use gap-x for horizontal gap */}
            {/* Left Column: SignUpForm */}
            <div>
              <SignUpForm
                title="SIGN UP" // As per your provided code, change to "GET A QUOTE" if needed
                packageOptions={packageOptions}
                className="bg-transparent p-0"
              />
            </div>
            {/* Right Column: Contact Us Details */}
            {/* Removed md:ml-32 and md:items-end as they are not suitable for grid items here */}
            <div>
              <h2 className="text-3xl font-bold text-center md:text-left mb-8 text-gray-800">
                CONTACT US
              </h2>
              <div className="space-y-8 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Sales
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Tel:</span> (+855) 81 801
                      999
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a
                        href="mailto:sales@sinet.com.kh"
                        className="text-teal-600 hover:underline"
                      >
                        sales@sinet.com.kh
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">WhatsApp:</span> +855 81 801
                      999
                    </p>
                    <p>
                      <span className="font-medium">Telegram:</span>{" "}
                      <a
                        href="https://t.me/SINET_KH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:underline"
                      >
                        https://t.me/SINET_KH
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Billing
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Tel:</span> (+855) 81 301
                      999
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a
                        href="mailto:billing@sinet.com.kh"
                        className="text-teal-600 hover:underline"
                      >
                        billing@sinet.com.kh
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Technical Support
                  </h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Tel:</span> (+855) 81 901
                      999
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      <a
                        href="mailto:support@sinet.com.kh"
                        className="text-teal-600 hover:underline"
                      >
                        support@sinet.com.kh
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">Telegram:</span> +855 81 901
                      999
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End of grid */}
          {/* Head Office Section - Added below the grid, within the main container */}
          <div className="mt-4 md:mt-4">
            {" "}
            {/* Spacing above this section */}
            <hr className="border-gray-700 max-w-lg mx-auto" />{" "}
            {/* Darker, centered line, adjust max-w as needed */}
            <p className="text-center text-gray-800 text-2xl font-bold sm:text-base mt-6 md:mt-8">
              Head Office: S.I Building # 93, Preah Sihanouk Blvd, Phnom Penh,
              Cambodia.
            </p>
          </div>
        </div>{" "}
        {/* End of container */}
      </div>{" "}
      {/* End of bg-sinet-light section */}
      {/* The original <div><h1>Head Office...</h1></div> was here, now integrated above. */}
      {/* If you have a separate footer component or section, it would go outside the React.Fragment or after this main section. */}
    </>
  );
};

export default ContactForm;
