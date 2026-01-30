"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderMain from "@/components/HeaderMain";
import FooterHome from "@/components/FooterHome";
import { api } from "@/lib/api";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string | null;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await api.get('/api/v1/blog?published=true');
      const allPosts = response.data.posts || [];
      
      // Set featured post (most recent)
      if (allPosts.length > 0) {
        setFeaturedPost(allPosts[0]);
        setPosts(allPosts.slice(1)); // Rest of posts
      }
    } catch (error) {
      console.error('Failed to load blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate read time - SAFE VERSION
  const calculateReadTime = (content: string | null | undefined) => {
    if (!content) return 5; // Default
    try {
      const wordsPerMinute = 200;
      const plainText = content.replace(/<[^>]*>/g, '');
      const words = plainText.split(/\s+/).length;
      return Math.max(1, Math.ceil(words / wordsPerMinute));
    } catch (error) {
      return 5; // Fallback
    }
  };

  // Format date - SAFE VERSION
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return 'Recently';
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch (error) {
      return 'Recently';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <HeaderMain />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading stories...</p>
          </div>
        </div>
        <FooterHome />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeaderMain />

      {/* Hero Section - Featured Post */}
      <section 
        className="pt-32 pb-16"
        style={{
          backgroundImage: "url('/textured-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F5F1E8"
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          {featuredPost ? (
            <>
              {/* Category Tags */}
              <div className="flex gap-3 mb-8 flex-wrap">
                <span className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium">
                  Hot
                </span>
                <span className="text-gray-700 text-sm font-medium">
                  Featured Article
                </span>
              </div>

              {/* Featured Article */}
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="mb-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {featuredPost.title || 'Untitled Post'}
                  </h1>

                  {featuredPost.excerpt && (
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  )}

                  {/* Author Info */}
                  <div className="flex items-center gap-3">
                    <Image
                      src="/blog-author-1.png"
                      alt="Author"
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-900">Atlas Africa</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{formatDate(featuredPost.createdAt)}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">{calculateReadTime(featuredPost.content)} min read</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Featured Image (if exists) */}
              {featuredPost.featuredImage && (
                <div className="mt-8">
                  <img 
                    src={featuredPost.featuredImage} 
                    alt={featuredPost.title || 'Blog post image'}
                    className="w-full h-[400px] object-cover rounded-2xl"
                  />
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">No Posts Yet</h1>
              <p className="text-gray-600">Check back soon for our latest insights!</p>
            </div>
          )}
        </div>
      </section>

      {/* Article List Section - Recent Posts */}
      {posts.length > 0 && (
        <section className="py-12 bg-[#F5F1E8]">
          <div className="max-w-3xl mx-auto px-6">
            {posts.map((post) => (
              <article key={post.id} className="mb-10 pb-10 border-b border-gray-300 last:border-0">
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/blog-author-2.png"
                      alt="Author"
                      width={48}
                      height={48}
                      className="rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-bold text-gray-900">Atlas Africa</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{formatDate(post.createdAt)}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {post.title || 'Untitled Post'}
                      </h2>
                      {post.excerpt && (
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          <span>{calculateReadTime(post.content)} min read</span>
                        </span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-300 rounded-full transition-colors flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                    </button>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <section 
        className="py-12"
        style={{
          backgroundImage: "url('/textured-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F5F1E8"
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#F5F1E8]/90 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Join our community and get the latest insights on creative marketing, brand strategy, 
              and African innovation delivered straight to your inbox.
            </p>
            <Link 
              href="/consultation"
              className="inline-block bg-[#0A2E5C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0A2E5C]/90 transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#0A2E5C]">Ready to </span>
            <span className="text-[#D4AF37]">Disrupt</span>
            <span className="text-[#0A2E5C]"> Your Industry?</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's work together to create marketing that breaks through the noise and 
            builds meaningful connections with your audience.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C4A037] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}