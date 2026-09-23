/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CodeSnippetShowcase } from './components/CodeSnippetShowcase';
import { ContentSection } from './components/ContentSection';
import { EducationSection } from './components/EducationSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { SnippetModal } from './components/SnippetModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSnippetModalOpen, setIsSnippetModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-slate-900 selection:bg-slate-200">
      {/* 3-Zone Top Bar Contract Compliant Navigation */}
      <Header onContactClick={() => setIsContactModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Minimal Hero Section */}
        <Hero onOpenSnippet={() => setIsSnippetModalOpen(true)} />

        {/* Quantitative Proof Adjacency */}
        <StatsBar />

        {/* Career Journey & Experience */}
        <Experience />

        {/* Open Source Projects & Repositories */}
        <Projects />

        {/* Clean Python & ML Code Showcase */}
        <CodeSnippetShowcase />

        {/* Courses, Talks & Tutorials */}
        <ContentSection />

        {/* Academic Foundations */}
        <EducationSection />

        {/* Common Inquiries */}
        <FaqSection />

        {/* Contact & Inquiry */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <SnippetModal
        isOpen={isSnippetModalOpen}
        onClose={() => setIsSnippetModalOpen(false)}
      />
    </div>
  );
}
