import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Unsplash image URLs
const blogImage1 = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop";
const blogImage2 = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop";
const blogImage3 = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Market Trends: A Beginner's Guide",
      excerpt: "Learn how to identify and analyze market trends to make better trading decisions.",
      image: blogImage1,
      date: "March 15, 2024",
      category: "Market Analysis"
    },
    {
      title: "Technical Analysis: Chart Patterns You Should Know",
      excerpt: "Discover the most important chart patterns and how to use them in your trading strategy.",
      image: blogImage2,
      date: "March 10, 2024",
      category: "Technical Analysis"
    },
    {
      title: "Risk Management: Protecting Your Investments",
      excerpt: "Essential risk management strategies every trader should implement.",
      image: blogImage3,
      date: "March 5, 2024",
      category: "Risk Management"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1E2134] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#FB5E20]">Trading Insights</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest market trends, trading strategies, and expert insights from our team.
            </p>
          </div>

          {/* Blog Posts */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#2A2D42] rounded-2xl overflow-hidden border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-colors"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#FB5E20]">{post.category}</span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                  <p className="text-gray-300">{post.excerpt}</p>
                  <button className="flex items-center gap-2 text-[#FB5E20] hover:text-[#FB5E20]/80 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-4 gap-6">
            {['Market Analysis', 'Technical Analysis', 'Risk Management', 'Trading Psychology'].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-[#2A2D42] rounded-2xl p-6 border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{category}</h3>
                <p className="text-gray-300">
                  Explore our collection of articles and resources about {category.toLowerCase()}.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;