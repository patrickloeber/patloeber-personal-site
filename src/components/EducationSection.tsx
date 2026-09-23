import React from 'react';
import { EDUCATION, EducationItem } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Education & Foundations
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-2">
            Rigorous training in computer vision, mathematics, pattern recognition, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu: EducationItem, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs font-medium text-blue-600">
                    {edu.institution}
                  </div>
                  <span className="text-xs font-medium text-slate-400 tabular-nums">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900">
                  {edu.degree}
                </h3>

                <div className="text-xs font-medium text-slate-600">
                  <span className="text-slate-400">Specialization:</span> {edu.specialization}
                </div>

                {edu.thesisTitle && (
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700">
                    <span className="font-semibold text-slate-900 block mb-1">Master's Thesis Research:</span>
                    <span className="italic text-slate-600">"{edu.thesisTitle}"</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>{edu.location}</span>
                <span>Graduated with Honors</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
