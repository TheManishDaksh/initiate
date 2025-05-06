import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Rocket, MessageSquare } from 'lucide-react';
import { staggerContainer, itemFadeIn, slideInFromLeft, slideInFromRight } from '../animations/variants';

interface StepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isRightAligned: boolean;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description, isRightAligned }) => {
  const variants = isRightAligned ? slideInFromRight : slideInFromLeft;
  
  return (
    <motion.div
      className={`flex items-center gap-8 ${isRightAligned ? 'md:flex-row-reverse' : ''}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="hidden md:flex items-center justify-center w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-slate-800 shrink-0">
        <div className="relative">
          {icon}
          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold">
            {number}
          </div>
        </div>
      </div>
      
      <div className="flex md:hidden items-center gap-4 mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-slate-800 shrink-0">
          {React.cloneElement(icon as React.ReactElement, { size: 18 })}
        </div>
        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold shrink-0">
          {number}
        </div>
      </div>
      
      <div className={`max-w-md ${isRightAligned ? 'md:text-right' : ''}`}>
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="text-purple-400" size={32} />,
      title: "Describe your website",
      description: "Enter a detailed description of your website, including the purpose, style, and specific features you want included."
    },
    {
      icon: <Brain className="text-cyan-400" size={32} />,
      title: "AI generates your design",
      description: "Our advanced AI processes your description and generates a custom website design tailored to your requirements."
    },
    {
      icon: <Code2 className="text-purple-400" size={32} />,
      title: "Customize your website",
      description: "Use our intuitive editor to fine-tune the design, content, and functionality to perfectly match your vision."
    },
    {
      icon: <Rocket className="text-cyan-400" size={32} />,
      title: "Publish instantly",
      description: "Deploy your finished website to our fast, reliable hosting with a single click, or export the code to use elsewhere."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-purple-400 mb-3">HOW IT WORKS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Create your website in four simple steps
          </h3>
          <p className="max-w-2xl mx-auto text-slate-400">
            From concept to live website in minutes, not months.
            Our AI-powered platform makes it incredibly simple.
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isRightAligned={index % 2 !== 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;