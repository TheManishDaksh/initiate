import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Send, Sparkles, ArrowLeft } from 'lucide-react';
import { fadeIn, itemFadeIn, staggerContainer } from '../animations/variants';
import { useNavigate } from 'react-router-dom';

const Prompt: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();
  const [suggestions] = useState([
    'Create a modern e-commerce website with product grid and shopping cart',
    'Design a portfolio website for a photographer with dark theme',
    'Generate a landing page for a mobile app with features section',
    'Build a blog website with article cards and newsletter signup',
    'Make a restaurant website with menu and reservation system'
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    navigate("/builder",{state:{prompt}})
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <a href="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Code className="h-8 w-8 mr-2 text-purple-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 ">
                Initiate
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">What website can I create for you?</h1>
            <p className="text-slate-400">
              Describe your dream website and our AI will bring it to life in seconds.
            </p>
          </motion.div>

          <motion.form
            variants={itemFadeIn}
            onSubmit={handleSubmit}
            className="mb-8"
          >
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Create a modern e-commerce website with a dark theme, product grid layout, and shopping cart functionality..."
                className="w-full h-40 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
              />
              <motion.button
                type="submit"
                className="absolute bottom-4 right-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-medium flex items-center disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!prompt.trim() || isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Generate
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>

          <motion.div
            variants={itemFadeIn}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
          >
            <h2 className="text-lg font-medium mb-4">Try these examples:</h2>
            <div className="grid gap-3">
              {suggestions.map((suggestion, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-left p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {suggestion}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prompt;