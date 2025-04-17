import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#1E2134] pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-[#FB5E20]">Contact Us</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about our courses or want to enroll? Reach out to us through any of the channels below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#2A2D42] rounded-2xl p-8 border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#FB5E20]/10 rounded-lg">
                  <Mail className="w-6 h-6 text-[#FB5E20]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
              </div>
              <p className="text-gray-300">info@aumtrades.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#2A2D42] rounded-2xl p-8 border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#FB5E20]/10 rounded-lg">
                  <Phone className="w-6 h-6 text-[#FB5E20]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
              </div>
              <p className="text-gray-300">+91 9319184495</p>
              <p className="text-gray-300">+91 6396052891</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#2A2D42] rounded-2xl p-8 border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#FB5E20]/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#FB5E20]" />
                </div>
                <h3 className="text-xl font-semibold text-white">Address</h3>
              </div>
              <p className="text-gray-300">201, Yash Aqua Complex, Above Mc Donalds, Vijay Char Rasta, Ahmedabad</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#2A2D42] rounded-2xl p-8 border border-[#FB5E20]/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-[#1E2134] border border-[#FB5E20]/20 rounded-lg text-white focus:outline-none focus:border-[#FB5E20]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-[#1E2134] border border-[#FB5E20]/20 rounded-lg text-white focus:outline-none focus:border-[#FB5E20]"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Phone No</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 bg-[#1E2134] border border-[#FB5E20]/20 rounded-lg text-white focus:outline-none focus:border-[#FB5E20]"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-gray-300 mb-2">City</label>
                  <input
                    type="text"
                    id="city"
                    className="w-full px-4 py-2 bg-[#1E2134] border border-[#FB5E20]/20 rounded-lg text-white focus:outline-none focus:border-[#FB5E20]"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FB5E20] hover:bg-[#fb5e20cc] transition text-white font-semibold rounded-lg"
                >
                  Submit
                </button>
                <a
                  href="tel:+919319184495"
                  className="px-6 py-3 bg-[#1E2134] border border-[#FB5E20] text-[#FB5E20] hover:bg-[#FB5E20] hover:text-white transition font-semibold rounded-lg flex items-center justify-center"
                >
                  Call Us
                </a>
                <a
                  href="https://wa.me/919319184495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] transition text-white font-semibold rounded-lg flex items-center justify-center"
                >
                  WhatsApp
                </a>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;