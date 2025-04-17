"use client"

import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

// Unsplash image URLs
const onlineBatchImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
const offlineBatchImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"

const Batches = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#1E2134] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Batch Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Online Batch Card */}
          <motion.div
            className="bg-[#1E2134] rounded-2xl border border-[#FB5E20]/20 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <img
              src={onlineBatchImage}
              alt="Online Batch"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-[#FB5E20]">Online Batch</h2>
              <p className="text-gray-300">
                Learn from anywhere with our comprehensive online trading course. 
                Perfect for those who prefer flexible learning schedules.
              </p>
              <button
                onClick={() => navigate('/online-batch')}
                className="w-full px-6 py-2 bg-[#FB5E20] hover:bg-[#fb5e20cc] transition text-white font-semibold rounded-lg"
              >
                Know More
              </button>
            </div>
          </motion.div>

          {/* Offline Batch Card */}
          <motion.div
            className="bg-[#1E2134] rounded-2xl border border-[#FB5E20]/20 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <img
              src={offlineBatchImage}
              alt="Offline Batch"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-[#FB5E20]">Offline Batch</h2>
              <p className="text-gray-300">
                Experience hands-on learning in our state-of-the-art trading lab. 
                Get direct mentorship from industry experts.
              </p>
              <button
                onClick={() => navigate('/offline-batch')}
                className="w-full px-6 py-2 bg-[#FB5E20] hover:bg-[#fb5e20cc] transition text-white font-semibold rounded-lg"
              >
                Know More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Ashish Ojha Review */}
            <motion.div
              className="bg-[#1E2134] rounded-xl border border-[#FB5E20]/20 p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg font-semibold text-[#FB5E20]">Ashish Ojha</span>
                
              </div>
              <div className="text-gray-400 text-xs mb-1">3 weeks ago <span className="ml-2 bg-[#FB5E20] text-white px-2 py-0.5 rounded text-xs">New</span></div>
              <p className="text-gray-300">
                It has been great experience and wonderful journey thank you AUM lots of love 🙏🏻🧡
              </p>
            </motion.div>
            {/* Dev Review */}
            <motion.div
              className="bg-[#1E2134] rounded-xl border border-[#FB5E20]/20 p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg font-semibold text-[#FB5E20]">Dev</span>
                
              </div>
              <div className="text-gray-400 text-xs mb-1">3 weeks ago <span className="ml-2 bg-[#FB5E20] text-white px-2 py-0.5 rounded text-xs">New</span></div>
              <p className="text-gray-300">
                Before joining this institute, my trades were like my gym memberships—zero returns! But now? Let’s just say my portfolio is healthier than my diet. The best trading institute in Ahmedabad, hands down!
              </p>
            </motion.div>
            {/* Janhvi Review */}
            <motion.div
              className="bg-[#1E2134] rounded-xl border border-[#FB5E20]/20 p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-lg font-semibold text-[#FB5E20]">Janhvi</span>
                
              </div>
              <div className="text-gray-400 text-xs mb-1">3 weeks ago <span className="ml-2 bg-[#FB5E20] text-white px-2 py-0.5 rounded text-xs">New</span></div>
              <p className="text-gray-300">
                I started my trading journey in May 2024 without any guidance because of that I was not getting what I want....Now finally found this gem💎 no doubt this the best institute in Ahmedabad for those who want expertise in trading just go for it!!!!!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Batches
