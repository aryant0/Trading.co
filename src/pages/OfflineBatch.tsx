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
    'Regular doubt-clearing sessions',
    'Lifetime access to course materials',
    '100% placement assistance for top performers'
  ];

  const reviews = [
    {
      name: "Shivansh Verma",
      comment: "Forget Netflix—I binge-watch stock charts now! Thanks to this institute, I finally understand the market trends and not just my zodiac sign. Definitely the best trading institute in Ahmedabad! Thank you so much Sumit sir for this wonderful institute",
      rating: 5,
    },
    {
      name: "Prince Nishant",
      comment: "I had a fantastic experience at Trading Academy! The instructors were knowledgeable and supportive, and the positive energy made learning enjoyable.",
      rating: 5,
    },
    {
      name: "divya sengar",
      comment: "As a teacher, I really appreciate the clear and straightforward way AUM Trading Institute presents trading concepts. Their courses use practical examples that make even complex ideas easy to understand. The instructors also share their real-world experience, making the lessons engaging and truly useful. Really it is the best trading institute in Ahemdabad , Gujarat😇because the skills I learned here are very useful in actual trading . That's why I encourage everyone to explore AUM Trading Institute. If you’re looking to boost your trading skills with clear, real-world insights, give it a try—you might find it as valuable as I do.💯👍",
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
                <span>
                  Address: 201, Yash Aqua Complex, Above Mc Donalds, Vijay Char Rasta, Ahmedabad
                </span>
              </div>
              <button
                onClick={() => {
                  const msg = encodeURIComponent("i want to join the offline batch");
                  window.open(
                    `https://wa.me/919319184495?text=${msg}`,
                    "_blank"
                  );
                }}
                className="px-6 py-3 bg-[#FB5E20] hover:bg-[#fb5e20cc] transition text-white font-semibold rounded-lg"
              >
                Contact Us
              </button>
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
                </motion.div>
              ))}
            </div>
          </div>

          {/* Institute Images */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Our Institute</h2>
            <div className="relative">
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#FB5E20] text-white p-2 rounded-full z-10"
                onClick={() => {
                  document.getElementById('institute-images').scrollBy({ left: -300, behavior: 'smooth' });
                }}
              >
                &lt;
              </button>
              <div
                id="institute-images"
                className="flex gap-6 overflow-x-auto scrollbar-hide"
              >
                <img
                  src="https://i.pinimg.com/736x/a2/4d/aa/a24daa62e7437d52889e9790fd84b8e2.jpg"
                  alt="Institute 1"
                  className="rounded-xl w-96 h-80 object-cover flex-shrink-0"
                />
                <img
                  src="https://i.pinimg.com/736x/3e/0e/81/3e0e81e5c6b1d8a255c8081cdcf2d698.jpg"
                  alt="Institute 2"
                  className="rounded-xl w-96 h-80 object-cover flex-shrink-0"
                />
                <img
                  src="https://i.pinimg.com/736x/37/00/46/37004617efd3657e129dd294b7540846.jpg"
                  alt="Institute 3"
                  className="rounded-xl w-96 h-80 object-cover flex-shrink-0"
                />
                <img
                  src="https://i.pinimg.com/474x/3c/d2/8f/3cd28f6d82a7d6288ac93a24e391b3b2.jpg"
                  alt="Institute 4"
                  className="rounded-xl w-96 h-80 object-cover flex-shrink-0"
                />
                <img
                  src="https://i.pinimg.com/474x/a4/d0/03/a4d00307d327f48498a55b4463ca3aaf.jpg"
                  alt="Institute 5"
                  className="rounded-xl w-96 h-80 object-cover flex-shrink-0"
                />
                <img
                  src="https://i.pinimg.com/474x/21/d2/77/21d2773de0bb5a30e8f898f86307b803.jpg"
                  alt="Institute 6"
                  className="rounded-xl w-96 h-80 object-cover flex-shrink-0"
                />
                <img
                  src="https://i.pinimg.com/736x/b4/77/b8/b477b868344397758c3c8fce95f7a95c.jpg"
                  alt="Institute 7"
                  className="rounded-xl w-96 h-80 object-cover flex-shrink-0"
                />
              </div>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FB5E20] text-white p-2 rounded-full z-10"
                onClick={() => {
                  document.getElementById('institute-images').scrollBy({ left: 300, behavior: 'smooth' });
                }}
              >
                &gt;
              </button>
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
        </motion.div>
      </div>
    </div>
  );
};

export default OfflineBatch;