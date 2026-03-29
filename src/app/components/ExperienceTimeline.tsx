import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, FlaskConical, Trophy, PenTool, Briefcase, BookOpen } from 'lucide-react';
import { Section } from './Section';
import { cn } from './Section';

const experiences = [
  {
    year: '2022 - 2025',
    title: 'BCA — Jain (Deemed-to-be University)',
    description: 'Graduated with a Bachelor of Computer Applications.',
    icon: GraduationCap,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    year: '2024',
    title: 'Research Projects',
    description: 'Conducted comprehensive studies on youth mental health effects across social media platforms during and post COVID-19.',
    icon: FlaskConical,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10'
  },
  {
    year: '2024 - 2025',
    title: 'Design Team Leadership',
    description: 'Design Co-Head. Led visual identity and creative direction for multiple high-impact university events and hackathons.',
    icon: PenTool,
    color: 'text-teal-400',
    bg: 'bg-teal-500/10'
  },
  {
    year: '2025',
    title: 'Data Analytics Internship',
    description: 'Gained hands-on experience in data analytics, working with real-world datasets, building dashboards, and deriving actionable insights.',
    icon: Briefcase,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10'
  },
  {
    year: '2025',
    title: 'Tata Forage — Data Analytics Job Simulator',
    description: 'Completed the Tata Data Analytics virtual job simulation, gaining practical experience in data visualization, analysis, and business insights.',
    icon: Briefcase,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10'
  },
  {
    year: '2025 - Present',
    title: 'MCA — PES University',
    description: 'Currently pursuing a Master of Computer Applications at PES University, deepening expertise in advanced computing and software engineering.',
    icon: BookOpen,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
  {
    year: '2025',
    title: 'Hackathon Winner — Latlong 2025',
    description: 'Developed an award-winning intelligent solution leveraging Python and real-time data analytics.',
    icon: Trophy,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10'
  }
];

export const ExperienceTimeline = () => {
  return (
    <Section id="experience" className="bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Journey & Experience
          </h2>
          <p className="text-gray-400 font-mono text-sm">Tracing the path of continuous learning and creation.</p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 lg:ml-12 px-3 md:px-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-8 md:mb-12 ml-6 md:ml-10 relative group"
            >
              <span className={cn(
                "absolute -left-[58px] flex items-center justify-center w-10 h-10 rounded-full border-[4px] border-[#0a0a0a]",
                exp.bg
              )}>
                <exp.icon className={cn("w-4 h-4", exp.color)} />
              </span>
              
              <div className="bg-[#111] p-4 md:p-6 rounded-2xl border border-white/5 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/10 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                <span className="block mb-2 text-sm font-mono text-gray-500">{exp.year}</span>
                <h3 className="flex items-center text-lg font-bold text-gray-100 mb-2">
                  {exp.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
