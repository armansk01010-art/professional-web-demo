import React, { useState } from 'react';
import { Page } from '../types';
import { JOURNAL_ARTICLES } from '../data/journal';
import { ArrowRight, BookOpen } from 'lucide-react';

interface JournalPageProps {
  onNavigate: (page: Page, articleSlug?: string) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Philosophy', 'Materiality', 'Architecture', 'Workspace'];

  const filteredArticles = selectedCategory === 'All'
    ? JOURNAL_ARTICLES
    : JOURNAL_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-24 pb-20">
      {/* Journal Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16">
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
            Atelier Monograph & Field Notes
          </span>
          <h1 className="font-editorial-heading text-5xl sm:text-6xl md:text-7xl text-[#292929] leading-tight text-balance-editorial mb-6">
            Reflections on spatial silence, raw materials, and light.
          </h1>
          <p className="text-base sm:text-lg text-[#54524E] leading-relaxed font-light mb-8">
            A digital archive of architectural essays, material field studies, and studio observations from our practices in Mumbai and Pune.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#EAE7E0] pb-6">
          <span className="text-xs uppercase tracking-wider text-[#A69B8B] mr-3 font-medium hidden sm:inline">
            Topic:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#292929] text-[#FFFFFF]'
                  : 'bg-white text-[#54524E] hover:text-[#292929] border border-[#EAE7E0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Lead Article */}
      {selectedCategory === 'All' && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
          <article
            onClick={() => onNavigate('journal-detail', JOURNAL_ARTICLES[0].slug)}
            className="group cursor-pointer bg-white border border-[#EAE7E0] overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-center hover:border-[#292929]/50 transition-colors"
          >
            <div className="lg:col-span-7 aspect-[16/10] bg-[#EAE7E0] overflow-hidden">
              <img
                src={JOURNAL_ARTICLES[0].image}
                alt={`${JOURNAL_ARTICLES[0].title} - Architectural monograph illustration`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#7A7062] mb-3">
                  <span>{JOURNAL_ARTICLES[0].category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{JOURNAL_ARTICLES[0].date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{JOURNAL_ARTICLES[0].readTime}</span>
                </div>
                <h2 className="font-editorial-heading text-3xl sm:text-4xl text-[#292929] group-hover:text-[#A69B8B] transition-colors leading-tight mb-4">
                  {JOURNAL_ARTICLES[0].title}
                </h2>
                <p className="text-xs sm:text-sm text-[#54524E] leading-relaxed font-light mb-6">
                  {JOURNAL_ARTICLES[0].excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE7E0] flex items-center justify-between text-xs uppercase tracking-wider text-[#292929] font-medium">
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'All' ? filteredArticles.slice(1) : filteredArticles).map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate('journal-detail', article.slug)}
              className="group cursor-pointer bg-white border border-[#EAE7E0] p-6 sm:p-8 flex flex-col justify-between hover:border-[#292929]/50 transition-colors"
            >
              <div>
                <div className="aspect-[16/10] bg-[#EAE7E0] overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={`${article.title} - Architectural monograph illustration`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#7A7062] mb-2 font-light">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-editorial-heading text-2xl text-[#292929] group-hover:text-[#A69B8B] transition-colors leading-tight mb-3">
                  {article.title}
                </h2>
                <p className="text-xs text-[#54524E] leading-relaxed font-light line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE7E0] flex items-center justify-between text-xs uppercase tracking-wider text-[#292929] font-medium">
                <span>Read Essay</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
