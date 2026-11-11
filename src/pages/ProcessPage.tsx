import React from 'react';
import { Page } from '../types';
import { PROCESS_PHASES } from '../data/process';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: Page) => void;
  onOpenInquiry: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
            Architectural Methodology
          </span>
          <h1 className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl text-[#292929] leading-tight text-balance-editorial mb-6">
            A methodical four-phase path from discovery to physical reality.
          </h1>
          <p className="text-base sm:text-lg text-[#54524E] leading-relaxed font-light">
            Designing an architectural home or workspace requires emotional empathy balanced with rigorous technical discipline. Our 4-phase process ensures clarity of intent, budget predictability, and uncompromising site execution at every milestone.
          </p>
        </div>
      </section>

      {/* 4 Phases Detailed Breakdown */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="space-y-16">
          {PROCESS_PHASES.map((phase) => (
            <div
              key={phase.step}
              className="border border-[#EAE7E0] bg-white p-8 sm:p-12 transition-all hover:border-[#292929]/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Step Index & Timeframe */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#A69B8B] mb-2">
                    <span>STAGE</span>
                    <span aria-hidden="true">/</span>
                    <span className="font-bold text-[#292929] text-base">{phase.step}</span>
                  </div>
                  <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929] mb-3">
                    {phase.title}
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-[#7A7062] font-mono mb-6">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Typical Duration: {phase.timeframe}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light mb-6">
                    {phase.summary}
                  </p>
                </div>

                {/* Scope & Tangible Deliverables */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 lg:pl-6 lg:border-l border-[#EAE7E0]">
                  {/* Activities */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-[#292929] font-semibold mb-4">
                      Core Activities & Exploration
                    </h3>
                    <ul className="space-y-3">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#54524E] leading-relaxed font-light">
                          <span className="text-[#A69B8B] font-mono mt-0.5 shrink-0">·</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="bg-[#F8F7F4] p-6 border border-[#EAE7E0]">
                    <h3 className="text-xs uppercase tracking-wider text-[#292929] font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#A69B8B]" />
                      <span>Formal Deliverables</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="text-xs text-[#292929] leading-relaxed font-medium">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workshop Craft & Mock-Up Protocol */}
      <section className="bg-[#292929] text-[#EAE7E0] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
                The Mock-Up Protocol
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] leading-tight mb-6">
                Why we mandate physical sample mock-ups prior to procurement.
              </h2>
              <p className="text-sm text-[#A69B8B] leading-relaxed mb-6 font-light">
                Digital renders can simulate lighting, but they cannot replicate how a hand slides across waxed timber, or how natural stone absorbs ambient acoustics.
              </p>
              <p className="text-sm text-[#A69B8B] leading-relaxed font-light mb-8">
                During Phase 03 and Phase 04, our studio requires contractors to construct 1:1 scale physical prototypes of custom joinery profiles, plaster finishes, and stone corners on site for formal partner sign-off before fabrication commences.
              </p>
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 bg-white text-[#292929] hover:bg-[#EAE7E0] transition-colors text-xs uppercase tracking-widest font-medium cursor-pointer"
              >
                Discuss a Project
              </button>
            </div>

            <div className="lg:col-span-6 aspect-[4/3] bg-[#333333] overflow-hidden">
              <img
                src="/images/detail_stone_materiality.jpg"
                alt="1:1 physical sample mock-up of honed travertine stone, fluted oak joinery, raw linen, and patinated bronze"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next step prompt */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
        <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
          Ready to Begin Phase 01?
        </span>
        <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929] mb-4">
          Book an exploratory consultation with our studio directors.
        </h2>
        <p className="text-xs sm:text-sm text-[#54524E] max-w-lg mx-auto mb-6 font-light">
          We begin with an in-depth review of your site, architectural goals, and timeline to determine suitability and scope.
        </p>
        <button
          onClick={onOpenInquiry}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#292929] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
        >
          <span>Schedule Initial Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
