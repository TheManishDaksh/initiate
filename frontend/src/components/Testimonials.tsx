import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { itemFadeIn, scaleUp } from '../animations/variants';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Emily Johnson",
      role: "Marketing Director",
      company: "TechStart Inc",
      content: "WebAIGen transformed our website creation process. What used to take us weeks with a design agency now takes just minutes. The AI understands our brand and creates stunning designs that convert better than our previous site.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Michael Chang",
      role: "Freelance Developer",
      company: "Self-employed",
      content: "As a freelancer, WebAIGen has been a game-changer. I can now create beautiful sites for clients in a fraction of the time, letting me take on more projects. The code quality is excellent and easy to customize.",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Sarah Williams",
      role: "E-commerce Owner",
      company: "Artisan Goods",
      content: "Our online store was outdated and sales were dropping. Using WebAIGen, I created a modern, mobile-friendly site in an afternoon. Our conversion rate increased by 47% the very next month!",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];
  
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-64 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-cyan-400 mb-3">TESTIMONIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What our customers are saying
          </h3>
          <p className="max-w-2xl mx-auto text-slate-400">
            Join thousands of satisfied users who have transformed their web presence
            with our AI-powered website generator.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8 relative"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-300 text-lg mb-4 text-center md:text-left">
                    "{testimonials[current].content}"
                  </blockquote>
                  
                  <div className="text-center md:text-left">
                    <div className="font-semibold text-white">{testimonials[current].name}</div>
                    <div className="text-sm text-slate-400">
                      {testimonials[current].role}, {testimonials[current].company}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === current ? 'bg-purple-500' : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          
          <motion.button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-slate-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
        
        <motion.div 
          className="mt-20 grid md:grid-cols-3 gap-6"
          variants={itemFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">10,000+</div>
            <div className="text-slate-400">Websites Generated</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-slate-400">Average Rating</div>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-slate-400">Customer Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;