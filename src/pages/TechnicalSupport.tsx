import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Footer from "@/components/Footer";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import ContactForm from "@/components/ContactForm";

interface FAQItem {
  id: number;
  question: string;
  answer: string | string[]; // Can be a single string or an array of paragraphs
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How many days do SINET take to complete a new connection?",
    answer: [
      "We are committed to complete a new connection no later than 1 week from the date of Order Confirmation.",
      "On average, our customer get a working connection from us within 3-4 days.",
      "An Order is confirmed once the registration is done and we receive the pre-payment for the service.",
    ],
  },
  {
    id: 2,
    question: "What do SINET provide in term of hardware?",
    answer:
      "SINET provides industry-standard, carrier-grade hardware suitable for your chosen service. This may include an Optical Network Unit (ONU) for fiber connections and high-performance WiFi routers available for purchase. For specific models or enterprise solutions, please contact our sales team.",
  },
  {
    id: 3,
    question: "I want to upgrade the speed, who should I contact?",
    answer:
      "To upgrade your internet speed, please contact our Customer Service team or your assigned Account Manager. You can reach Customer Service via phone at 023 888 181 / 081 801 999, email at support@sinet.com.kh, or through our online chat.",
  },
  {
    id: 4,
    question: "How to know what is my Service ID?",
    answer:
      "Your Service ID (also sometimes referred to as Customer ID or Account Number) can be found on your SINET service agreement, monthly invoice, or by contacting our Customer Service team. Please have your registered name or phone number ready when you call.",
  },
  {
    id: 5,
    question:
      "When SINET provide 15Mbps Dedicated connection, what does the 15Mbps mean?",
    answer:
      "A 15Mbps Dedicated connection means you receive a symmetrical bandwidth of 15 Megabits per second. 'Dedicated' implies that this bandwidth is exclusively yours and not shared with other users, ensuring consistent upload and download speeds up to 15Mbps at all times. This is ideal for businesses requiring reliable performance.",
  },
  {
    id: 6,
    question:
      "I'm subscribing to a 35Mbps line, why did I get only 10Mbps on SpeedTest?",
    answer: [
      "Several factors can affect SpeedTest results:",
      "1. Testing Method: Ensure you are testing via a wired Ethernet connection directly to the router, not over WiFi, as WiFi speeds can be lower due to interference or device limitations.",
      "2. Server Selection: The SpeedTest server you connect to can impact results. Try selecting a server geographically close to you or specifically recommended by SINET.",
      "3. Device Capability: Older devices or network cards might not support higher speeds.",
      "4. Background Usage: Other devices or applications on your network might be consuming bandwidth.",
      "If issues persist after checking these, please contact our Technical Support for assistance.",
    ],
  },
  {
    id: 7,
    question:
      "If I have to test, which speedtest method is most representative of bandwidth I subscribe?",
    answer:
      "For the most representative test: \n1. Use a computer connected directly to your SINET router/ONU via an Ethernet cable (avoid WiFi for testing). \n2. Ensure no other devices are using the internet heavily during the test. \n3. Close unnecessary applications on the testing computer. \n4. Use a reputable speed test service like Speedtest.net (by Ookla) or Fast.com, and select a test server located within Cambodia or a major regional hub like Singapore or Hong Kong for international speed checks. SINET may also provide a specific test server URL for optimal results.",
  },
  {
    id: 8,
    question:
      "I used to live in London have a 50Mbps line. It feels much faster than the 100Mbps line in Cambodia. Why?",
    answer:
      "Perceived speed can be influenced by latency (ping time) to frequently accessed servers. If servers for services you used in London (e.g., UK-based websites, game servers) are geographically distant from Cambodia, the data takes longer to travel, resulting in higher latency. Even with higher bandwidth (100Mbps), this delay can make the connection 'feel' slower for those specific services. Local Cambodian or regional Asian services should feel very fast on your 100Mbps SINET line.",
  },
  {
    id: 9,
    question: "Which International Internet Hubs is SINET connected to?",
    answer:
      "SINET maintains direct peering and transit connections with multiple Tier-1 global internet backbone providers and major content delivery networks (CDNs) in key international hubs such as Singapore, Hong Kong, Malaysia, Thailand, and others. This diverse connectivity ensures low latency and resilient routes for international traffic.",
  },
  {
    id: 10,
    question: "My connection feels slow than usual, what should I do?",
    answer: [
      "1. Restart your modem/router and your computer/device.",
      "2. Check if other devices on your network are heavily using the internet (e.g., downloads, streaming).",
      "3. Perform a speed test using a wired connection if possible.",
      "4. Scan your computer for viruses or malware.",
      "5. If the issue persists, note down any specific websites or services that are slow and contact SINET Technical Support with these details and your Service ID.",
    ],
  },
  {
    id: 11,
    question: "My connection is totally cut off, what should I do?",
    answer: [
      "1. Check the lights on your modem/ONU. Are they indicating a problem (e.g., red light, no light for 'PON' or 'Internet')?",
      "2. Ensure all cables (power, fiber/Ethernet) are securely connected to your modem/router and wall socket.",
      "3. Restart your modem/ONU. Unplug it from power, wait for 30 seconds, then plug it back in. Wait a few minutes for it to reconnect.",
      "4. Check if there's a known outage in your area by visiting SINET's website or social media, or by calling Customer Service.",
      "5. If these steps don't resolve the issue, please contact SINET Technical Support immediately at 023 888 181 / 081 801 999 with your Service ID.",
    ],
  },
];

const TechnicalSupport: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1); // Default to first FAQ open

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div>
      <Navbar />
      {/* Changed bg-teal-50 to bg-white here */}
      <div className="bg-white min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
            CUSTOMER SUPPORT
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-16">
            {/* Left Column: Form */}
            <div>
              <p className="text-gray-700 mb-4">
                Please leave your question or comment here and we will get back
                to you as soon as possible.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <textarea
                  className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Your question or comment..."
                ></textarea>
                <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-md transition duration-150 ease-in-out">
                  Send
                </button>
              </div>
            </div>
            {/* Right Column: Contact Details */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Sales
                  </h2>
                  <p className="text-gray-700">Tel: (+855) 81 801 999</p>
                  <p className="text-gray-700">Email: sales@sinet.com.kh</p>
                  <p className="text-gray-700">Whatsapp: +855 81 801 999</p>
                  <p className="text-gray-700">
                    Telegram: https://t.me/SINET_KH
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Billing
                  </h2>
                  <p className="text-gray-700">Tel: (+855) 81 301 999</p>
                  <p className="text-gray-700">Email: billing@sinet.com.k</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Technical Support
                  </h2>
                  <p className="text-gray-700">Tel: (+855) 81 901 999</p>
                  <p className="text-gray-700">Email: support@sinet.com.kh</p>
                  <p className="text-gray-700">Telegram: +855 81 901 999</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section with white background */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 md:mb-12">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-teal-500 rounded-lg shadow">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center text-left p-4 md:p-5 font-medium text-white focus:outline-none"
                    aria-expanded={openFAQ === faq.id}
                  >
                    <span>{`${faq.id}. ${faq.question}`}</span>
                    {/* 
                    You can add Chevron icons here if you have them imported and want them:
                    {openFAQ === faq.id ? <ChevronUp className="h-5 w-5 text-white" /> : <ChevronDown className="h-5 w-5 text-white" />}
                    */}
                  </button>
                  {openFAQ === faq.id && (
                    <div className="p-4 md:p-5 bg-teal-100 text-teal-800 rounded-b-lg">
                      {Array.isArray(faq.answer) ? (
                        faq.answer.map((paragraph, index) => (
                          <p key={index} className={index > 0 ? "mt-2" : ""}>
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechnicalSupport;
