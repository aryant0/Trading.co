import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, BookOpen, Shield, MessageSquare, TrendingUp, Target } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Deep Analysis",
      description: "Learn the methods that have helped our students go from clueless to confident in record time.",
      image: "https://images.unsplash.com/photo-1635236190542-d43e4d4b9e4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0Y2slMjBhbmFseXNpc3xlbnwwfHwwfHx8MA%3D%3D" // Updated image for Deep Analysis
    },
    {
      icon: BookOpen,
      title: "Simplified Learning",
      description: "We break down complex stock and forex concepts into easy, digestible insights—minus the confusing jargon.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" // Updated image for Simplified Learning
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description: "Small class sizes, one-on-one mentorship, and direct access to the instructors.",
      image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsYXNzJTIwYWR1bHRzfGVufDB8fDB8fHww" // Updated image for Personalized Attention
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Our focus on risk management will help you preserve your capital even on the wildest market days.",
      image: "https://images.unsplash.com/photo-1672870153636-32a5e5218792?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmlzayUyMG1hbmFnZW1lbnQlMjBzdG9ja3N8ZW58MHx8MHx8fDA%3D" // Updated image for Risk Management
    }
  ];

  const faqs = [
    { question: "How much return can I expect after the stock market course?", answer: "Returns depend on market conditions and your trading skills. We provide the tools to maximize your potential." },
    { question: "How much accuracy can I expect?", answer: "Accuracy varies based on strategies and market conditions. We focus on consistent improvement." },
    { question: "How can I make payment?", answer: "Payments can be made online via our secure payment gateway." },
    { question: "If I missed a class, then how can I learn that particular topic?", answer: "Recorded sessions are available for all classes to ensure you don't miss out." },
    { question: "Can I attend online classes through mobile?", answer: "Yes, our platform is mobile-friendly for seamless learning." },
    { question: "For how much time will you provide mentor support?", answer: "Mentor support is available for a specified duration post-course completion." },
    { question: "I have attended a live class but still have some doubts. How can I clarify those?", answer: "You can reach out to mentors via email or scheduled one-on-one sessions." },
    { question: "I have never made any investment in the stock market. Can I join courses?", answer: "Absolutely! Our courses are designed for beginners and experienced traders alike." }
  ];

  const tradingImages = [
    "https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b2Nrc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RvY2tzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1612696874005-d015469bc660?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b2Nrc3xlbnwwfHwwfHx8MA%3D%3D"
  ];

  const googleRatingImages = [
    "https://images.unsplash.com/photo-1642052502780-8ee67e3bf930?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0b2Nrc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RvY2tzfGVufDB8fDB8fHww",
    
    "https://images.unsplash.com/photo-1613919517761-0d9e719d3244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0b2Nrc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1648098893250-1d03dce92467?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHN0b2Nrc3xlbnwwfHwwfHx8MA%3D%3D"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGoogleImageIndex, setCurrentGoogleImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % tradingImages.length);
    }, 2500); // Change image every 2.5 seconds
    return () => clearInterval(interval);
  }, [tradingImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGoogleImageIndex((prevIndex) => (prevIndex + 1) % googleRatingImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [googleRatingImages.length]);

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

  // Features carousel state and logic
  const [featureIndex, setFeatureIndex] = useState(0);
  const featuresToShow = 4; // Show 4 cards at a time

  // For seamless infinite loop, duplicate features array
  const carouselFeatures = [...features, ...features];

  // Auto-advance carousel (left to right, seamless loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  // Manual navigation handlers
  const handlePrev = () => {
    setFeatureIndex((prev) => (prev - 1 + features.length) % features.length);
  };
  const handleNext = () => {
    setFeatureIndex((prev) => (prev + 1) % features.length);
  };

  // Calculate translateX for seamless loop
  const getTranslateX = () => {
    // Each card is 100/featuresToShow percent wide
    return `-${featureIndex * (100 / featuresToShow)}%`;
  };

  return (
    <div className="relative min-h-screen">
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
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <source src="https://videos.pexels.com/video-files/3752548/3752548-hd_1920_1080_24fps.mp4" type="video/mp4" />
          </motion.video>

          {/* Adjusted Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#1E2134]/70 to-[#2A2D42]/70"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  Master the Art of Stock Market with
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
                  <a
                    href="/brochure.pdf"
                    download="brochure.pdf"
                    className="border-2 border-[#FB5E20] text-[#FB5E20] px-8 py-4 rounded-full hover:bg-[#FB5E20]/10 transition-all"
                  >
                    Download Brochure
                  </a>
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
            </motion.div>
          </div>
        </section>

        {/* Stop the Guessing Section */}
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
                  src={googleRatingImages[currentGoogleImageIndex]}
                  alt="Trading Education"
                  className="rounded-lg shadow-xl object-cover w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-[#1E2134]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white">About Us</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-gray-300 text-lg">
                  Welcome to <span className="text-[#FB5E20] font-semibold">AUM – The Trading Institute</span>
                </p>
                <p className="text-gray-300 text-lg">
                  AUM is one of India’s premier stock market training institutes, offering the most comprehensive and practical online stock market courses available today. Our mission is to empower the new generation—those who are driven to earn more, take bold steps forward, and break free from financial limitations.
                </p>
                <p className="text-gray-300 text-lg">
                  While trading is often misunderstood as something meant only for a select few, we aim to shatter that myth. At AUM, we focus on teaching time-tested, proven trading strategies that are both practical and profitable. Our goal is to turn curiosity into confidence and guide you toward consistent success in the financial markets.
                </p>
                <Link
                  to="/about"
                  className="inline-block bg-[#FB5E20] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FB5E20]/90 transition-all"
                >
                  Know More
                </Link>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center"
              >
                {/* Cut-In Styled Image */}
                <div className="relative group w-96 h-96 md:w-[28rem] md:h-[28rem]">
                  <img
                    src="https://i.pinimg.com/736x/b0/b4/60/b0b460f6b0928b57219b1e6da71ea04d.jpg"
                    alt="About Us"
                    className="rounded-lg shadow-xl object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FB5E20]/30 via-transparent to-transparent rounded-lg"></div>
                </div>

                {/* Moving Shapes */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute w-16 h-16 bg-[#FB5E20]/30 rounded-full blur-xl"
                    animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute w-24 h-24 bg-[#FB5E20]/20 rounded-full blur-2xl"
                    animate={{ x: [-30, 30, -30], y: [30, -30, 30] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute w-12 h-12 bg-[#FB5E20]/40 rounded-full blur-lg"
                    animate={{ x: [20, -20, 20], y: [-20, 20, -20] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  />
                </div>
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

            <div className="relative overflow-hidden">
              {/* Manual navigation buttons */}
              <button
                aria-label="Previous"
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#FB5E20] text-white rounded-full p-2 shadow-lg hover:bg-[#FB5E20]/80 transition"
                style={{ left: '-2rem' }}
              >
                &#8592;
              </button>
              <button
                aria-label="Next"
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#FB5E20] text-white rounded-full p-2 shadow-lg hover:bg-[#FB5E20]/80 transition"
                style={{ right: '-2rem' }}
              >
                &#8594;
              </button>
              <motion.div
                className="flex gap-8 transition-transform duration-700 ease-in-out"
                animate={{ x: getTranslateX() }}
                style={{
                  width: `${carouselFeatures.length * (100 / featuresToShow)}%`,
                }}
              >
                {carouselFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex-shrink-0 w-80 bg-[#1E2134] p-8 rounded-2xl border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-all"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-12 h-12 text-[#FB5E20] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* Dots for navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFeatureIndex(idx)}
                  className={`w-3 h-3 rounded-full ${featureIndex === idx ? 'bg-[#FB5E20]' : 'bg-gray-400/40'} transition`}
                  aria-label={`Go to feature ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* New Features Section */}
        <section className="py-24 bg-[#1E2134] relative">
          {/* Decorative Shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#FB5E20]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#FB5E20]/10 rounded-full blur-2xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 text-white">What Sets Us Apart</h2>
              <p className="text-gray-400">Discover the unique advantages of learning with us</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-96 rounded-xl overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2134]/90 via-[#1E2134]/60 to-transparent" />
                  <div className="relative p-6 h-full flex flex-col justify-end">
                    <feature.icon className="w-12 h-12 text-[#FB5E20] mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Additional Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: features.length * 0.1 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2134]/90 via-[#1E2134]/60 to-transparent" />
                <div className="relative p-6 h-full flex flex-col justify-end">
                  <Target className="w-12 h-12 text-[#FB5E20] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Goal-Oriented Training</h3>
                  <p className="text-gray-300">
                    Our courses are designed to help you achieve specific trading goals with measurable outcomes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (features.length + 1) * 0.1 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2134]/90 via-[#1E2134]/60 to-transparent" />
                <div className="relative p-6 h-full flex flex-col justify-end">
                  <Star className="w-12 h-12 text-[#FB5E20] mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Proven Success Stories</h3>
                  <p className="text-gray-300">
                    Join a community of successful traders who have transformed their lives with our guidance.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Download the Brochure Section */}
        <section className="py-24 bg-[#1E2134]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Download the Brochure</h2>
              <p className="text-gray-400 text-lg">
                Get detailed insights about our courses, mentorship, and strategies. Download the brochure now!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#FB5E20] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FB5E20]/90 transition-all"
              >
                View Brochure
              </a>
            </motion.div>
          </div>
        </section>

        {/* Go at Your Own Pace Section */}
        <section className="py-24 bg-[#1E2134]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Go at Your Own Pace</h2>
              <p className="text-gray-400 text-lg">
                Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Online Batch */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-[#23263a] rounded-2xl shadow-xl p-6"
              >
                <img
                  src="https://i.pinimg.com/736x/d4/27/10/d427108019d5d832b5799ea178dda4f4.jpg"
                  alt="Online Batch"
                  className="w-auto max-h-96 rounded-xl mb-4"
                  style={{ maxWidth: 520, objectFit: "contain" }}
                />
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Online Batch</h3>
                  <p className="text-gray-400 text-base">
                    Learn from anywhere with our comprehensive online trading course. Perfect for those who prefer flexible learning schedules.
                  </p>
                </div>
                <motion.div
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/online-batch"
                    className="inline-block bg-[#FB5E20] text-white px-7 py-2.5 rounded-full font-semibold shadow-lg text-base hover:bg-[#FB5E20]/90 transition"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>

              {/* Offline Batch */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-[#23263a] rounded-2xl shadow-xl p-6"
              >
                <img
                  src="https://i.pinimg.com/736x/ed/fa/07/edfa07bd1f125799b0c6a38ca7d622f3.jpg"
                  alt="Offline Batch"
                  className="w-auto max-h-96 rounded-xl mb-4"
                  style={{ maxWidth: 520, objectFit: "contain" }}
                />
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">Offline Batch</h3>
                  <p className="text-gray-400 text-base">
                    Experience hands-on learning in our state-of-the-art trading lab. Get direct mentorship from industry experts.
                  </p>
                </div>
                <motion.div
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/offline-batch"
                    className="inline-block bg-[#FB5E20] text-white px-7 py-2.5 rounded-full font-semibold shadow-lg text-base hover:bg-[#FB5E20]/90 transition"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-24 bg-[#1E2134]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-400 text-lg">
                Have questions? Reach out to us for more details about our batches and courses.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Phone Number */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-6 border border-[#FB5E20]/40 rounded-lg hover:shadow-lg hover:shadow-[#FB5E20]/50 transition-all"
              >
                <p className="text-white text-lg font-semibold mb-4">Call Us</p>
                <a
                  href="tel:+919319184495"
                  className="inline-block bg-[#FB5E20] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FB5E20]/90 transition-all"
                >
                  +91 9319184495
                </a>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-6 border border-[#25D366]/40 rounded-lg hover:shadow-lg hover:shadow-[#25D366]/50 transition-all"
              >
                <p className="text-white text-lg font-semibold mb-4">Chat on WhatsApp</p>
                <a
                  href="https://wa.me/919319184495?text=I%20want%20to%20know%20about%20the%20batches"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1DA851]/90 transition-all"
                >
                  Message Us
                </a>
              </motion.div>
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
              <h2 className="text-4xl font-bold mb-4 text-white">Find Answers to Common Questions</h2>
              <p className="text-gray-400">Hover over a question to see the answer</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 border border-[#FB5E20]/20 rounded-xl hover:border-[#FB5E20]/40 transition-all relative group"
                >
                  <div className="flex items-center gap-4">
                    <MessageSquare className="w-6 h-6 text-[#FB5E20]" />
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  </div>
                  <div
                    className="overflow-hidden mt-4 max-h-0 group-hover:max-h-40 transition-[max-height] duration-500 ease-in-out"
                  >
                    <p className="p-4 bg-[#1E2134] text-gray-300 rounded-lg shadow-lg">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;