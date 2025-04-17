import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/portfolio', label: 'Testimonials' },
    { path: '/Batches', label: 'Packages' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/blog', label: 'Blogs' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-[#1E2134] via-white to-[#FB5E20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="https://www.aumtrades.com/wp-content/uploads/2025/01/Untitled-design-2025-01-28T203442.215.png" 
              alt="Logo" 
              className="h-12 w-auto rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span className="text-blue-700 font-bold text-lg hover:text-[#FB5E20] transition-colors">
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FB5E20]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-700 hover:text-[#FB5E20] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gradient-to-r from-[#1E2134] via-white to-[#FB5E20]"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2 text-blue-700 font-bold text-lg hover:text-[#FB5E20] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
