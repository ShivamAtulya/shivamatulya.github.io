import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0a0a] pt-12 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <p className="text-gray-500 font-mono text-xs">
            © {new Date().getFullYear()} Shivam Atulya. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#research" className="hover:text-white transition-colors">Research</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center text-gray-400">
          <p className="font-mono text-xs text-gray-500">
            Designed & Developed by Shivam
          </p>
        </div>
      </div>
    </footer>
  );
};
