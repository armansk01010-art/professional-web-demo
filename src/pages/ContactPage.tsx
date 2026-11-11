import React, { useState } from 'react';
import { Page } from '../types';
import { ArrowRight, CheckCircle2, MapPin, Mail, Phone, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    service: 'Residential Interiors',
    timeline: '3 - 6 months',
    budget: '₹75L - ₹1.5 Cr',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How many commissions does FORME ATELIER take on each year?',
      a: 'We strictly cap our practice at 6 to 8 active commissions per year. This restriction ensures that founding partners are personally present on site, participate in all client workshops, and oversee every millwork drawing and stone slab selection.'
    },
    {
      q: 'Do you work on projects outside of Mumbai and Pune?',
      a: 'Yes. While our primary ateliers are in Mumbai and Pune, we regularly undertake architectural and interior commissions across Maharashtra (Alibaug, Nashik, Lonavala), Bengaluru, Goa, and select international concept collaborations. Travel and site supervision schedules are factored into the initial scope.'
    },
    {
      q: 'How are your architectural design fees structured?',
      a: 'Our fees are structured transparently based on total built-up square footage and scope complexity. We never charge hidden markups or accept kickbacks from contractors, stone quarries, or furniture vendors. All vendor trade benefits are passed directly to our patrons.'
    },
    {
      q: 'What is the typical timeframe for a full residential interior?',
      a: 'A typical 3,500 to 5,000 sq.ft. residential interior takes approximately 8 to 12 weeks for Phase 01 through Phase 03 (Discovery, Concept, Detailed Shop Drawings & Tender), followed by 6 to 9 months of on-site fabrication and construction administration.'
    }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please indicate project location/city.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief context regarding your project.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setReferenceId(`FA-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
            Studio Communications
          </span>
          <h1 className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl text-[#292929] leading-tight text-balance-editorial mb-6">
            Initiate a Dialogue
          </h1>
          <p className="text-base sm:text-lg text-[#54524E] leading-relaxed font-light">
            We welcome inquiries for ground-up architecture, residential interiors, workplace commissions, and strategic design advisory. Our studio reviews every brief to verify ideological alignment and scheduling feasibility.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Form + Studio Info */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-white border border-[#EAE7E0] p-8 sm:p-12">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#EAE7E0] flex items-center justify-center text-[#292929]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929]">
                  Inquiry Successfully Transmitted
                </h2>
                <p className="text-sm text-[#54524E] max-w-md mx-auto leading-relaxed font-light">
                  Thank you for reaching out to FORME ATELIER. Your brief has been forwarded directly to our studio partners. We will review your project parameters and respond within two business days.
                </p>
                <div className="p-4 bg-[#F8F7F4] border border-[#EAE7E0] max-w-xs mx-auto text-xs">
                  <span className="block text-[#A69B8B] uppercase tracking-wider text-[11px] mb-1">
                    Reference Code
                  </span>
                  <span className="font-mono text-base font-semibold text-[#292929]">
                    {referenceId}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      location: '',
                      service: 'Residential Interiors',
                      timeline: '3 - 6 months',
                      budget: '₹75L - ₹1.5 Cr',
                      message: ''
                    });
                  }}
                  className="px-6 py-3 bg-[#292929] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#1A1A1A] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8 pb-6 border-b border-[#EAE7E0]">
                  <h2 className="font-editorial-heading text-3xl text-[#292929]">
                    Project Inquiry Form
                  </h2>
                  <p className="text-xs text-[#7A7062] mt-1 font-light">
                    All fields marked with an asterisk are required for preliminary review.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ananya Deshmukh"
                        className={`w-full px-4 py-3 text-xs bg-[#F8F7F4] border ${
                          errors.name ? 'border-red-500' : 'border-[#DDD8CE]'
                        } focus:border-[#292929] focus:outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className={`w-full px-4 py-3 text-xs bg-[#F8F7F4] border ${
                          errors.email ? 'border-red-500' : 'border-[#DDD8CE]'
                        } focus:border-[#292929] focus:outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-2">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98200 00000"
                        className="w-full px-4 py-3 text-xs bg-[#F8F7F4] border border-[#DDD8CE] focus:border-[#292929] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-2">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Bandra West, Mumbai or Alibaug"
                        className={`w-full px-4 py-3 text-xs bg-[#F8F7F4] border ${
                          errors.location ? 'border-red-500' : 'border-[#DDD8CE]'
                        } focus:border-[#292929] focus:outline-none transition-colors`}
                      />
                      {errors.location && <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-2">
                        Service Discipline
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#F8F7F4] border border-[#DDD8CE] focus:border-[#292929] focus:outline-none transition-colors"
                      >
                        <option value="Residential Interiors">Residential Interiors</option>
                        <option value="Commercial Interiors">Commercial Interiors</option>
                        <option value="Architecture">Ground-up Architecture</option>
                        <option value="Design Consultation">Design Consultation & Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-2">
                        Anticipated Budget Framework
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#F8F7F4] border border-[#DDD8CE] focus:border-[#292929] focus:outline-none transition-colors"
                      >
                        <option value="₹40L - ₹75L">₹40 Lakhs – ₹75 Lakhs</option>
                        <option value="₹75L - ₹1.5 Cr">₹75 Lakhs – ₹1.5 Crore</option>
                        <option value="₹1.5 Cr - ₹3 Cr">₹1.5 Crore – ₹3 Crore</option>
                        <option value="₹3 Cr+">₹3 Crore and above</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-2">
                      Target Start Date
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-[#F8F7F4] border border-[#DDD8CE] focus:border-[#292929] focus:outline-none transition-colors"
                    >
                      <option value="Immediate">Immediate (1 – 2 months)</option>
                      <option value="3 - 6 months">Within 3 – 6 months</option>
                      <option value="6 - 12 months">6 – 12 months out</option>
                      <option value="Land / Plot Acquired">Plot acquired, evaluating feasibility</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#292929] font-medium mb-2">
                      Project Context & Aspirations *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your site, square footage, family or team rituals, architectural preferences, and what draws you to our work..."
                      className={`w-full px-4 py-3 text-xs bg-[#F8F7F4] border ${
                        errors.message ? 'border-red-500' : 'border-[#DDD8CE]'
                      } focus:border-[#292929] focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-[#7A7062]">
                      Strict client confidentiality observed.
                    </span>
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#292929] text-white hover:bg-[#1A1A1A] transition-colors text-xs uppercase tracking-widest font-medium cursor-pointer disabled:opacity-50"
                    >
                      <span>{loading ? 'Transmitting...' : 'Submit Inquiry'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Studio Contact Info Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Atelier Addresses */}
            <div className="bg-[#EAE7E0]/40 border border-[#EAE7E0] overflow-hidden">
              <div className="aspect-[16/9] bg-[#EAE7E0] overflow-hidden">
                <img
                  src="/images/project_atelier_workspace.jpg"
                  alt="FORME ATELIER studio workspace and material library in Lower Parel, Mumbai"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
                  Physical Ateliers
                </span>
                <h2 className="font-editorial-heading text-3xl text-[#292929] mb-6">
                  Our Locations
                </h2>

              <div className="space-y-6 text-xs text-[#54524E]">
                <div className="pb-6 border-b border-[#DDD8CE]">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#292929] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm text-[#292929] mb-1">Mumbai Atelier</h3>
                      <p>Mathuradas Mill Compound, Senapati Bapat Marg</p>
                      <p>Lower Parel, Mumbai, Maharashtra 400013</p>
                      <p className="mt-1.5 font-mono text-[#7A7062]">+91 (22) 4892 0180</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#292929] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm text-[#292929] mb-1">Pune Studio</h3>
                      <p>Lane 5, North Main Road</p>
                      <p>Koregaon Park, Pune, Maharashtra 411001</p>
                      <p className="mt-1.5 font-mono text-[#7A7062]">+91 (20) 2615 4490</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Channels */}
            <div className="bg-white border border-[#EAE7E0] p-8 text-xs text-[#54524E] space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-1 font-medium">
                Direct Channels
              </span>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#A69B8B]" />
                  <div>
                    <span className="block text-[11px] text-[#A69B8B]">New Commissions</span>
                    <a href="mailto:inquiries@formeatelier.com" className="text-[#292929] font-medium hover:underline">
                      inquiries@formeatelier.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#A69B8B]" />
                  <div>
                    <span className="block text-[11px] text-[#A69B8B]">Press & Monographs</span>
                    <a href="mailto:press@formeatelier.com" className="text-[#292929] font-medium hover:underline">
                      press@formeatelier.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#A69B8B]" />
                  <div>
                    <span className="block text-[11px] text-[#A69B8B]">Working Hours</span>
                    <span className="text-[#292929]">Monday – Friday · 09:30 – 18:30 IST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white py-20 border-t border-[#EAE7E0]">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-2 font-medium">
              Inquiry Clarifications
            </span>
            <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border border-[#EAE7E0] bg-[#F8F7F4]">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-editorial-heading text-xl text-[#292929]">
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#7A7062] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#7A7062] shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#54524E] leading-relaxed font-light border-t border-[#EAE7E0] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
