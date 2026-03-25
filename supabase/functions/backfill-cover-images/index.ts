import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Find posts without cover images
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, content")
      .eq("published", true)
      .is("cover_image_url", null)
      .limit(5);

    if (error) throw error;
    if (!posts || posts.length === 0) {
      return new Response(
        JSON.stringify({ success: true, message: "No posts need cover images" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const results: { slug: string; success: boolean; error?: string }[] = [];

    for (const post of posts) {
      try {
        // Generate a scene prompt from the title
        const promptResponse = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-2.5-flash-lite",
              messages: [
                {
                  role: "user",
                  content: `Given this blog article title: "${post.title}", generate a short image prompt (under 80 characters) describing a professional scene for the cover image. Describe a scene, NOT text. Example: "Modern office boardroom with city skyline at sunset". Return ONLY the prompt text, nothing else.`,
                },
              ],
            }),
          }
        );

        let scenePrompt = "Professional business office with warm lighting";
        if (promptResponse.ok) {
          const promptData = await promptResponse.json();
          const generated = promptData.choices?.[0]?.message?.content?.trim();
          if (generated) scenePrompt = generated.replace(/"/g, "").slice(0, 100);
        }

        console.log(`Generating cover for "${post.slug}": ${scenePrompt}`);

        const imgResponse = await fetch(
          "https://ai.gateway.lovable.dev/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-3.1-flash-image-preview",
              messages: [
                {
                  role: "user",
                  content: `Generate a professional, editorial-style 16:9 landscape photograph for a business article. The scene: ${scenePrompt}. Style: corporate, sophisticated, dark moody tones with warm gold accents. No text overlays.`,
                },
              ],
              modalities: ["image", "text"],
            }),
          }
        );

        if (!imgResponse.ok) {
          results.push({ slug: post.slug, success: false, error: `Image gen failed: ${imgResponse.status}` });
          continue;
        }

        const imgData = await imgResponse.json();
        const base64Img = imgData.choices?.[0]?.message?.images?.[0]?.image_url?.url;

        if (!base64Img) {
          results.push({ slug: post.slug, success: false, error: "No image in response" });
          continue;
        }

        const imgBuffer = Uint8Array.from(
          atob(base64Img.replace(/^data:image\/\w+;base64,/, "")),
          (c) => c.charCodeAt(0)
        );

        const imgPath = `blog-covers/${post.slug}.png`;
        const { error: uploadError } = await supabase.storage
          .from("guides")
          .upload(imgPath, imgBuffer, { contentType: "image/png", upsert: true });

        if (uploadError) {
          results.push({ slug: post.slug, success: false, error: uploadError.message });
          continue;
        }

        const { data: publicUrl } = supabase.storage.from("guides").getPublicUrl(imgPath);

        const { error: updateError } = await supabase
          .from("blog_posts")
          .update({ cover_image_url: publicUrl.publicUrl })
          .eq("id", post.id);

        if (updateError) {
          results.push({ slug: post.slug, success: false, error: updateError.message });
        } else {
          results.push({ slug: post.slug, success: true });
          console.log(`Cover image set for: ${post.slug}`);
        }
      } catch (err) {
        results.push({ slug: post.slug, success: false, error: String(err) });
      }
    }

    return new Response(
      JSON.stringify({ success: true, results }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("backfill-cover-images error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
