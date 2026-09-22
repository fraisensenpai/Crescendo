import React from 'react';
import { X, Check } from 'lucide-react';
import { PHILOSOPHY_DATA } from '../data/studioData.ts';

export const WhyCrescendo: React.FC = () => {
  const comparisonRows = [
    {
      criteria: 'Kod Tabanı & Mimari',
      traditional: 'Hazır WordPress/ThemeForest şablonları veya yapay zeka jenerik çıktıları',
      crescendo: 'Amaca özel sıfırdan yazılmış temiz, modüler ve belgelenmiş kaynak kod'
    },
    {
      criteria: 'İletişim & Proje Yönetimi',
      traditional: 'Teknik bilgisi olmayan müşteri temsilcileri ve araya giren uzun onay zincirleri',
      crescendo: 'Doğrudan kodu ve tasarımı geliştiren çekirdek mühendislik ekibiyle temas'
    },
    {
      criteria: 'Performans & Hız',
      traditional: 'Yüzlerce gereksiz eklentiyle şişmiş, 3–6 saniyede açılan ağır yapılar',
      crescendo: 'Lighthouse 95+ ve Core Web Vitals yeşil bölge hedefli sub-second açılış'
    },
    {
      criteria: 'Veri & Kod Mülkiyeti',
      traditional: 'Aylık lisanslara veya kapalı platformlara (Wix, Shopify kilitleri) bağımlılık',
      crescendo: 'Tüm kaynak kod, veritabanı ve dağıtım altyapısı %100 şirketinize aittir'
    },
    {
      criteria: 'Genişletilebilirlik',
      traditional: 'Yeni bir entegrasyon veya özellik istendiğinde sistemin tıkanması',
      crescendo: 'TypeScript ve modern ilişkisel mimari sayesinde geleceğe hazır büyüme'
    }
  ];

  return (
    <section
      id="neden-crescendo"
      className="relative py-24 sm:py-32 border-b border-[#3D4A63]/50 bg-[#141A23] overflow-hidden"
    >
      {/* Background: Geometric grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#3D4A63]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EDB96F] mb-3">
              <span className="w-2 h-0.5 bg-[#EDB96F]"></span>
              <span>05 // STÜDYO DİSİPLİNİ</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F2] tracking-tight">
              Neden Crescendo ile <br className="hidden sm:inline" />
              <span className="text-[#EDB96F]">çalışmalısınız?</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#9BA7B7] max-w-sm leading-relaxed">
            Biz bir pazarlama ajansı değiliz. İşinizi dijitalde kusursuz temsil edecek yazılımları sıfırdan inşa eden bir yazılım stüdyosuyuz.
          </div>
        </div>

        {/* 4 Pillars of Studio Philosophy - Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {PHILOSOPHY_DATA.map((item) => (
            <div
              key={item.code}
              className="bg-[#1A202C] border border-[#3D4A63] hover:border-[#EDB96F] transition-all p-7 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-xs text-[#EDB96F] tracking-widest block mb-2 font-semibold">
                  {item.code}
                </span>
                <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#F8F7F2] mb-3 group-hover:text-[#EDB96F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9BA7B7] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#3D4A63]/60 flex items-start gap-2 text-xs font-mono text-[#F8F7F2] bg-[#222B3A] p-3">
                <span className="text-[#EDB96F] font-bold">PRATİKTE:</span>
                <span className="text-[#9BA7B7]">{item.practice}</span>
              </div>
            </div>
          ))}
        </div>

        {/* STUDIO COMPARISON MATRIX: Editorial Table */}
        <div className="bg-[#1A202C] border-2 border-[#3D4A63] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#3D4A63]">
            <div>
              <span className="font-mono text-xs text-[#EDB96F] tracking-wider block mb-1">
                ŞEFFAF KARŞILAŞTIRMA
              </span>
              <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#F8F7F2]">
                Geleneksel Ajanslar vs. Crescendo Yaklaşımı
              </h3>
            </div>
            <span className="font-mono text-xs text-[#9BA7B7] mt-2 sm:mt-0">
              Gerçekçi & Mühendislik Odaklı
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-[#3D4A63] text-[#9BA7B7]">
                  <th className="py-3 px-4 w-1/4 font-semibold uppercase">Kriter</th>
                  <th className="py-3 px-4 w-3/8 font-semibold uppercase text-[#9BA7B7]">
                    Klasik Ajanslar / Şabloncular
                  </th>
                  <th className="py-3 px-4 w-3/8 font-semibold uppercase text-[#EDB96F] bg-[#222B3A]/60">
                    Crescendo Software Studio
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3D4A63]/50">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#222B3A]/30 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#F8F7F2] align-top">
                      {row.criteria}
                    </td>
                    <td className="py-4 px-4 text-[#9BA7B7] align-top">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                        <span className="font-sans text-xs">{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#F8F7F2] align-top bg-[#222B3A]/30">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#EDB96F] shrink-0 mt-0.5" />
                        <span className="font-sans text-xs font-medium text-[#F8F7F2]">
                          {row.crescendo}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
