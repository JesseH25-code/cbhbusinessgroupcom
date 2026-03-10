import ValuationCalculatorLanding from "@/components/ValuationCalculatorLanding";
import { Calculator, Shield, TrendingUp, BarChart3 } from "lucide-react";

const config = {
  city: "Sarasota",
  path: "/business-valuation-calculator-sarasota",
  parentPath: "/business-valuation-calculator-florida",
  parentLabel: "Valuation Calculator Florida",
  heroDescription: "Sarasota and the Gulf Coast's growing business community offers strong M&A potential across healthcare, construction, and professional services. Get a free EBITDA-based estimate of what your Sarasota business is worth.",
  whyItems: [
    { icon: BarChart3, title: "Gulf Coast Benchmarks", desc: "Valuation data reflecting Sarasota-Manatee County's growing and diversified economy." },
    { icon: Shield, title: "Total Confidentiality", desc: "Every inquiry protected under strict NDA — your privacy is paramount." },
    { icon: Calculator, title: "EBITDA Multiples", desc: "Sector-specific multipliers calibrated for Gulf Coast business transactions." },
    { icon: TrendingUp, title: "Growth Corridor", desc: "Sarasota's rapid population growth fuels buyer demand across all sectors." },
  ],
  faqItems: [
    { q: "What is my Sarasota business worth?", a: "Sarasota businesses typically see EBITDA multiples of 3x–6.5x depending on sector and business health. Our free calculator provides a directional estimate based on your industry, financials, and key value drivers." },
    { q: "What industries are growing fastest in Sarasota?", a: "Healthcare, construction, professional services, and technology are among Sarasota's fastest-growing sectors for M&A activity. The region's population boom drives demand across home services, restaurants, and landscaping as well." },
    { q: "How quickly can I get a valuation estimate?", a: "The free calculator takes under 3 minutes. If you want a formal, comprehensive valuation, click one button and your data carries forward — a senior advisor contacts you within one business day." },
    { q: "Does location affect business valuation?", a: "Yes — Sarasota's strong population growth, affluent demographics, and desirable Gulf Coast location can positively impact valuations, particularly for businesses serving the local market." },
  ],
  relatedLinks: [
    { to: "/business-valuation-calculator-florida", label: "Florida Calculator", desc: "Statewide valuation tool" },
    { to: "/business-valuation-calculator-tampa", label: "Tampa Calculator", desc: "Tampa Bay valuation" },
    { to: "/business-valuation", label: "Valuation Services", desc: "Comprehensive advisory" },
  ],
};

const BusinessValuationCalculatorSarasota = () => <ValuationCalculatorLanding config={config} />;
export default BusinessValuationCalculatorSarasota;
