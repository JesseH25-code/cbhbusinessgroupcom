import ValuationCalculatorLanding from "@/components/ValuationCalculatorLanding";
import { Calculator, Shield, TrendingUp, BarChart3 } from "lucide-react";

const config = {
  city: "Tampa",
  path: "/business-valuation-calculator-tampa",
  parentPath: "/business-valuation-calculator-florida",
  parentLabel: "Valuation Calculator Florida",
  heroDescription: "Tampa Bay's booming economy and strong PE buyer activity make it one of Florida's most attractive M&A markets. Use our free calculator to get an instant EBITDA-based estimate of your Tampa business's enterprise value.",
  whyItems: [
    { icon: BarChart3, title: "Tampa Market Comps", desc: "Valuation benchmarks calibrated to Tampa Bay's fast-growing business landscape." },
    { icon: Shield, title: "100% Confidential", desc: "Your information is never shared without explicit written consent." },
    { icon: Calculator, title: "EBITDA Multiples", desc: "Sector-specific multipliers reflecting Tampa Bay transaction data." },
    { icon: TrendingUp, title: "Growth Market", desc: "Tampa's population and business growth drive strong buyer demand and premium multiples." },
  ],
  faqItems: [
    { q: "What are business valuation multiples in Tampa?", a: "Tampa Bay businesses typically see EBITDA multiples of 3x–7x depending on industry, size, and business health factors. Construction, healthcare, and technology businesses in Tampa often achieve above-average multiples due to strong regional demand." },
    { q: "How do I know what my Tampa business is worth?", a: "Start with our free valuation calculator for a quick EBITDA-based range. For a formal, defensible valuation, click 'Request Formal Valuation' after receiving your estimate — your data carries forward automatically." },
    { q: "What drives higher valuations in Tampa Bay?", a: "Key drivers include recurring revenue, customer diversification, management depth, consistent EBITDA growth, and documented operational systems. Tampa's strong population growth and business-friendly environment also attract premium buyers." },
    { q: "Can I use the calculator for any industry?", a: "Yes — the calculator covers 9 major sectors including Construction, Healthcare, Technology, Manufacturing, Professional Services, HVAC, Restaurants, Landscaping, and more." },
  ],
  relatedLinks: [
    { to: "/sell-business-tampa", label: "Sell a Business in Tampa", desc: "Tampa M&A advisory" },
    { to: "/business-valuation-calculator-florida", label: "Florida Calculator", desc: "Statewide valuation tool" },
    { to: "/valuation-calculator", label: "Start Calculator", desc: "Free EBITDA estimate" },
  ],
};

const BusinessValuationCalculatorTampa = () => <ValuationCalculatorLanding config={config} />;
export default BusinessValuationCalculatorTampa;
