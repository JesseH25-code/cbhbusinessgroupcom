import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ResourceForm {
  name: string;
  email: string;
  company?: string;
  guideId: string;
  guideTitle: string;
}

const escapeHtml = (s: string): string =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const guideLinks: Record<string, string> = {
  "exit-planning": "https://cbhbusinessgroupcom.lovable.app/resources",
  "valuation-drivers": "https://cbhbusinessgroupcom.lovable.app/resources",
  "scaling-guide": "https://cbhbusinessgroupcom.lovable.app/resources",
  "due-diligence": "https://cbhbusinessgroupcom.lovable.app/resources",
  "ma-process": "https://cbhbusinessgroupcom.lovable.app/resources",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ResourceForm = await req.json();

    if (!body.name || !body.email || !body.guideId || !body.guideTitle) {
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
      company: body.company || "N/A",
      email: body.email,
      revenue: "N/A",
      ebitda: "N/A",
      timeline: "Resource Download",
      message: `Downloaded guide: ${body.guideTitle}`,
      phone: null,
    });

    if (dbError) {
      console.error("Database error:", dbError);
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (RESEND_API_KEY) {
      // 1) Send confirmation email to the user
      const userEmailHtml = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="border-bottom: 2px solid #b8860b; padding-bottom: 20px; margin-bottom: 24px;">
            <h1 style="font-size: 22px; margin: 0; color: #1a1a1a;">CBH Business Group</h1>
          </div>
          <p style="font-size: 16px;">Hi ${escapeHtml(body.name)},</p>
          <p style="font-size: 15px; line-height: 1.7; color: #444;">
            Thank you for downloading <strong>"${escapeHtml(body.guideTitle)}"</strong>. We hope you find it valuable as you plan your next steps.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #444;">
            Here are a few other resources you might find helpful:
          </p>
          <ul style="font-size: 14px; line-height: 1.8; color: #444;">
            <li><a href="https://cbhbusinessgroupcom.lovable.app/business-valuation" style="color: #b8860b;">Free Business Valuation Calculator</a></li>
            <li><a href="https://cbhbusinessgroupcom.lovable.app/business-growth-roadmap" style="color: #b8860b;">Business Growth Roadmap & Diagnostic Tools</a></li>
            <li><a href="https://cbhbusinessgroupcom.lovable.app/resources" style="color: #b8860b;">Browse All Free Guides</a></li>
          </ul>
          <p style="font-size: 15px; line-height: 1.7; color: #444;">
            If you have questions about selling your business or would like a confidential consultation, feel free to reply to this email or <a href="https://cbhbusinessgroupcom.lovable.app/contact" style="color: #b8860b;">schedule a call</a>.
          </p>
          <p style="font-size: 15px; color: #444; margin-top: 32px;">
            Best regards,<br/>
            <strong>Jesse Hastings</strong><br/>
            CBH Business Group<br/>
            <a href="mailto:jesse@cbhadvisory.com" style="color: #b8860b;">jesse@cbhadvisory.com</a>
          </p>
        </div>
      `;

      const userEmailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "CBH Business Group <inquiries@cbhbusinessgroup.com>",
          to: [body.email],
          subject: `Your Guide: ${escapeHtml(body.guideTitle)}`,
          html: userEmailHtml,
          reply_to: "jesse@cbhadvisory.com",
        }),
      });

      if (!userEmailRes.ok) {
        console.error("User email error:", await userEmailRes.text());
      }

      // 2) Send notification email to the team
      const teamEmailHtml = `
        <h2>New Resource Download — CBH Advisory</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.name)}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.email)}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #ddd;">${escapeHtml(body.company || "Not provided")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Guide Downloaded</td><td style="padding:8px;">${escapeHtml(body.guideTitle)}</td></tr>
        </table>
      `;

      const teamEmailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "CBH Business Group <inquiries@cbhbusinessgroup.com>",
          to: ["jesse@cbhadvisory.com"],
          subject: `Resource Download: ${escapeHtml(body.guideTitle)} — ${escapeHtml(body.name)}`,
          html: teamEmailHtml,
          reply_to: body.email,
        }),
      });

      if (!teamEmailRes.ok) {
        console.error("Team email error:", await teamEmailRes.text());
      }
    } else {
      console.log("RESEND_API_KEY not set — emails not sent, but submission saved.");
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
