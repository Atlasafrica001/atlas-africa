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
      
      console.log('📚 Loaded posts:', allPosts.length);
      
      // Set featured post (most recent)
      if (allPosts.length > 0) {
        console.log('⭐ Featured post:', allPosts[0].title);
        setFeaturedPost(allPosts[0]);
        setPosts(allPosts.slice(1)); // Rest of posts
      } else {
        console.log('📭 No posts available');
      }
    } catch (error) {
      console.error('❌ Failed to load blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate read time - SAFE VERSION
  const calculateReadTime = (content: string | null | undefined) => {
    if (!content) return 5;
    try {
      const wordsPerMinute = 200;
      const plainText = content.replace(/<[^>]*>/g, '');
      const words = plainText.split(/\s+/).length;
      return Math.max(1, Math.ceil(words / wordsPerMinute));
    } catch (error) {
      return 5;
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
        className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16"
        style={{
          backgroundImage: "url('/textured-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F5F1E8"
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {featuredPost ? (
            <>
              {/* Category Tags - FIXED RESPONSIVE */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <span className="bg-black text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
                  Featured
                </span>
                <span className="text-gray-700 text-xs sm:text-sm font-medium">
                  Latest Article
                </span>
                <span className="hidden sm:inline text-gray-700 text-xs sm:text-sm font-medium">
                  {formatDate(featuredPost.createdAt)}
                </span>
              </div>

              {/* Featured Article */}
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="mb-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight group-hover:text-[#D4AF37] transition-colors">
                    {featuredPost.title || 'Untitled Post'}
                  </h1>

                  {featuredPost.excerpt && (
                    <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  )}

                  {/* Author Info - IMPROVED RESPONSIVE */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/blog-author-1.png"
                      alt="Author"
                      width={40}
                      height={40}
                      className="rounded-full w-10 h-10 sm:w-11 sm:h-11"
                    />
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base">
                      <span className="font-bold text-gray-900">Atlas Africa</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-xs sm:text-sm text-gray-600">{formatDate(featuredPost.createdAt)}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-xs sm:text-sm text-gray-600">{calculateReadTime(featuredPost.content)} min read</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Featured Image (if exists) */}
              {featuredPost.featuredImage && (
                <div className="mt-6 sm:mt-8">
                  <img 
                    src={featuredPost.featuredImage} 
                    alt={featuredPost.title || 'Blog post image'}
                    className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
              )}

              {/* Featured Post Label */}
              <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-white/80 rounded-lg border-l-4 border-[#D4AF37]">
                <p className="text-xs sm:text-sm text-gray-600">
                  ⭐ <strong className="text-gray-900">Featured Article:</strong> This is our most recent post
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-16 sm:py-20">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">No Posts Yet</h1>
              <p className="text-base sm:text-lg text-gray-600">Check back soon for our latest insights!</p>
            </div>
          )}
        </div>
      </section>

      {/* Article List Section - Recent Posts */}
      {posts.length > 0 && (
        <section className="py-8 sm:py-12 bg-[#F5F1E8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">More Articles</h2>
              <p className="text-sm sm:text-base text-gray-600">Browse our recent posts</p>
            </div>

            {posts.map((post) => (
              <article key={post.id} className="mb-6 sm:mb-10 pb-6 sm:pb-10 border-b border-gray-300 last:border-0">
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Image
                      src="/blog-author-2.png"
                      alt="Author"
                      width={48}
                      height={48}
                      className="rounded-full flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
                        <span className="font-bold text-gray-900 text-sm sm:text-base">Atlas Africa</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-xs sm:text-sm text-gray-600">{formatDate(post.createdAt)}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors">
                        {post.title || 'Untitled Post'}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                        <span className="flex items-center gap-1 sm:gap-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 6v6l4 2" />
                          </svg>
                          <span>{calculateReadTime(post.content)} min read</span>
                        </span>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-300 rounded-full transition-colors flex-shrink-0 hidden sm:block">
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
        className="py-8 sm:py-12"
        style={{
          backgroundImage: "url('/textured-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F5F1E8"
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-[#F5F1E8]/90 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Stay Updated
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Join our community and get the latest insights on creative marketing, brand strategy, 
              and African innovation delivered straight to your inbox.
            </p>
            <Link 
              href="/consultation"
              className="inline-block bg-[#0A2E5C] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#0A2E5C]/90 transition-colors text-sm sm:text-base"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - White Background */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-[#0A2E5C]">Ready to </span>
            <span className="text-[#D4AF37]">Disrupt</span>
            <span className="text-[#0A2E5C]"> Your Industry?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's work together to create marketing that breaks through the noise and 
            builds meaningful connections with your audience.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-[#D4AF37] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-[#C4A037] transition-colors text-sm sm:text-base"
          >
            Book Now
          </Link>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}