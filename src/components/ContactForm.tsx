
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
    <div className="bg-gradient-to-r from-green-100 to-blue-100 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">
              SIGN UP
            </h2>
            <SignUpForm 
              packageOptions={packageOptions} 
              className="bg-transparent p-0"
              title=""
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-8">
              CONTACT US
            </h2>

            <div className="space-y-8">
              <div className="flex">
                <div className="w-1/4">
                  <h3 className="text-xl font-semibold">Sales</h3>
                </div>
                <div className="w-3/4 space-y-1">
                  <p>Tel: (+855) 81 801 999</p>
                  <p>Email: sales@sinet.com.kh</p>
                  <p>WhatsApp: +855 81 801 999</p>
                  <p>Telegram: https://t.me/SINET_KH</p>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/4">
                  <h3 className="text-xl font-semibold">Billing</h3>
                </div>
                <div className="w-3/4 space-y-1">
                  <p>Tel: (+855) 81 301 999</p>
                  <p>Email: billing@sinet.com.kh</p>
                </div>
              </div>

              <div className="flex">
                <div className="w-1/4">
                  <h3 className="text-xl font-semibold">Technical Support</h3>
                </div>
                <div className="w-3/4 space-y-1">
                  <p>Tel: (+855) 81 901 999</p>
                  <p>Email: support@sinet.com.kh</p>
                  <p>Telegram: +855 81 901 999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-700">Head Office: S.I Building # 93, Preah Sihanouk Blvd, Phnom Penh, Cambodia.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
