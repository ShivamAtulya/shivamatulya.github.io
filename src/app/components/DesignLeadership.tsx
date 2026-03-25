import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { PenTool, Image as ImageIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const designs = [
  {
    image: 'https://images.unsplash.com/photo-1772272935464-2e90d8218987?w=600&q=80',
    title: 'Hackathon Identity',
    colSpan: 'md:col-span-2 md:row-span-2'
  },
  {
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&q=80',
    title: 'App Interface',
    colSpan: 'md:col-span-1 md:row-span-1'
  },
  {
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
    title: 'Brand Guidelines',
    colSpan: 'md:col-span-1 md:row-span-1'
  }
];

export const DesignLeadership = () => {
  return (
    <Section id="design" className="bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-teal-500/10 rounded-full flex items-center justify-center">
                <PenTool className="w-6 h-6 text-teal-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Design Leadership
              </h2>
            </div>
            <p className="text-gray-400 font-mono text-sm max-w-lg leading-relaxed border-l-2 border-teal-500/30 pl-4 mt-4">
              <span className="text-teal-400 font-bold">Design Co-Head</span> — Leading visual identity and creative direction for high-impact university events and digital products.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 shadow-2xl ${design.colSpan}`}
            >
              <ImageWithFallback
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                  <ImageIcon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-medium tracking-wide text-lg">
                  {design.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
