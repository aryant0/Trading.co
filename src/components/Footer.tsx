import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Globe, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1E2134] to-[#2A2D42] border-t border-[#FB5E20]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#FB5E20]">AUM The Trading Institute</h3>
            <p className="text-gray-300">
              Empowering traders with knowledge and skills to succeed in the financial markets.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1A7XgijnXL/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FB5E20] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FB5E20] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/aumtradinginstitute/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FB5E20] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/aum-the-trading-institute-4182271ab?" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FB5E20] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@aumtradinginstitute?si=4zINWMcmWKmnp6Du" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FB5E20] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.aumtrades.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FB5E20] transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-[#FB5E20] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-[#FB5E20] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/batches" className="text-gray-300 hover:text-[#FB5E20] transition-colors">
                  Batches
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-[#FB5E20] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="/module/module1" className="text-gray-300 hover:text-[#FB5E20] transition-colors">
                  Module 1: Basics
                </a>
              </li>
              <li>
                <a href="/module/module2" className="text-gray-300 hover:text-[#FB5E20] transition-colors">
                  Module 2: Technical Analysis
                </a>
              </li>
              <li>
                <a href="/module/module3" className="text-gray-300 hover:text-[#FB5E20] transition-colors">
                  Module 3: Advanced Trading
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Email: <a href="mailto:info@aumtrades.com" className="hover:text-[#FB5E20] transition-colors">info@aumtrades.com</a>
              </li>
              <li className="text-gray-300">
                Phone: <a href="tel:9319184495" className="hover:text-[#FB5E20] transition-colors">9319184495</a>, <a href="tel:6396052891" className="hover:text-[#FB5E20] transition-colors">6396052891</a>
              </li>
              <li className="text-gray-300">
                Address: 201, Yash Aqua Complex, Above Mc Donalds, Vijay Char Rasta, Ahmedabad
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[#FB5E20]/20 text-center text-gray-300"
        >
          <p>&copy; {new Date().getFullYear()} The AUM Trading Institue. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;