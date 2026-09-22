import { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Services } from './components/Services.tsx';
import { Projects } from './components/Projects.tsx';
import { Process } from './components/Process.tsx';
import { WhyCrescendo } from './components/WhyCrescendo.tsx';
import { Technology } from './components/Technology.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectType } from './types.ts';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType>('Web Sitesi');

  const scrollToContact = (projectType?: string) => {
    if (projectType) {
      if (projectType.includes('Web')) setSelectedProjectType('Web Sitesi');
      else if (projectType.includes('Yazılım') || projectType.includes('Operasyon')) setSelectedProjectType('Özel Yazılım');
      else if (projectType.includes('SaaS') || projectType.includes('Ürün')) setSelectedProjectType('Dijital Ürün');
      else if (projectType.includes('UI') || projectType.includes('Tasarım')) setSelectedProjectType('UI/UX');
      else setSelectedProjectType('Web Sitesi');
    }
    const contactSection = document.getElementById('iletisim');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#171D27] text-[#F8F7F2] relative selection:bg-[#EDB96F] selection:text-[#2B3446]">
      {/* Navigation Header */}
      <Navbar onOpenContact={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main>
        {/* 01 — HERO */}
        <Hero onOpenContact={() => scrollToContact()} />

        {/* 02 — SERVICES */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 03 — SELECTED WORK */}
        <Projects onStartProject={(category) => scrollToContact(category)} />

        {/* 04 — PROCESS */}
        <Process />

        {/* 05 — WHY CRESCENDO */}
        <WhyCrescendo />

        {/* 06 — TECHNOLOGY */}
        <Technology />

        {/* 07 — FINAL CTA */}
        <FinalCTA onOpenContact={() => scrollToContact()} />

        {/* 08 — CONTACT */}
        <Contact initialProjectType={selectedProjectType} />
      </main>

      {/* 09 — FOOTER */}
      <Footer />
    </div>
  );
}
