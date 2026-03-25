import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full pt-20 px-6 md:px-12">
      
      {/* Background glow & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]" />
        
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-8"
        >
          <div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-violet-400">
                shivamatulya
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 font-medium font-mono">
              Python Developer • Web Developer • Data Analyst • Cloud Service • Design • Leadership
            </p>
          </div>

          <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
            Crafting scalable web applications, leveraging Python and cloud platforms to deliver data-driven solutions with strong design vision and team leadership.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4">
            
            <a href="#portfolio" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>

            <a href="/Shivam_Atulya_Resume.pdf" download className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all backdrop-blur-sm">
              <Download className="w-4 h-4" />
              Resume
            </a>

            <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              Contact
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] w-full hidden lg:flex items-center justify-center"
        >
          
          {/* Outer animated spinning ring */}
          <div className="absolute w-[400px] h-[400px] rounded-full animate-spin-slow"
            style={{
              background: 'conic-gradient(from 0deg, #3b82f6, #14b8a6, #8b5cf6, #3b82f6)',
              animationDuration: '6s',
            }}
          />

          {/* Pulsing glow behind the photo */}
          <div className="absolute w-[380px] h-[380px] rounded-full bg-blue-500/20 blur-[60px] animate-pulse" />
          <div className="absolute w-[340px] h-[340px] rounded-full bg-teal-500/15 blur-[40px] animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Dark spacer ring */}
          <div className="absolute w-[392px] h-[392px] rounded-full bg-[#0a0a0a]" />

          {/* Photo circle */}
          <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.35),0_0_100px_rgba(20,184,166,0.15)]">
            
            <img
              src="/shivam.jpeg"
              alt="shivamatulya"
              className="w-full h-full object-cover"
            />

            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/15 via-transparent to-violet-500/10 pointer-events-none" />
          
          </div>

          {/* Small floating accent dots */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[60px] right-[80px] w-3 h-3 rounded-full bg-blue-400/60 blur-[2px]"
          />
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[80px] left-[60px] w-2 h-2 rounded-full bg-teal-400/60 blur-[2px]"
          />
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[120px] left-[40px] w-2 h-2 rounded-full bg-violet-400/50 blur-[1px]"
          />

        </motion.div>

      </div>
    </section>
  );
};