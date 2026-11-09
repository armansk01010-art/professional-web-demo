import React from 'react';
import { Page } from '../types';
import { SERVICES } from '../data/services';
import { ArrowRight, Check } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
  onOpenInquiry: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
            Studio Disciplines
          </span>
          <h1 className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl text-[#292929] leading-tight text-balance-editorial mb-6">
            Architectural services executed with singular focus and restraint.
          </h1>
          <p className="text-base sm:text-lg text-[#54524E] leading-relaxed font-light">
            We deliver complete architectural, interior, and advisory disciplines for selective private homeowners, creative institutions, and commercial leaders. Our work emphasizes physical durability, spatial calm, and close partner oversight throughout execution.
          </p>
        </div>
      </section>

      {/* Services List in Detail */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="space-y-24">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="border-t border-[#DDD8CE] pt-16 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Number, Title, Overview */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 text-xs font-mono text-[#A69B8B] mb-4">
                    <span>PHASE TYPE</span>
                    <span aria-hidden="true">/</span>
                    <span className="text-[#292929] font-bold">{service.number}</span>
                  </div>
                  <h2 className="font-editorial-heading text-3xl sm:text-4xl md:text-5xl text-[#292929] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-sm font-medium text-[#7A7062] mb-6 leading-relaxed">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light mb-8">
                    {service.extendedDescription}
                  </p>

                  <div className="p-5 bg-white border border-[#EAE7E0] mb-8">
                    <span className="text-[11px] uppercase tracking-wider text-[#A69B8B] block mb-1">
                      Patron Profile
                    </span>
                    <p className="text-xs text-[#292929] leading-relaxed font-light">
                      {service.idealFor}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenInquiry(service.title)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#292929] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Right Column: Scope Breakdown & Deliverables */}
                <div className="lg:col-span-7 space-y-8">
                  {/* Detailed Scope of Work */}
                  <div className="bg-white border border-[#EAE7E0] p-6 sm:p-8">
                    <h3 className="text-xs uppercase tracking-widest text-[#292929] font-semibold mb-6 flex items-center justify-between">
                      <span>Scope of Architectural Work</span>
                      <span className="text-[11px] font-mono text-[#A69B8B]">6 Critical Modules</span>
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {service.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3.5 text-xs text-[#54524E] leading-relaxed font-light">
                          <span className="w-4 h-4 rounded-full bg-[#EAE7E0] text-[#292929] flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documentation & Deliverables */}
                  <div className="bg-[#EAE7E0]/30 border border-[#EAE7E0] p-6 sm:p-8">
                    <h3 className="text-xs uppercase tracking-widest text-[#292929] font-semibold mb-6">
                      Tangible Studio Deliverables
                    </h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-[#54524E] leading-relaxed font-light">
                          <span className="text-[#A69B8B] font-mono shrink-0">[{idx + 1}]</span>
                          <span>{item}</span>
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

      {/* Engagement Terms & Transparency */}
      <section className="bg-white py-20 border-t border-[#EAE7E0]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
                Engagement Standards
              </span>
              <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929]">
                How We Operate With Patrons
              </h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-[#54524E] font-light leading-relaxed">
              <div className="p-6 bg-[#F8F7F4] border border-[#EAE7E0]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#292929] mb-2">
                  Transparent Professional Fees
                </h3>
                <p>
                  Our design fees are structured strictly on built-up area and complexity benchmarks, never on obscure vendor commissions or inflated contractor markups. We represent our clients’ architectural interests with absolute fiduciary loyalty.
                </p>
              </div>
              <div className="p-6 bg-[#F8F7F4] border border-[#EAE7E0]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#292929] mb-2">
                  Partner-Led Continuity
                </h3>
                <p>
                  We do not hand off your project to junior draftsmen once the contract is signed. The founding partner who presents your initial spatial sketches remains your weekly point of contact through final snagging audits and move-in.
                </p>
              </div>
              <div className="p-6 bg-[#F8F7F4] border border-[#EAE7E0]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#292929] mb-2">
                  Zero Vendor Markups
                </h3>
                <p>
                  All manufacturer discounts on marble, stone blocks, timber, sanitaryware, and lighting are passed directly back to the client. We select materials purely on aesthetic merit and structural integrity.
                </p>
              </div>
              <div className="p-6 bg-[#F8F7F4] border border-[#EAE7E0]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#292929] mb-2">
                  Rigorous Snagging Audits
                </h3>
                <p>
                  Before handover, we conduct comprehensive architectural audits covering joinery tolerances, paint sheen uniformity, plumbing pressures, and concealed reveal consistency, ensuring flawless execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Transition Link */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 text-center">
        <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
          Behind the Architecture
        </span>
        <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929] mb-4">
          Curious how we execute from sketch to physical space?
        </h2>
        <p className="text-xs sm:text-sm text-[#54524E] max-w-lg mx-auto mb-6 font-light">
          Review our step-by-step 4-phase methodology covering Discovery, Spatial Concept, Technical Detailing, and Site Administration.
        </p>
        <button
          onClick={() => onNavigate('process')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#292929] text-[#FFFFFF] text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
        >
          <span>Examine Our 4-Phase Process</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>
    </div>
  );
};
