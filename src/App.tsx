import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
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
const SellInsuranceCompanyFlorida = lazy(() => import("./pages/SellInsuranceCompanyFlorida"));
const SellLawncareBusinessFlorida = lazy(() => import("./pages/SellLawncareBusinessFlorida"));
const SellTitleCompanyFlorida = lazy(() => import("./pages/SellTitleCompanyFlorida"));
const BuyBusinessFlorida = lazy(() => import("./pages/BuyBusinessFlorida"));
const BusinessesForSaleFlorida = lazy(() => import("./pages/BusinessesForSaleFlorida"));
const WhatIsEBITDA = lazy(() => import("./pages/WhatIsEBITDA"));
const HowToSellABusiness = lazy(() => import("./pages/HowToSellABusiness"));
const BusinessBrokerVsMAAdvisor = lazy(() => import("./pages/BusinessBrokerVsMAAdvisor"));
const SellerFinancingExplained = lazy(() => import("./pages/SellerFinancingExplained"));
const Consulting = lazy(() => import("./pages/Consulting"));
const ValuationCalculator = lazy(() => import("./pages/ValuationCalculator"));
const BusinessValuationCalculatorFlorida = lazy(() => import("./pages/BusinessValuationCalculatorFlorida"));
const BusinessValuationCalculatorMiami = lazy(() => import("./pages/BusinessValuationCalculatorMiami"));
const BusinessValuationCalculatorTampa = lazy(() => import("./pages/BusinessValuationCalculatorTampa"));
const BusinessValuationCalculatorOrlando = lazy(() => import("./pages/BusinessValuationCalculatorOrlando"));
const BusinessValuationCalculatorJacksonville = lazy(() => import("./pages/BusinessValuationCalculatorJacksonville"));
const BusinessValuationCalculatorFortLauderdale = lazy(() => import("./pages/BusinessValuationCalculatorFortLauderdale"));
const BusinessValuationCalculatorNaples = lazy(() => import("./pages/BusinessValuationCalculatorNaples"));
const BusinessValuationCalculatorSarasota = lazy(() => import("./pages/BusinessValuationCalculatorSarasota"));
const BusinessValuationCalculatorPalmBeach = lazy(() => import("./pages/BusinessValuationCalculatorPalmBeach"));
const BusinessGrowthRoadmap = lazy(() => import("./pages/BusinessGrowthRoadmap"));
const Resources = lazy(() => import("./pages/Resources"));
const FloridaMABenchmarks = lazy(() => import("./pages/FloridaMABenchmarks"));
const AIAutomationConsultingFlorida = lazy(() => import("./pages/AIAutomationConsultingFlorida"));
const WorkflowOptimizationFlorida = lazy(() => import("./pages/WorkflowOptimizationFlorida"));
const SellMyBusinessMiami = lazy(() => import("./pages/SellMyBusinessMiami"));
const SellMyBusinessTampa = lazy(() => import("./pages/SellMyBusinessTampa"));
const SellMyBusinessOrlando = lazy(() => import("./pages/SellMyBusinessOrlando"));
const SellMyBusinessJacksonville = lazy(() => import("./pages/SellMyBusinessJacksonville"));
const SellMyBusinessFortLauderdale = lazy(() => import("./pages/SellMyBusinessFortLauderdale"));
const BusinessBrokerMiami = lazy(() => import("./pages/BusinessBrokerMiami"));
const BusinessBrokerTampa = lazy(() => import("./pages/BusinessBrokerTampa"));
const BusinessBrokerOrlando = lazy(() => import("./pages/BusinessBrokerOrlando"));
const BusinessBrokerJacksonville = lazy(() => import("./pages/BusinessBrokerJacksonville"));
const BusinessBrokerFortLauderdale = lazy(() => import("./pages/BusinessBrokerFortLauderdale"));
const IndustryCityPage = lazy(() => import("./pages/IndustryCityPage"));
const Glossary = lazy(() => import("./pages/Glossary"));
const GlossaryPage = lazy(() => import("./pages/GlossaryPage"));
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
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
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
              <Route path="/sell-insurance-company-florida" element={<SellInsuranceCompanyFlorida />} />
              <Route path="/sell-lawncare-business-florida" element={<SellLawncareBusinessFlorida />} />
              <Route path="/sell-title-company-florida" element={<SellTitleCompanyFlorida />} />
              <Route path="/buy-a-business-in-florida" element={<BuyBusinessFlorida />} />
              <Route path="/businesses-for-sale-florida" element={<BusinessesForSaleFlorida />} />
              <Route path="/what-is-ebitda" element={<WhatIsEBITDA />} />
              <Route path="/how-to-sell-a-business" element={<HowToSellABusiness />} />
              <Route path="/business-broker-vs-ma-advisor" element={<BusinessBrokerVsMAAdvisor />} />
              <Route path="/seller-financing-explained" element={<SellerFinancingExplained />} />
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/valuation-calculator" element={<ValuationCalculator />} />
              <Route path="/business-valuation-calculator-florida" element={<BusinessValuationCalculatorFlorida />} />
              <Route path="/business-valuation-calculator-miami" element={<BusinessValuationCalculatorMiami />} />
              <Route path="/business-valuation-calculator-tampa" element={<BusinessValuationCalculatorTampa />} />
              <Route path="/business-valuation-calculator-orlando" element={<BusinessValuationCalculatorOrlando />} />
              <Route path="/business-valuation-calculator-jacksonville" element={<BusinessValuationCalculatorJacksonville />} />
              <Route path="/business-valuation-calculator-fort-lauderdale" element={<BusinessValuationCalculatorFortLauderdale />} />
              <Route path="/business-valuation-calculator-naples" element={<BusinessValuationCalculatorNaples />} />
              <Route path="/business-valuation-calculator-sarasota" element={<BusinessValuationCalculatorSarasota />} />
              <Route path="/business-valuation-calculator-palm-beach" element={<BusinessValuationCalculatorPalmBeach />} />
              <Route path="/business-growth-roadmap" element={<BusinessGrowthRoadmap />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/florida-ma-benchmarks" element={<FloridaMABenchmarks />} />
              <Route path="/ai-automation-consulting-florida" element={<AIAutomationConsultingFlorida />} />
              <Route path="/workflow-optimization-florida" element={<WorkflowOptimizationFlorida />} />
              <Route path="/sell-my-business-miami" element={<SellMyBusinessMiami />} />
              <Route path="/sell-my-business-tampa" element={<SellMyBusinessTampa />} />
              <Route path="/sell-my-business-orlando" element={<SellMyBusinessOrlando />} />
              <Route path="/sell-my-business-jacksonville" element={<SellMyBusinessJacksonville />} />
              <Route path="/sell-my-business-fort-lauderdale" element={<SellMyBusinessFortLauderdale />} />
              <Route path="/business-broker-miami" element={<BusinessBrokerMiami />} />
              <Route path="/business-broker-tampa" element={<BusinessBrokerTampa />} />
              <Route path="/business-broker-orlando" element={<BusinessBrokerOrlando />} />
              <Route path="/business-broker-jacksonville" element={<BusinessBrokerJacksonville />} />
              <Route path="/business-broker-fort-lauderdale" element={<BusinessBrokerFortLauderdale />} />
              {/* Glossary */}
              <Route path="/glossary" element={<Glossary />} />
              <Route path="/glossary/:slug" element={<GlossaryPage />} />
              {/* Industry × City dynamic pages (40 combos) */}
              <Route path="/:slug" element={<IndustryCityPage />} />
              <Route path="/glossary/working-capital" element={<Navigate to="/glossary/working-capital-adjustment" replace />} />
              <Route path="/growth-roadmap" element={<Navigate to="/business-growth-roadmap" replace />} />
              <Route path="/valuation" element={<Navigate to="/valuation-calculator" replace />} />
              <Route path="/business-valuation-calculator" element={<Navigate to="/business-valuation-calculator-florida" replace />} />
              <Route path="/sell-my-business" element={<Navigate to="/sell-business-florida" replace />} />
              <Route path="/sell-business" element={<Navigate to="/sell-business-florida" replace />} />
              <Route path="/sell-a-business" element={<Navigate to="/sell-business-florida" replace />} />
              <Route path="/buy-business" element={<Navigate to="/buy-a-business-in-florida" replace />} />
              <Route path="/buy-a-business" element={<Navigate to="/buy-a-business-in-florida" replace />} />
              <Route path="/benchmarks" element={<Navigate to="/florida-ma-benchmarks" replace />} />
              <Route path="/ma-benchmarks" element={<Navigate to="/florida-ma-benchmarks" replace />} />
              <Route path="/ebitda" element={<Navigate to="/what-is-ebitda" replace />} />
              <Route path="/broker-vs-advisor" element={<Navigate to="/business-broker-vs-ma-advisor" replace />} />
              <Route path="/seller-financing" element={<Navigate to="/seller-financing-explained" replace />} />
              <Route path="/ai-consulting" element={<Navigate to="/ai-automation-consulting-florida" replace />} />
              <Route path="/automation-consulting" element={<Navigate to="/ai-automation-consulting-florida" replace />} />
              <Route path="/workflow-optimization" element={<Navigate to="/workflow-optimization-florida" replace />} />
              <Route path="/buyer-profile" element={<Navigate to="/buyers" replace />} />
              <Route path="/book-online" element={<Navigate to="/contact" replace />} />
              <Route path="/about-us" element={<Navigate to="/about" replace />} />
              <Route path="/services/contact-us" element={<Navigate to="/contact" replace />} />
              <Route path="/services/*" element={<Navigate to="/services" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
