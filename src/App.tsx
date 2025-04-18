import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Batches from './pages/Batches';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Module from './pages/Module';
import OnlineBatch from './pages/OnlineBatch';
import OfflineBatch from './pages/OfflineBatch';
import { AnimatePresence } from 'framer-motion';
import CursorTrail from './components/CursorTrail';
import AdminPanel from './components/AdminPanel';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white">
        <CursorTrail />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/batches" element={<Batches />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/module/:moduleId" element={<Module />} />
            <Route path="/online-batch" element={<OnlineBatch />} />
            <Route path="/offline-batch" element={<OfflineBatch />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
