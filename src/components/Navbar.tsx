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
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pl-0 sm:pr-6 lg:pl-0 lg:pr-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo aligned extreme left */}
          <a href="/" className="flex items-center flex-shrink-0 ml-0">
            <img 
              src="/logo-removebg-preview.png" 
              alt="Logo" 
              className="h-14 sm:h-20 md:h-24 w-auto rounded-lg object-contain m-0 p-0"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="font-serif text-[#1E2134] font-bold text-lg hover:text-[#FB5E20] transition-colors tracking-wide">
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
              className="text-[#1E2134] hover:text-[#FB5E20] transition-colors"
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
        className="md:hidden overflow-hidden backdrop-blur-md bg-white/30 shadow-lg"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2 font-serif text-[#1E2134] font-bold text-lg hover:text-[#FB5E20] transition-colors tracking-wide"
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
