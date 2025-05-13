import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Banknote, CreditCard, Wallet } from "lucide-react";

const PaymentOptions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero section */}
      <div className="bg-sinet-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Payment Options
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Multiple convenient ways to pay your SINET bills
          </p>
        </div>
      </div>

      {/* Mobile Transfer Section */}
      <section className="py-16 bg-[#e0f7f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">MOBILE TRANSFER</h2>
            <p className="max-w-4xl mx-auto text-gray-700 mb-3">
              SINET offers convenience of payment at your nearest Wing Cash
              Express Agent nationwide or at your finger tips via Wing Mobile
              Apps, Acleda Unity and ABA Mobile Apps.
            </p>
            <p className="max-w-4xl mx-auto text-gray-700 mb-3">
              SINET covers the transaction fee of each Mobile Transfer, so you
              only need to pay the actual amount in the invoice.
            </p>
            <p className="max-w-4xl mx-auto text-gray-700">
              If you have multiple bills, please always keep or screenshot a
              confirmation receipt and send to our billing team. This allows us
              to know which payment is to which invoice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Wing Cash Agent */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#5db6a6]">
              <h3 className="text-xl font-medium text-[#5db6a6] mb-4 text-center">
                Wing Cash Agent
              </h3>
              <div className="flex justify-center mb-6">
                <img
                  src="assets/customer_services/wing.png"
                  alt="Wing Cash Logo"
                  className="h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placeholder.com/150x80?text=Wing+Logo";
                  }}
                />
              </div>
              <ol className="list-decimal ml-4 text-gray-700 space-y-2">
                <li>Bill To: S.I GROUP CO., LTD.</li>
                <li>Biller Code: 7999</li>
                <li>Enter 10 Digits Customer ID</li>
                <li>Enter Invoice Amount in USD</li>
              </ol>
            </div>

            {/* Wing Mobile App */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#5db6a6]">
              <h3 className="text-xl font-medium text-[#5db6a6] mb-4 text-center">
                Wing Mobile App
              </h3>
              <div className="flex justify-center mb-6">
                <img
                  src="assets/customer_services/wing_mobile.png"
                  alt="Wing Mobile App"
                  className="h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placeholder.com/150x80?text=Wing+App";
                  }}
                />
              </div>
              <ol className="list-decimal ml-4 text-gray-700 space-y-2">
                <li>Select SINET</li>
                <li>Biller Code: 7999</li>
                <li>Enter Customer ID</li>
                <li>Enter Invoice Amount in USD</li>
              </ol>
            </div>

            {/* Acleda Unity */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#5db6a6]">
              <h3 className="text-xl font-medium text-[#5db6a6] mb-4 text-center">
                Acleda Unity
              </h3>
              <div className="flex justify-center mb-6">
                <img
                  src="assets/customer_services/acleda.jpg"
                  alt="Acleda Unity App"
                  className="h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placeholder.com/150x80?text=Acleda+Unity";
                  }}
                />
              </div>
              <ol className="list-decimal ml-4 text-gray-700 space-y-2">
                <li>Select Internet Provider Bill</li>
                <li>Select SINET</li>
                <li>Enter Consumer Number (Customer ID)</li>
                <li>Enter Invoice Amount in USD</li>
                <li>
                  Click Next and you shall receive a confirmation of payment.
                </li>
              </ol>
            </div>

            {/* ABA Mobile App */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#5db6a6]">
              <h3 className="text-xl font-medium text-[#5db6a6] mb-4 text-center">
                ABA Mobile App
              </h3>
              <div className="flex justify-center mb-6">
                <img
                  src="assets/customer_services/aba.jpg"
                  alt="ABA Mobile App"
                  className="h-20 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placeholder.com/150x80?text=ABA+App";
                  }}
                />
              </div>
              <ol className="list-decimal ml-4 text-gray-700 space-y-2">
                <li>Select Payment</li>
                <li>Select Internet/TV</li>
                <li>Select SINET</li>
                <li>Select Your Bank Account</li>
                <li>Enter Customer ID</li>
                <li>Enter Invoice Amount in USD</li>
                <li>
                  Click PAY NOW and you shall receive a confirmation of payment.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Transfer Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">BANK TRANSFER</h2>
          <p className="text-center max-w-4xl mx-auto mb-6 text-gray-700">
            If you prefer bank transfer, SINET accept Cheque or Direct Deposit
            to any of the below bank accounts.
          </p>
          <p className="text-center max-w-4xl mx-auto mb-12 text-gray-700">
            Please keep the deposit slip and notify our billing executive by
            phone 081 301 999 or email: billing@sinet.com.kh once you made the
            transfer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* J Trust Royal Bank */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-medium text-[#5db6a6] mb-4">
                J Trust Royal Bank
              </h3>
              <div className="h-20 flex items-center justify-center mb-4">
                <img
                  src="assets/customer_services/j_trust_logo.png"
                  alt="J Trust Royal Bank"
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placeholder.com/150x60?text=J+Trust+Bank";
                  }}
                />
              </div>
            </div>

            {/* Acleda Bank */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-medium text-[#5db6a6] mb-4">
                Acleda Bank
              </h3>
              <div className="h-20 flex items-center justify-center mb-4">
                <img
                  src="assets/customer_services/acleda_logo.jpg"
                  alt="Acleda Bank"
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placeholder.com/150x60?text=Acleda+Bank";
                  }}
                />
              </div>
            </div>

            {/* Campu eBanking */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-medium text-[#5db6a6] mb-4">
                Campu eBanking
              </h3>
              <div className="h-20 flex items-center justify-center mb-4">
                <img
                  src="assets/customer_services/campu_logo.jpg"
                  alt="Campu eBanking"
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placeholder.com/150x60?text=Campu+Bank";
                  }}
                />
              </div>
            </div>

            {/* ABA iBanking */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-medium text-[#5db6a6] mb-4">
                ABA iBanking
              </h3>
              <div className="h-20 flex items-center justify-center mb-4">
                <img
                  src="assets/customer_services/aba_logo.png"
                  alt="ABA iBanking"
                  className="h-12 object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placeholder.com/150x60?text=ABA+Bank";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cash Collection Section */}
      <section className="py-16 bg-[#e0f7f5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">CASH COLLECTION</h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-4 text-gray-700">
              If all above methods are not suitable, SINET offers to collect
              cash by our official Collector.
            </p>
            <p className="mb-8 text-gray-700">
              Please call 081 301 999 or email billing@sinet.com.kh for
              assistance.
            </p>

            {/* <div className="flex justify-center gap-6 flex-wrap">
              <Button
                size="lg"
                className="bg-sinet-dark hover:bg-sinet-darkest flex items-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>Contact Billing Team</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sinet-dark text-sinet-dark hover:bg-sinet-light flex items-center gap-2"
              >
                <Wallet className="w-5 h-5" />
                <span>Download Payment Guide</span>
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentOptions;
