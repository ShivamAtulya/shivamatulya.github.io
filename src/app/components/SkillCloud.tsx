import React from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { cn } from './Section';
import { Terminal, Database, LineChart, Code2, Server, Globe2, Network, Cloud } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Terminal, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'SQL', icon: Database, color: 'text-teal-400', bg: 'bg-teal-500/10' },
  { name: 'Power BI', icon: LineChart, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { name: 'React', icon: Code2, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { name: 'JavaScript', icon: Globe2, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { name: 'MongoDB', icon: Database, color: 'text-green-400', bg: 'bg-green-500/10' },
  { name: 'Git', icon: Network, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { name: 'AWS', icon: Cloud, color: 'text-indigo-400', bg: 'bg-indigo-500/10' }
];

export const SkillCloud = () => {
  return (
    <Section id="skills" className="bg-[#0a0a0a]">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Core Technologies
        </h2>
        <p className="text-gray-400 font-mono text-sm max-w-lg">
          The languages, tools, and platforms I use to build solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto px-4 md:px-0">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className="group relative flex flex-col items-center p-4 md:p-6 bg-[#111] border border-white/5 rounded-2xl cursor-pointer hover:border-white/20 transition-all duration-300"
          >
            <div className={cn(
              "w-12 md:w-16 h-12 md:h-16 rounded-2xl flex items-center justify-center mb-3 md:mb-4 transition-transform duration-500 group-hover:rotate-[10deg]",
              skill.bg
            )}>
              <skill.icon className={cn("w-6 md:w-8 h-6 md:h-8", skill.color)} />
            </div>
            <span className="text-white font-medium tracking-wide">
              {skill.name}
            </span>
            
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
