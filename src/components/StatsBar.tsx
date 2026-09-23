import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  return (
    <section className="border-y border-slate-200/80 bg-white/70 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {PERSONAL_INFO.metrics.map((metric, index) => (
            <div key={index} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 tabular-nums">
                {metric.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400">
                {metric.context}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
