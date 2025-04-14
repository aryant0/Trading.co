import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Shield, MessageSquare, TrendingUp, Target } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Proven Strategies",
      description: "Learn the methods that have helped our students go from clueless to confident in record time."
    },
    {
      icon: BookOpen,
      title: "Simplified Learning",
      description: "We break down complex stock and forex concepts into easy, digestible insights—minus the confusing jargon."
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description: "Small class sizes, one-on-one mentorship, and direct access to the instructors."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Our focus on risk management will help you preserve your capital even on the wildest market days."
    }
  ];

  const faqs = [
    "How much return can I expect after the stock market course?",
    "How much accuracy can I expect?",
    "How can I make payment?",
    "If I missed a class, then how can I learn that particular topic?",
    "Can I attend online classes through mobile?",
    "For how much time will you provide mentor support?",
    "I have attended a live class but still have some doubts. How can I clarify those?",
    "I have never made any investment in the stock market. Can I join courses?"
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3752548/3752548-hd_1920_1080_24fps.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2134]/90 to-[#2A2D42]/90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Master the Art of Trading with
                <span className="text-[#FB5E20] block mt-4">AUM The Trading Institute</span>
              </h1>

              <p className="text-xl text-gray-300">
                Join over 1,000 students who've transformed their trading journey with step-by-step guidance, expert mentorship, and hands-on learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/batches"
                  className="group inline-flex items-center gap-2 bg-[#FB5E20] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Learning Today
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/brochure"
                  className="border-2 border-[#FB5E20] text-[#FB5E20] px-8 py-4 rounded-full hover:bg-[#FB5E20]/10 transition-all"
                >
                  View Brochure
                </Link>
              </div>
            </motion.div>

            {/* Right Content - YouTube Video */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/qMJt-W_zoF4"
                title="AUM The Trading Institute"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#1E2134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white">
                Stop the guessing, stop the pain AUM The Trading Institute to profit gain
              </h2>
              <p className="text-gray-300 text-lg">
                AUM The Trading Institute was founded by Sumit Sengar to bring structure and clarity to trading education. In a market full of unorganized knowledge, AUM stands out by offering practical, hands-on, and fun learning experiences.
              </p>
              <p className="text-gray-300 text-lg">
                At AUM The Trading Institute, students find the right guidance, the right education, and the confidence to succeed in trading. Join us to learn, grow, and master the market!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 bg-[#FB5E20] p-4 rounded-lg">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">4.7</div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <div className="text-sm">Rating on Google</div>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Trading Education"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#1E2134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Us</h2>
            <p className="text-gray-400">Expertise that Speaks Louder than Charts</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#1E2134] p-8 rounded-2xl border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-all"
              >
                <feature.icon className="w-12 h-12 text-[#FB5E20] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#1E2134]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Common Questions</h2>
            <p className="text-gray-400">Find Answers to Common Questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-[#FB5E20]/20 rounded-xl hover:border-[#FB5E20]/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <MessageSquare className="w-6 h-6 text-[#FB5E20]" />
                  <h3 className="text-lg font-semibold text-white">{faq}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;