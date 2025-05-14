
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
    <div className="bg-sinet-light bg-opacity-30 py-16 flex justify-center">
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
              <div>
                <h3 className="text-xl font-semibold mb-3">Sales</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Tel:</span> (+855) 81 801 999
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    sales@sinet.com.kh
                  </p>
                  <p>
                    <span className="font-medium">WhatsApp:</span> +855 81 801
                    999
                  </p>
                  <p>
                    <span className="font-medium">Telegram:</span>{" "}
                    https://t.me/SINET_KH
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Billing</h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Tel:</span> (+855) 81 301 999
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    billing@sinet.com.kh
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Technical Support
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Tel:</span> (+855) 81 901 999
                  </p>
                  <p>
                    <span className="font-medium">Email:</span>{" "}
                    support@sinet.com.kh
                  </p>
                  <p>
                    <span className="font-medium">Telegram:</span> +855 81 901
                    999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
