import React, { useState } from 'react';
import { Page, ProjectCategory } from '../types';
import { PROJECTS } from '../data/projects';
import { ArrowUpRight, Info } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: Page, projectSlug?: string) => void;
  onOpenInquiry: (service?: string, project?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = ['All', 'Residential', 'Commercial', 'Architecture'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20">
      {/* Portfolio Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-12">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
            Architectural Portfolio
          </span>
          <h1 className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl text-[#292929] leading-tight text-balance-editorial mb-6">
            Selected Concept Works & Spatial Studies
          </h1>
          <p className="text-base sm:text-lg text-[#54524E] leading-relaxed font-light mb-8">
            An exploration of contemporary residential retreats, urban apartments, creative headquarters, and landscape pavilions across India. Each work investigates how volumetric discipline, natural light, and authentic materials can evoke profound calm.
          </p>
        </div>

        {/* Fictional Concept Disclaimer Banner */}
        <div className="p-4 sm:p-5 bg-[#EAE7E0]/50 border border-[#DDD8CE] flex items-start gap-3.5 mb-12">
          <Info className="w-4 h-4 text-[#7A7062] shrink-0 mt-0.5" />
          <p className="text-xs text-[#54524E] leading-relaxed font-light">
            <strong className="font-medium text-[#292929]">Conceptual Portfolio Notice:</strong> The projects presented below are fictional concept investigations created by FORME ATELIER to illustrate our spatial philosophy, material palette exploration, and architectural detailing methodologies across diverse Indian climates and topologies.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#EAE7E0] pb-6">
          <span className="text-xs uppercase tracking-wider text-[#A69B8B] mr-3 font-medium hidden sm:inline">
            Filter By Discipline:
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#292929] text-[#FFFFFF]'
                    : 'bg-white text-[#54524E] hover:text-[#292929] border border-[#EAE7E0]'
                }`}
              >
                {cat} {cat === 'All' ? `(${PROJECTS.length})` : `(${PROJECTS.filter((p) => p.category === cat).length})`}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onNavigate('project-detail', project.slug)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-[#EAE7E0] overflow-hidden mb-5">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] uppercase tracking-wider text-[#292929] font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-[#292929]/80 backdrop-blur-sm px-3 py-1 text-[11px] uppercase tracking-wider text-white font-medium">
                  Concept
                </div>
              </div>

              {/* Unboxed Metadata Discipline */}
              <div className="flex items-center gap-2 text-xs text-[#7A7062] mb-1.5 font-light">
                <span>{project.location}</span>
                <span aria-hidden="true">·</span>
                <span>{project.area}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-editorial-heading text-2xl sm:text-3xl text-[#292929] group-hover:text-[#A69B8B] transition-colors">
                  {project.title}
                </h2>
                <span className="text-xs uppercase tracking-wider text-[#292929] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                  <span>Explore Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#54524E] mt-2 leading-relaxed font-light line-clamp-2">
                {project.excerpt}
              </p>

              {/* Materials snippet */}
              <div className="mt-4 pt-3 border-t border-[#EAE7E0] flex flex-wrap items-center gap-2 text-[11px] text-[#8C8070]">
                <span className="font-medium text-[#292929]">Primary Palette:</span>
                {project.materials.slice(0, 3).map((mat, i) => (
                  <span key={i}>
                    {mat.name}
                    {i < Math.min(project.materials.length, 3) - 1 ? ' · ' : ''}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#EAE7E0]">
            <p className="text-sm text-[#54524E]">
              No concept projects found under this category filter.
            </p>
          </div>
        )}
      </section>

      {/* Custom Commission Prompt */}
      <section className="bg-[#EAE7E0]/40 border-t border-[#EAE7E0] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
            Commission an Architecture or Interior Project
          </span>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929] mb-4">
            Seeking a tailored spatial response for your property?
          </h2>
          <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light mb-8 max-w-xl mx-auto">
            Whether embarking on an urban apartment transformation or a ground-up coastal pavilion, we guide projects from earliest volumetric massing through to final hand-crafted joinery.
          </p>
          <button
            onClick={() => onOpenInquiry()}
            className="px-8 py-3.5 bg-[#292929] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
          >
            Initiate Project Inquiry
          </button>
        </div>
      </section>
    </div>
  );
};
