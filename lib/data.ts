// Centralized data source for Atlas Africa website
// This ensures consistency between admin dashboard and public pages

export interface WaitlistSignup {
  id: number;
  name: string;
  email: string;
  date: string;
  notified: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  active: boolean;
  featured: boolean;
  detailedDescription?: string;
  includes?: string[];
  serviceNumber?: string;
}

export interface Consultation {
  id: number;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectDetails: string;
  date: string;
  status: "pending" | "contacted" | "converted";
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  excerpt: string;
  content?: string;
  views: number;
  status: "published" | "draft";
  categories: string[];
  featured: boolean;
}

// WAITLIST DATA
export const waitlistSignups: WaitlistSignup[] = [
  {
    id: 1,
    name: "Tunde Bakare",
    email: "tunde@email.com",
    date: "2026-01-17",
    notified: true,
  },
  {
    id: 2,
    name: "Amina Hassan",
    email: "amina.hassan@email.com",
    date: "2026-01-16",
    notified: true,
  },
  {
    id: 3,
    name: "Chidi Okonkwo",
    email: "chidi.o@email.com",
    date: "2026-01-15",
    notified: false,
  },
  {
    id: 4,
    name: "Fatima Yusuf",
    email: "fatima.yusuf@email.com",
    date: "2026-01-14",
    notified: true,
  },
  {
    id: 5,
    name: "Emeka Nwosu",
    email: "emeka.nwosu@email.com",
    date: "2026-01-13",
    notified: false,
  },
  {
    id: 6,
    name: "Blessing Okoro",
    email: "blessing.o@email.com",
    date: "2026-01-12",
    notified: true,
  },
  {
    id: 7,
    name: "Ibrahim Mohammed",
    email: "ibrahim.m@email.com",
    date: "2026-01-11",
    notified: false,
  },
  {
    id: 8,
    name: "Grace Adeola",
    email: "grace.adeola@email.com",
    date: "2026-01-10",
    notified: true,
  },
];

// SERVICES DATA - Matches Services Page exactly
export const services: Service[] = [
  {
    id: 1,
    serviceNumber: "01",
    title: "Digital Marketing & Social Media Management",
    description: "Data-driven strategies that turn clicks into customers",
    icon: "📱",
    active: true,
    featured: true,
    detailedDescription: "Your brand deserves more than just 'posting.' We build strategies that turn followers into customers and campaigns that actually perform. From content creation to ad management, we handle it all.",
    includes: [
      "Social Media Strategy & Management",
      "Paid Advertising (Meta, Google, TikTok)",
      "Influencer Marketing Campaigns",
      "Community Management & Engagement",
      "Performance Analytics & Reporting"
    ]
  },
  {
    id: 2,
    serviceNumber: "02",
    title: "Brand Strategy & Positioning",
    description: "Define your brand's voice, personality, and market position",
    icon: "📊",
    active: true,
    featured: true,
    detailedDescription: "Your brand isn't just a logo—it's a feeling, a promise, and a movement. We help you discover what makes your brand unforgettable and position it to win in the market.",
    includes: [
      "Brand Identity Development",
      "Market Research & Competitor Analysis",
      "Brand Messaging & Voice Guidelines",
      "Brand Architecture & Positioning Strategy",
      "Visual Identity Systems"
    ]
  },
  {
    id: 3,
    serviceNumber: "03",
    title: "Content Creation & Storytelling",
    description: "Visuals and copy that stop the scroll and start conversations",
    icon: "📸",
    active: true,
    featured: true,
    detailedDescription: "Great content doesn't just look good—it performs. We create visuals, videos, and copy that capture attention and drive action.",
    includes: [
      "Photography & Videography",
      "Copywriting & Storytelling",
      "Graphic Design & Motion Graphics",
      "Content Planning & Calendaring",
      "User-Generated Content Strategies"
    ]
  },
  {
    id: 4,
    serviceNumber: "04",
    title: "Creative Campaigns",
    description: "Bold, disruptive campaigns that cut through the noise",
    icon: "🎨",
    active: true,
    featured: false,
    detailedDescription: "We don't create campaigns—we create movements. Big ideas that shake up industries and get people talking.",
    includes: [
      "Campaign Concept Development",
      "Multi-Channel Campaign Execution",
      "Launch Strategy & Activation",
      "PR & Media Relations",
      "Campaign Performance Tracking"
    ]
  },
  {
    id: 5,
    serviceNumber: "05",
    title: "Web Design & Development",
    description: "Websites that convert visitors into customers",
    icon: "💻",
    active: true,
    featured: false,
    detailedDescription: "Your website is your digital storefront. We build sites that are beautiful, fast, and designed to convert.",
    includes: [
      "Custom Website Design & Development",
      "E-commerce Solutions",
      "SEO Optimization",
      "User Experience (UX) Design",
      "Website Maintenance & Support"
    ]
  },
  {
    id: 6,
    serviceNumber: "06",
    title: "Video Production",
    description: "Cinematic storytelling that captures attention",
    icon: "🎥",
    active: true,
    featured: false,
    detailedDescription: "From concept to final cut, we produce video content that doesn't just tell your story—it sells it.",
    includes: [
      "Commercial Video Production",
      "Brand Documentary Films",
      "Social Media Video Content",
      "Animation & Motion Graphics",
      "Post-Production & Editing"
    ]
  },
];

// CONSULTATIONS DATA
export const consultations: Consultation[] = [
  {
    id: 1,
    fullName: "Sarah Johnson",
    company: "TechStart Inc",
    email: "sarah@techstart.com",
    phone: "+234 801 234 5678",
    projectDetails: "Looking for comprehensive brand strategy and social media management for our new product launch.",
    date: "2026-01-15",
    status: "pending",
  },
  {
    id: 2,
    fullName: "David Chen",
    company: "GrowthLab",
    email: "david@growthlab.com",
    phone: "+234 802 345 6789",
    projectDetails: "Need digital marketing services to increase online visibility and drive conversions.",
    date: "2026-01-14",
    status: "contacted",
  },
  {
    id: 3,
    fullName: "Amara Okafor",
    company: "Nnamdi Foods",
    email: "amara@nnamdifoods.ng",
    phone: "+234 803 456 7890",
    projectDetails: "Interested in content creation and photography for our food products.",
    date: "2026-01-13",
    status: "converted",
  },
  {
    id: 4,
    fullName: "Michael Brown",
    company: "Urban Designs",
    email: "michael@urbandesigns.com",
    phone: "+234 804 567 8901",
    projectDetails: "Looking for web design and development services for our new e-commerce platform.",
    date: "2026-01-12",
    status: "pending",
  },
  {
    id: 5,
    fullName: "Chioma Adeleke",
    company: "Fashion Forward",
    email: "chioma@fashionforward.ng",
    phone: "+234 805 678 9012",
    projectDetails: "Need social media management and influencer marketing for fashion brand.",
    date: "2026-01-10",
    status: "contacted",
  },
];

// BLOG POSTS DATA
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Death of Conventional Marketing",
    author: "Miss Erin",
    authorImage: "/blog-author-1.png",
    date: "2026-01-06",
    readTime: "5 min read",
    excerpt: "The rules have changed. Learn how the world's most innovative brands are breaking the mold and creating movements, not just campaigns.",
    content: "It's a war of ATTENTION out there and brands with only 'HUGS EVERY MARKETER' slogans are losing badly. Meanwhile, the disruptors are winning today and I just think we should be listening to success a little bit differently.",
    views: 1243,
    status: "published",
    categories: ["Hot", "Featured Entrepreneurs", "Real-life Disruptive Marketing 2025"],
    featured: true,
  },
  {
    id: 2,
    title: "What Is Unconventional Marketing",
    author: "Miss Erin",
    authorImage: "/blog-author-2.png",
    date: "2024-12-12",
    readTime: "4 min read",
    excerpt: "Unconventional marketing breaks all traditional rules to create memorable brand experiences that resonate deeply with audiences.",
    content: "Unconventional marketing is about thinking outside the box, challenging the status quo, and creating campaigns that people actually remember.",
    views: 856,
    status: "published",
    categories: ["Marketing Strategy", "Innovation"],
    featured: false,
  },
  {
    id: 3,
    title: "Disruptive Marketing Strategies for 2026",
    author: "Miss Erin",
    authorImage: "/blog-author-2.png",
    date: "2026-01-15",
    readTime: "6 min read",
    excerpt: "Discover the cutting-edge marketing strategies that will dominate 2026 and help your brand stand out in a crowded marketplace.",
    content: "The future of marketing is here, and it's more disruptive than ever. From AI-powered personalization to community-driven campaigns, these are the strategies that will define success in 2026.",
    views: 432,
    status: "draft",
    categories: ["Trends", "Strategy", "Future of Marketing"],
    featured: false,
  },
];

// Helper functions for data manipulation
export const getPublishedBlogPosts = () => {
  return blogPosts.filter(post => post.status === "published");
};

export const getActiveServices = () => {
  return services.filter(service => service.active);
};

export const getFeaturedServices = () => {
  return services.filter(service => service.featured && service.active);
};

export const getWaitlistStats = () => {
  return {
    total: waitlistSignups.length,
    notified: waitlistSignups.filter(s => s.notified).length,
    pending: waitlistSignups.filter(s => !s.notified).length,
  };
};

export const getConsultationStats = () => {
  return {
    total: consultations.length,
    pending: consultations.filter(c => c.status === "pending").length,
    contacted: consultations.filter(c => c.status === "contacted").length,
    converted: consultations.filter(c => c.status === "converted").length,
  };
};

export const getBlogStats = () => {
  return {
    total: blogPosts.length,
    published: blogPosts.filter(p => p.status === "published").length,
    drafts: blogPosts.filter(p => p.status === "draft").length,
    totalViews: blogPosts.reduce((sum, post) => sum + post.views, 0),
  };
};
