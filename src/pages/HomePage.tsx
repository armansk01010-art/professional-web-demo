import React from 'react';
import { Page } from '../types';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';
import { JOURNAL_ARTICLES } from '../data/journal';
import { ArrowRight, ArrowUpRight, Compass, Shield, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page, projectSlug?: string) => void;
  onOpenInquiry: (service?: string, project?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenInquiry }) => {
  const featuredProjects = PROJECTS.slice(0, 4);
  const latestJournal = JOURNAL_ARTICLES.slice(0, 2);

  return (
    <div className="pt-24 pb-20">
      {/* 1. Architectural Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-6 pb-16 md:pt-12 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#A69B8B] mb-4">
              <span>Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Interior Design</span>
              <span aria-hidden="true">·</span>
              <span>Material Research</span>
            </div>
            <h1 className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-[#292929] leading-[1.05] text-balance-editorial">
              Crafting calm, tactile spaces rooted in architectural purity.
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-sm md:text-base text-[#54524E] leading-relaxed font-light mb-6">
              FORME ATELIER is a contemporary design studio based in Mumbai and Pune. We create bespoke residences, creative workspaces, and contextual architecture guided by natural light and enduring materiality.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#292929] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#292929] text-[#292929] text-xs uppercase tracking-widest font-medium hover:bg-[#292929] hover:text-[#FFFFFF] transition-colors cursor-pointer"
              >
                <span>Studio Philosophy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Architectural Image Anchor */}
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#EAE7E0] group">
          <img
            src="/images/hero_forme_architecture.jpg"
            alt="The Oak House - Monolithic architecture embedded in the landscape by FORME ATELIER"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between text-white gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#EAE7E0] block mb-1">
                Featured Concept Exploration
              </span>
              <p className="font-editorial-heading text-2xl sm:text-3xl text-white">
                The Oak House — Gangapur Hills, Nashik
              </p>
            </div>
            <button
              onClick={() => onNavigate('project-detail', 'the-oak-house')}
              className="text-xs uppercase tracking-widest text-white/90 hover:text-white inline-flex items-center gap-1.5 border-b border-white/40 pb-0.5 cursor-pointer"
            >
              <span>Explore Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Full-width editorial metrics strip below hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-b border-[#EAE7E0] pb-10 text-xs">
          <div>
            <span className="text-[#A69B8B] uppercase tracking-wider block mb-1">Founded In</span>
            <span className="font-editorial-heading text-2xl text-[#292929]">2019</span>
            <p className="text-[#7A7062] mt-0.5 font-light">6 Years of Refined Practice</p>
          </div>
          <div>
            <span className="text-[#A69B8B] uppercase tracking-wider block mb-1">Geography</span>
            <span className="font-editorial-heading text-2xl text-[#292929]">Mumbai · Pune</span>
            <p className="text-[#7A7062] mt-0.5 font-light">Commissions across India</p>
          </div>
          <div>
            <span className="text-[#A69B8B] uppercase tracking-wider block mb-1">Focus</span>
            <span className="font-editorial-heading text-2xl text-[#292929]">Quiet Luxury</span>
            <p className="text-[#7A7062] mt-0.5 font-light">Natural Stone & Timber</p>
          </div>
          <div>
            <span className="text-[#A69B8B] uppercase tracking-wider block mb-1">Engagement</span>
            <span className="font-editorial-heading text-2xl text-[#292929]">8 Comm. / Year</span>
            <p className="text-[#7A7062] mt-0.5 font-light">Partner-Led Oversight</p>
          </div>
        </div>
      </section>

      {/* 2. Studio Introduction & Design Philosophy */}
      <section className="bg-[#EAE7E0]/40 py-20 border-y border-[#EAE7E0]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
                Our Foundational Ethos
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl text-[#292929] leading-tight text-balance-editorial mb-6">
                Architecture that silences the noise of the outside world.
              </h2>
              <p className="text-sm text-[#54524E] leading-relaxed mb-6 font-light">
                We believe that the built environment directly shapes human consciousness. When a room is proportioned with intention, illuminated by soft natural light, and clad in authentic stone and wood, it imparts an unmistakable sensation of grounding and emotional security.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#EAE7E0] text-[#292929] shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#292929]">
                      Spatial Restraint
                    </h3>
                    <p className="text-xs text-[#7A7062] leading-relaxed mt-0.5">
                      Prioritizing volumetric proportions and clear sightlines over transient decorative motifs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#EAE7E0] text-[#292929] shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#292929]">
                      Sensory Materiality
                    </h3>
                    <p className="text-xs text-[#7A7062] leading-relaxed mt-0.5">
                      Selecting honest stone, timber, lime plaster, and living metals that age with quiet dignity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-[#EAE7E0] text-[#292929] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#292929]">
                      Choreography of Daylight
                    </h3>
                    <p className="text-xs text-[#7A7062] leading-relaxed mt-0.5">
                      Orchestrating sunlight through deep overhangs and textured planes to prevent tropical glare.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] bg-[#DDD8CE] overflow-hidden">
                    <img
                      src="/images/project_ivory_residence.jpg"
                      alt="The Ivory Residence living space in Worli, Mumbai"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4 bg-white border border-[#EAE7E0]">
                    <span className="text-[11px] uppercase tracking-wider text-[#A69B8B] block">
                      Residential Practice
                    </span>
                    <p className="font-editorial-heading text-lg text-[#292929] mt-0.5">
                      Monastic Comfort
                    </p>
                    <p className="text-xs text-[#7A7062] mt-1 font-light">
                      Curved bouclé forms and honed travertine plinths high above the Arabian Sea.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-4 bg-white border border-[#EAE7E0]">
                    <span className="text-[11px] uppercase tracking-wider text-[#A69B8B] block">
                      Material Laboratory
                    </span>
                    <p className="font-editorial-heading text-lg text-[#292929] mt-0.5">
                      Physical Craft
                    </p>
                    <p className="text-xs text-[#7A7062] mt-1 font-light">
                      Evaluating natural stone, unlacquered bronze, and raw wool in full scale.
                    </p>
                  </div>
                  <div className="aspect-[4/5] bg-[#DDD8CE] overflow-hidden">
                    <img
                      src="/images/detail_stone_materiality.jpg"
                      alt="Material Laboratory tactile stone, oak, and bronze study"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects (Editorial Gallery) */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
              Concept Monographs
            </span>
            <h2 className="font-editorial-heading text-4xl sm:text-5xl text-[#292929]">
              Selected Architectural Works
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#292929] hover:text-[#A69B8B] transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>View All 6 Concept Works</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onNavigate('project-detail', project.slug)}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-[#EAE7E0] overflow-hidden mb-5">
                <img
                  src={project.coverImage}
                  alt={`${project.title} - ${project.subtitle} in ${project.location}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] uppercase tracking-wider text-[#292929] font-medium">
                  {project.category}
                </div>
              </div>

              {/* Unboxed Metadata Discipline */}
              <div className="flex items-center gap-2 text-xs text-[#7A7062] mb-1.5">
                <span>{project.location}</span>
                <span aria-hidden="true">·</span>
                <span>{project.area}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-editorial-heading text-2xl sm:text-3xl text-[#292929] group-hover:text-[#A69B8B] transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs uppercase tracking-wider text-[#292929] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                  <span>View Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#54524E] mt-2 line-clamp-2 leading-relaxed font-light">
                {project.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="bg-[#292929] text-[#EAE7E0] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-[#3D3D3D]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
                Capabilities & Scope
              </span>
              <h2 className="font-editorial-heading text-4xl sm:text-5xl text-[#FFFFFF]">
                Our Architectural Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#A69B8B] max-w-md font-light leading-relaxed">
              We offer comprehensive spatial disciplines from early land assessment through to bespoke millwork design and turn-over certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between border-t border-[#3D3D3D] pt-6 group"
              >
                <div>
                  <span className="text-xs font-mono text-[#A69B8B] block mb-3">
                    {service.number}
                  </span>
                  <h3 className="font-editorial-heading text-2xl text-[#FFFFFF] group-hover:text-[#A69B8B] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#A69B8B] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#333333]">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs uppercase tracking-widest text-[#FFFFFF] hover:text-[#A69B8B] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Read Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#3D3D3D] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-[#A69B8B]">
              Looking for bespoke project advisory or need to evaluate an upcoming parcel?
            </p>
            <button
              onClick={() => onOpenInquiry('Design Consultation')}
              className="px-6 py-3 bg-[#FFFFFF] text-[#292929] hover:bg-[#EAE7E0] transition-colors text-xs uppercase tracking-widest font-medium cursor-pointer shrink-0"
            >
              Book Design Advisory
            </button>
          </div>
        </div>
      </section>

      {/* 5. Process Highlight Strip */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
              Methodology
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl text-[#292929] leading-tight mb-6">
              A disciplined sequence of exploration, detailing, and craft.
            </h2>
            <p className="text-sm text-[#54524E] leading-relaxed mb-8 font-light">
              We eliminate guesswork by dividing every architectural engagement into four transparent stages: Discovery, Spatial Concept, Detailed Technical Packages, and Rigorous Site Supervision.
            </p>
            <button
              onClick={() => onNavigate('process')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#292929] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
            >
              <span>Examine Our 4-Phase Process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              <div className="p-6 bg-white border border-[#EAE7E0] flex items-start gap-6">
                <span className="font-mono text-sm text-[#A69B8B] font-semibold">01</span>
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-[#292929] mb-1">
                    Consultation & Microclimate Discovery
                  </h3>
                  <p className="text-xs text-[#7A7062] leading-relaxed font-light">
                    Volumetric survey, solar angles, and deep lifestyle inquiry to establish the project program.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white border border-[#EAE7E0] flex items-start gap-6">
                <span className="font-mono text-sm text-[#A69B8B] font-semibold">02</span>
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-[#292929] mb-1">
                    Spatial Concept & Material Trays
                  </h3>
                  <p className="text-xs text-[#7A7062] leading-relaxed font-light">
                    Physical timber scale models and real tactile stone, plaster, and metal sample arrangements.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white border border-[#EAE7E0] flex items-start gap-6">
                <span className="font-mono text-sm text-[#A69B8B] font-semibold">03</span>
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-[#292929] mb-1">
                    Joinery Detailing & Tender Documentation
                  </h3>
                  <p className="text-xs text-[#7A7062] leading-relaxed font-light">
                    1:10 millwork drawings, concealed reveals, lighting circuits, and contractor procurement specs.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-white border border-[#EAE7E0] flex items-start gap-6">
                <span className="font-mono text-sm text-[#A69B8B] font-semibold">04</span>
                <div>
                  <h3 className="text-sm uppercase tracking-wider font-semibold text-[#292929] mb-1">
                    Execution & Meticulous Site Observation
                  </h3>
                  <p className="text-xs text-[#7A7062] leading-relaxed font-light">
                    Regular partner site visits, benchmark sign-offs, and rigorous snagging audits before move-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Journal Insights Preview */}
      <section className="bg-[#EAE7E0]/30 py-24 border-t border-[#EAE7E0]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
                Atelier Journal
              </span>
              <h2 className="font-editorial-heading text-4xl sm:text-5xl text-[#292929]">
                Architectural Insights & Field Notes
              </h2>
            </div>
            <button
              onClick={() => onNavigate('journal')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#292929] hover:text-[#A69B8B] transition-colors cursor-pointer"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestJournal.map((article) => (
              <div
                key={article.id}
                onClick={() => onNavigate('journal-detail', article.slug)}
                className="group cursor-pointer bg-white border border-[#EAE7E0] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] bg-[#EAE7E0] overflow-hidden mb-6">
                    <img
                      src={article.image}
                      alt={`${article.title} - Architectural insights monograph`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#7A7062] mb-2">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-editorial-heading text-2xl sm:text-3xl text-[#292929] group-hover:text-[#A69B8B] transition-colors leading-tight mb-3">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light mb-6">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EAE7E0] flex items-center justify-between text-xs uppercase tracking-wider text-[#292929] font-medium">
                  <span>Read Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Callout to Inquire */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 text-center">
        <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
          New Commissions
        </span>
        <h2 className="font-editorial-heading text-4xl sm:text-5xl md:text-6xl text-[#292929] max-w-3xl mx-auto mb-6 text-balance-editorial">
          Have an upcoming residence or architectural project in mind?
        </h2>
        <p className="text-sm text-[#54524E] max-w-xl mx-auto mb-8 font-light leading-relaxed">
          We welcome thoughtful conversations with patrons who share our passion for architectural permanence, natural light, and quiet materials.
        </p>
        <button
          onClick={() => onOpenInquiry()}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#292929] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
        >
          <span>Begin Conversation</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
