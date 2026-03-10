import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface BuyerForm {
  name: string;
  firm: string;
  email: string;
  buyer_type: string;
  criteria: string;
}

const escapeHtml = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: BuyerForm = await req.json();

    if (!body.name || !body.firm || !body.email || !body.buyer_type || !body.criteria) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("buyer_submissions").insert({
      name: body.name,
      firm: body.firm,
      email: body.email,
      buyer_type: body.buyer_type,
      criteria: body.criteria,
    });

    if (dbError) {
      console.error("Database error:", dbError);
    }

    // Send email notification via Resend
    const emailHtml = `
      <h2>New Buyer Registration — CBH Advisory</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.name)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Firm</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.firm)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.email)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Buyer Type</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.buyer_type)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Acquisition Criteria</td><td style="padding:8px;">${escapeHtml(body.criteria)}</td></tr>
      </table>
    `;

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (RESEND_API_KEY) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "CBH Business Group <inquiries@cbhbusinessgroup.com>",
          to: ["jesse@cbhadvisory.com"],
          subject: `New Buyer Registration: ${escapeHtml(body.name)} — ${escapeHtml(body.firm)}`,
          html: emailHtml,
          reply_to: body.email,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error("Email send error:", errText);
      }
    } else {
      console.log("RESEND_API_KEY not set — email not sent, but submission saved.");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
