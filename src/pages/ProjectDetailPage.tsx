import React, { useState } from 'react';
import { Page, Project } from '../types';
import { PROJECTS } from '../data/projects';
import { LightboxModal } from '../components/LightboxModal';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, MapPin, Calendar, Square, Layers, Sparkles, UserCheck } from 'lucide-react';

interface ProjectDetailPageProps {
  slug: string;
  onNavigate: (page: Page, projectSlug?: string) => void;
  onOpenInquiry: (service?: string, project?: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenInquiry
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project: Project = PROJECTS[projectIndex] || PROJECTS[0];

  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Lightbox Modal Component */}
      <LightboxModal
        images={project.galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
        title={project.title}
        caption={`${project.title} · ${project.location} · Material & Volumetric Study`}
      />

      {/* Breadcrumb & Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-4">
        <button
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#7A7062] hover:text-[#292929] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Works</span>
        </button>
      </div>

      {/* Project Title & Overview Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 border-b border-[#DDD8CE]">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A69B8B] mb-3">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#292929] font-medium">Concept Exploration</span>
            </div>
            <h1 className="font-editorial-heading text-4xl sm:text-6xl md:text-7xl text-[#292929] leading-tight text-balance-editorial mb-4">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl text-[#7A7062] font-light leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <button
              onClick={() => onOpenInquiry(project.category === 'Architecture' ? 'Architecture' : 'Residential Interiors', project.title)}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#292929] text-white hover:bg-[#1A1A1A] transition-colors text-xs uppercase tracking-widest font-medium cursor-pointer w-full sm:w-auto"
            >
              <span>Discuss Similar Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Project Key Specifications Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 text-xs text-[#54524E]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#A69B8B] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#A69B8B] block">Location</span>
              <span className="text-xs text-[#292929] font-medium">{project.location}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Square className="w-4 h-4 text-[#A69B8B] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#A69B8B] block">Built-Up Area</span>
              <span className="text-xs text-[#292929] font-medium">{project.area}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-[#A69B8B] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#A69B8B] block">Timeline</span>
              <span className="text-xs text-[#292929] font-medium">{project.year}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <Layers className="w-4 h-4 text-[#A69B8B] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#A69B8B] block">Typology</span>
              <span className="text-xs text-[#292929] font-medium">{project.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Master Image */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <div
          onClick={() => handleOpenLightbox(0)}
          className="relative aspect-[16/9] bg-[#EAE7E0] overflow-hidden group cursor-pointer"
        >
          <img
            src={project.coverImage}
            alt={`${project.title} master architectural perspective`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
          />
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-2 text-xs flex items-center gap-2 group-hover:bg-black/80 transition-colors">
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider text-[11px]">View Fullscreen</span>
          </div>
        </div>
      </section>

      {/* Conceptual Narrative & Architectural Highlights */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
                Design Concept
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929] mb-4">
                The Architectural Intent
              </h2>
              <p className="text-base sm:text-lg text-[#292929] leading-relaxed font-light mb-6 border-l-2 border-[#A69B8B] pl-4">
                {project.concept}
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#54524E] leading-relaxed font-light">
              {project.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Architectural Highlights Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#EAE7E0] p-6 sm:p-8">
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#292929]" />
                <span>Spatial Interventions</span>
              </span>
              <h3 className="font-editorial-heading text-2xl text-[#292929] mb-4">
                Architectural Highlights
              </h3>
              <ul className="space-y-4">
                {project.architecturalHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-[#54524E] leading-relaxed font-light">
                    <span className="font-mono text-[#A69B8B] text-xs mt-0.5">[{i + 1}]</span>
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Credits */}
            <div className="bg-[#EAE7E0]/30 border border-[#EAE7E0] p-6 text-xs text-[#54524E] space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-[#A69B8B] block font-medium">
                Project Credits & Team
              </span>
              <p><strong className="text-[#292929] font-medium">Principal:</strong> {project.credits.principalDesigner}</p>
              <p><strong className="text-[#292929] font-medium">Lead Architect:</strong> {project.credits.leadArchitect}</p>
              <p><strong className="text-[#292929] font-medium">Visualisation:</strong> {project.credits.photographyCredit}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-1 font-medium">
              Image Gallery
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929]">
              Visual Perspectives & Detailing
            </h2>
          </div>
          <span className="text-xs text-[#7A7062] font-mono">
            {project.galleryImages.length} Plates Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.galleryImages.map((imgUrl, index) => (
            <div
              key={index}
              onClick={() => handleOpenLightbox(index)}
              className="group relative aspect-[4/3] bg-[#EAE7E0] overflow-hidden cursor-pointer"
            >
              <img
                src={imgUrl}
                alt={`${project.title} study plate ${index + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs uppercase tracking-widest">
                <span className="bg-black/60 px-3 py-1.5 backdrop-blur-sm flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Materiality Palette Exploration */}
      <section className="bg-white py-20 border-y border-[#EAE7E0]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
              Material Specification
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929]">
              The Material Palette
            </h2>
            <p className="text-xs sm:text-sm text-[#54524E] mt-2 max-w-xl font-light">
              Materials were curated for this concept to evoke quiet permanence, natural shadow diffusion, and graceful patina over decades of habitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.materials.map((mat, i) => (
              <div key={i} className="p-6 bg-[#F8F7F4] border border-[#EAE7E0] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A69B8B] block mb-1">
                    Material 0{i + 1}
                  </span>
                  <h3 className="font-editorial-heading text-xl text-[#292929] mb-1">
                    {mat.name}
                  </h3>
                  <div className="text-[11px] text-[#7A7062] font-mono mb-3">
                    {mat.finish} {mat.origin ? `· ${mat.origin}` : ''}
                  </div>
                  <p className="text-xs text-[#54524E] leading-relaxed font-light">
                    {mat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next / Previous Project Navigation */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <button
            onClick={() => onNavigate('project-detail', prevProject.slug)}
            className="p-6 sm:p-8 bg-white border border-[#EAE7E0] text-left hover:border-[#292929] transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A69B8B] mb-2">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Project</span>
            </div>
            <h3 className="font-editorial-heading text-2xl text-[#292929] group-hover:text-[#A69B8B] transition-colors">
              {prevProject.title}
            </h3>
            <span className="text-xs text-[#7A7062] mt-1 block">
              {prevProject.location} · {prevProject.category}
            </span>
          </button>

          <button
            onClick={() => onNavigate('project-detail', nextProject.slug)}
            className="p-6 sm:p-8 bg-white border border-[#EAE7E0] text-right hover:border-[#292929] transition-colors cursor-pointer group"
          >
            <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-wider text-[#A69B8B] mb-2">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="font-editorial-heading text-2xl text-[#292929] group-hover:text-[#A69B8B] transition-colors">
              {nextProject.title}
            </h3>
            <span className="text-xs text-[#7A7062] mt-1 block">
              {nextProject.location} · {nextProject.category}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
