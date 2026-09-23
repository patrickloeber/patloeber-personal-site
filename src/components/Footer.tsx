import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="font-semibold text-slate-900">Patrick Loeber</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Google DeepMind & Python Engineer</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()} All Rights Reserved</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            YouTube
          </a>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors ml-2"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
