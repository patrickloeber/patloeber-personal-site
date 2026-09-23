import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { Star, GitFork, ArrowUpRight, Code, Search } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'education', label: 'Study Plans & Curricula' },
    { id: 'reinforcement-learning', label: 'Reinforcement Learning' },
    { id: 'tools', label: 'Developer SDKs' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              Open Source
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
              Featured Projects & Repositories
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              Widely starred educational repositories, SDKs, and machine learning implementations crafted with clean code and rigorous principles.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search tech or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
            />
          </div>
        </div>

        {/* Interactive Filter Tabs (functional segmented controls per Section 1.A) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-300 transition-all hover:shadow-2xs group"
            >
              <div className="space-y-3">
                {/* Header with stars */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  {project.stars && (
                    <div className="flex items-center gap-1 text-xs font-semibold text-slate-600 tabular-nums shrink-0">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom Metadata & Actions */}
              <div className="pt-5 mt-4 border-t border-slate-100 space-y-4">
                {/* Zero-Pill Tech Stack */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span className="font-mono text-slate-500">{tech}</span>
                      {idx < Math.min(project.technologies.length, 3) - 1 && (
                        <span aria-hidden="true" className="text-slate-300">·</span>
                      )}
                    </React.Fragment>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-slate-400">+{project.technologies.length - 3}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-medium text-slate-700 hover:text-slate-950 inline-flex items-center gap-1 transition-colors"
                  >
                    <Code className="w-3.5 h-3.5 text-slate-400" />
                    <span>Inspect Details</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No projects found matching "{searchQuery}".
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
