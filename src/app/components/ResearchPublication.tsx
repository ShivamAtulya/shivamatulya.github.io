import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Section } from './Section';
import { Download, BookOpen, Quote, Eye, Award, X } from 'lucide-react';

export const ResearchPublication = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [showPaper, setShowPaper] = useState(false);

  return (
    <Section id="research" className="bg-[#0f0f11]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-6 md:mb-8 px-4 md:px-0">
          <div className="w-10 md:w-12 h-10 md:h-12 bg-violet-500/10 rounded-full flex items-center justify-center shrink-0">
            <BookOpen className="w-5 md:w-6 h-5 md:h-6 text-violet-400" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Research Publications
            </h2>
            <p className="text-gray-400 font-mono text-xs md:text-sm">Investigating tech's impact on society.</p>
          </div>
        </div>

        <div className="relative group rounded-3xl border border-white/10 bg-[#111] overflow-hidden mx-4 md:mx-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-bl-[200px] blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
          
          <div className="p-5 md:p-8 lg:p-12 relative z-10 flex flex-col gap-6 md:gap-8 items-start">
            <Quote className="w-8 md:w-12 h-8 md:h-12 text-violet-400/20 shrink-0 hidden md:block" />
            
            <div className="flex-1 w-full">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 leading-snug">
                Algorithmic Influences: Analyzing Variations in Youth Mental Health Effects Across Social Media Platforms During & Post-Covid-19
              </h3>
              
              <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                <span className="px-2 md:px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-md text-xs font-mono text-violet-300">
                  Data Science
                </span>
                <span className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-gray-300">
                  Psychology
                </span>
                <span className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-mono text-gray-300">
                  2025 Publication
                </span>
              </div>
              
              <div className="text-gray-400 leading-relaxed mb-6 md:mb-8 border-l-2 border-violet-500/30 pl-4 md:pl-6 space-y-2">
                <p className="font-serif italic text-sm md:text-base lg:text-lg opacity-80">
                  "Algorithmic Influences: Analyzing Variations in Youth Mental Health Effects Across Social Media Platforms During & Post-Covid-19"
                </p>
                <p className="text-xs md:text-sm font-mono text-violet-300/80">Published in IJIRCCE, 2025</p>
                <p className="text-xs md:text-sm font-mono text-gray-500">Tools: R, Statistical Analysis, Survey Data Analysis</p>
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3">
                <button
                  onClick={() => setShowPaper(true)}
                  className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 font-medium border border-blue-500/30 transition-all text-sm"
                >
                  <Eye className="w-4 h-4" />
                  View Paper
                </button>

                <button
                  onClick={() => setShowCertificate(true)}
                  className="flex items-center justify-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-teal-600/20 hover:bg-teal-600/40 text-teal-300 font-medium border border-teal-500/30 transition-all text-sm"
                >
                  <Award className="w-4 h-4" />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Paper Viewer Modal - Protected */}
      {showPaper && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-[90vw] max-w-5xl h-[85vh] bg-[#111] rounded-2xl border border-white/10 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">Research Paper</span>
                <span className="text-xs text-gray-500 font-mono">View Only</span>
              </div>
              <button
                onClick={() => setShowPaper(false)}
                className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div
              className="flex-1 relative"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
            >
              <iframe
                src="/RM Final Publication Paper.pdf#toolbar=0&navpanes=0&scrollbar=1"
                className="w-full h-full border-0"
                title="Research Paper"
              />
              <div 
                className="absolute top-0 left-0 w-full h-8 bg-transparent" 
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* Certificate Viewer Modal - Protected */}
      {showCertificate && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-[90vw] max-w-4xl h-[85vh] bg-[#111] rounded-2xl border border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-teal-400" />
                <span className="text-white font-semibold">Research Certificate</span>
                <span className="text-xs text-gray-500 font-mono">View Only</span>
              </div>
              <button
                onClick={() => setShowCertificate(false)}
                className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Protected PDF Viewer */}
            <div
              className="flex-1 relative"
              onContextMenu={(e) => e.preventDefault()}
              style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
            >
              <iframe
                src="/research_certificate.pdf#toolbar=0&navpanes=0&scrollbar=1"
                className="w-full h-full border-0"
                title="Research Certificate"
              />
              {/* Transparent overlay to block interactions with PDF toolbar */}
              <div 
                className="absolute top-0 left-0 w-full h-8 bg-transparent" 
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </motion.div>
        </div>
      )}
    </Section>
  );
};
