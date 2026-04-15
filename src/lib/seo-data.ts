const SITE_URL = "https://cbhbusinessgroup.com";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CBH Business Group",
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.jpg`,
  description:
    "Florida-based M&A advisory and business brokerage firm specializing in strategic sale transactions, valuation advisory, and exit planning for businesses valued $3M–$50M.",
  telephone: "(407) 908-3845",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1550 Dolphin Drive",
    addressLocality: "St. Cloud",
    addressRegion: "FL",
    postalCode: "34771",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "(407) 908-3845",
    email: "jesse@cbhadvisory.com",
    availableLanguage: ["English", "Spanish"],
  },
  sameAs: [
    "https://www.linkedin.com/company/cbh-business-group",
    "https://www.bizbuysell.com/broker/cbh-business-group/",
    "https://www.axial.net/",
  ],
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CBH Business Group",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "(407) 908-3845",
  description:
    "M&A advisory firm specializing in sell-side representation, business valuation, and exit planning for privately held businesses valued $3M–$50M.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1550 Dolphin Drive",
    addressLocality: "St. Cloud",
    addressRegion: "FL",
    postalCode: "34771",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.2489,
    longitude: -81.2812,
  },
  priceRange: "$3M–$50M transaction range",
  areaServed: {
    "@type": "State",
    name: "Florida",
  },
  serviceType: [
    "M&A Advisory",
    "Business Valuation",
    "Exit Planning",
    "Business Brokerage",
    "Deal Structuring",
  ],
};

export const speakableJsonLd = (path: string, cssSelectors: string[] = ["h1", ".speakable"]) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CBH Business Group",
  url: `${SITE_URL}${path}`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  },
});

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is M&A advisory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "M&A (Mergers & Acquisitions) advisory involves a professional firm representing a business owner through the process of selling their company. An M&A advisor handles valuation, buyer identification, negotiations, and closing — ensuring the owner achieves maximum value while maintaining confidentiality.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to sell a business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical M&A transaction takes 6–9 months from engagement to closing. Months 1–2 focus on preparation and valuation, months 2–4 on buyer outreach and engagement, months 4–6 on LOI negotiation and due diligence, and months 6–9 on definitive agreements and closing.",
      },
    },
    {
      "@type": "Question",
      name: "What is EBITDA and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It represents the normalized cash earnings of your business and is the primary metric most acquirers use to determine valuation. Enterprise value is calculated by applying an industry-appropriate multiple to your adjusted EBITDA.",
      },
    },
    {
      "@type": "Question",
      name: "What size businesses does CBH Business Group work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CBH Business Group specializes in privately held businesses valued between $3M and $50M in enterprise value. We focus on sell-side advisory, working with business owners ready to explore a strategic exit or sale transaction.",
      },
    },
    {
      "@type": "Question",
      name: "What drives business valuation multiples?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key drivers include EBITDA quality and growth, revenue diversification (customer concentration below 20%), management depth beyond the founder, recurring revenue models, documented operational systems, and a credible growth trajectory over 3+ years. These factors collectively determine the multiple applied to your earnings.",
      },
    },
    {
      "@type": "Question",
      name: "Is the sale process confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, absolutely. Every engagement begins with a confidentiality agreement. No information is shared with any party without explicit approval. We use NDA-protected outreach and controlled, targeted buyer communication — we never publicly list businesses for sale.",
      },
    },
  ],
};
