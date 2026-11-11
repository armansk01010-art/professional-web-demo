import React from 'react';
import { Page } from '../types';
import { ArrowRight, Layers, Eye, Feather } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="pt-24 pb-20">
      {/* Editorial Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
            Studio Monograph
          </span>
          <h1 className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl text-[#292929] leading-tight text-balance-editorial mb-8">
            An architectural practice devoted to stillness, proportion, and honest craft.
          </h1>
          <p className="text-base sm:text-lg text-[#54524E] leading-relaxed font-light">
            Founded in 2019, FORME ATELIER was conceived as a deliberate alternative to the disposable ornamentation and stylistic volatility of contemporary design. Operating from ateliers in Mumbai and Pune, we produce quiet, contextually grounded residences, commercial spaces, and architecture.
          </p>
        </div>
      </section>

      {/* Atmospheric Photography Split */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 aspect-[16/10] bg-[#EAE7E0] overflow-hidden">
            <img
              src="/images/project_atelier_workspace.jpg"
              alt="Inside the FORME ATELIER material archive and studio in Lower Parel, Mumbai"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-4 bg-[#EAE7E0]/40 p-8 sm:p-10 border border-[#EAE7E0] flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
                The Workspace
              </span>
              <h2 className="font-editorial-heading text-3xl text-[#292929] mb-4">
                The Physical Atelier
              </h2>
              <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light mb-4">
                Our working studio functions as an active workshop. Digital drawings are tested against full-scale stone samples, physical wooden joinery maquettes, and hand-troweled mineral plaster boards.
              </p>
              <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light">
                We believe that architecture cannot be properly resolved through computer screens alone; it requires somatic physical feedback and real material friction.
              </p>
            </div>
            <div className="pt-6 border-t border-[#DDD8CE] text-xs text-[#7A7062]">
              Lower Parel Atelier · Open for client consultations by appointment
            </div>
          </div>
        </div>
      </section>

      {/* Studio Story & Approach */}
      <section className="bg-white py-20 border-y border-[#EAE7E0]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
                Our Genesis
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929]">
                The Story Behind the Practice
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-sm text-[#54524E] leading-relaxed font-light">
              <p>
                FORME ATELIER emerged from a shared frustration with the hyper-accelerated cycle of interior trends. Too often, spaces were being designed as temporary backdrops for photographs—impressive on screen, yet hollow, noisy, and uncomfortable to live in day-to-day.
              </p>
              <p>
                Our founders, having practiced in both European minimalist ateliers and traditional Indian master-craft environments, sought to unite two distinct architectural values: the razor-sharp volumetric discipline of modern spatial reduction, and the warmth, texture, and climate wisdom of Indian masonry and joinery traditions.
              </p>
              <p>
                Rather than treating architecture and interiors as separate phases, our studio integrates them into a singular continuum. Walls are not merely partitions to be painted; they are thick masses that house mechanical services, direct daylight, and provide acoustic protection against dense urban surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Tenets */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
            Guiding Philosophy
          </span>
          <h2 className="font-editorial-heading text-4xl sm:text-5xl text-[#292929]">
            Three Architectural Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-[#EAE7E0] bg-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 mb-6 bg-[#F8F7F4] flex items-center justify-center text-[#292929]">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#A69B8B] block mb-2">01</span>
              <h3 className="font-editorial-heading text-2xl text-[#292929] mb-4">
                Volumetric Honesty
              </h3>
              <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light">
                We design spaces from the primary structural envelope outward. Every corner, reveal, and ceiling transition is aligned with intent, creating an intuitive spatial cadence that feels calm before furniture is ever introduced.
              </p>
            </div>
            <div className="pt-6 border-t border-[#EAE7E0] mt-8 text-xs text-[#7A7062]">
              Geometry over decoration
            </div>
          </div>

          <div className="border border-[#EAE7E0] bg-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 mb-6 bg-[#F8F7F4] flex items-center justify-center text-[#292929]">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#A69B8B] block mb-2">02</span>
              <h3 className="font-editorial-heading text-2xl text-[#292929] mb-4">
                Tactile Permanence
              </h3>
              <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light">
                We avoid synthetic veneers and disposable imitations. We specify solid timbers, natural stones, cast microcement, and unlacquered living bronzes that acquire depth, character, and beauty through years of human use.
              </p>
            </div>
            <div className="pt-6 border-t border-[#EAE7E0] mt-8 text-xs text-[#7A7062]">
              Materials with memory
            </div>
          </div>

          <div className="border border-[#EAE7E0] bg-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 mb-6 bg-[#F8F7F4] flex items-center justify-center text-[#292929]">
                <Feather className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#A69B8B] block mb-2">03</span>
              <h3 className="font-editorial-heading text-2xl text-[#292929] mb-4">
                Acoustic & Solar Calm
              </h3>
              <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light">
                A visually quiet room is incomplete if it rings with harsh echoes or blinds its inhabitants with afternoon glare. We design deep overhangs, textured lime finishes, and concealed acoustic buffers to nurture serenity.
              </p>
            </div>
            <div className="pt-6 border-t border-[#EAE7E0] mt-8 text-xs text-[#7A7062]">
              Sensory equilibrium
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Studio Directors */}
      <section className="bg-[#EAE7E0]/30 py-24 border-t border-[#EAE7E0]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
              Studio Leadership
            </span>
            <h2 className="font-editorial-heading text-4xl sm:text-5xl text-[#292929]">
              The Directors
            </h2>
            <p className="text-xs sm:text-sm text-[#54524E] mt-2 max-w-xl font-light">
              Every commission undertaken by FORME ATELIER is directly led by our partners, maintaining unbroken creative accountability from schematic sketch to final move-in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#EAE7E0] p-6 sm:p-8">
              <div className="aspect-[4/3] bg-[#EAE7E0] overflow-hidden mb-6">
                <img
                  src="/images/portrait_arjun_somani.jpg"
                  alt="Arjun Somani, Founding Partner & Studio Director at FORME ATELIER"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#A69B8B] block mb-1">
                Founding Partner & Studio Director
              </span>
              <h3 className="font-editorial-heading text-2xl text-[#292929] mb-3">
                Arjun Somani
              </h3>
              <p className="text-xs text-[#54524E] leading-relaxed font-light mb-4">
                Trained in architectural geometry and urban studies, Arjun leads the studio’s master planning, volumetric massing, and architectural concept development.
              </p>
              <div className="text-[11px] text-[#7A7062] pt-3 border-t border-[#EAE7E0]">
                M.Arch, Architectural Association · B.Arch, CEPT
              </div>
            </div>

            <div className="bg-white border border-[#EAE7E0] p-6 sm:p-8">
              <div className="aspect-[4/3] bg-[#EAE7E0] overflow-hidden mb-6">
                <img
                  src="/images/portrait_kavita_menon.jpg"
                  alt="Kavita Menon, Partner & Lead Interior Architect at FORME ATELIER"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#A69B8B] block mb-1">
                Partner & Lead Interior Architect
              </span>
              <h3 className="font-editorial-heading text-2xl text-[#292929] mb-3">
                Kavita Menon
              </h3>
              <p className="text-xs text-[#54524E] leading-relaxed font-light mb-4">
                Kavita oversees interior architecture, bespoke joinery detailing, and tactile materiality, with a special focus on stone curation and artisanal craft collaborations.
              </p>
              <div className="text-[11px] text-[#7A7062] pt-3 border-t border-[#EAE7E0]">
                MA Interior Design, Politecnico di Milano · Mumbai
              </div>
            </div>

            <div className="bg-white border border-[#EAE7E0] p-6 sm:p-8">
              <div className="aspect-[4/3] bg-[#EAE7E0] overflow-hidden mb-6">
                <img
                  src="/images/portrait_devang_varma.jpg"
                  alt="Devang Varma, Partner & Principal Architect at FORME ATELIER"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#A69B8B] block mb-1">
                Partner & Principal Architect
              </span>
              <h3 className="font-editorial-heading text-2xl text-[#292929] mb-3">
                Devang Varma
              </h3>
              <p className="text-xs text-[#54524E] leading-relaxed font-light mb-4">
                Devang directs ground-up architectural residential works, structural coordination, and passive climate engineering for hill and coastal retreats.
              </p>
              <div className="text-[11px] text-[#7A7062] pt-3 border-t border-[#EAE7E0]">
                B.Arch, Sir J.J. College of Architecture · Mumbai
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Practice Statement */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
        <div className="max-w-3xl mx-auto p-8 sm:p-12 bg-white border border-[#EAE7E0]">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
            Academic & Conceptual Mandate
          </span>
          <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929] mb-4">
            Research Through Spatial Form
          </h2>
          <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light mb-6">
            In addition to private commissions, FORME ATELIER conducts ongoing architectural research into microclimates, basalt stone engineering, and contemporary vernaculars. The concept projects presented in our monograph embody our continuous search for architectural clarity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 bg-[#292929] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
            >
              Explore Projects
            </button>
            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 border border-[#292929] text-[#292929] text-xs uppercase tracking-widest font-medium hover:bg-[#292929] hover:text-[#FFFFFF] transition-colors cursor-pointer"
            >
              Initiate Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
