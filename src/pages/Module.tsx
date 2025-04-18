import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Unsplash image URLs
const module1Image = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop";
const module2Image = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop";
const module3Image = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop";

const Module = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();

  const moduleData = {
    module1: {
      title: "Module 1: Your First Step into the Stock Market",
      description: "This package lays down the fundamentals and gives you hands-on training so you can start trading confidently. You'll understand the entire ecosystem and gain the necessary skills to get your trading journey started the right way.",
      image: module1Image,
      duration: "1.5 months",
      points: [
        "Module 1.1: Introduction to the Security Market",
        "• Website Tour & Tools",
        "• Understanding News & Analysis",
        "• Who's Who in the Market: Meet the key players like NSE, BSE, CDSL, NSDL, and understand the roles of regulators like SEBI & RBI",
        "",
        "Module 1.2: Structure of the Financial Market",
        "• Capital Market Products",
        "• Money market Products",
        "",
        "Module 1.3: The Basics of Trading",
        "• Leverage & Margin Trading",
        "• Delivery vs. Intraday",
        "• Demat & Trading Accounts",
        "• Live Account Practice",
        "",
        "Module 1.4: Market Segments Explained",
        "• Equity Market",
        "• Derivatives Market",
        "• Currency & Commodity Markets",
        "",
        "Module 1.5: Add-Ons to Boost Your Understanding",
        "• Macro & Microeconomic Analysis",
        "• Economic Factors Impacting Markets",
        "• Sentiment & Behavioral Analysis",
        "• Live Market Trading"
      ],
      whyModule: "This package lays down the fundamentals and gives you hands-on training so you can start trading confidently. You'll understand the entire ecosystem and gain the necessary skills to get your trading journey started the right way."
    },
    module2: {
      title: "Module 2: Technical Analysis and Fundamental Analysis",
      description: "This package is designed for those who are ready to level up their trading. With a focus on technical analysis, chart patterns, and trading strategies, you'll be equipped to make smarter, more informed trades.",
      image: module2Image,
      duration: "3 months",
      points: [
        "Module 2.1: Advanced Technical Analysis",
        "• Trend Lines & Patterns",
        "• Dow & Harmonic Theory",
        "• Fibonacci, Gann & Elliott Theory",
        "",
        "Module 2.2: Candlesticks & Chart Patterns",
        "• Candlestick Patterns",
        "• Chart Types",
        "• Price Action Theory",
        "",
        "Module 2.3: Trading Concepts & Strategies",
        "• Scalping, Intraday & Swing Trading",
        "• Breakouts & Pullbacks",
        "• Backtesting & Strategy Testing",
        "",
        "Module 2.4: Technical Indicators & Oscillators",
        "• RSI",
        "• Moving Averages",
        "• Bollinger Bands",
        "• MACD and more",
        "",
        "Module 2.5: Risk Management & Trading Psychology",
        "• Risk Management Essentials",
        "• Building Trading Psychology",
        "• Virtual Live Trading",
        "",
        "Module 2.6: Fundamental Analysis",
        "• Stock Selection Fundamentals",
        "• Company Analysis",
        "• Ratio Analysis",
        "• Industry & Market Analysis"
      ],
      whyModule: "This package is designed for those who are ready to level up their trading. With a focus on technical analysis, chart patterns, and trading strategies, you'll be equipped to make smarter, more informed trades. Plus, you'll build solid risk management skills, ensuring that you trade like a true superhero in the financial markets."
    },
    module3: {
      title: "Module 3: Advanced Market Mastery",
      description: "This comprehensive package takes you beyond traditional stock market trading into the exciting worlds of Forex, Cryptocurrency, and Commodity markets, while also teaching you advanced portfolio management techniques.",
      image: module3Image,
      duration: "5 months",
      points: [
        "Module 3.1: Forex Market Mastery",
        "• Understanding Forex",
        "• Global Market Indices Analysis",
        "• Economic Calendar Analysis",
        "• Forex Currency Pair Analysis",
        "• How to Read Forex Quote",
        "• Trading Techniques in Forex Market",
        "• Trading Setup for Forex",
        "• Live Market Practice",
        "• Risk Management",
        "• Risk reward ratio",
        "",
        "Module 3.2: Crypto-Currency Trading",
        "• Structure of Crypto-currency",
        "• Block Chain Analysis",
        "• Cryptocurrencies Analysis",
        "• Wallet Setup for Crypto-currency",
        "• Understanding Bitcoin Network",
        "• Bitcoin Price Projection Analysis",
        "• Crypto-currency Trading Setup",
        "",
        "Module 3.3: Commodity Market Mastery",
        "• Understanding the Commodity Market",
        "• Commodities and Their Economic Impact",
        "• Trading Gold, Silver, Crude Oil",
        "• Commodity Market Analysis",
        "• Live Commodity Trading Practice",
        "• Risk Management in Commodities",
        "",
        "Module 3.4: Portfolio Management & Risk Strategies",
        "• Portfolio Management Objectives",
        "• Types of Portfolio Management",
        "• Portfolio Asset Allocation",
        "• Portfolio Diversification",
        "• Portfolio Re-balancing",
        "• Risk Management Techniques",
        "• Income Tax Planning"
      ],
      whyModule: "This comprehensive package takes you beyond traditional stock market trading into the exciting worlds of Forex, Cryptocurrency, and Commodity markets. You'll learn advanced trading techniques, risk management strategies, and portfolio management skills that will help you become a well-rounded trader in today's complex financial markets."
    }
  };

  const currentModule = moduleData[moduleId as keyof typeof moduleData];

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
          {/* Module Header */}
          <div className="bg-[#1E2134] rounded-2xl border border-[#FB5E20]/20 p-8">
            <h1 className="text-3xl font-bold text-[#FB5E20] mb-4">{currentModule.title}</h1>
            <p className="text-gray-300 mb-2">{currentModule.description}</p>
            <p className="text-white font-semibold">
              Duration: <span className="text-[#FB5E20]">{currentModule.duration}</span>
            </p>
          </div>

          {/* Module Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#1E2134] rounded-2xl border border-[#FB5E20]/20 p-6"
              >
                <img
                  src={currentModule.image}
                  alt={currentModule.title}
                  className="rounded-xl w-full h-64 object-cover"
                />
              </motion.div>

              {/* Why Module Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#1E2134] rounded-2xl border border-[#FB5E20]/20 p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose This Module?</h3>
                <p className="text-gray-300">{currentModule.whyModule}</p>
              </motion.div>
            </div>

            {/* Right Column - Points */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#1E2134] rounded-2xl border border-[#FB5E20]/20 p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Course Structure</h3>
              <div className="space-y-6">
                {currentModule.points.map((point, index) => (
                  point === "" ? (
                    <div key={index} className="h-4" />
                  ) : (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      {point.match(/^Module \d+\.\d+:/) ? (
                        <p className="text-[#FB5E20] font-semibold">{point}</p>
                      ) : (
                        <p className="text-gray-300">{point.replace(/^•\s*/, '')}</p>
                      )}
                    </motion.div>
                  )
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-[#FB5E20] hover:bg-[#fb5e20cc] transition text-white font-semibold rounded-lg"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Module;