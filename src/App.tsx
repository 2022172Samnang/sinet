import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FiberEdge from "./pages/FiberEdge";
import FiberPlus from "./pages/FiberPlus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/sinet/">
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
