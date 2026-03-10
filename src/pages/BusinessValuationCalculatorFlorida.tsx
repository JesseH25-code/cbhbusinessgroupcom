import ValuationCalculatorLanding from "@/components/ValuationCalculatorLanding";
import { Calculator, Shield, TrendingUp, BarChart3 } from "lucide-react";

const config = {
  city: "Florida",
  path: "/business-valuation-calculator-florida",
  parentPath: "/business-valuation",
  parentLabel: "Business Valuation",
  heroDescription: "Whether you're in Miami, Tampa, Orlando, or anywhere in Florida — use our free EBITDA-based valuation calculator to get an instant estimate of your company's enterprise value. Built for Florida business owners considering a sale, exit, or strategic transaction.",
  whyItems: [
    { icon: BarChart3, title: "Florida Market Data", desc: "Valuation multiples calibrated to Florida's diverse and growing business landscape." },
    { icon: Shield, title: "100% Confidential", desc: "Your information is never shared. Every inquiry is protected under strict confidentiality." },
    { icon: Calculator, title: "EBITDA-Based Method", desc: "Industry-standard approach using adjusted EBITDA and sector-specific multipliers." },
    { icon: TrendingUp, title: "Instant Results", desc: "Get your preliminary valuation range in under 3 minutes — then request a formal valuation with one click." },
  ],
  faqItems: [
    { q: "How accurate is a free business valuation calculator?", a: "Our calculator provides a directional estimate based on EBITDA multiples and business health factors. It's a useful starting point, but a formal valuation — which includes financial normalization, market comps, and deal structure analysis — is required for transaction-ready pricing." },
    { q: "What industries does the calculator cover?", a: "The calculator covers 9 major sectors including Construction, Healthcare, Technology, Manufacturing, Professional Services, HVAC, Restaurants, Landscaping, and more. Each sector uses industry-specific EBITDA multiples." },
    { q: "What are typical valuation multiples for Florida businesses?", a: "Florida businesses in the $3M–$50M range typically see EBITDA multiples of 3x–7x, depending on industry, size, growth rate, recurring revenue, and customer concentration. Florida's population growth and business-friendly environment support strong buyer demand." },
    { q: "Can I request a formal valuation after using the calculator?", a: "Yes — after receiving your estimate, you can request a comprehensive valuation with one click. All your data carries forward automatically, so you don't need to re-enter anything. A senior advisor will contact you within one business day." },
  ],
  relatedLinks: [
    { to: "/business-valuation", label: "Business Valuation Services", desc: "Comprehensive valuation advisory" },
    { to: "/valuation-calculator", label: "Start Calculator Now", desc: "Free EBITDA-based estimate" },
    { to: "/sell-business-florida", label: "Sell a Business in Florida", desc: "Full M&A advisory services" },
  ],
};

const BusinessValuationCalculatorFlorida = () => <ValuationCalculatorLanding config={config} />;
export default BusinessValuationCalculatorFlorida;
