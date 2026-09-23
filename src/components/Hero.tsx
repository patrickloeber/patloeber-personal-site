import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenSnippet: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSnippet }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
              <span className="text-slate-900 font-semibold">Patrick Loeber</span>
              <span aria-hidden="true">·</span>
              <span>Germany</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-600">Google DeepMind</span>
              <span aria-hidden="true">·</span>
              <span>Python Engineer</span>
            </div>

            {/* Primary Headline with balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-[1.15]" style={{ textWrap: 'balance' }}>
              Member of Technical Staff
            </h1>

            {/* Narrative bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              I am a Member of Technical Staff & Developer Relations Engineer at{' '}
              <strong className="font-semibold text-slate-900">Google DeepMind</strong>, where I focus on developer experience with frontier AI models, including the Gemini API, Google AI Studio, and Gemma.
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
              As the founder of <strong className="font-semibold text-slate-800">Python Engineer</strong>, I've spent years demystifying machine learning, PyTorch, and algorithms for over 200,000 developers through intuitive, code-first tutorials and open-source software.
            </p>

            {/* Actions & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-2xs active:scale-[0.98]"
              >
                <span>Explore Background</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-800 hover:text-slate-950 bg-white border border-slate-200 hover:border-slate-300 rounded-md transition-colors active:scale-[0.98]"
              >
                <span>View Open Source</span>
              </a>

              <button
                onClick={onOpenSnippet}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 rounded-md transition-colors"
                title="View interactive code snippet"
              >
                <Terminal className="w-3.5 h-3.5 text-slate-500" />
                <span>Code Sample</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-md transition-colors ml-auto md:ml-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Verified External Profiles */}
            <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center gap-5 text-xs text-slate-500">
              <span className="font-medium text-slate-400">Connect:</span>
              <a
                href={PERSONAL_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors inline-flex items-center gap-0.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors inline-flex items-center gap-0.5"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors inline-flex items-center gap-0.5"
              >
                <span>YouTube</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors inline-flex items-center gap-0.5"
              >
                <span>X / Twitter</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.socialLinks.pythonEngineer}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition-colors inline-flex items-center gap-0.5"
              >
                <span>python-engineer.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Minimalist Profile & Engineering Anchor */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs">
              {/* Minimalist Visual Frame */}
              <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center font-bold text-xl tracking-tight shadow-inner shrink-0">
                  PL
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950">Patrick Loeber</h3>
                  <p className="text-xs font-medium text-blue-600 mt-0.5">Google DeepMind</p>
                  <p className="text-xs text-slate-500 mt-0.5">Member of Technical Staff · DevRel</p>
                </div>
              </div>

              {/* Focus Pillars */}
              <div className="py-5 space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Developer Relations & Experience:</span>
                    <span className="text-slate-500 ml-1">Simplifying frontier AI APIs, SDK architectures, and documentation for developers globally.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Machine Learning Education:</span>
                    <span className="text-slate-500 ml-1">Author of widely recognized courses on PyTorch, deep learning from scratch, and reinforcement learning.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-900">Open Source Tooling:</span>
                    <span className="text-slate-500 ml-1">Creator and maintainer of popular developer SDKs, study plans, and algorithms repositories.</span>
                  </div>
                </div>
              </div>

              {/* Academic Footnote */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>M.Sc. Medical Engineering</span>
                <span>FAU Erlangen-Nuremberg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
