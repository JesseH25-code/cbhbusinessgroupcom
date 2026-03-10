import ValuationCalculatorLanding from "@/components/ValuationCalculatorLanding";
import { Calculator, Shield, TrendingUp, Users } from "lucide-react";

const config = {
  city: "Fort Lauderdale",
  path: "/business-valuation-calculator-fort-lauderdale",
  parentPath: "/business-valuation-calculator-florida",
  parentLabel: "Valuation Calculator Florida",
  heroDescription: "Fort Lauderdale and Broward County's thriving business community — from marine industries to professional services — creates a competitive M&A environment. Get a free, instant EBITDA-based estimate of your business's value.",
  whyItems: [
    { icon: Users, title: "Active Buyer Market", desc: "Fort Lauderdale's proximity to Miami attracts both local and international acquirers." },
    { icon: Shield, title: "Total Confidentiality", desc: "NDA-protected process from initial inquiry through deal closing." },
    { icon: Calculator, title: "EBITDA Multiples", desc: "Industry-specific multipliers reflecting South Florida transaction data." },
    { icon: TrendingUp, title: "Premium Valuations", desc: "Broward County's strong economic fundamentals support competitive deal pricing." },
  ],
  faqItems: [
    { q: "What is my Fort Lauderdale business worth?", a: "Business value depends on adjusted EBITDA, industry multiples, and business health factors. Fort Lauderdale businesses typically see EBITDA multiples of 3x–7x. Our free calculator provides a directional estimate in under 3 minutes." },
    { q: "What industries are strongest in Fort Lauderdale for M&A?", a: "Marine services, technology, professional services, construction, and healthcare are particularly active M&A sectors in the Fort Lauderdale / Broward County market." },
    { q: "How does Fort Lauderdale compare to Miami for valuations?", a: "Fort Lauderdale valuations are generally comparable to Miami, with slightly lower overhead costs often improving EBITDA margins. Both markets benefit from South Florida's international buyer pool and strong economic growth." },
    { q: "Can I go from calculator to formal valuation instantly?", a: "Yes — after receiving your free estimate, click 'Request Formal Valuation' and all your data transfers automatically. A senior advisor contacts you within one business day." },
  ],
  relatedLinks: [
    { to: "/sell-business-fort-lauderdale", label: "Sell a Business in Fort Lauderdale", desc: "Broward County M&A" },
    { to: "/business-valuation-calculator-miami", label: "Miami Calculator", desc: "Miami valuation tool" },
    { to: "/business-valuation-calculator-florida", label: "Florida Calculator", desc: "Statewide valuation" },
  ],
};

const BusinessValuationCalculatorFortLauderdale = () => <ValuationCalculatorLanding config={config} />;
export default BusinessValuationCalculatorFortLauderdale;
