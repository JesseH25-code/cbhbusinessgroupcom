import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">About the Firm</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Disciplined Advisory. Meaningful Outcomes.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Meridian Capital Advisors is a lower middle-market M&A advisory firm 
            headquartered in Florida, exclusively focused on transactions between $3M and $50M 
            enterprise value.
          </p>
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Advisory Philosophy</p>
            <h2 className="text-3xl font-serif text-foreground mb-6">Built on Conviction, Not Volume.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We deliberately limit the number of engagements we accept. Each client relationship 
              receives the full attention of our senior advisory team — from initial valuation 
              through final closing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach is rooted in financial rigor, market intelligence, and a deep respect 
              for the businesses our clients have spent decades building. We do not operate as 
              intermediaries. We operate as strategic advisors.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Commitment to Confidentiality</p>
            <h2 className="text-3xl font-serif text-foreground mb-6">Your Transaction. Your Terms.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every engagement begins with a commitment to absolute confidentiality. No public listings. 
              No mass marketing. No premature market exposure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We use controlled, targeted outreach to pre-qualified buyers — ensuring that 
              your employees, customers, and competitors remain unaware until you decide otherwise.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Senior Advisory Team</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {[
            {
              name: "Managing Director",
              role: "Founder & Lead Advisor",
              bio: "Two decades of transaction experience across manufacturing, healthcare, technology, and business services. Former investment banking professional with deep institutional relationships across the private equity and strategic buyer landscape.",
            },
            {
              name: "Director",
              role: "Transaction Advisory",
              bio: "Background in corporate finance and valuation. Specializes in financial normalization, quality of earnings analysis, and deal structuring. Works directly with ownership groups through every phase of the transaction lifecycle.",
            },
          ].map((person, i) => (
            <div key={i} className="bg-card border border-border p-8">
              <div className="w-20 h-20 bg-muted rounded-sm mb-6" />
              <h3 className="font-serif text-lg text-foreground">{person.name}</h3>
              <p className="text-xs tracking-widest uppercase text-primary mb-4">{person.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
