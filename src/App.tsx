
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FiberEdge from "./pages/FiberEdge";
import FiberPlus from "./pages/FiberPlus";
import DPLCService from "./pages/DPLCService";
import IPLCService from "./pages/IPLCService";
import IPTransit from "./pages/IPTransit";
import PaymentOptions from "./pages/PaymentOptions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* <BrowserRouter basename="/sinet/"> */}
      <BrowserRouter>
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
          <Route path="/enterprise-solution/dplc" element={<DPLCService />} />
          <Route path="/enterprise-solution/iplc" element={<IPLCService />} />
          <Route path="/enterprise-solution/ip-transit" element={<IPTransit />} />
          <Route path="/customer-service/payment-options" element={<PaymentOptions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
