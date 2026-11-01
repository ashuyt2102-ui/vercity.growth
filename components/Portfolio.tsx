'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioCategories, portfolioProjects, ProjectItem } from '@/data/projects';
import Card3D from './3d/Card3D';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'All Projects'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 relative overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
              Selected Work &bull; Architecture Previews
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-mono">
              PROOF THROUGH CREATION.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-400 max-w-md font-light">
            A portfolio of engineered growth systems, D2C fashion &amp; lifestyle flagships, and high-CTR creative campaigns.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 font-bold'
                  : 'bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="h-full flex flex-col"
            >
              <Card3D intensity={12} className="h-full flex-1">
                <div className="relative rounded-2xl overflow-hidden bg-[#0c101c]/80 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col justify-between shadow-2xl">
                  {/* Image Preview with Overlay */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-[#0c101c]/40 to-transparent" />

                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-mono tracking-wider bg-black/70 backdrop-blur-md text-cyan-300 border border-white/10">
                        {project.industry}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-blue-950/80 text-blue-300 border border-blue-500/30">
                        Demo Project
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono text-gray-400 mb-2">
                        Client: <span className="text-gray-200 font-medium">{project.client}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2.5 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Services Delivered Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.services.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/[0.04] text-gray-300 border border-white/[0.06]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>View Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[10px] font-mono text-gray-500">
                        Full Breakdown &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Project Architecture Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl rounded-3xl bg-[#0b0e17] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                    {selectedProject.industry} &bull; {selectedProject.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] uppercase font-mono tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    Demo Architecture Model
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-mono mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-gray-400">
                  Case Architecture: <span className="text-gray-200">{selectedProject.client}</span>
                </p>
              </div>

              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8 border border-white/[0.08]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6 text-sm text-gray-300">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 mb-1">
                    Initial Challenge
                  </h4>
                  <p className="font-light leading-relaxed">{selectedProject.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-1">
                    Growth Strategy
                  </h4>
                  <p className="font-light leading-relaxed">{selectedProject.strategy}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">
                    Execution &amp; Creatives
                  </h4>
                  <p className="font-light leading-relaxed">{selectedProject.execution}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-1">
                    Verified Outcomes
                  </h4>
                  <p className="font-light leading-relaxed text-emerald-100">{selectedProject.resultsSummary}</p>
                </div>

                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-1">
                    Key Lesson Learned
                  </h4>
                  <p className="font-light leading-relaxed text-purple-100">{selectedProject.lessonsLearned}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">
                  Want similar architecture for your brand?
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 text-xs font-bold uppercase rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black shadow-lg"
                >
                  Book 10–15 Min Call
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
