import React from 'react';
import { motion } from 'framer-motion';
import {Navbar, Hero, Features, HowItWorks, DemoSection, Testimonials, Pricing, Faq, Footer} from '../components';
import { fadeIn } from '../animations/variants';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
      <Navbar />
      
      <motion.div
        initial="hidden"
        animate="visible"
        className="landing-container"
      >
        <Hero />
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Features />
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HowItWorks />
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <DemoSection />
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Testimonials />
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Pricing />
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Faq />
        </motion.div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default LandingPage;