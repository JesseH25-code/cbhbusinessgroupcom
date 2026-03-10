import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
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
              { label: "What Is EBITDA?", path: "/what-is-ebitda" },
              { label: "How to Sell a Business", path: "/how-to-sell-a-business" },
              { label: "Broker vs. M&A Advisor", path: "/business-broker-vs-ma-advisor" },
              { label: "Seller Financing", path: "/seller-financing-explained" },
              { label: "Buy a Business in FL", path: "/buy-a-business-in-florida" },
              { label: "Businesses for Sale FL", path: "/businesses-for-sale-florida" },
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
            <p>1550 Dolphin Drive<br />St. Cloud, FL 34771</p>
            <p>George@cbhadvisory.com</p>
            <p>Richard@cbhadvisory.com</p>
            <p>Jesse@cbhadvisory.com</p>
            <p>Santiago@cbhadvisory.com</p>
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
