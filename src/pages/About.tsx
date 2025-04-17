import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Trophy, Users, BookOpen, Eye, Target, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Add some relevant background images for the cards
const cardBgImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", // mentorship
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80", // learning
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // risk
];

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
      title: "Deep Analysis",
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

  // Grid lines scroll animation
  const gridRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#1E2134] pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Moving grid lines background */}
      <div
        ref={gridRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(251, 146, 60,0.09) 1px,transparent 1px),linear-gradient(180deg,rgba(251, 146, 60,0.09) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: `${scrollY % 40}px ${scrollY % 40}px`,
          transition: 'background-position 0.1s linear'
        }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About <span className="text-[#FB5E20]">AUM The Trading Institute</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Your trusted partner in stock market education and trading success.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              About AUM The Trading Institute
            </h2>
            <p className="text-gray-300 text-lg">
              AUM The Trading Institute was founded by Sumit Sengar to bring structure and clarity to trading education. In a market full of unorganized knowledge, AUM stands out by offering practical, hands-on, and fun learning experiences.
            </p>
            <p className="text-gray-300 text-lg">
            We provide step-by-step guidance, from basics to advanced strategies, with a focus on proven methods that work. With over 1,000 trained students and 5+ live seminars, we’ve created a supportive environment where doubts are resolved, mentorship is personal, and learning is impactful.
            </p>
            <p className="text-gray-300 text-lg">
              At AUM The Trading Institute, students find the right guidance, the right education, and the confidence to succeed in trading. Join us to learn, grow, and master the market!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -top-4 -right-4 bg-[#FB5E20] p-4 rounded-lg z-10">
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
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <motion.img
                src="https://www.aumtrades.com/wp-content/uploads/2025/02/IMG_1623.jpg"
                alt="Trading Education"
                className="rounded-lg w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.08 }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: ['-100%', '120%'] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear"
                  }}
                  className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ filter: 'blur(8px)' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        >
          {/* Card 1: Mentorship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative bg-[#1E2134] p-8 rounded-2xl border border-[#FB5E20]/20 overflow-hidden group shadow-lg"
          >
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-500"
              style={{ backgroundImage: `url(${cardBgImages[0]})` }}
            />
            <Users className="w-12 h-12 text-[#FB5E20] mb-4 relative z-10" />
            <h3 className="text-xl font-semibold mb-2 text-white relative z-10">Expert Mentorship</h3>
            <p className="text-gray-400 relative z-10">
              Learn from experienced traders who have mastered the art of trading and are ready to share their knowledge with you.
            </p>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1E2134] to-transparent pointer-events-none" />
          </motion.div>

          {/* Card 2: Structured Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-[#1E2134] p-8 rounded-2xl border border-[#FB5E20]/20 overflow-hidden group shadow-lg"
          >
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-500"
              style={{ backgroundImage: `url(${cardBgImages[1]})` }}
            />
            <BookOpen className="w-12 h-12 text-[#FB5E20] mb-4 relative z-10" />
            <h3 className="text-xl font-semibold mb-2 text-white relative z-10">Structured Learning</h3>
            <p className="text-gray-400 relative z-10">
              Our comprehensive curriculum is designed to take you from beginner to expert, with practical exercises and real-world examples.
            </p>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1E2134] to-transparent pointer-events-none" />
          </motion.div>

          {/* Card 3: Risk Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative bg-[#1E2134] p-8 rounded-2xl border border-[#FB5E20]/20 overflow-hidden group shadow-lg"
          >
            <div
              className="absolute inset-0 z-0 bg-cover bg-center opacity-30 group-hover:opacity-50 transition-all duration-500"
              style={{ backgroundImage: `url(${cardBgImages[2]})` }}
            />
            <Shield className="w-12 h-12 text-[#FB5E20] mb-4 relative z-10" />
            <h3 className="text-xl font-semibold mb-2 text-white relative z-10">Risk Management</h3>
            <p className="text-gray-400 relative z-10">
              Learn how to protect your capital while maximizing returns through proven risk management strategies.
            </p>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1E2134] to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-8 bg-[#1E2134] border border-[#FB5E20]/20 rounded-xl"
          >
            <Target className="w-12 h-12 text-[#FB5E20] mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400">
              Our mission is to inspire individuals by equipping them with the vital knowledge and practical skills essential for success in the dynamic world of trading. We are devoted to delivering completely hands-on training that seamlessly integrates theoretical insights with practical experience. Our aim is to arm our students with the capabilities and assurance needed to become successful traders. By nurturing an engaging learning environment that fosters creativity, innovation, flexibility, and lifelong learning, we seek to develop a community of talented traders ready to make a significant difference in the industry!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-8 bg-[#1E2134] border border-[#FB5E20]/20 rounded-xl"
          >
            <Eye className="w-12 h-12 text-[#FB5E20] mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400">
              At AUM Trading Institute, our vision is to be the leading platform for financial education, shaping the future of trading by empowering individuals with expert knowledge and practical skills. We strive to create a global community of successful traders who are equipped to navigate the financial markets with confidence, consistency, and profitability. Our goal is to inspire financial independence and drive sustainable growth for every student.
            </p>
          </motion.div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose AUM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-[#1E2134] p-6 rounded-xl border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-all"
                whileHover={{ scale: 1.04, boxShadow: '0 4px 32px 0 #FB5E20' }}
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
