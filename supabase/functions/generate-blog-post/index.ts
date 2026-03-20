import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const topics = [
  {
    category: "Valuation",
    prompts: [
      "How industry multiples vary across sectors in the lower middle market",
      "The role of quality of earnings reports in M&A transactions",
      "How recurring revenue impacts business valuation multiples",
      "Asset-based vs income-based vs market-based valuation approaches",
      "How working capital adjustments affect deal economics",
    ],
  },
  {
    category: "Exit Planning",
    prompts: [
      "Building a management team that doesn't depend on the owner",
      "How to reduce customer concentration before selling",
      "Tax planning strategies for business owners preparing to sell",
      "The importance of clean financial records in the sale process",
      "How to build a credible growth narrative for buyers",
    ],
  },
  {
    category: "Deal Structure",
    prompts: [
      "Understanding earnouts and seller financing in M&A deals",
      "Asset sale vs stock sale: implications for buyers and sellers",
      "How private equity recapitalizations work for business owners",
      "The role of representations and warranties in purchase agreements",
      "Working capital pegs and their impact on closing adjustments",
    ],
  },
  {
    category: "Buying",
    prompts: [
      "How to evaluate acquisition targets in the lower middle market",
      "SBA loans vs conventional financing for business acquisitions",
      "Key due diligence areas every buyer should investigate",
      "How to assess seller motivation and deal readiness",
      "Integration planning: the first 100 days after closing",
    ],
  },
  {
    category: "Market Insights",
    prompts: [
      "Current M&A trends in the lower middle market",
      "How interest rates affect business valuations and deal activity",
      "Industry sectors with the strongest buyer demand right now",
      "The impact of economic cycles on M&A transaction volume",
      "Why strategic buyers pay more than financial buyers",
    ],
  },
  {
    category: "Consulting",
    prompts: [
      "Why business consulting is essential before listing your company for sale",
      "How operational consulting increases your business valuation before exit",
      "The role of exit planning consultants in maximizing sale proceeds",
      "Common operational inefficiencies that reduce business value and how to fix them",
      "How strategic consulting helps business owners prepare for due diligence",
    ],
  },
  {
    category: "Sale Preparation",
    prompts: [
      "The 12-month checklist for preparing your business to sell",
      "Why starting exit preparation two years early leads to better outcomes",
      "How to document your processes and SOPs before selling your business",
      "Financial housekeeping: getting your books ready for buyer scrutiny",
      "Building a business that runs without you: the key to a premium exit",
    ],
  },
];

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Pick a random topic
    const categoryObj = topics[Math.floor(Math.random() * topics.length)];
    const prompt =
      categoryObj.prompts[
        Math.floor(Math.random() * categoryObj.prompts.length)
      ];
    const tags = [categoryObj.category];

    // Add a second tag sometimes
    const secondTags = ["M&A Process", "Lower Middle Market", "Advisory"];
    if (Math.random() > 0.5) {
      tags.push(secondTags[Math.floor(Math.random() * secondTags.length)]);
    }

    console.log(`Generating blog post about: ${prompt}`);

    // Generate the article via AI
    const aiResponse = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            {
              role: "system",
              content: `You are a senior M&A advisor writing blog articles for CBH Business Group, a Florida-based M&A advisory firm specializing in businesses valued $3M–$50M. 

Write in a professional, authoritative tone. Use data and specifics where possible. The audience is business owners considering selling or buying a business.

IMPORTANT — Internal Linking: Naturally weave in 3-5 contextual links to these pages throughout the article where relevant:
- /sell-business-florida — Selling a business in Florida
- /sell-business-miami — Selling in Miami
- /sell-business-tampa — Selling in Tampa
- /sell-business-orlando — Selling in Orlando
- /sell-business-jacksonville — Selling in Jacksonville
- /sell-business-fort-lauderdale — Selling in Fort Lauderdale
- /business-valuation — Business valuation services
- /business-valuation-calculator-florida — Free valuation calculator
- /florida-ma-benchmarks — Florida M&A industry benchmarks
- /business-growth-roadmap — Business growth roadmap tools
- /how-to-sell-a-business — Complete guide to selling
- /what-is-ebitda — EBITDA explained
- /seller-financing-explained — Seller financing guide
- /sell-construction-company-florida — Selling a construction company
- /sell-healthcare-business-florida — Selling a healthcare business
- /sell-hvac-company-florida — Selling an HVAC company
- /sell-technology-company-florida — Selling a tech company
- /sell-manufacturing-company-florida — Selling a manufacturing company
- /sell-hvac-company-miami — HVAC M&A in Miami
- /sell-construction-company-tampa — Construction M&A in Tampa
- /sell-healthcare-business-orlando — Healthcare M&A in Orlando
- /sell-restaurant-miami — Restaurant M&A in Miami
- /sell-landscaping-business-jacksonville — Landscaping M&A in Jacksonville
- /sell-technology-company-fort-lauderdale — Tech M&A in Fort Lauderdale
- /industries — Industry-specific M&A advisory
- /buyers — For buyers looking to acquire
- /buy-a-business-in-florida — Buying a business in Florida
- /buyers — For buyers looking to acquire
- /buy-a-business-in-florida — Buying a business in Florida
Do NOT force links — only include them where they fit naturally in the text.

Return a JSON object with these exact keys:
- "title": A compelling, SEO-optimized article title (50-70 characters)
- "excerpt": A 1-2 sentence summary for the blog listing (under 200 characters)
- "meta_description": An SEO meta description (under 160 characters)
- "content": The full article body in clean HTML using <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>, and <a href="..."> tags. Should be 800-1200 words. Include internal links as described above. Include a call-to-action linking to /contact at the end.

Return ONLY the JSON object, no markdown code fences.`,
            },
            {
              role: "user",
              content: `Write an in-depth article about: ${prompt}`,
            },
          ],
        }),
      }
    );

    if (!aiResponse.ok) {
      const errText = await aiResponse.text();
      console.error("AI gateway error:", aiResponse.status, errText);
      throw new Error(`AI gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    let content = aiData.choices?.[0]?.message?.content;

    if (!content) throw new Error("No content returned from AI");

    // Clean markdown fences if present
    content = content.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();

    let article;
    try {
      article = JSON.parse(content);
    } catch (e) {
      console.error("Failed to parse AI response:", content);
      throw new Error("Failed to parse AI response as JSON");
    }

    const slug = generateSlug(article.title);

    // Check for duplicate slug
    const { data: existing } = await supabase
      .from("blog_posts")
      .select("id")
      .eq("slug", slug)
      .maybeSingle();

    if (existing) {
      console.log(`Post with slug "${slug}" already exists, skipping.`);
      return new Response(
        JSON.stringify({ success: false, reason: "duplicate_slug", slug }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert the post
    const { data: post, error } = await supabase
      .from("blog_posts")
      .insert({
        title: article.title,
        slug,
        excerpt: article.excerpt,
        content: article.content,
        meta_description: article.meta_description,
        author: "CBH Business Group",
        published: true,
        tags,
      })
      .select("id, title, slug")
      .single();

    if (error) throw error;

    console.log(`Published: "${post.title}" at /blog/${post.slug}`);

    return new Response(
      JSON.stringify({ success: true, post }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("generate-blog-post error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
