import ValuationCalculatorLanding from "@/components/ValuationCalculatorLanding";
import { Calculator, Shield, TrendingUp, BarChart3 } from "lucide-react";

const config = {
  city: "Jacksonville",
  path: "/business-valuation-calculator-jacksonville",
  parentPath: "/business-valuation-calculator-florida",
  parentLabel: "Valuation Calculator Florida",
  heroDescription: "Jacksonville's logistics, healthcare, and financial services sectors drive strong M&A activity in Northeast Florida. Use our free calculator to get an instant EBITDA-based estimate of your Jacksonville business's enterprise value.",
  whyItems: [
    { icon: BarChart3, title: "Northeast FL Data", desc: "Valuation benchmarks reflecting Jacksonville's logistics-driven and diversified economy." },
    { icon: Shield, title: "100% Confidential", desc: "Your data is never shared. Every inquiry is protected under strict confidentiality." },
    { icon: Calculator, title: "EBITDA-Based", desc: "Industry-standard methodology using adjusted EBITDA and sector multipliers." },
    { icon: TrendingUp, title: "Growing Market", desc: "Jacksonville's rapid growth and strategic port location support strong buyer demand." },
  ],
  faqItems: [
    { q: "What are business valuation multiples in Jacksonville?", a: "Jacksonville businesses typically see EBITDA multiples of 3x–6.5x depending on sector, size, and business health. Logistics, healthcare, and financial services businesses often achieve above-average multiples due to Jacksonville's strategic position." },
    { q: "How do I value my Jacksonville business?", a: "Start with our free EBITDA-based calculator for a directional range. For a formal valuation with financial normalization and market comps, request one with a single click after receiving your estimate." },
    { q: "What makes Jacksonville businesses attractive to buyers?", a: "Jacksonville's port infrastructure, military presence, financial services hub, and rapid population growth create a diverse buyer pool. Businesses with recurring revenue and customer diversification are particularly attractive." },
    { q: "Is the calculator confidential?", a: "Yes, completely confidential. Your information is only shared with our advisory team and is never disclosed to third parties without your explicit written consent." },
  ],
  relatedLinks: [
    { to: "/sell-business-jacksonville", label: "Sell a Business in Jacksonville", desc: "Jacksonville M&A advisory" },
    { to: "/business-valuation-calculator-florida", label: "Florida Calculator", desc: "Statewide valuation tool" },
    { to: "/valuation-calculator", label: "Start Calculator", desc: "Free EBITDA estimate" },
  ],
};

const BusinessValuationCalculatorJacksonville = () => <ValuationCalculatorLanding config={config} />;
export default BusinessValuationCalculatorJacksonville;
