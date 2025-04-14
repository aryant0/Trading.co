import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Unsplash image URLs
const offlineBatchImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop";
const institute1Image = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop";
const institute2Image = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop";
const institute3Image = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop";

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
      name: 'John Doe',
      rating: 5,
      comment: 'Excellent faculty and infrastructure. The hands-on training really helped me understand trading better.'
    },
    {
      name: 'Jane Smith',
      rating: 5,
      comment: 'The best trading institute I\'ve been to. The mentors are very supportive and knowledgeable.'
    },
    {
      name: 'Mike Johnson',
      rating: 5,
      comment: 'Great learning environment with state-of-the-art facilities. Highly recommended!'
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
              src={offlineBatchImage}
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
                src={institute1Image}
                alt="Institute 1"
                className="rounded-xl w-full h-64 object-cover"
              />
              <img
                src={institute2Image}
                alt="Institute 2"
                className="rounded-xl w-full h-64 object-cover"
              />
              <img
                src={institute3Image}
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