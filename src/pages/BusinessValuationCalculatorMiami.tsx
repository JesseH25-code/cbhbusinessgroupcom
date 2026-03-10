import ValuationCalculatorLanding from "@/components/ValuationCalculatorLanding";
import { Calculator, Shield, TrendingUp, Users } from "lucide-react";

const config = {
  city: "Miami",
  path: "/business-valuation-calculator-miami",
  parentPath: "/business-valuation-calculator-florida",
  parentLabel: "Valuation Calculator Florida",
  heroDescription: "Miami's international buyer pool and dynamic economy create unique valuation dynamics for business owners. Use our free EBITDA-based calculator to get an instant estimate of your Miami company's enterprise value — then request a formal valuation with one click.",
  whyItems: [
    { icon: Users, title: "International Buyers", desc: "Miami's position as a gateway to Latin America attracts global acquirers willing to pay premium multiples." },
    { icon: Shield, title: "Total Confidentiality", desc: "NDA-protected process ensuring your employees, customers, and competitors never know." },
    { icon: Calculator, title: "EBITDA-Based Method", desc: "Industry-standard approach using adjusted EBITDA and sector-specific multipliers." },
    { icon: TrendingUp, title: "Premium Market", desc: "Miami's strong economic growth supports above-average valuation multiples." },
  ],
  faqItems: [
    { q: "What are typical business valuation multiples in Miami?", a: "Miami businesses in the $3M–$50M range typically see EBITDA multiples of 3.5x–7.5x. Miami's international buyer demand and strong population growth can push multiples higher than other Florida markets, especially in healthcare, technology, and professional services." },
    { q: "How do I value my Miami business for sale?", a: "Start with our free calculator for a directional EBITDA-based estimate. For a transaction-ready valuation, request a formal assessment — our advisors analyze normalized financials, comparable transactions, and Miami-specific market conditions." },
    { q: "What industries command the highest multiples in Miami?", a: "Technology, healthcare services, and professional services tend to command the highest multiples in Miami. Businesses with recurring revenue, diversified customers, and management independence consistently achieve premium valuations." },
    { q: "Is the valuation calculator really free?", a: "Yes, completely free and confidential. You'll receive an instant EBITDA-based estimate. If you'd like a comprehensive valuation, you can request one with a single click — all your data carries forward automatically." },
  ],
  relatedLinks: [
    { to: "/sell-business-miami", label: "Sell a Business in Miami", desc: "Miami M&A advisory" },
    { to: "/business-valuation-calculator-florida", label: "Florida Calculator", desc: "Statewide valuation tool" },
    { to: "/business-valuation", label: "Valuation Services", desc: "Comprehensive advisory" },
  ],
};

const BusinessValuationCalculatorMiami = () => <ValuationCalculatorLanding config={config} />;
export default BusinessValuationCalculatorMiami;
