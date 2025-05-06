import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Linkedin, Github, X, MailIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 px-4 border-t border-slate-800 bg-slate-900/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Code className="h-7 w-7 mr-2 text-purple-500" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Initiate
              </span>
            </div>
            <p className="text-slate-400 mb-4">
              Creating stunning websites with AI has never been easier. 
              Start building your web presence in seconds, not months.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://x.com/manish_dakshh" 
                target='blank'
                className="text-slate-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={18} />
              </motion.a>
              <motion.a 
                href="mailto:manishk78625@gmail.com"
                target='blank' 
                className="text-slate-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <MailIcon size={18} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/manish-kumar-262846252"
                target='blank' 
                className="text-slate-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="https://github.com/TheManishDaksh" 
                className="text-slate-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Templates', 'Examples', 'API'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Documentation', 'Tutorials', 'Blog', 'Support', 'Community'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Careers', 'Terms', 'Privacy', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2025 Initiate. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-slate-400" />
            <a href="mailto:manishk78625@gmail.com" className="text-slate-400 text-sm hover:text-white">
              hello@initiate.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;