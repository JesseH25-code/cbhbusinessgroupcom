import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Industries = lazy(() => import("./pages/Industries"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Opportunities = lazy(() => import("./pages/Opportunities"));
const Sellers = lazy(() => import("./pages/Sellers"));
const Buyers = lazy(() => import("./pages/Buyers"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminBlog = lazy(() => import("./pages/AdminBlog"));
const AdminOpportunities = lazy(() => import("./pages/AdminOpportunities"));
const SellBusinessFlorida = lazy(() => import("./pages/SellBusinessFlorida"));
const BusinessValuation = lazy(() => import("./pages/BusinessValuation"));
const SellRestaurantFlorida = lazy(() => import("./pages/SellRestaurantFlorida"));
const SellConstructionCompanyFlorida = lazy(() => import("./pages/SellConstructionCompanyFlorida"));
const SellHealthcareBusinessFlorida = lazy(() => import("./pages/SellHealthcareBusinessFlorida"));
const SellManufacturingCompanyFlorida = lazy(() => import("./pages/SellManufacturingCompanyFlorida"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/sellers" element={<Sellers />} />
              <Route path="/buyers" element={<Buyers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/opportunities" element={<AdminOpportunities />} />
              <Route path="/sell-business-florida" element={<SellBusinessFlorida />} />
              <Route path="/business-valuation" element={<BusinessValuation />} />
              <Route path="/sell-restaurant-florida" element={<SellRestaurantFlorida />} />
              <Route path="/sell-construction-company-florida" element={<SellConstructionCompanyFlorida />} />
              <Route path="/sell-healthcare-business-florida" element={<SellHealthcareBusinessFlorida />} />
              <Route path="/sell-manufacturing-company-florida" element={<SellManufacturingCompanyFlorida />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
