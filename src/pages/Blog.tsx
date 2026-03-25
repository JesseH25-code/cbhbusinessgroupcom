import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Calendar } from "lucide-react";
import { format } from "date-fns";
import { useMemo, useState } from "react";

const Blog = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, cover_image_url, author, tags, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const allTags = useMemo(() => {
    if (!posts) return [];
    const tagCount = new Map<string, number>();
    posts.forEach((p) => (p.tags || []).forEach((t) => tagCount.set(t, (tagCount.get(t) || 0) + 1)));
    return [...tagCount.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([tag]) => tag);
  }, [posts]);

  const featured = posts?.[0];
  const gridPosts = useMemo(() => {
    if (!posts) return [];
    const rest = posts.slice(1);
    if (!activeTag) return rest;
    return rest.filter((p) => (p.tags || []).includes(activeTag));
  }, [posts, activeTag]);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "M&A Insights Blog",
    description: "Expert insights on selling a business, M&A deal structures, valuation strategies, and exit planning.",
    url: "https://cbhbusinessgroup.com/blog",
    publisher: {
      "@type": "Organization",
      name: "CBH Business Group",
      logo: { "@type": "ImageObject", url: "https://cbhbusinessgroup.com/og-image.jpg" },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: (posts || []).slice(0, 20).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://cbhbusinessgroup.com/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <Layout>
      <SEOHead
        title="M&A Insights Blog | CBH Business Group"
        description="Expert insights on selling a business, M&A deal structures, valuation strategies, and exit planning for business owners in the lower middle market."
        path="/blog"
        jsonLd={collectionJsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Insights</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">M&A Insights & Resources</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Practical guidance on business valuation, exit planning, deal structures, and the M&A process for owners of companies valued $3M–$50M.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {!isLoading && featured && (
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-6">
            <p className="text-xs tracking-widest uppercase text-primary mb-6">Featured</p>
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-8 items-center"
            >
              {featured.cover_image_url && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={featured.cover_image_url}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div>
                {featured.tags && featured.tags.length > 0 && (
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {featured.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] tracking-widest uppercase text-primary bg-primary/10 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {format(new Date(featured.created_at), "MMM d, yyyy")}
                  </span>
                  <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Tag Filters */}
      {allTags.length > 0 && (
        <section className="pt-12 pb-4">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag(null)}
                className={`text-[10px] tracking-widest uppercase px-3 py-1 border transition-colors ${
                  !activeTag
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`text-[10px] tracking-widest uppercase px-3 py-1 border transition-colors ${
                    activeTag === tag
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card border border-border p-6 animate-pulse">
                  <div className="h-48 bg-muted rounded mb-4" />
                  <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-3 bg-muted rounded w-full" />
                </div>
              ))}
            </div>
          ) : gridPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col"
                >
                  {post.cover_image_url && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-[10px] tracking-widest uppercase text-primary bg-primary/10 px-2 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {format(new Date(post.created_at), "MMM d, yyyy")}
                      </div>
                      <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                {activeTag ? `No articles found for "${activeTag}". ` : "New articles coming soon. "}
                {activeTag && (
                  <button onClick={() => setActiveTag(null)} className="text-primary hover:underline">
                    Clear filter
                  </button>
                )}
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
