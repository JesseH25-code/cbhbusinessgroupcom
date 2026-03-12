import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const listingUrl =
  "https://www.bizbuysell.com/business-opportunity/turnkey-custom-window-and-door-manufacturer-florida-based/2395241/";

const opportunitiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Current Opportunities — CBH Business Group",
  description:
    "Active acquisition opportunities represented by CBH Business Group.",
  url: "https://cbhbusinessgroup.com/opportunities",
};

const Opportunities = () => {
  return (
    <Layout>
      <SEOHead
        title="Current Opportunities"
        description="Explore active acquisition opportunities represented by CBH Business Group and view full details securely on BizBuySell."
        path="/opportunities"
        jsonLd={opportunitiesJsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Opportunities", path: "/opportunities" },
        ]}
      />

      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">
              Active Opportunity
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Current Opportunity
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              View our current confidential listing directly on BizBuySell.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <article className="max-w-4xl bg-card border border-border p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-flex items-center text-xs tracking-wide uppercase px-3 py-1 border border-border text-muted-foreground">
                <Building2 className="w-3.5 h-3.5 mr-2" />
                Manufacturing
              </span>
              <span className="inline-flex items-center text-xs tracking-wide uppercase px-3 py-1 border border-border text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 mr-2" />
                Florida
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Turnkey Custom Window &amp; Door Manufacturer (Florida Based)
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Click below to open the live opportunity details on BizBuySell.
            </p>

            <a href={listingUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                View Listing on BizBuySell
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </article>
        </div>
      </section>

      <section className="py-20 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground mb-8 max-w-2xl mx-auto">
            Additional financial details and company identity are shared only with
            qualified parties after an NDA.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Inquire Confidentially <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Opportunities;
