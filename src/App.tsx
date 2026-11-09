import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { JournalPage } from './pages/JournalPage';
import { JournalDetailPage } from './pages/JournalDetailPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [projectSlug, setProjectSlug] = useState<string>('the-ivory-residence');
  const [articleSlug, setArticleSlug] = useState<string>('radical-reduction');

  // Inquiry Modal State
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryInitialService, setInquiryInitialService] = useState<string | undefined>();
  const [inquiryInitialProject, setInquiryInitialProject] = useState<string | undefined>();

  // Parse URL hash on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setCurrentPage('home');
        return;
      }

      if (hash.startsWith('project/')) {
        const slug = hash.replace('project/', '');
        setProjectSlug(slug);
        setCurrentPage('project-detail');
      } else if (hash.startsWith('journal/')) {
        const slug = hash.replace('journal/', '');
        setArticleSlug(slug);
        setCurrentPage('journal-detail');
      } else if (['home', 'about', 'services', 'projects', 'process', 'journal', 'contact'].includes(hash)) {
        setCurrentPage(hash as Page);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title per page
  useEffect(() => {
    const pageTitles: Record<Page, string> = {
      'home': 'FORME ATELIER - Architecture & Interior Design Studio',
      'about': 'About the Studio - FORME ATELIER',
      'services': 'Disciplines & Services - FORME ATELIER',
      'projects': 'Selected Works & Concept Portfolio - FORME ATELIER',
      'project-detail': 'Project Study - FORME ATELIER',
      'process': '4-Phase Architectural Methodology - FORME ATELIER',
      'journal': 'Architectural Monograph & Insights - FORME ATELIER',
      'journal-detail': 'Journal Essay - FORME ATELIER',
      'contact': 'Inquiries & Studio Locations - FORME ATELIER'
    };
    document.title = pageTitles[currentPage] || 'FORME ATELIER';
  }, [currentPage]);

  const handleNavigate = (page: Page, slugParam?: string) => {
    setCurrentPage(page);
    if (page === 'project-detail' && slugParam) {
      setProjectSlug(slugParam);
      window.location.hash = `project/${slugParam}`;
    } else if (page === 'journal-detail' && slugParam) {
      setArticleSlug(slugParam);
      window.location.hash = `journal/${slugParam}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (service?: string, project?: string) => {
    setInquiryInitialService(service);
    setInquiryInitialProject(project);
    setInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryOpen(false);
    setInquiryInitialService(undefined);
    setInquiryInitialProject(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#292929] selection:bg-[#292929] selection:text-white">
      {/* Top Bar Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Page Content */}
      <main className="flex-1" id="main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenInquiry={(svc) => handleOpenInquiry(svc)}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenInquiry={(svc, prj) => handleOpenInquiry(svc, prj)}
          />
        )}
        {currentPage === 'project-detail' && (
          <ProjectDetailPage
            slug={projectSlug}
            onNavigate={handleNavigate}
            onOpenInquiry={(svc, prj) => handleOpenInquiry(svc, prj)}
          />
        )}
        {currentPage === 'process' && (
          <ProcessPage
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}
        {currentPage === 'journal' && (
          <JournalPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'journal-detail' && (
          <JournalDetailPage
            slug={articleSlug}
            onNavigate={handleNavigate}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Global Project Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={handleCloseInquiry}
        initialService={inquiryInitialService}
        initialProject={inquiryInitialProject}
      />
    </div>
  );
}
