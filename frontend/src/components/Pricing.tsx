import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { staggerContainer, itemFadeIn } from '../animations/variants';

interface PlanFeature {
  feature: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
}

const PricingCard: React.FC<PricingPlan> = ({ name, price, period, description, features, highlight }) => {
  return (
    <motion.div
      className={`rounded-xl overflow-hidden border ${
        highlight 
          ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
          : 'border-slate-700'
      }`}
      variants={itemFadeIn}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      {highlight && (
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center text-sm font-medium py-1">
          Most Popular
        </div>
      )}
      
      <div className="bg-slate-800 p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        <p className="text-slate-400 h-12">{description}</p>
        
        <div className="mt-4 mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && <span className="text-slate-400 ml-2">/{period}</span>}
        </div>
        
        <motion.button
          className={`w-full py-2.5 rounded-lg font-medium ${
            highlight 
              ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white' 
              : 'bg-slate-700 text-white hover:bg-slate-600'
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.button>
      </div>
      
      <div className="bg-slate-900 p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check size={18} className="text-green-400 shrink-0 mt-0.5" />
              ) : (
                <X size={18} className="text-slate-600 shrink-0 mt-0.5" />
              )}
              <span className={`ml-2 text-sm ${feature.included ? 'text-slate-300' : 'text-slate-500'}`}>
                {feature.feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for trying out the platform",
      features: [
        { feature: "1 Website Generation", included: true },
        { feature: "Basic Templates", included: true },
        { feature: "Export HTML & CSS", included: true },
        { feature: "Community Support", included: true },
        { feature: "Advanced Customization", included: false },
        { feature: "Remove Branding", included: false },
        { feature: "Priority Support", included: false },
      ]
    },
    {
      name: "Professional",
      price: "$29",
      period: "month",
      description: "Everything you need for professional websites",
      features: [
        { feature: "Unlimited Website Generations", included: true },
        { feature: "All Premium Templates", included: true },
        { feature: "Export HTML, CSS & JS", included: true },
        { feature: "Advanced Customization", included: true },
        { feature: "Remove Branding", included: true },
        { feature: "Priority Support", included: false },
        { feature: "API Access", included: false },
      ],
      highlight: true
    },
    {
      name: "Business",
      price: "$99",
      period: "month",
      description: "For teams and businesses with advanced needs",
      features: [
        { feature: "Unlimited Website Generations", included: true },
        { feature: "All Premium Templates", included: true },
        { feature: "All Export Options + React", included: true },
        { feature: "Advanced Customization", included: true },
        { feature: "Remove Branding", included: true },
        { feature: "Priority Support", included: true },
        { feature: "API Access", included: true },
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-purple-400 mb-3">PRICING PLANS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose the perfect plan for your needs
          </h3>
          <p className="max-w-2xl mx-auto text-slate-400">
            Whether you're just starting out or need advanced features for your business,
            we have a plan that's right for you.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-slate-400">
            All plans include 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;