import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactForm {
  company: string;
  revenue: string;
  ebitda: string;
  timeline: string;
  email: string;
  phone?: string;
  message?: string;
}
const escapeHtml = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactForm = await req.json();

    // Validate required fields
    if (!body.company || !body.revenue || !body.ebitda || !body.timeline || !body.email) {
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

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      company: body.company,
      revenue: body.revenue,
      ebitda: body.ebitda,
      timeline: body.timeline,
      email: body.email,
      phone: body.phone || null,
      message: body.message || null,
    });

    if (dbError) {
      console.error("Database error:", dbError);
    }

    // Send email notification via Resend
    const emailHtml = `
      <h2>New Confidential Inquiry — CBH Advisory</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.company)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Revenue</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.revenue)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">EBITDA</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.ebitda)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Timeline</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.timeline)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.email)}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.phone || "Not provided")}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${escapeHtml(body.message || "No additional details")}</td></tr>
      </table>
    `;

    // Use Resend API to send email
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (RESEND_API_KEY) {
      // Notify the team
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "CBH Business Group <inquiries@cbhbusinessgroup.com>",
          to: ["jesse@cbhadvisory.com"],
          subject: `New Inquiry: ${escapeHtml(body.company)}`,
          html: emailHtml,
          reply_to: body.email,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error("Team email error:", errText);
      }

      // Send confirmation to the submitter
      const confirmHtml = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="border-bottom: 2px solid #b8860b; padding-bottom: 20px; margin-bottom: 24px;">
            <h1 style="font-size: 22px; margin: 0; color: #1a1a1a;">CBH Business Group</h1>
          </div>
          <p style="font-size: 16px;">Thank you for reaching out.</p>
          <p style="font-size: 15px; line-height: 1.7; color: #444;">
            We've received your inquiry and a member of our advisory team will be in touch within one business day to discuss your goals in confidence.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #444;">
            In the meantime, you may find these resources helpful:
          </p>
          <ul style="font-size: 14px; line-height: 1.8; color: #444;">
            <li><a href="https://cbhbusinessgroupcom.lovable.app/resources" style="color: #b8860b;">Free Guides & Resources</a></li>
            <li><a href="https://cbhbusinessgroupcom.lovable.app/business-valuation" style="color: #b8860b;">Business Valuation Calculator</a></li>
            <li><a href="https://cbhbusinessgroupcom.lovable.app/business-growth-roadmap" style="color: #b8860b;">Growth Roadmap & Diagnostic Tools</a></li>
          </ul>
          <p style="font-size: 15px; color: #444; margin-top: 32px;">
            Best regards,<br/>
            <strong>Jesse Hastings</strong><br/>
            CBH Business Group<br/>
            <a href="mailto:jesse@cbhadvisory.com" style="color: #b8860b;">jesse@cbhadvisory.com</a>
          </p>
        </div>
      `;

      const confirmRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "CBH Business Group <inquiries@cbhbusinessgroup.com>",
          to: [body.email],
          subject: "We've received your inquiry — CBH Business Group",
          html: confirmHtml,
          reply_to: "jesse@cbhadvisory.com",
        }),
      });

      if (!confirmRes.ok) {
        console.error("Confirmation email error:", await confirmRes.text());
      }
    } else {
      console.log("RESEND_API_KEY not set — email not sent, but submission saved to database.");
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
