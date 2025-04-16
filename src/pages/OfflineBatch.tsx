import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Unsplash image URLs
<img 
src="https://www.aumtrades.com/wp-content/uploads/2025/01/Untitled-design-2025-01-28T203442.215.png" 
alt="Logo" 
className="h-12 w-auto rounded-lg"
/>
const institute1Image = "src\assets\institue2.png";
const institute2Image = "src\assets\institue3.png";
const institute3Image = "src\assets\institue3.png";

const OfflineBatch = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: 'Module 1: Foundation',
      points: [
        'Market Basics & Terminology',
        'Trading Platform Overview',
        'Basic Technical Analysis',
        'Risk Management Fundamentals'
      ]
    },
    {
      title: 'Module 2: Intermediate',
      points: [
        'Chart Patterns & Indicators',
        'Options and Futures Introduction',
        'Trade Management Techniques',
        'Advanced Risk Management'
      ]
    },
    {
      title: 'Module 3: Advanced',
      points: [
        'Algorithmic Trading Basics',
        'Risk Mitigation Strategies',
        'Trading Psychology & Discipline',
        'Portfolio Management'
      ]
    }
  ];

  const positivePoints = [
    'Hands-on practical training',
    'Direct interaction with mentors',
    'Real-time trading experience',
    'Networking opportunities',
    'Dedicated trading terminals',
    'Regular doubt-clearing sessions'
  ];

  const reviews = [
    {
      name: "Riya Joshi",
      comment: "Enrolling in the Advanced Trading course at AUM Institute was a game-changer for me. The teaching quality and hands-on practical learning made complex concepts easy to grasp. Certified trainers provided proven strategies that boosted my confidence in trading. I’ve seen a real improvement in my skills and profits. The friendly environment and structured approach made learning seamless. I highly recommend AUM Institute to anyone serious about trading!",
      rating: 5,
    },
    {
      name: "Anju Arya",
      comment: "Earning money and learning a new skill would be a challenge. But AUM Institute changed my perspective. The mentorship and proven strategies gave me the confidence to step into trading. What once felt like a nightmare turned into an empowering journey. Today, I not only understand trading but also make consistent profits. Thanks to AUM Institute, I can proudly say I’ve achieved something for myself. Highly recommended for anyone looking to start trading!",
      rating: 5,
    },
    {
      name: "Vedant Sharma",
      comment: "As a master’s student with no prior trading experience, I struggled to learn due to unorganized knowledge. Before joining AUM Institute, I faced an ₹80,000 loss. However, the Advanced Trading course completely changed my approach. I learned invaluable strategies, and even before completing the course, I made profits of up to ₹1 lakh. My confidence has skyrocketed, and I’m now on the path to consistent success. I highly recommend AUM Institute to anyone serious about mastering trading.",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-[#1E2134] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/batches')}
          className="flex items-center gap-2 text-[#FB5E20] hover:text-[#FB5E20]/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Batches
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://i.pinimg.com/736x/23/70/34/237034e17808ea3cfbd6cbde3a1b535c.jpg"
              alt="Offline Batch"
              className="rounded-xl w-full h-96 object-cover"
            />
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-[#FB5E20]">Offline Batch</h1>
              <p className="text-gray-300">
                Experience hands-on learning in our state-of-the-art trading lab. 
                Get direct mentorship and practical training from industry experts.
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5 text-[#FB5E20]" />
                <span>123 Trading Street, Financial District, City</span>
              </div>
            </div>
          </div>

          {/* Modules Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Course Modules</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1E2134] rounded-xl border border-[#FB5E20]/20 p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <h3 className="text-xl font-semibold text-[#FB5E20] mb-4">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.points.map((point, i) => (
                      <li key={i} className="text-gray-300">{point}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate(`/module/module${index + 1}`)}
                    className="mt-4 px-4 py-2 bg-[#FB5E20] hover:bg-[#fb5e20cc] transition text-white font-semibold rounded-lg w-full"
                  >
                    Know More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Institute Images */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Our Institute</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <img
                src="https://i.pinimg.com/736x/a2/4d/aa/a24daa62e7437d52889e9790fd84b8e2.jpg"
                alt="Institute 1"
                className="rounded-xl w-full h-64 object-cover"
              />
              <img
                src="https://i.pinimg.com/736x/3e/0e/81/3e0e81e5c6b1d8a255c8081cdcf2d698.jpg"
                alt="Institute 2"
                className="rounded-xl w-full h-64 object-cover"
              />
              <img
                src="https://i.pinimg.com/736x/37/00/46/37004617efd3657e129dd294b7540846.jpg"
                alt="Institute 3"
                className="rounded-xl w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Positive Points */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Why Choose Offline Batch?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {positivePoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1E2134] rounded-xl border border-[#FB5E20]/20 p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <p className="text-gray-300">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Student Reviews</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1E2134] rounded-xl border border-[#FB5E20]/20 p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FB5E20] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-2">{review.comment}</p>
                  <p className="text-[#FB5E20] font-semibold">{review.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-[#FB5E20] hover:bg-[#fb5e20cc] transition text-white font-semibold rounded-lg"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default OfflineBatch; 