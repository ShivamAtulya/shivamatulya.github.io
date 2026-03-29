import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Eye, ExternalLink, X } from 'lucide-react';
import { Section } from './Section';
import { ImageWithFallback } from './figma/ImageWithFallback';

const certificates = [
  {
    id: 'tata-forage',
    title: 'Tata Forage Job Simulator',
    issuer: 'Tata Group / Forage',
    date: '2025',
    skills: ['Data Analytics', 'Power BI', 'Business Insights'],
    certificateFile: '/TATA_completion_certificate.pdf',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    accent: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'ibm-cybersecurity',
    title: 'Getting Started with Cybersecurity',
    issuer: 'IBM SkillsBuild',
    date: '2025',
    skills: ['Cybersecurity', 'Network Security', 'IBM'],
    verifyUrl: 'https://www.credly.com/badges/6a7c90d9-efa2-45f6-b0e3-3dbec33636a7/public_url',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    accent: 'from-violet-500 to-purple-600'
  }
];

export const Certificates = () => {
  const [viewingCert, setViewingCert] = useState<string | null>(null);

  return (
    <Section id="certificates" className="bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14 text-center px-4 md:px-0"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 mb-4 md:mb-5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
            <Award className="w-3 md:w-4 h-3 md:h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Certifications</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Licenses & Credentials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-0">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${cert.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${cert.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              <div className="relative bg-[#111] rounded-2xl border border-white/5 overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-transparent">
                {/* Background image */}
                <div className="relative h-24 md:h-32 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent z-10" />
                  <ImageWithFallback
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                <div className="p-4 md:p-6 pt-0 -mt-4 md:-mt-6 relative z-20 flex flex-col flex-1">
                {/* Top row: icon + badge */}
                <div className="flex items-start justify-between mb-3 md:mb-5">
                  <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-br ${cert.accent} shadow-lg`}>
                    <Award className="w-4 md:w-5 h-4 md:h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 md:px-2.5 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>

                {/* Title & issuer */}
                <h3 className="text-sm md:text-lg font-bold text-white mb-1 tracking-tight leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-5 font-mono">{cert.issuer}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4 md:mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 md:px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] md:text-[11px] font-mono text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View certificate / Show credential button */}
                <div className="mt-auto">
                  {'certificateFile' in cert && cert.certificateFile ? (
                    <button
                      onClick={() => setViewingCert(cert.certificateFile!)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                    >
                      <Eye className="w-4 h-4" />
                      View Certificate
                      <span className="block w-0 group-hover/btn:w-4 transition-all duration-300 overflow-hidden">→</span>
                    </button>
                  ) : 'verifyUrl' in cert && cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Show Credential
                      <span className="block w-0 group-hover/btn:w-4 transition-all duration-300 overflow-hidden">→</span>
                    </a>
                  ) : null}
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {viewingCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setViewingCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-4xl h-[80vh] bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setViewingCert(null)}
                  className="p-2 bg-white/10 backdrop-blur rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <iframe
                src={viewingCert}
                className="w-full h-full"
                title="Certificate Viewer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};
