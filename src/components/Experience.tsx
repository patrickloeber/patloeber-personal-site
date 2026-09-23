import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { EXPERIENCES, ExperienceItem } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('deepmind');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Career Journey
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            A track record of engineering machine learning systems, leading developer communities, and building developer-first software at scale.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {EXPERIENCES.map((item: ExperienceItem) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200/90 transition-all hover:border-slate-300 shadow-2xs"
              >
                {/* Header / Clickable summary */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                      <span className="font-semibold text-slate-900">{item.organization}</span>
                      <span aria-hidden="true" className="text-slate-300">·</span>
                      <span className="text-slate-500">{item.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <span className="text-xs font-medium text-slate-400 tabular-nums">
                      {item.period}
                    </span>
                    <button
                      type="button"
                      className="p-1 text-slate-400 hover:text-slate-700 transition-colors"
                      aria-label={isExpanded ? 'Collapse role details' : 'Expand role details'}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-sm text-slate-600 space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                        Key Accomplishments
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-slate-600 text-xs sm:text-sm">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Zero-Pill Tech Metadata */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-medium text-slate-700">Technologies:</span>
                      {item.technologies.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="text-slate-600 font-mono">{tech}</span>
                          {idx < item.technologies.length - 1 && (
                            <span aria-hidden="true" className="text-slate-300">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {item.link && (
                      <div className="pt-2">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <span>Visit {item.organization}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
