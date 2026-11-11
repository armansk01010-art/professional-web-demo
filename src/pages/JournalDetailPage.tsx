import React from 'react';
import { Page, JournalArticle } from '../types';
import { JOURNAL_ARTICLES } from '../data/journal';
import { ArrowLeft, ArrowRight, Calendar, Clock, Bookmark, Share2 } from 'lucide-react';

interface JournalDetailPageProps {
  slug: string;
  onNavigate: (page: Page, articleSlug?: string) => void;
  onOpenInquiry: () => void;
}

export const JournalDetailPage: React.FC<JournalDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenInquiry
}) => {
  const articleIndex = JOURNAL_ARTICLES.findIndex((a) => a.slug === slug);
  const article: JournalArticle = JOURNAL_ARTICLES[articleIndex] || JOURNAL_ARTICLES[0];
  const nextArticle = articleIndex < JOURNAL_ARTICLES.length - 1 ? JOURNAL_ARTICLES[articleIndex + 1] : JOURNAL_ARTICLES[0];

  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 pt-8 pb-4">
        <button
          onClick={() => onNavigate('journal')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#7A7062] hover:text-[#292929] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal</span>
        </button>
      </div>

      {/* Header */}
      <article className="max-w-4xl mx-auto px-6 md:px-10 pt-4 pb-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-[#7A7062] mb-4">
            <span className="text-[#292929] uppercase tracking-wider font-semibold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-editorial-heading text-4xl sm:text-5xl md:text-6xl text-[#292929] leading-tight text-balance-editorial mb-6">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-[#7A7062] leading-relaxed font-light">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#DDD8CE] text-xs text-[#7A7062]">
            <span>FORME ATELIER Editorial Board</span>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs text-[#292929] hover:text-[#A69B8B] transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied' : 'Share Monograph'}</span>
            </button>
          </div>
        </header>

        {/* Lead Image */}
        <div className="aspect-[16/10] bg-[#EAE7E0] overflow-hidden mb-12">
          <img
            src={article.image}
            alt={`${article.title} - Architectural perspective and materiality study`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Quote Callout */}
        {article.keyQuote && (
          <div className="my-10 p-8 sm:p-10 bg-[#EAE7E0]/40 border-l-2 border-[#292929]">
            <blockquote className="font-editorial-heading text-2xl sm:text-3xl text-[#292929] leading-snug">
              “{article.keyQuote}”
            </blockquote>
            <cite className="block text-xs uppercase tracking-widest text-[#7A7062] mt-4 not-italic">
              — FORME Architectural Manifesto
            </cite>
          </div>
        )}

        {/* Essay Body Paragraphs */}
        <div className="prose prose-neutral max-w-none space-y-6 text-sm sm:text-base text-[#54524E] leading-relaxed font-light">
          {article.paragraphs.map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Monograph Sign-Off */}
        <div className="mt-16 p-8 bg-white border border-[#EAE7E0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-1 font-medium">
              Spatial Dialogues
            </span>
            <p className="font-editorial-heading text-xl text-[#292929]">
              Interested in discussing this architectural perspective for your project?
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-6 py-3 bg-[#292929] text-white hover:bg-[#1A1A1A] transition-colors text-xs uppercase tracking-widest font-medium cursor-pointer shrink-0"
          >
            Inquire With Studio
          </button>
        </div>

        {/* Next Article Navigation */}
        <div className="mt-12 pt-8 border-t border-[#DDD8CE]">
          <span className="text-xs uppercase tracking-widest text-[#A69B8B] block mb-3 font-medium">
            Next Monograph
          </span>
          <button
            onClick={() => onNavigate('journal-detail', nextArticle.slug)}
            className="group w-full p-6 bg-white border border-[#EAE7E0] hover:border-[#292929] transition-colors text-left cursor-pointer flex items-center justify-between gap-4"
          >
            <div>
              <span className="text-[11px] text-[#7A7062] uppercase tracking-wider block mb-1">
                {nextArticle.category} · {nextArticle.readTime}
              </span>
              <h3 className="font-editorial-heading text-2xl text-[#292929] group-hover:text-[#A69B8B] transition-colors">
                {nextArticle.title}
              </h3>
            </div>
            <ArrowRight className="w-5 h-5 text-[#292929] group-hover:translate-x-1.5 transition-transform shrink-0" />
          </button>
        </div>
      </article>
    </div>
  );
};
