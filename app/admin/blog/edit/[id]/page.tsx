'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { api } from '@/lib/api';

export default function BlogEditorPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const isEdit = id && id !== 'new';

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [featuredImage, setFeaturedImage] = useState('');
  const [published, setPublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isEdit) {
      fetchPost();
    }
  }, [isEdit]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/api/v1/blog/admin/${id}`);
      const post = response.data.post;
      setTitle(post.title);
      setContent(post.content);
      setExcerpt(post.excerpt || '');
      setFeaturedImage(post.featuredImage || '');
      setPublished(post.published);
    } catch (error) {
      alert('Failed to load post');
      router.push('/admin/blog');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (publishNow: boolean = false) => {
    if (!title.trim() || !content.trim()) {
      alert('Please fill in title and content');
      return;
    }

    setSaving(true);
    try {
      const data = {
        title,
        content,
        excerpt: excerpt || undefined,
        featuredImage: featuredImage || undefined,
        published: publishNow || published
      };

      if (isEdit) {
        await api.put(`/api/v1/blog/${id}`, data);
      } else {
        await api.post('/api/v1/blog', data);
      }

      router.push('/admin/blog');
    } catch (error: any) {
      alert(error.message || 'Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                {isEdit ? 'Edit Post' : 'New Post'}
              </h1>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => router.push('/admin/blog')}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  disabled={saving}
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSave(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save Draft'}
                </button>
                <button
                  onClick={() => handleSave(true)}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  disabled={saving}
                >
                  {saving ? 'Publishing...' : 'Publish'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Editor */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
            {/* Title */}
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post title..."
                className="w-full text-4xl font-bold border-none focus:ring-0 placeholder-gray-300"
              />
            </div>

            {/* Featured Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image URL (optional)
              </label>
              <input
                type="url"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {featuredImage && (
                <div className="mt-4">
                  <img 
                    src={featuredImage} 
                    alt="Preview" 
                    className="w-full h-64 object-cover rounded-lg"
                    onError={() => alert('Invalid image URL')}
                  />
                </div>
              )}
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt (optional - auto-generated if empty)
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary of your post..."
                rows={3}
                maxLength={500}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">{excerpt.length}/500 characters</p>
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content here... (HTML supported)"
                rows={20}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              />
              <p className="text-sm text-gray-500 mt-2">
                💡 HTML formatting is supported. Use tags like &lt;p&gt;, &lt;h2&gt;, &lt;strong&gt;, &lt;em&gt;, etc.
              </p>
            </div>

            {/* Preview */}
            {content && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
