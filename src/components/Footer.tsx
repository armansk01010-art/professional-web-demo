import React, { useState } from 'react';
import { Page } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInquiry }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#212121] text-[#EAE7E0] pt-20 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Callout / Inquiries banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#333333] items-start">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3">
              Spatial Collaborations
            </span>
            <h2 className="font-editorial-heading text-4xl sm:text-5xl lg:text-6xl text-[#FFFFFF] leading-tight text-balance-editorial">
              Crafting calm, enduring spaces with singular architectural purpose.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <p className="text-sm text-[#A69B8B] leading-relaxed mb-6 font-light">
              We take on a limited number of residential and commercial architectural commissions each year to ensure rigorous material detailing and continuous partner-level oversight.
            </p>
            <div>
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#FFFFFF] text-[#292929] hover:bg-[#EAE7E0] transition-colors text-xs uppercase tracking-widest font-medium cursor-pointer"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Studio Locations and Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-[#333333] text-sm">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-4 pr-6">
            <span className="font-editorial-heading text-2xl text-[#FFFFFF] block mb-4">
              FORME ATELIER
            </span>
            <p className="text-xs text-[#A69B8B] leading-relaxed mb-4 font-light">
              Contemporary architecture and interior design studio specializing in residential sanctuaries, commercial headquarters, and contemplative spatial monographs.
            </p>
            <div className="text-xs text-[#8C8070] border-t border-[#333333] pt-3">
              Fictional concept portfolio exploring monolithic forms, natural materiality, and daylight orchestration across India.
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-widest text-[#FFFFFF] block mb-4 font-medium">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#A69B8B]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Selected Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Studio Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('process')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  About the Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('journal')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Design Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#FFFFFF] transition-colors cursor-pointer text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Locations */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest text-[#FFFFFF] block mb-4 font-medium">
              Studios
            </span>
            <div className="space-y-5 text-xs text-[#A69B8B] font-light">
              <div>
                <p className="text-[#FFFFFF] font-normal mb-1">Mumbai Atelier</p>
                <p>Mathuradas Mill Compound, Senapati Bapat Marg</p>
                <p>Lower Parel, Mumbai 400013</p>
                <p className="mt-1 text-[#8C8070]">+91 (22) 4892 0180</p>
              </div>
              <div>
                <p className="text-[#FFFFFF] font-normal mb-1">Pune Studio</p>
                <p>Lane 5, North Main Road</p>
                <p>Koregaon Park, Pune 411001</p>
                <p className="mt-1 text-[#8C8070]">+91 (20) 2615 4490</p>
              </div>
            </div>
          </div>

          {/* Monograph Dispatch */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest text-[#FFFFFF] block mb-4 font-medium">
              Monograph Dispatch
            </span>
            <p className="text-xs text-[#A69B8B] leading-relaxed mb-4 font-light">
              Receive quarterly architectural essays, material field studies, and private project previews.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-[#2D2D2D] text-xs text-[#EAE7E0]">
                <Check className="w-4 h-4 text-[#A69B8B]" />
                <span>You have been subscribed to the Monograph Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center border border-[#444444] focus-within:border-[#A69B8B] transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full px-3 py-2.5 bg-transparent text-xs text-[#FFFFFF] placeholder-[#666666] focus:outline-none"
                    aria-label="Email address for dispatch"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2.5 bg-[#333333] hover:bg-[#444444] text-[#FFFFFF] text-xs transition-colors cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-[#E5A8A8]">{error}</p>}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Unboxed Metadata */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-[#8C8070]">
          <div>
            © {new Date().getFullYear()} FORME ATELIER. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Architectural Practice</span>
            <span aria-hidden="true">·</span>
            <span>Interior Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Material Research</span>
            <span aria-hidden="true">·</span>
            <span>Mumbai & Pune</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
