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
const SellBusinessMiami = lazy(() => import("./pages/SellBusinessMiami"));
const SellBusinessTampa = lazy(() => import("./pages/SellBusinessTampa"));
const SellBusinessOrlando = lazy(() => import("./pages/SellBusinessOrlando"));
const SellBusinessJacksonville = lazy(() => import("./pages/SellBusinessJacksonville"));
const SellBusinessFortLauderdale = lazy(() => import("./pages/SellBusinessFortLauderdale"));
const SellTechnologyCompanyFlorida = lazy(() => import("./pages/SellTechnologyCompanyFlorida"));
const SellProfessionalServicesFirmFlorida = lazy(() => import("./pages/SellProfessionalServicesFirmFlorida"));
const SellHVACCompanyFlorida = lazy(() => import("./pages/SellHVACCompanyFlorida"));
const SellLandscapingBusinessFlorida = lazy(() => import("./pages/SellLandscapingBusinessFlorida"));
const BuyBusinessFlorida = lazy(() => import("./pages/BuyBusinessFlorida"));
const BusinessesForSaleFlorida = lazy(() => import("./pages/BusinessesForSaleFlorida"));
const WhatIsEBITDA = lazy(() => import("./pages/WhatIsEBITDA"));
const HowToSellABusiness = lazy(() => import("./pages/HowToSellABusiness"));
const BusinessBrokerVsMAAdvisor = lazy(() => import("./pages/BusinessBrokerVsMAAdvisor"));
const SellerFinancingExplained = lazy(() => import("./pages/SellerFinancingExplained"));
const Consulting = lazy(() => import("./pages/Consulting"));
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
              <Route path="/sell-business-miami" element={<SellBusinessMiami />} />
              <Route path="/sell-business-tampa" element={<SellBusinessTampa />} />
              <Route path="/sell-business-orlando" element={<SellBusinessOrlando />} />
              <Route path="/sell-business-jacksonville" element={<SellBusinessJacksonville />} />
              <Route path="/sell-business-fort-lauderdale" element={<SellBusinessFortLauderdale />} />
              <Route path="/sell-technology-company-florida" element={<SellTechnologyCompanyFlorida />} />
              <Route path="/sell-professional-services-firm-florida" element={<SellProfessionalServicesFirmFlorida />} />
              <Route path="/sell-hvac-company-florida" element={<SellHVACCompanyFlorida />} />
              <Route path="/sell-landscaping-business-florida" element={<SellLandscapingBusinessFlorida />} />
              <Route path="/buy-a-business-in-florida" element={<BuyBusinessFlorida />} />
              <Route path="/businesses-for-sale-florida" element={<BusinessesForSaleFlorida />} />
              <Route path="/what-is-ebitda" element={<WhatIsEBITDA />} />
              <Route path="/how-to-sell-a-business" element={<HowToSellABusiness />} />
              <Route path="/business-broker-vs-ma-advisor" element={<BusinessBrokerVsMAAdvisor />} />
              <Route path="/seller-financing-explained" element={<SellerFinancingExplained />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
