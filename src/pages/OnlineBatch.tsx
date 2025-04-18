import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Unsplash image URLs
const onlineBatchImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop";
const tradingDeskImage = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop";
const learningImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop";

const OnlineBatch = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: 'Module 1: Foundation',
      points: [
        'Introduction to the Security Market',
        'Website Tour & Tools',
        'Understanding News & Analysis'
      ]
    },
    {
      title: 'Module 2: Intermediate',
      points: [
        'Advanced Technical Analysis',
        'Trend Lines & Patterns',
        'Dow & Harmonic Theory'
      ]
    },
    {
      title: 'Module 3: Advanced',
      points: [
        'Forex Market Mastery',
        'Understanding Forex',
        'Global Market Indices Analysis'
      ]
    }
  ];

  const positivePoints = [
    'Flexible learning schedule',
    'Access to recorded sessions',
    'One-on-one mentorship',
    'Interactive live sessions',
    'Lifetime access',
    'Cost-effective learning'
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
          className="space-y-8"
        >
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="https://i.pinimg.com/736x/43/38/46/433846408365ae2e9db8ce35f4b7c748.jpg"
                alt="Online Batch"
                className="rounded-xl w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-3xl font-bold text-[#FB5E20]">Online Batch Training</h1>
              <p className="text-gray-300">
                Our online batch training program is designed for those who prefer the flexibility of learning from anywhere. 
                Get access to live sessions, recorded lectures, and interactive learning materials.
              </p>
              <button
                onClick={() => {
                  const msg = encodeURIComponent("i want to join online batch");
                  window.open(
                    `https://wa.me/919319184495?text=${msg}`,
                    "_blank"
                  );
                }}
                className="px-6 py-2 bg-[#FB5E20] hover:bg-[#fb5e20cc] transition text-white font-semibold rounded-lg"
              >
                Contact Us
              </button>
            </motion.div>
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
                  {/* Module offer notes */}
                  {index === 1 && (
                    <p className="mt-2 text-xs text-[#FB5E20] font-semibold text-center">
                      Get Module 1 free with Module 2
                    </p>
                  )}
                  {index === 2 && (
                    <p className="mt-2 text-xs text-[#FB5E20] font-semibold text-center">
                      Get Module 1 &amp; 2 free with Module 3
                    </p>
                  )}
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

          {/* Positive Points */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Why Choose Online Batch?</h2>
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
        </motion.div>
      </div>
    </div>
  );
};

export default OnlineBatch;