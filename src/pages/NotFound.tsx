import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Home, Phone, Calculator, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  { icon: Home, label: "Homepage", desc: "Back to the main site", path: "/" },
  { icon: Calculator, label: "Free Valuation", desc: "Instant business valuation", path: "/valuation-calculator" },
  { icon: BookOpen, label: "Resources & Guides", desc: "Free M&A guides", path: "/resources" },
  { icon: Phone, label: "Contact Us", desc: "Speak with an advisor", path: "/contact" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Browse our M&A advisory services, free valuation tools, and resources."
        path={location.pathname}
      />
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-7xl font-serif text-primary mb-6">404</p>
            <div className="gold-divider w-24 mx-auto mb-8" />
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The page you're looking for may have been moved or no longer exists. 
              Here are some helpful starting points:
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12">
              {suggestions.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="bg-card border border-border p-6 hover:border-primary/30 transition-colors group text-left"
                >
                  <item.icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                  <p className="font-serif text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </Link>
              ))}
            </div>

            <Link to="/">
              <Button variant="heroOutline" size="lg">
                Return Home <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
