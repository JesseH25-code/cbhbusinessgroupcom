import { Link } from "react-router-dom";
import { Linkedin, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-serif text-xl tracking-wider text-foreground mb-4">
            CBH<span className="text-primary"> Business Group</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            M&A advisory and business brokerage for privately held companies valued $3M–$50M. 
            Confidential. Disciplined. Results-driven.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Navigation</h4>
          <div className="space-y-3">
            {[
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Consulting", path: "/consulting" },
              { label: "Industries", path: "/industries" },
              { label: "For Sellers", path: "/sellers" },
              { label: "For Buyers", path: "/buyers" },
              { label: "Opportunities", path: "/opportunities" },
              { label: "Case Studies", path: "/case-studies" },
              { label: "Blog", path: "/blog" },
              { label: "Growth Roadmap", path: "/business-growth-roadmap" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Industries</h4>
          <div className="space-y-3">
            {[
              { label: "Sell a Business in Florida", path: "/sell-business-florida" },
              { label: "Construction", path: "/sell-construction-company-florida" },
              { label: "Healthcare", path: "/sell-healthcare-business-florida" },
              { label: "Manufacturing", path: "/sell-manufacturing-company-florida" },
              { label: "Technology", path: "/sell-technology-company-florida" },
              { label: "HVAC", path: "/sell-hvac-company-florida" },
              { label: "Professional Services", path: "/sell-professional-services-firm-florida" },
              { label: "Landscaping", path: "/sell-landscaping-business-florida" },
              { label: "Restaurants", path: "/sell-restaurant-florida" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Resources</h4>
          <div className="space-y-3">
            {[
              { label: "Business Valuation", path: "/business-valuation" },
              { label: "Valuation Calculator", path: "/valuation-calculator" },
              { label: "Industry Benchmarks", path: "/florida-ma-benchmarks" },
              { label: "What Is EBITDA?", path: "/what-is-ebitda" },
              { label: "How to Sell a Business", path: "/how-to-sell-a-business" },
              { label: "Broker vs. M&A Advisor", path: "/business-broker-vs-ma-advisor" },
              { label: "Seller Financing", path: "/seller-financing-explained" },
              { label: "Buy a Business in FL", path: "/buy-a-business-in-florida" },
              { label: "Businesses for Sale FL", path: "/businesses-for-sale-florida" },
              { label: "Free Guides & Resources", path: "/resources" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Valuation by City</h4>
          <div className="space-y-3">
            {[
              { label: "Calculator — Florida", path: "/business-valuation-calculator-florida" },
              { label: "Calculator — Miami", path: "/business-valuation-calculator-miami" },
              { label: "Calculator — Tampa", path: "/business-valuation-calculator-tampa" },
              { label: "Calculator — Orlando", path: "/business-valuation-calculator-orlando" },
              { label: "Calculator — Jacksonville", path: "/business-valuation-calculator-jacksonville" },
              { label: "Calculator — Fort Lauderdale", path: "/business-valuation-calculator-fort-lauderdale" },
              { label: "Calculator — Naples", path: "/business-valuation-calculator-naples" },
              { label: "Calculator — Sarasota", path: "/business-valuation-calculator-sarasota" },
              { label: "Calculator — Palm Beach", path: "/business-valuation-calculator-palm-beach" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a href="tel:+14079083845" className="block text-foreground hover:text-primary transition-colors font-medium">(407) 908-3845</a>
            <p>1550 Dolphin Drive<br />St. Cloud, FL 34771</p>
            <a href="mailto:George@cbhadvisory.com" className="block hover:text-foreground transition-colors">George@cbhadvisory.com</a>
            <a href="mailto:Richard@cbhadvisory.com" className="block hover:text-foreground transition-colors">Richard@cbhadvisory.com</a>
            <a href="mailto:Jesse@cbhadvisory.com" className="block hover:text-foreground transition-colors">Jesse@cbhadvisory.com</a>
            <a href="mailto:Santiago@cbhadvisory.com" className="block hover:text-foreground transition-colors">Santiago@cbhadvisory.com</a>
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/in/jesse-hastings-3291ba32/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61569796270430" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="gold-divider mt-12 mb-6" />
      <p className="text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} CBH Business Group. All rights reserved. All transactions conducted in strict confidence.
      </p>
    </div>
  </footer>
);

export default Footer;
