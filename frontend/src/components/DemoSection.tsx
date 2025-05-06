import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { itemFadeIn } from '../animations/variants';

const DemoSection: React.FC = () => {
  const [prompt, setPrompt] = useState("Create a modern e-commerce homepage with product grid");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  const handleGenerate = () => {
    if (prompt.trim() === '') return;
    
    setIsGenerating(true);
    setShowResult(false);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 2500);
  };

  const templates = [
    "E-commerce homepage with featured products",
    "Portfolio site for a photographer",
    "SaaS landing page with pricing table",
    "Restaurant website with menu and booking",
    "Personal blog with article grid"
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-cyan-400 mb-3">TRY IT YOURSELF</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See the magic in action
          </h3>
          <p className="max-w-2xl mx-auto text-slate-400">
            Type a description of the website you want to create and watch our AI generate it in seconds.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-slate-800 rounded-xl p-6 md:p-8 mb-12"
          variants={itemFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label htmlFor="prompt" className="block text-sm font-medium text-slate-300 mb-2">
              Describe your website
            </label>
            <textarea
              id="prompt"
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="e.g., Create a photography portfolio with a dark theme and gallery section"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
            {templates.map((template, index) => (
              <button
                key={index}
                onClick={() => setPrompt(template)}
                className="text-xs text-left py-1 px-2 bg-slate-700 hover:bg-slate-600 rounded truncate transition-colors"
              >
                {template}
              </button>
            ))}
          </div>
          
          <motion.button
            onClick={handleGenerate}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : "Generate Website"}
          </motion.button>
        </motion.div>
        
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-xl overflow-hidden"
          >
            <div className="bg-slate-700 p-3 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 text-center text-sm text-slate-300">
                Generated Website Preview
              </div>
            </div>
            
            <div className="p-4">
              <img 
                src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Generated website preview" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="p-4 flex justify-between">
              <motion.button
                className="px-4 py-2 rounded-lg bg-slate-700 text-white text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Regenerate
              </motion.button>
              
              <motion.button
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Customize & Export
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DemoSection;