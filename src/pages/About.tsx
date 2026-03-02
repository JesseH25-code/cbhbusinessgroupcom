import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">About the Firm</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Strategic Advisory. Meaningful Outcomes.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CBH Business Group is a Florida-based M&A advisory and business brokerage firm specializing 
            in representing privately held businesses through strategic sale transactions, valuation advisory, 
            and structured exit planning.
          </p>
        </div>
      </div>
    </section>

    {/* Background */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Our Background</p>
            <h2 className="text-3xl font-serif text-foreground mb-6">Built for Business Owners.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CBH Business Group was founded to provide business owners with strategic, value-driven 
              transaction advisory services. We work closely with entrepreneurs who have spent years — 
              often decades — building their companies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We understand that selling a business is more than a financial event. It is a major life 
              transition. Our role is to ensure that when you go to market, you are positioned for the 
              best possible outcome — on your terms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are not a listing service. We provide hands-on advisory, buyer targeting, negotiation, 
              and deal structuring for privately held businesses valued between $3M and $50M.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Advisory Focus</p>
            <h2 className="text-3xl font-serif text-foreground mb-6">What We Do.</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div className="border-l border-primary/20 pl-6">
                <p className="text-foreground font-medium mb-1">Accurate Business Valuation</p>
                <p className="text-sm">Defensible, market-based valuation grounded in financial normalization and EBITDA clarity.</p>
              </div>
              <div className="border-l border-primary/20 pl-6">
                <p className="text-foreground font-medium mb-1">Strategic Buyer Identification</p>
                <p className="text-sm">Targeted outreach to qualified strategic buyers, PE groups, and individual acquirers.</p>
              </div>
              <div className="border-l border-primary/20 pl-6">
                <p className="text-foreground font-medium mb-1">Confidential Marketing Processes</p>
                <p className="text-sm">No public listings. Controlled, NDA-protected outreach that protects your business.</p>
              </div>
              <div className="border-l border-primary/20 pl-6">
                <p className="text-foreground font-medium mb-1">Negotiation & Deal Execution</p>
                <p className="text-sm">Structured deal management from LOI through closing and transition.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Philosophy</p>
          <h2 className="text-3xl font-serif text-foreground mb-6">Preparation and Structure Drive Valuation.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We work with qualified strategic buyers, private equity groups, and individual acquirers to ensure 
            our clients receive competitive market positioning and disciplined transaction management.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We prioritize confidentiality, integrity, and long-term relationships over transactional volume. 
            Every engagement receives the full attention of our advisory team — from initial valuation 
            through final closing.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our commitment is straightforward: advise business owners on how to maximize enterprise value 
            before going to market, then guide them through a confidential, disciplined sale process that 
            delivers results.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
