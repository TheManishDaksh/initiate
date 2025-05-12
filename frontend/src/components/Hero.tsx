import React from 'react';
import { motion } from 'framer-motion';
import { floatingAnimation, itemFadeIn, staggerContainer } from '../animations/variants';
import CodeAnimation from './CodeAnimation';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {

  const navigate = useNavigate();
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-64 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-sm md:text-base font-medium text-cyan-400 mb-4"
            variants={itemFadeIn}
          >
            Introducing Init<span className="text-purple-400">ate</span>
          </motion.h2>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200 leading-tight"
            variants={itemFadeIn}
          >
            Create stunning websites <br className="hidden md:block" />
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200 leading-tight">
              powered by AI
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-8"
            variants={itemFadeIn}
          >
            Generate beautiful, responsive websites with just a text prompt.
            Our AI understands your vision and brings it to life instantly.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            variants={itemFadeIn}
          >
            <motion.button
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium text-base shadow-lg hover:shadow-purple-500/20 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>navigate("/prompt")}
            >
              Try it free
            </motion.button>
            <motion.button
              className="px-8 py-3 rounded-full bg-slate-800 border border-slate-700 text-white font-medium text-base cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See examples
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20"
          variants={itemFadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <div className="bg-slate-800 p-2 rounded-t-xl flex items-center">
            <div className="flex space-x-2 ml-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center text-xs text-slate-400">
              AI Website Generation
            </div>
          </div>
          
          <div className="bg-slate-900 p-4 md:p-8 relative min-h-[300px]">
            <CodeAnimation />
            
            <motion.div 
              className="absolute bottom-6 right-6"
              variants={floatingAnimation}
              animate="animate"
              initial="initial"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white font-bold text-xs md:text-sm">AI</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          variants={itemFadeIn}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <p className="text-slate-500 text-sm">
            Trusted by <span className="text-white font-medium">10,000+</span> businesses and developers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6 opacity-70">
            {['Microsoft', 'Amazon', 'Google', 'Facebook', 'Nvidia'].map((company, index) => (
              <div key={index} className="text-white/50 font-bold text-lg">{company}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;