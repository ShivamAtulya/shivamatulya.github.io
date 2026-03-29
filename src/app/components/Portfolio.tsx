import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Terminal, Cpu, LayoutDashboard, Monitor } from 'lucide-react';
import { Section } from './Section';
import { cn } from './Section';
import { ImageWithFallback } from './figma/ImageWithFallback';

const MAIN_GITHUB = 'https://github.com/ShivamAtulya';
const MAIN_LINKEDIN = 'https://www.linkedin.com/in/shivam-atulya-889a03277';

const projects = [
  {
    id: 'python-chatbot',
    title: 'Python ChatBot',
    category: 'Python',
    description: 'An intelligent conversational agent built using the OpenAI API with terminal-style UI.',
    tech: ['Python', 'OpenAI', 'Terminal'],
    image: 'https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?w=800&q=80',
    icon: Terminal,
    githubUrl: MAIN_GITHUB,
    linkedinUrl: MAIN_LINKEDIN
  },
  {
    id: 'secret-code-messenger',
    title: 'Secret Code Messenger',
    category: 'Python',
    description: 'A robust terminal application for encrypting and decrypting secure messages.',
    tech: ['Python', 'Cryptography'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    icon: Monitor,
    githubUrl: 'https://github.com/ShivamAtulya/Python-Simple-Projects/blob/main/Secret%20Code%20messager.py',
    linkedinUrl: 'https://www.linkedin.com/posts/shivam-atulya-889a03277_codes-techprojects-codingjourney-activity-7252370132344193024-vgDn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOaQSkB0g0NEiMISa0AXI0y_Wy_u9B7RVQ'
  },
  {
    id: 'kbc',
    title: 'KBC',
    category: 'Python',
    description: 'A fun terminal-based quiz game inspired by Kaun Banega Crorepati with escalating prize levels and lifelines.',
    tech: ['Python', 'Terminal'],
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80',
    icon: Terminal,
    githubUrl: 'https://github.com/ShivamAtulya/Python-Simple-Projects/blob/main/Kaun%20Banega%20Crorepatti(KBC).py',
    linkedinUrl: 'https://www.linkedin.com/posts/shivam-atulya-889a03277_codes-activity-7227976668202553344-U_pG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOaQSkB0g0NEiMISa0AXI0y_Wy_u9B7RVQ'
  },
  {
    id: 'bluclean',
    title: 'BluClean',
    category: 'Experiments',
    description: 'Hardware/IoT water cleaning solution focusing on environmental impact.',
    tech: ['IoT', 'Arduino', 'Sensors'],
    image: 'https://images.unsplash.com/photo-1761963108026-832fead0bfa0?w=800&q=80',
    icon: Cpu,
    githubUrl: MAIN_GITHUB,
    linkedinUrl: 'https://www.linkedin.com/posts/shivam-atulya-889a03277_iot-smarttech-cleanwater-activity-7317183452754112513-qJoe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOaQSkB0g0NEiMISa0AXI0y_Wy_u9B7RVQ'
  },
  {
    id: 'laptop-price',
    title: 'Laptop Price Prediction',
    category: 'Data Analytics',
    description: 'An advanced Power BI dashboard predicting market values based on real-time hardware metrics.',
    tech: ['Power BI', 'Python', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?w=800&q=80',
    icon: LayoutDashboard,
    githubUrl: MAIN_GITHUB,
    linkedinUrl: MAIN_LINKEDIN
  },
  {
    id: 'cookie-sale',
    title: 'Cookie Sale',
    category: 'Data Analytics',
    description: 'A comprehensive Power BI report analyzing cookie sales data with interactive visualizations and insights.',
    tech: ['Power BI', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    icon: LayoutDashboard,
    githubUrl: 'https://github.com/ShivamAtulya/Data-Analysis-Power-BI-/blob/main/Cookie%20Report.pbix',
    linkedinUrl: MAIN_LINKEDIN
  },
  {
    id: 'restaurant-sale',
    title: 'Restaurant Sale',
    category: 'Data Analytics',
    description: 'A detailed Power BI dashboard tracking and analyzing restaurant sales performance and trends.',
    tech: ['Power BI', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    icon: LayoutDashboard,
    githubUrl: 'https://github.com/ShivamAtulya/Data-Analysis-Power-BI-/blob/main/Cookie%20Report.pbix',
    linkedinUrl: MAIN_LINKEDIN
  },
  {
    id: 'tata-forage',
    title: 'Tata Forage Job Simulator',
    category: 'Data Analytics',
    description: 'A Power BI dashboard built as part of the Tata Data Analytics virtual job simulation, showcasing data visualization and business insights.',
    tech: ['Power BI', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80',
    icon: LayoutDashboard,
    githubUrl: 'https://github.com/ShivamAtulya/Data-Analysis-Power-BI-/blob/main/Tata%20forage.pbix',
    linkedinUrl: MAIN_LINKEDIN
  }
];

const categories = ['All', 'Python', 'Data Analytics', 'Design', 'Experiments'];

export const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <Section id="portfolio" className="bg-[#0f0f11]">
      <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-gray-400 font-mono text-xs md:text-sm max-w-lg">
            A collection of technical experiments, data models, and software solutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-3 md:px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 whitespace-nowrap",
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_8px_40px_rgba(37,99,235,0.15)]"
            >
              <div className="relative h-40 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10" />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                />
              </div>

              <div className="p-5 md:p-8 relative z-20 -mt-8 md:-mt-10">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="p-2 md:p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl shadow-lg backdrop-blur-md">
                    <project.icon className="w-4 md:w-5 h-4 md:h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 h-8 md:h-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/5">
                  {project.id !== 'bluclean' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-mono hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      {project.category === 'Data Analytics' ? 'Demo' : 'Code'}
                    </a>
                  )}
                  {project.category !== 'Data Analytics' && (
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-400 text-xs font-mono hover:bg-blue-600/20 hover:text-blue-300 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};
