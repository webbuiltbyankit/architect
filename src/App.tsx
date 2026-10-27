import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ScrollToTop } from '@/components/navigation/ScrollToTop';

import { HomePage } from '@/pages/HomePage';
import { StudioPage } from '@/pages/StudioPage';
import { ServicesIndexPage } from '@/pages/ServicesIndexPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { ProjectsIndexPage } from '@/pages/ProjectsIndexPage';
import { ProjectDetailPage } from '@/pages/ProjectDetailPage';
import { SectorsPage } from '@/pages/SectorsPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { StyleGuidePage } from '@/pages/StyleGuidePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-warm-ivory text-ink selection:bg-muted-brass/20 selection:text-ink">
        <Navbar />
        <main id="main-content" className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/services" element={<ServicesIndexPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsIndexPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/sectors" element={<SectorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/style-guide" element={<StyleGuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
