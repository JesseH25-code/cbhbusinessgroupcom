import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, MapPin, TrendingUp, Building2 } from "lucide-react";

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
  const { data: opportunities, isLoading } = useQuery({
    queryKey: ["opportunities"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("opportunities")
        .select("*")
        .eq("status", "active")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

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

      {/* Listings */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Loading opportunities…</p>
            </div>
          ) : opportunities && opportunities.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {opportunities.map((opp) => (
                <div key={opp.id} className="bg-card border border-border p-8 flex flex-col">
                  <p className="text-[10px] tracking-widest uppercase text-primary mb-3 font-semibold">{opp.sector}</p>
                  <h2 className="text-xl font-serif text-foreground mb-4">{opp.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{opp.description}</p>

                  {/* Key Metrics */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{opp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Revenue: {opp.revenue_range}</span>
                    </div>
                    {opp.ebitda_range && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>EBITDA: {opp.ebitda_range}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  {opp.highlights && opp.highlights.length > 0 && (
                    <div className="border-t border-border pt-4 mb-6">
                      <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-2">Highlights</p>
                      <ul className="space-y-1.5">
                        {opp.highlights.map((h: string, j: number) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="w-full">
                      Request Information <ArrowRight className="ml-2 w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 max-w-lg mx-auto">
              <h2 className="text-2xl font-serif text-foreground mb-4">No Active Listings</h2>
              <p className="text-muted-foreground mb-8">
                We periodically represent select businesses for sale. Contact us to discuss 
                current off-market opportunities or to be notified when new listings become available.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* BizBuySell Listings */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Marketplace Listings</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Browse Our Listings</h2>
            <p className="text-muted-foreground leading-relaxed">
              View our publicly listed opportunities on BizBuySell, the largest online marketplace for businesses for sale.
            </p>
          </div>
          <div className="bg-card border border-border p-4 md:p-8">
            <BizBuySellEmbed />
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      {opportunities && opportunities.length > 0 && (
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
      )}
    </Layout>
  );
};

export default Opportunities;
