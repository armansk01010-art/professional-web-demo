import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page, projectSlug?: string) => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenInquiry
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Projects', page: 'projects' },
    { label: 'Services', page: 'services' },
    { label: 'Process', page: 'process' },
    { label: 'About', page: 'about' },
    { label: 'Journal', page: 'journal' }
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#EAE7E0] py-4'
          : 'bg-[#F8F7F4]/80 backdrop-blur-sm border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single line text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
          aria-label="FORME ATELIER Home"
        >
          <span className="font-editorial-heading text-2xl md:text-3xl tracking-tight text-[#292929] whitespace-nowrap block group-hover:text-[#A69B8B] transition-colors">
            FORME ATELIER
          </span>
        </button>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav
          className="hidden md:flex items-center gap-8 text-[13px] tracking-wider uppercase font-medium text-[#292929]/80"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer focus:outline-none link-editorial ${
                  isActive
                    ? 'text-[#292929] font-semibold active'
                    : 'hover:text-[#292929]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Exactly 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium text-[#FFFFFF] bg-[#292929] hover:bg-[#1A1A1A] transition-colors whitespace-nowrap cursor-pointer rounded-none"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#292929] hover:text-[#A69B8B] transition-colors focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#F8F7F4] border-b border-[#EAE7E0] px-6 py-8 shadow-xl transition-all">
          <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left text-lg font-serif tracking-normal transition-colors py-1 ${
                  currentPage === item.page ? 'text-[#292929] font-medium' : 'text-[#292929]/70 hover:text-[#292929]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#EAE7E0] flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-widest font-medium text-[#FFFFFF] bg-[#292929] hover:bg-[#1A1A1A] transition-colors"
              >
                Start an Inquiry
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 text-center text-xs uppercase tracking-widest font-medium text-[#292929] border border-[#292929] hover:bg-[#292929] hover:text-[#FFFFFF] transition-colors"
              >
                Contact & Studio Info
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
