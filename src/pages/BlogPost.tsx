import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import DOMPurify from "dompurify";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, List } from "lucide-react";
import { format } from "date-fns";
import { useMemo, useState } from "react";

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const words = text.split(" ").length;
  return Math.max(1, Math.round(words / 230));
}

function extractHeadings(html: string): { id: string; text: string; level: number }[] {
  const regex = /<h([23])[^>]*>(.*?)<\/h[23]>/gi;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    headings.push({ id, text, level: parseInt(match[1]) });
  }
  return headings;
}

function injectHeadingIds(html: string): string {
  return html.replace(/<h([23])([^>]*)>(.*?)<\/h([23])>/gi, (_, level, attrs, content, closeLevel) => {
    const text = content.replace(/<[^>]*>/g, "").trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `<h${level}${attrs} id="${id}">${content}</h${closeLevel}>`;
  });
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [tocOpen, setTocOpen] = useState(true);

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug!)
        .eq("published", true)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  const { data: relatedPosts } = useQuery({
    queryKey: ["related-posts", post?.id, post?.tags],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, cover_image_url, tags, created_at")
        .eq("published", true)
        .neq("id", post!.id)
        .order("created_at", { ascending: false })
        .limit(20);
      if (error) throw error;
      // Sort by tag overlap
      const postTags = new Set(post!.tags || []);
      return (data || [])
        .map((p) => ({
          ...p,
          overlap: (p.tags || []).filter((t: string) => postTags.has(t)).length,
        }))
        .sort((a, b) => b.overlap - a.overlap)
        .slice(0, 3);
    },
    enabled: !!post?.id,
  });

  const readingTime = useMemo(() => post ? estimateReadingTime(post.content) : 0, [post]);
  const headings = useMemo(() => post ? extractHeadings(post.content) : [], [post]);
  const processedContent = useMemo(() => post ? injectHeadingIds(post.content) : "", [post]);


    return (
      <Layout>
        <div className="container mx-auto px-6 py-32 animate-pulse">
          <div className="max-w-3xl mx-auto">
            <div className="h-8 bg-muted rounded w-3/4 mb-4" />
            <div className="h-4 bg-muted rounded w-1/2 mb-8" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-muted rounded" />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post || error) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-serif text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.meta_description || post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "CBH Business Group",
      logo: {
        "@type": "ImageObject",
        url: "https://cbhbusinessgroup.com/og-image.jpg",
      },
    },
    datePublished: post.created_at,
    dateModified: post.updated_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cbhbusinessgroup.com/blog/${post.slug}`,
    },
    ...(post.cover_image_url ? { image: post.cover_image_url } : {}),
    ...(post.tags ? { keywords: post.tags.join(", ") } : {}),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".tldr-summary", "h1", ".prose h2"],
    },
  };

  return (
    <Layout>
      <SEOHead
        title={`${post.title} | CBH Business Group`}
        description={post.meta_description || post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        image={post.cover_image_url || undefined}
        jsonLd={articleJsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </Link>

            {post.tags && post.tags.length > 0 && (
              <div className="flex gap-2 mb-4 flex-wrap">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-widest uppercase text-primary bg-primary/10 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {format(new Date(post.created_at), "MMMM d, yyyy")}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {readingTime} min read
              </span>
            </div>

            {post.cover_image_url && (
              <img
                src={post.cover_image_url}
                alt={post.title}
                className="w-full aspect-video object-cover mb-10"
              />
            )}

            {/* Table of Contents */}
            {headings.length >= 3 && (
              <nav className="mb-10 p-5 border border-border bg-card">
                <button
                  onClick={() => setTocOpen(!tocOpen)}
                  className="flex items-center gap-2 text-xs tracking-widest uppercase text-primary w-full"
                >
                  <List className="w-4 h-4" />
                  Table of Contents
                  <span className="ml-auto text-muted-foreground">{tocOpen ? "−" : "+"}</span>
                </button>
                {tocOpen && (
                  <ol className="mt-4 space-y-2">
                    {headings.map((h) => (
                      <li key={h.id} className={h.level === 3 ? "ml-4" : ""}>
                        <a
                          href={`#${h.id}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                )}
              </nav>
            )}

            <div
              className="prose prose-invert prose-gold max-w-none
                prose-headings:font-serif prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-li:text-muted-foreground
                prose-blockquote:border-primary prose-blockquote:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(processedContent) }}
            />
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs tracking-widest uppercase text-primary mb-8">Related Articles</p>
              <div className="grid sm:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/blog/${rp.slug}`}
                    className="group bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col"
                  >
                    {rp.cover_image_url && (
                      <div className="aspect-video overflow-hidden">
                        <img src={rp.cover_image_url} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-serif text-sm text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                        {rp.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 flex-1">{rp.excerpt}</p>
                      <span className="text-xs text-primary mt-3 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <section className="py-16 bg-secondary border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-primary mb-6">Explore More</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/services" className="bg-card border border-border p-5 hover:border-primary/30 transition-colors">
                <p className="font-serif text-sm text-foreground mb-1">Our Services</p>
                <p className="text-xs text-muted-foreground">Full M&A advisory process</p>
              </Link>
              <Link to="/business-valuation" className="bg-card border border-border p-5 hover:border-primary/30 transition-colors">
                <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
                <p className="text-xs text-muted-foreground">What's your business worth?</p>
              </Link>
              <Link to="/sell-business-florida" className="bg-card border border-border p-5 hover:border-primary/30 transition-colors">
                <p className="font-serif text-sm text-foreground mb-1">Sell in Florida</p>
                <p className="text-xs text-muted-foreground">Florida-specific M&A advisory</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
