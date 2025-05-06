import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { staggerContainer, itemFadeIn } from '../animations/variants';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      className="border-b border-slate-700/50 last:border-0"
      variants={itemFadeIn}
    >
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-medium text-white">{question}</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-slate-400" size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-slate-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq: React.FC = () => {
  const faqItems: FaqItem[] = [
    {
      question: "How does the AI website generator work?",
      answer: "Our AI analyzes your text prompt to understand your website requirements, then generates a complete website design based on those specifications. It uses machine learning trained on thousands of professional websites to create something tailored to your needs."
    },
    {
      question: "Can I customize the generated website?",
      answer: "Absolutely! After generation, you can use our intuitive editor to customize colors, typography, layout, content, and more. You have full control over the final result to ensure it perfectly matches your vision."
    },
    {
      question: "Do I need technical skills to use WebAIGen?",
      answer: "No technical skills required! Our platform is designed to be user-friendly for everyone. Simply describe what you want, and the AI handles the technical aspects of creating your website."
    },
    {
      question: "What kind of websites can I create?",
      answer: "You can create virtually any type of website: business sites, portfolios, blogs, e-commerce stores, landing pages, personal sites, and more. Our AI is versatile enough to handle a wide range of website types and designs."
    },
    {
      question: "Can I export the code for my website?",
      answer: "Yes! All plans allow you to export the generated HTML and CSS. Higher-tier plans also provide additional export options including React components, making it easy to integrate with your preferred development workflow."
    },
    {
      question: "Is there a limit to how many websites I can generate?",
      answer: "The Free plan allows you to generate 1 website. Professional and Business plans offer unlimited website generations, so you can create as many websites as you need."
    }
  ];

  return (
    <section id="faq" className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-cyan-400 mb-3">FREQUENTLY ASKED QUESTIONS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got questions? We have answers
          </h3>
          <p className="max-w-2xl mx-auto text-slate-400">
            If you don't find what you're looking for, feel free to contact our support team.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="divide-y divide-slate-700/50 px-2">
            {faqItems.map((item, index) => (
              <FaqItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-slate-400 mb-4">
            Still have questions?
          </p>
          <motion.button
            className="px-6 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white font-medium hover:bg-slate-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;