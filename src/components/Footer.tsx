import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
            {["About", "Services", "Sellers", "Buyers", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>1550 Dolphin Drive<br />St. Cloud, FL 34771</p>
            <p>george@cbhadvisory.com</p>
            <p>richard@cbhadvisory.com</p>
            <p>jesse@cbhadvisory.com</p>
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
