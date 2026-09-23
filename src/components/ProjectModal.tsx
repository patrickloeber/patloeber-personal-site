import React, { useState } from 'react';
import { X, ArrowUpRight, Star, GitFork, Copy, Check, Terminal } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.sampleSnippet) {
      navigator.clipboard.writeText(project.sampleSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="bg-white rounded-xl border border-slate-200 shadow-xl max-w-2xl w-full overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-slate-900">
                {project.title}
              </h3>
              {project.stars && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded tabular-nums">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  {project.stars}
                </span>
              )}
            </div>
            {project.forks && (
              <div className="flex items-center gap-1 text-xs text-slate-400 mt-1 tabular-nums">
                <GitFork className="w-3 h-3" />
                <span>{project.forks} forks</span>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="px-6 py-5 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-1.5">
              Overview
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
              Architecture & Highlights
            </h4>
            <ul className="space-y-1.5 list-disc list-inside text-xs sm:text-sm text-slate-600">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Sample Snippet if available */}
          {project.sampleSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Terminal className="w-3.5 h-3.5 text-slate-500" />
                  <span>Python Implementation Preview</span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="p-4 bg-slate-900 text-slate-100 rounded-lg text-xs font-mono overflow-x-auto leading-relaxed max-h-56">
                <code>{project.sampleSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* Unboxed tech stack */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Tech:</span>
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="font-mono text-slate-600">{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span aria-hidden="true" className="text-slate-300">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-2xs"
          >
            <span>View on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
