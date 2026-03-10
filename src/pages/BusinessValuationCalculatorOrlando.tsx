import ValuationCalculatorLanding from "@/components/ValuationCalculatorLanding";
import { Calculator, Shield, TrendingUp, BarChart3 } from "lucide-react";

const config = {
  city: "Orlando",
  path: "/business-valuation-calculator-orlando",
  parentPath: "/business-valuation-calculator-florida",
  parentLabel: "Valuation Calculator Florida",
  heroDescription: "Orlando's diversified economy — from tourism and hospitality to technology and healthcare — creates strong M&A activity across multiple sectors. Get a free, instant EBITDA-based estimate of your Orlando business's value.",
  whyItems: [
    { icon: BarChart3, title: "Orlando Market Data", desc: "Valuation benchmarks reflecting Central Florida's diverse and resilient economy." },
    { icon: Shield, title: "Total Confidentiality", desc: "Strict NDA-protected process from first inquiry through closing." },
    { icon: Calculator, title: "Industry Multiples", desc: "Sector-specific EBITDA multipliers for Orlando's key industries." },
    { icon: TrendingUp, title: "Diversified Economy", desc: "Orlando's broad industry base supports consistent buyer demand across sectors." },
  ],
  faqItems: [
    { q: "What is my Orlando business worth?", a: "Business value depends on adjusted EBITDA, industry multiples, growth trajectory, and risk factors. Our free calculator provides a directional estimate in under 3 minutes. For a formal valuation, request one with a single click after receiving your estimate." },
    { q: "What industries are most valuable in Orlando?", a: "Healthcare, technology, professional services, and construction businesses in Orlando typically command the strongest multiples. Tourism and hospitality businesses can also achieve good valuations when they demonstrate consistent EBITDA and diversified revenue." },
    { q: "How do Orlando valuation multiples compare?", a: "Orlando businesses generally see EBITDA multiples of 3x–6.5x. Companies with strong growth, recurring revenue, and management independence can push into the 5x–7x+ range, particularly in technology and healthcare." },
    { q: "What information do I need for the calculator?", a: "You'll need approximate revenue range, EBITDA range, years in business, employee count, and qualitative factors like growth trend, customer concentration, and recurring revenue percentage." },
  ],
  relatedLinks: [
    { to: "/sell-business-orlando", label: "Sell a Business in Orlando", desc: "Orlando M&A advisory" },
    { to: "/business-valuation-calculator-florida", label: "Florida Calculator", desc: "Statewide valuation tool" },
    { to: "/business-valuation", label: "Valuation Services", desc: "Comprehensive advisory" },
  ],
};

const BusinessValuationCalculatorOrlando = () => <ValuationCalculatorLanding config={config} />;
export default BusinessValuationCalculatorOrlando;
