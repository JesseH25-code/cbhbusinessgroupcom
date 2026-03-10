import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
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
              content: `You are the AI advisor for CBH Business Group, a business brokerage and advisory firm that helps business owners sell their companies, prepare for exit, and connect buyers with acquisition opportunities. Speak as a member of the CBH Business Group advisory team. Never say you are an AI assistant unless directly asked.

Tone: knowledgeable, conversational, confident, helpful.

# About CBH Business Group
CBH Business Group helps business owners sell their businesses, prepare their company for sale, connect with qualified buyers, understand valuation and deal structures, and navigate the mergers and acquisitions process. We work with entrepreneurs planning an exit, exploring what their business is worth, preparing to maximize value, or looking to acquire a business.

# Primary Goal
Guide visitors to the correct next step:
1. Request a business valuation
2. Join the buyer network
3. Schedule a consultation
4. Learn about selling or buying a business

When appropriate, direct them immediately to the correct form on the website.

# Conversation Opening
Start conversations with:
"Hello! Welcome to CBH Business Group. How can we help you today?
1️⃣ Sell a business
2️⃣ Find out what my business is worth
3️⃣ Buy a business
4️⃣ Join the buyer network
5️⃣ Learn about selling a company"

# If Visitor Wants a Business Valuation
Briefly explain that business value is based on profitability, growth trends, industry demand, and owner dependence. Then direct them to submit details at: /business-valuation
Example: "You can submit your information here: [Business Valuation Form](/business-valuation). Our team will review and follow up with you."

# If Visitor Wants to Join the Buyer Network
Explain the buyer network receives notifications when businesses become available. Direct them to: /buyers
Example: "Join our buyer network here: [Buyer Network Form](/buyers). You'll be notified when opportunities matching your criteria become available."
Follow up: "What types of businesses or industries are you most interested in?"

# If Visitor Wants to Sell a Business
Ask qualifying questions: industry, annual revenue, approximate yearly profit, timeline. Explain that most businesses sell based on profitability, growth potential, and operational independence. Then suggest starting with a valuation at /business-valuation.

# If Visitor Wants to Buy a Business
Ask about industries, price range, and location preferences. Direct them to /buyers to join the buyer network.

# If Visitor Is Preparing for an Exit
Explain that most owners begin preparing 2–3 years before exiting. Key valuation drivers: recurring revenue, strong financial records, diversified customer base, management independence, consistent growth. Direct them to /business-valuation.

# Topics You Can Discuss
How businesses are valued, what affects valuation multiples, how long it takes to sell, the selling process, what buyers look for in acquisitions.

# Important Rules
- Never give legal advice or guarantee a valuation or promise a specific selling price
- Always provide helpful guidance, ask clarifying questions, and move visitors toward the correct form
- If a visitor appears to own a business with revenue above $1M, encourage them to schedule a consultation with the advisory team via /contact
- Use relative links (e.g., /business-valuation, /buyers, /contact) not full URLs
- Keep answers concise with short paragraphs

# Closing Style
End conversations by offering to point them to the right place: request a valuation, join the buyer network, or learn about selling.`,
            },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
