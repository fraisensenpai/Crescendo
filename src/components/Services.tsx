import React from 'react';
import { SERVICES_DATA } from '../data/studioData.ts';
import { SectionHeader } from './SectionHeader.tsx';
import { ServiceBlock } from './ServiceBlock.tsx';

/** Hizmet başına CTA metni ve iletişim formuna taşınan proje türü. */
const SERVICE_META = [
  { cta: 'Bu Hizmet İçin Teklif Alın', projectType: 'Web Sitesi' },
  { cta: 'İş Sürecim İçin Görüşelim', projectType: 'Özel Yazılım' },
  { cta: 'Ürünümü Planlayalım', projectType: 'Dijital Ürün' },
  { cta: 'Tasarım İçin Görüşelim', projectType: 'UI/UX' },
];

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => (
  <section id="hizmetler" className="relative py-24 sm:py-32 bg-[#171D27]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="02 — Hizmetler"
        title={
          <>
            İhtiyacınıza göre çalışan <span className="text-[#EDB96F]">çözümler.</span>
          </>
        }
        note="Her projeye aynı paketi satmıyoruz. Ne yapılacağı, ne kadar süreceği ve ne teslim edileceği işin başında netleşir."
      />

      <div className="space-y-20 sm:space-y-24">
        {SERVICES_DATA.map((service, index) => {
          const meta = SERVICE_META[index] ?? SERVICE_META[0];

          return (
            <ServiceBlock
              key={service.id}
              service={service}
              ctaLabel={meta.cta}
              reversed={index % 2 === 1}
              onSelect={() => onSelectService(meta.projectType)}
            />
          );
        })}
      </div>
    </div>
  </section>
);
