import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import georgeImg from "@/assets/george-hastings.jpg";
import richardImg from "@/assets/richard-bradley.jpg";
import jesseImg from "@/assets/jesse-hastings.jpg";
import santiagoImg from "@/assets/santiago-flores.jpg";

const team = [
  {
    name: "George Hastings",
    title: "Broker & Business Consultant",
    email: "george@cbhadvisory.com",
    image: georgeImg,
    bio: "With over 35 years of entrepreneurial experience, George has built and sold multiple successful businesses, including transactions with publicly traded companies. Over the past decade, he has focused on helping business owners maximize valuation, streamline operations, and execute successful exits. His deep M&A expertise makes him a trusted advisor for entrepreneurs seeking the highest possible transaction value.",
  },
  {
    name: "Richard W. Bradley",
    title: "CPA / M&A Expert",
    email: "richard@cbhadvisory.com",
    image: richardImg,
    bio: "Richard graduated from Radford University with a degree in Business Administration, majoring in accounting with a concentration in finance and economics. After beginning his career as an auditor and serving as Manager of Accounting at Overnite Transportation — reporting to parent company Union Pacific Railroad — he founded the accounting firm Chesnut and Bradley, now CBH Advisory Group. Richard has served on numerous corporate and bank boards as Chief Financial Officer. He specializes in troubled business recoveries, business management systems, mergers and acquisitions, and preparing midsize companies for shareholder exit strategies. Over 28 years, Richard has successfully negotiated the sale of numerous large companies, including five of his own.",
  },
  {
    name: "Jesse Hastings",
    title: "Business Growth & Scaling Specialist",
    email: "jesse@cbhadvisory.com",
    image: jesseImg,
    bio: "A serial entrepreneur and business growth expert, Jesse has built and scaled five companies across diverse industries. With firsthand experience scaling businesses past seven figures, he understands what it takes to optimize operations, accelerate revenue, and create sustainable growth. A graduate of Florida College with a degree in Business Administration, Jesse now focuses on business brokerage and consulting — helping owners maximize company value and secure the best possible exit.",
  },
  {
    name: "Santiago Flores",
    title: "Sales & Marketing Director",
    email: "santiago@cbhadvisory.com",
    image: santiagoImg,
    bio: "With over 18 years of experience in sales and marketing, Santiago has a proven track record of driving growth and building successful business strategies. He began his journey in e-commerce and online marketing, mastering business development and team training. Over the years, he has built and scaled multiple businesses, generating significant annual revenues. As a former major account executive, Santiago worked with enterprise-level clients — from small teams to large organizations — helping them optimize B2B sales strategies and drive substantial revenue growth. His hands-on experience and strategic insights make him an invaluable asset to clients looking to elevate their sales and marketing efforts.",
  },
];

const About = () => (
  <Layout>
    <SEOHead
      title="About Our M&A Advisory Team"
      description="Meet the CBH Business Group team — over 50 years of combined M&A experience advising privately held business owners through strategic sale transactions in Florida."
      path="/about"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]}
    />
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
            and structured exit planning. With over 50 years of combined experience, our team has worked
            with more than 2,300 buyers and facilitated transactions across multiple industries.
          </p>
        </div>
      </div>
    </section>

    {/* What Sets Us Apart */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Our Approach</p>
            <h2 className="text-3xl font-serif text-foreground mb-6">What Sets Us Apart.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We take a highly selective, hands-on approach to advisory and deal execution. Unlike firms
              that assign you to a single advisor, our entire team works collaboratively on each engagement,
              ensuring you receive the full depth of our knowledge and experience.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To maintain this level of dedicated service, we limit our active client base to just 10
              businesses at a time — giving your transaction the focused attention it deserves.
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

    {/* Team Bios */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Meet Our Experts</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-[4/3.3] overflow-hidden rounded-lg mb-6">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.title} at CBH Business Group`}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-primary mb-1">{member.title}</p>
              <h3 className="text-xl font-serif text-foreground mb-1">{member.name}</h3>
              <a href={`mailto:${member.email}`} className="text-xs text-primary hover:text-primary/80 transition-colors mb-3 block">{member.email}</a>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Philosophy</p>
          <h2 className="text-3xl font-serif text-foreground mb-6">Preparation and Structure Drive Valuation.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We prioritize confidentiality, integrity, and long-term relationships over transactional volume.
            Every engagement receives the full attention of our advisory team — from initial valuation
            through final closing.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We don't just list businesses — we position them for maximum value. Our hands-on, data-driven
            approach ensures that every business we represent is optimized for the best possible outcome.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
