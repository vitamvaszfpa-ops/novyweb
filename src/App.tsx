import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import ZFPHelpsPage from "./pages/ZFPHelpsPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AssistantProfilePage from "./pages/AssistantProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-mne" element={<AboutPage />} />
          <Route path="/sluzby" element={<ServicesPage />} />
          <Route path="/kariera" element={<CareerPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/muj-tym" element={<TeamPage />} />
          <Route path="/zfp-pomaha" element={<ZFPHelpsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/cookies" element={<CookiePolicyPage />} />
          <Route path="/ochrana-udaju" element={<PrivacyPolicyPage />} />
          <Route path="/tym/:id" element={<AssistantProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
