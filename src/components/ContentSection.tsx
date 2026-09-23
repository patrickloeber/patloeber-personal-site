import React, { useState } from 'react';
import { CONTENTS, ContentItem } from '../data/portfolioData';
import { ArrowUpRight, Play, Video, BookOpen, Presentation } from 'lucide-react';

export const ContentSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'Course' | 'Video Series' | 'Workshop'>('all');

  const filteredItems = CONTENTS.filter(
    (item) => filter === 'all' || item.type === filter
  );

  return (
    <section id="content" className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              Education & Developer Talks
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Courses, Video Series & Workshops
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Millions of developers have learned machine learning, deep learning, and API engineering through these structured resources.
            </p>
          </div>

          {/* Interactive filter buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setFilter('Course')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'Course'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => setFilter('Video Series')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'Video Series'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Series
            </button>
            <button
              onClick={() => setFilter('Workshop')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'Workshop'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Workshops
            </button>
          </div>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item: ContentItem) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-2xs group"
            >
              <div className="space-y-3">
                {/* Unboxed metadata kicker */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="text-blue-600">{item.type}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{item.platform}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="tabular-nums">{item.durationOrViews}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom bar */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                {/* Unboxed tags */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                  {item.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="text-slate-500">{tag}</span>
                      {idx < item.tags.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors shrink-0 ml-3"
                >
                  <span>Watch & Learn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
