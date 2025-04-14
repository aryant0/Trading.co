import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Trophy, Users, BookOpen, Eye, Target, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { number: "1000+", label: "Trained Students" },
    { number: "5+", label: "Live Seminars" },
    { number: "98%", label: "Success Rate" },
    { number: "24/7", label: "Mentor Support" }
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Step-by-Step Guidance",
      description: "From market basics to advanced strategies, we guide you at every step"
    },
    {
      icon: Trophy,
      title: "Proven Strategies",
      description: "Battle-tested methods that actually work in real markets"
    },
    {
      icon: Users,
      title: "Supportive Mentorship",
      description: "Personalized attention and doubt resolution sessions"
    },
    {
      icon: BarChart,
      title: "Impactful Learning",
      description: "Practical, hands-on education that creates real results"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1E2134] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#FB5E20]">AUM The Trading Institute</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted partner in stock market education and trading success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1E2134] p-8 rounded-2xl border border-[#FB5E20]/20"
          >
            <Users className="w-12 h-12 text-[#FB5E20] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Expert Mentorship</h3>
            <p className="text-gray-400">
              Learn from experienced traders who have mastered the art of trading and are ready to share their knowledge with you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1E2134] p-8 rounded-2xl border border-[#FB5E20]/20"
          >
            <BookOpen className="w-12 h-12 text-[#FB5E20] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Structured Learning</h3>
            <p className="text-gray-400">
              Our comprehensive curriculum is designed to take you from beginner to expert, with practical exercises and real-world examples.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#1E2134] p-8 rounded-2xl border border-[#FB5E20]/20"
          >
            <Shield className="w-12 h-12 text-[#FB5E20] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Risk Management</h3>
            <p className="text-gray-400">
              Learn how to protect your capital while maximizing returns through proven risk management strategies.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 border border-[#FB5E20]/20 rounded-xl"
            >
              <h3 className="text-4xl font-bold text-[#FB5E20] mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 bg-[#1E2134] border border-[#FB5E20]/20 rounded-xl"
          >
            <Target className="w-12 h-12 text-[#FB5E20] mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400">
              To empower traders with practical skills and real-world knowledge through hands-on training and expert mentorship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 bg-[#1E2134] border border-[#FB5E20]/20 rounded-xl"
          >
            <Eye className="w-12 h-12 text-[#FB5E20] mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400">
              To be the global leader in trading education, building a strong community of confident, successful traders.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose AUM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#1E2134] p-6 rounded-xl border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-all"
              >
                <value.icon className="w-12 h-12 text-[#FB5E20] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
