"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HeaderMain from "@/components/HeaderMain";
import FooterHome from "@/components/FooterHome";
import { api } from "@/lib/api";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await api.get(`/api/v1/blog/${slug}`);
      setPost(response.data.post);
    } catch (error) {
      console.error('Failed to load post:', error);
      router.push('/blog');
    } finally {
      setLoading(false);
    }
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <HeaderMain />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading article...</p>
          </div>
        </div>
        <FooterHome />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen">
      <HeaderMain />

      {/* Hero Section */}
      <section 
        className="pt-32 pb-16"
        style={{
          backgroundImage: "url('/textured-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F5F1E8"
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Back Navigation */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center gap-3 flex-wrap">
              <Image
                src="/blog-author-1.png"
                alt="Author"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold text-gray-900">Atlas Africa</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">{formatDate(post.createdAt)}</span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-600">{calculateReadTime(post.content)} min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={post.featuredImage} 
                alt={post.title}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:mt-8 prose-headings:mb-4
              prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base sm:prose-p:text-lg
              prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-800 prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-[#D4AF37] 
              prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-8
              prose-blockquote:text-xl sm:prose-blockquote:text-2xl prose-blockquote:font-bold 
              prose-blockquote:text-gray-900 prose-blockquote:italic
              prose-img:rounded-2xl prose-img:my-8
              prose-code:text-[#D4AF37] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="text-sm text-gray-600">
                Last updated: {formatDate(post.updatedAt)}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Share this article:</span>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Share"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16"
        style={{
          backgroundImage: "url('/textured-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#F5F1E8"
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white/90 rounded-xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#0A2E5C]">Ready to </span>
              <span className="text-[#D4AF37]">Disrupt</span>
              <span className="text-[#0A2E5C]"> Your Industry?</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let's work together to create marketing that breaks through the noise.
            </p>
            <Link
              href="/consultation"
              className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#C4A037] transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <FooterHome />
    </div>
  );
}
