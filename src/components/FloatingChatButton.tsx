// src/components/FloatingChatButton.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, // Initial chat icon (similar to Amazon Chime)
  Send, // Telegram
  Facebook,
  Phone,
  Mail,
  Linkedin,
  MapPin,
  X, // Close icon
} from "lucide-react";

interface ContactLink {
  id: string;
  icon: React.ElementType;
  href: string;
  label: string;
  bgColorClass?: string; // Optional for different background colors
}

const contactLinks: ContactLink[] = [
  {
    id: "telegram",
    icon: Send,
    href: "https://t.me/SINET_KH",
    label: "Telegram",
    bgColorClass: "bg-cyan-500 hover:bg-cyan-600",
  },
  {
    id: "facebook",
    icon: Facebook,
    href: "https://www.facebook.com/sinet.com.kh/",
    label: "Facebook",
    bgColorClass: "bg-cyan-500 hover:bg-cyan-600",
  },
  {
    id: "phone",
    icon: Phone,
    href: "tel:+85581801999",
    label: "Call Us",
    bgColorClass: "bg-cyan-500 hover:bg-cyan-600",
  },
  {
    id: "email",
    icon: Mail,
    href: "mailto:sales@sinet.com.kh",
    label: "Email Us",
    bgColorClass: "bg-cyan-500 hover:bg-cyan-600",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    href: "https://www.linkedin.com/company/sinet.com.kh",
    label: "LinkedIn",
    bgColorClass: "bg-cyan-500 hover:bg-cyan-600",
  },
  {
    id: "map",
    icon: MapPin,
    href: "https://maps.google.com/?q=Your+SINET+Office+Address",
    label: "Our Location",
    bgColorClass: "bg-cyan-500 hover:bg-cyan-600",
  },
];

const FloatingChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const mainButtonColor = "bg-teal-700 hover:bg-teal-800"; // Darker teal for main/close
  const iconColor = "text-white";
  const iconSize = 28; // For main/close button
  const smallIconSize = 22; // For expanded contact icons

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05, // Stagger animation for child items
      },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Expanded Contact Icons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-center space-y-2 mb-3"
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                variants={itemVariants}
                className={`${
                  link.bgColorClass || "bg-cyan-500 hover:bg-cyan-600"
                } ${iconColor} p-2.5 rounded-full shadow-md transition-transform duration-150 ease-in-out hover:scale-110`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={smallIconSize} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        className={`${mainButtonColor} ${iconColor} p-3.5 rounded-full shadow-xl transition-transform duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        // Animate icon change
        initial={false} // Prevents initial animation on load
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isOpen ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={iconSize} /> : <MessageSquare size={iconSize} />}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingChatButton;
