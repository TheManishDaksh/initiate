import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { codeRevealAnimation } from '../animations/variants';

const CodeAnimation: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResult(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const codeLines = [
    'Generate a landing page for a tech startup',
    'with a modern design, hero section,',
    'features section, and contact form.',
    'Use a blue and purple color scheme.',
    'Add smooth animations and responsive design.'
  ];

  return (
    <div className="overflow-hidden h-full">
      <div className="grid md:grid-cols-2 gap-4 h-full">
        <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm overflow-hidden">
          <div className="text-slate-400 mb-2">// Your prompt</div>
          
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className="text-green-400 overflow-hidden whitespace-nowrap"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.3,
                ease: "easeInOut"
              }}
            >
              {line}
            </motion.div>
          ))}
          
          <motion.div
            className="mt-4 text-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            Generating website... ✓
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-white rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: showResult ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {showResult && (
            <div className="h-full flex flex-col">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
              <div className="flex-1 p-2">
                <div className="w-8 h-2 bg-slate-300 rounded-full mb-2"></div>
                <div className="w-full h-4 bg-slate-200 rounded-full mb-2"></div>
                <div className="w-3/4 h-3 bg-slate-200 rounded-full mb-4"></div>
                
                <div className="flex gap-2 mb-4">
                  <div className="w-1/3 h-8 bg-purple-200 rounded"></div>
                  <div className="w-1/3 h-8 bg-purple-200 rounded"></div>
                </div>
                
                <div className="w-full h-24 bg-slate-100 rounded mb-3"></div>
                
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-12 bg-slate-200 rounded"></div>
                  <div className="h-12 bg-slate-200 rounded"></div>
                  <div className="h-12 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CodeAnimation;