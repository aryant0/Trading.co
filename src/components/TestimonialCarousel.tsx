import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'John Doe',
    review: 'This institute has transformed my trading skills!',
  },
  {
    name: 'Jane Smith',
    review: 'The courses are well-structured and easy to follow.',
  },
  {
    name: 'Michael Johnson',
    review: 'Highly recommend AUM for anyone serious about trading.',
  },
  // Add more testimonials as needed
];

const TestimonialCarousel = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-[#1E2134] to-[#2A2D42] py-12">
      <h2 className="text-center text-2xl font-bold text-[#FB5E20] mb-8">What Our Students Say</h2>
      <motion.div
        className="flex space-x-8"
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <p className="text-gray-700 italic">"{testimonial.review}"</p>
            <h3 className="mt-4 text-lg font-bold text-[#FB5E20]">{testimonial.name}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialCarousel;
