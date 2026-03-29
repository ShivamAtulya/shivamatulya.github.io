import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { Mail, Github, Linkedin, Instagram, Copy, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "shivamatulya1@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact" className="bg-[#0f0f11] py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group p-12 bg-[#111] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight relative z-10">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              meaningful together.
            </span>
          </h2>
          
          <p className="text-gray-400 font-mono text-sm mb-12 relative z-10">
            Currently open for new opportunities and collaborations.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
            <button 
              onClick={handleCopy}
              className="w-full md:w-auto flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all backdrop-blur-sm group"
            >
              {copied ? <CheckCircle2 className="w-5 h-5 text-teal-400" /> : <Copy className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />}
              <span className="font-mono">{email}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12 relative z-10">
            <a href="https://github.com/ShivamAtulya" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/shivam-atulya-889a03277" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/_.shivam.rajput_" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
