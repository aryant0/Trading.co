import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Portfolio = () => {
  const testimonials = [
    // ... keep testimonials array the same ...
    {
      name: "Om Pratap Singh",
      text: "Joining aum the trading institute was a game-changer for me. The instructors are incredibly knowledgeable and always willing to help. I went from a complete beginner to confidently making trades in just a few months. I highly recommend this institute to anyone looking to enhance their trading skills!",
      image: "https://i.pinimg.com/736x/58/e4/b6/58e4b63de671c325914a08fdfaffb785.jpg",
    },
    {
      name: "Kashish Singh",
      text: "I had been struggling with trading for years, but after enrolling at aum the trading institute , everything changed. The structured curriculum and hands-on training provided me with the skills and confidence I needed to succeed. The supportive community made all the difference. Thank you for helping me achieve my trading goals!",
      image: "https://i.pinimg.com/736x/53/d1/1b/53d11bbc5f6e26f7693b7a2686905a72.jpg",
    },
    {
      name: "Sourav Rajput",
      text: "I can’t thank aum the trading institute enough for the education and support I’ve received. The courses are well-designed, and the real-world insights from the instructors are invaluable. I’ve seen a significant improvement in my trading strategies and results. If you’re serious about trading, this is the place to be!",
      image: "https://i.pinimg.com/736x/af/24/50/af245016dee883ff86dbc1784235ad06.jpg",
    },
    {
      name: "Muskan Shaikh",
      text: "Joining [aum- the trading institute] has been an amazing experience for me. The teachers here are very knowledgeable and always ready to help everyone. The knowledge and skills I’ve gained have significantly improved my trading. I highly recommend this institute to everyone!",
      image: "https://i.pinimg.com/736x/04/4e/26/044e26b51687a05d4b55297a97974083.jpg",
    },
    {
      name: "Riya Joshi",
      text: "Enrolling in the Advanced Trading course at AUM Institute was a game-changer for me. The teaching quality and hands-on practical learning made complex concepts easy to grasp. Certified trainers provided proven strategies that boosted my confidence in trading. I’ve seen a real improvement in my skills and profits. The friendly environment and structured approach made learning seamless. I highly recommend AUM Institute to anyone serious about trading!",
      image: "https://i.pinimg.com/736x/57/ae/46/57ae46d17f955e9ccb503da68752dad8.jpg",
    },
    {
      name: "Anju Arya",
      text: "Earning money and learning a new skill would be a challenge. But AUM Institute changed my perspective. The mentorship and proven strategies gave me the confidence to step into trading. What once felt like a nightmare turned into an empowering journey. Today, I not only understand trading but also make consistent profits. Thanks to AUM Institute, I can proudly say I’ve achieved something for myself. Highly recommended for anyone looking to start trading!",
      image: "https://i.pinimg.com/474x/f5/bf/97/f5bf97c90621fbe1b47641905811b8ed.jpg",
    },
    {
      name: "Ankit",
      text: "As a working professional with prior trading experience, I struggled with continuous losses due to a lack of proper knowledge. AUM Institute transformed my approach with next-level teaching and hands-on practice. Their structured, organized way of delivering trading concepts boosted my confidence and skills. Now, I consistently make profits with their proven strategies. If you’re looking for clutter-free, effective trading education, AUM Institute is the place to be",
      image: "https://i.pinimg.com/736x/8a/e2/9a/8ae29a7ea4c748a70cac76cf01420e12.jpg",
    },
    {
      name: 'Riddhi Yadav',
      role: 'Aspiring Trader',
      image: 'https://lh3.googleusercontent.com/a-/ALV-UjUVCUEfHfFrzpdSfb5f3oGIEdXv6ga1IE7r5kck5JtnwsTJSIVR=w75-h75-p-rp-mo-br100',
      text: 'An excellent institute for aspiring traders! Provides in-depth market insights, practical strategies, and hands-on training. Perfect for beginners and experienced traders looking to refine their skills. Highly recommended!',
      
    },
    {
      name: "Vedant Sharma",
      text: "As a master’s student with no prior trading experience, I struggled to learn due to unorganized knowledge. Before joining AUM Institute, I faced an ₹80,000 loss. However, the Advanced Trading course completely changed my approach. I learned invaluable strategies, and even before completing the course, I made profits of up to ₹1 lakh. My confidence has skyrocketed, and I’m now on the path to consistent success. I highly recommend AUM Institute to anyone serious about mastering trading.",
      image: "https://i.pinimg.com/736x/a6/5e/8f/a65e8fd39973030811d75cc86f8cd9ae.jpg",
    },
  ];

  const videoTestimonials = [
    // ... keep videoTestimonials array the same ...
    {
      url: "https://www.youtube.com/embed/3VIRc8Ov1xo",
      name: "Disha - BBA Graduate"
    },
    {
      url: "https://www.youtube.com/embed/zDcyW5L7nog",
      name: "Dr. Ayushi - BHMS Doctor"
    },
    {
      url: "https://www.youtube.com/embed/LaSCj1o5wHU",
      name: "Nishant - Full Time Trader"
    }
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen pt-20 bg-[#1E2134] text-white overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#1E2134" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: ["#FB5E20", "#ffffff", "#FB5E20"] },
            links: { enable: true, color: "#FB5E20", distance: 120 },
            move: { enable: true, speed: 1.5 },
            number: { value: 60 },
            opacity: { value: 0.6 },
            shape: {
              type: ["circle", "triangle"],
            },
            size: { value: { min: 2, max: 4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-[#FB5E20]">Student Success Stories</h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl p-6 bg-[#1E2134] border border-[#FB5E20]/20 hover:border-[#FB5E20]/40 transition-all hover:shadow-[0_10px_30px_rgba(251,94,32,0.2)]"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#FB5E20]"
              />
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FB5E20" stroke="#FB5E20" />
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#FB5E20]">{t.name}</h3>
              <p className="text-gray-300 text-sm">{t.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#FB5E20]">Video Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {videoTestimonials.map((v, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-[0_10px_30px_rgba(251,94,32,0.3)] transition-all"
              >
                <iframe
                  src={v.url}
                  title={v.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 aspect-video"
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1E2134] to-transparent p-4">
                  <p className="text-white font-medium">{v.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;