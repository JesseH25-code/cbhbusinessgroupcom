import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, MapPin, TrendingUp, Building2, ExternalLink } from "lucide-react";

const opportunitiesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Current Opportunities — CBH Business Group",
  description: "Active acquisition opportunities represented by CBH Business Group. Confidential deal listings across multiple industries.",
  url: "https://cbhbusinessgroup.com/opportunities",
};

const BizBuySellEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.5/iframeResizer.min.js";
    script.onload = () => {
      if (iframeRef.current && (window as any).iFrameResize) {
        try {
          (window as any).iFrameResize({ checkOrigin: false }, iframeRef.current);
        } catch (e) {
          console.warn("iFrameResize failed:", e);
        }
      }
    };
    document.body.appendChild(script);
    return () => {
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="https://www.bizbuysell.com/brokerdirectory/Profile/ViewAllListings.aspx?J=b&I=46770&m_dmr=1"
      scrolling="no"
      style={{ border: "none", width: "100%", minHeight: "600px" }}
      title="CBH Business Group Listings on BizBuySell"
    />
  );
};

const Opportunities = () => {
  return (
    <Layout>
      <SEOHead
        title="Current Opportunities"
        description="Active acquisition opportunities represented by CBH Business Group. Explore confidential deal listings across manufacturing, healthcare, technology, and more."
        path="/opportunities"
        jsonLd={opportunitiesJsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Opportunities", path: "/opportunities" },
        ]}
      />

      {/* Hero */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Active Listings</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Current Opportunities</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Select acquisition opportunities currently represented by CBH Business Group. 
              All inquiries are handled under strict confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Listing */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-primary mb-8 font-semibold">Featured Listing</p>
          <a
            href="https://www.bizbuysell.com/business-opportunity/turnkey-custom-window-and-door-manufacturer-florida-based/2395241/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card border border-border p-8 md:p-10 hover:border-primary/40 transition-colors group max-w-3xl"
          >
            <div className="flex items-start justify-between mb-2">
              <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-semibold">Manufacturing · Orlando, FL</p>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h2 className="text-xl md:text-2xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
              Turnkey Custom Window &amp; Door Manufacturer — Florida Based
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Well-established Florida-based company specializing in the design, manufacturing, and installation of high-end custom doors and windows. Strong reputation for superior craftsmanship with a growing customer base of luxury homeowners and commercial clients.
            </p>
            <span className="inline-flex items-center text-sm font-medium text-primary">
              View Full Details on BizBuySell <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>
      </section>

      {/* All BizBuySell Listings */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">All Listings</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Browse All Opportunities</h2>
            <p className="text-muted-foreground leading-relaxed">
              View all opportunities currently represented by CBH Business Group on BizBuySell.
            </p>
          </div>
          <div className="bg-card border border-border p-4 md:p-8">
            <BizBuySellEmbed />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground mb-8 max-w-2xl mx-auto">
            All opportunities are presented under strict confidentiality. Additional details, 
            including financial information and company identity, are available only to 
            pre-qualified parties following execution of a non-disclosure agreement.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Inquire About an Opportunity <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Opportunities;
