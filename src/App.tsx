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

/** Hizmet ve proje CTA'larından gelen metni iletişim formundaki proje türüne eşler. */
const PROJECT_TYPE_MAP: Record<string, ProjectType> = {
  'Web Sitesi': 'Web Sitesi',
  'Özel Yazılım': 'Özel Yazılım',
  'Dijital Ürün': 'Dijital Ürün',
  'UI/UX': 'UI/UX',
  'Education Platform': 'Dijital Ürün',
  'Corporate / Internal Platform': 'Özel Yazılım',
  'Interactive Web Experience': 'Web Sitesi',
};

const resolveProjectType = (source: string): ProjectType => PROJECT_TYPE_MAP[source] ?? 'Dijital Ürün';

export default function App() {
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType>('Web Sitesi');

  const scrollToContact = (projectType?: string) => {
    if (projectType) {
      setSelectedProjectType(resolveProjectType(projectType));
    }
    document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#171D27] text-[#F8F7F2] relative selection:bg-[#EDB96F] selection:text-[#2B3446]">
      <a href="#main-content" className="skip-to-content">
        İçeriğe geç
      </a>

      <Navbar onOpenContact={() => scrollToContact()} />

      <main id="main-content">
        <Hero onOpenContact={() => scrollToContact()} />
        <Services onSelectService={(service) => scrollToContact(service)} />
        <Projects onStartProject={(category) => scrollToContact(category)} />
        <Process />
        <WhyCrescendo />
        <Technology />
        <FinalCTA onOpenContact={() => scrollToContact()} />
        <Contact initialProjectType={selectedProjectType} />
      </main>

      <Footer />
    </div>
  );
}
