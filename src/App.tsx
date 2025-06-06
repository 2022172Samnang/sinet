import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Removed ScrollRestoration if it was there
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FiberEdge from "./pages/FiberEdge";
import FiberPlus from "./pages/FiberPlus";
import DPLCService from "./pages/DPLCService";
import IPLCService from "./pages/IPLCService";
import IPTransit from "./pages/IPTransit";
import PaymentOptions from "./pages/PaymentOptions";
import BackbonePage from "./pages/BackbonePage";
import WhySinet from "./pages/WhySinet";
import VPSService from "./pages/VPSService";
import HardwareSales from "./pages/HardwareSales";
import TechnicalSupport from "./pages/TechnicalSupport";
import CompanyOverview from "./pages/CompanyOverview";
import CareerPage from "./pages/CareerPage";
import FloatingChatButton from "./components/FloatingChatButton";
import DiaPage from "./pages/DiaPage";
import FiberHomePage from "./pages/FiberHomePage";
import FiberPrimePage from "./pages/FiberPrimePage";
import FiberFirstClassPage from "./pages/FiberFirstClassPage";
import CompareAllHomePackagesPage from "./pages/CompareAllHomePackagesPage";
import CompareAllPackagesPage from "./pages/CompareAllPackagesPage";
import ContactPage from "./pages/ContactPage";

import ScrollToTop from "./components/ScrollToTop"; // Adjust the path to where you created ScrollToTop.tsx
import ContactForm from "./components/ContactForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <ScrollToTop /> {/* Add the custom ScrollToTop component here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/internet-solutions" element={<Index />} />
          <Route path="/enterprise-solutions" element={<Index />} />
          <Route path="/customer-services" element={<Index />} />
          <Route path="/about-us" element={<Index />} />
          <Route path="/business-internet" element={<Index />} />
          <Route path="/home-internet" element={<Index />} />
          <Route path="/fiber-edge" element={<FiberEdge />} />
          <Route path="/fiber-plus" element={<FiberPlus />} />
          <Route path="/dia" element={<DiaPage />} />
          <Route path="/fiber-home" element={<FiberHomePage />} />
          <Route path="/fiber-prime" element={<FiberPrimePage />} />
          <Route path="/first-class" element={<FiberFirstClassPage />} />
          <Route
            path="/home-internet/compare-all"
            element={<CompareAllHomePackagesPage />}
          />
          <Route
            path="/compare-all-packages"
            element={<CompareAllPackagesPage />}
          />
          <Route path="/enterprise-solution/dplc" element={<DPLCService />} />
          <Route path="/enterprise-solution/iplc" element={<IPLCService />} />
          <Route
            path="/enterprise-solution/hardware-sales"
            element={<HardwareSales />}
          />
          <Route
            path="/enterprise-solution/virtual-private-server"
            element={<VPSService />}
          />
          <Route
            path="/enterprise-solution/ip-transit"
            element={<IPTransit />}
          />
          <Route
            path="/customer-service/payment-options"
            element={<PaymentOptions />}
          />
          <Route
            path="/customer-service/technical-support"
            element={<TechnicalSupport />}
          />
          <Route
            path="/about-us/company-profile"
            element={<CompanyOverview />}
          />
          <Route path="/about-us/careers" element={<CareerPage />} />
          <Route path="/about-us/our-network" element={<BackbonePage />} />
          <Route path="/about-us/why-sinet" element={<WhySinet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <FloatingChatButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
