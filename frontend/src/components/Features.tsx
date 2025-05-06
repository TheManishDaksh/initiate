import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Palette, Blocks, Zap, Share2 } from 'lucide-react';
import { staggerContainer, itemFadeIn } from '../animations/variants';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800 transition-colors duration-300"
      variants={itemFadeIn}
      custom={delay}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Sparkles className="text-purple-400" size={24} />,
      title: "AI-Powered Design",
      description: "Our AI analyzes your prompt to create a beautiful, on-brand website that matches your vision perfectly."
    },
    {
      icon: <Clock className="text-cyan-400" size={24} />,
      title: "Generate in Seconds",
      description: "Stop waiting for designers and developers. Get a complete website in seconds, not weeks."
    },
    {
      icon: <Palette className="text-purple-400" size={24} />,
      title: "Custom Styling",
      description: "Fine-tune colors, typography, and layout with intuitive controls to match your brand identity."
    },
    {
      icon: <Blocks className="text-cyan-400" size={24} />,
      title: "Component Library",
      description: "Choose from thousands of pre-built components to enhance your website functionality."
    },
    {
      icon: <Zap className="text-purple-400" size={24} />,
      title: "Optimized Performance",
      description: "Every generated website is optimized for speed, SEO, and accessibility out of the box."
    },
    {
      icon: <Share2 className="text-cyan-400" size={24} />,
      title: "One-Click Publish",
      description: "Deploy your website instantly with our integrated hosting or export the code to your own platform."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-64 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-cyan-400 mb-3">POWERFUL FEATURES</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to create amazing websites
          </h3>
          <p className="max-w-2xl mx-auto text-slate-400">
            Our AI-powered platform handles everything from design to deployment,
            making website creation faster and easier than ever before.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;