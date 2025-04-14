"use client"

import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

// Unsplash image URLs
const onlineBatchImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
const offlineBatchImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
const module1Image = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
const module2Image = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
const module3Image = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"

const Batches = () => {
  const navigate = useNavigate()

  const modules = [
    {
      id: 'module1',
      title: 'Module 1: Foundation',
      points: [
        'Market Basics & Terminology',
        'Trading Platform Overview',
        'Basic Technical Analysis',
        'Risk Management Fundamentals'
      ]
    },
    {
      id: 'module2',
      title: 'Module 2: Intermediate',
      points: [
        'Chart Patterns & Indicators',
        'Options and Futures Introduction',
        'Trade Management Techniques',
        'Advanced Risk Management'
      ]
    },
    {
      id: 'module3',
      title: 'Module 3: Advanced',
      points: [
        'Algorithmic Trading Basics',
        'Risk Mitigation Strategies',
        'Trading Psychology & Discipline',
        'Portfolio Management'
      ]
    }
  ]

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

        {/* Module Cards */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white text-center">Course Modules</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((module) => (
              <motion.div
                key={module.id}
                className="bg-[#1E2134] rounded-xl border border-[#FB5E20]/20 p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150 }}
              >
                <h3 className="text-xl font-semibold text-[#FB5E20] mb-4">{module.title}</h3>
                <ul className="space-y-2 mb-6">
                  {module.points.map((point, i) => (
                    <li key={i} className="text-gray-300">{point}</li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate(`/module/${module.id}`)}
                  className="w-full px-4 py-2 bg-[#FB5E20] hover:bg-[#fb5e20cc] transition text-white font-semibold rounded-lg"
                >
                  Know More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Batches
