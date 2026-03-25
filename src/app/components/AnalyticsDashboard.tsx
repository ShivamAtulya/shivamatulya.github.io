import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Github, Code2, LineChart, ExternalLink, Activity } from 'lucide-react';
import { Section } from './Section';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const githubData = Array.from({ length: 14 }).map((_, i) => ({
  name: `Day ${i + 1}`,
  commits: Math.floor(Math.random() * 10) + 1,
}));

export const AnalyticsDashboard = () => {
  return (
    <Section id="dashboard" className="pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* GitHub Activity Widget */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-[100px] blur-3xl transition-opacity group-hover:opacity-100 opacity-50" />
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Github className="w-5 h-5 text-gray-300" />
              </div>
              <div>
                <h3 className="text-white font-semibold">GitHub Activity</h3>
                <p className="text-xs text-gray-500 font-mono">Last 14 days</p>
              </div>
            </div>
          </div>

          <div className="h-[100px] w-full mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={githubData}>
                <defs>
                  <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#9ca3af' }}
                />
                <Area type="monotone" dataKey="commits" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCommits)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-between border-t border-white/5 pt-4 mt-auto">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Commits</p>
              <p className="text-2xl font-bold text-white">1,248</p>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Repositories</p>
              <p className="text-2xl font-bold text-white">42</p>
            </div>
          </div>
        </motion.div>

        {/* Python Projects Counter */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group flex flex-col justify-center items-center text-center"
        >
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal-500/10 to-transparent blur-2xl transition-opacity group-hover:opacity-100 opacity-50" />
          
          <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6 ring-1 ring-teal-500/30 shadow-[0_0_30px_rgba(20,184,166,0.2)]">
            <Code2 className="w-8 h-8 text-teal-400" />
          </div>
          
          <h3 className="text-gray-400 font-medium mb-2">Python Projects Completed</h3>
          <AnimatedCounter value={24} />
          
          <div className="mt-6 flex items-center gap-2 text-teal-400 text-sm font-mono bg-teal-500/10 px-3 py-1.5 rounded-full">
            <Activity className="w-4 h-4" />
            <span>+3 this month</span>
          </div>
        </motion.div>

        {/* Research Impact Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden group lg:col-span-1 md:col-span-2"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent blur-2xl transition-opacity group-hover:opacity-100 opacity-50" />
          
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <LineChart className="w-5 h-5 text-violet-400" />
              <h3 className="text-white font-semibold text-sm tracking-wide">Research Impact</h3>
            </div>
            <button className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <h4 className="text-lg font-bold text-gray-200 mb-3 leading-snug relative z-10">
            Analyzing Variations in Youth Mental Health Effects Across Social Media Platforms
          </h4>
          
          <p className="text-gray-400 text-sm mb-6 line-clamp-2 relative z-10">
            A comprehensive study analyzing the correlation between platform algorithms and user psychological states during the post-pandemic era.
          </p>

          <div className="flex gap-2 relative z-10">
            <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5">Data Analysis</span>
            <span className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5">Research</span>
          </div>
          
          {/* Decorative mini chart in background */}
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
             <Activity className="w-48 h-48 text-violet-400" />
          </div>
        </motion.div>

      </div>
    </Section>
  );
};

const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeProgress * (end - start) + start));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-6xl font-bold text-white tracking-tighter tabular-nums">
      {count}
    </div>
  );
};
