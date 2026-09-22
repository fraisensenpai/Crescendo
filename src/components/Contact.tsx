import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, MessageSquare, Terminal, AlertCircle } from 'lucide-react';
import { STUDIO_CONFIG, PROJECT_TYPES, BUDGET_RANGES } from '../data/studioData.ts';
import { ContactFormData, ProjectType, BudgetRange } from '../types.ts';

interface ContactProps {
  initialProjectType?: ProjectType;
}

export const Contact: React.FC<ContactProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: initialProjectType || 'Web Sitesi',
    budgetRange: '50.000 TL – 100.000 TL',
    projectDetails: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_CONFIG.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error('Clipboard copy failed', err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectDetails.trim()) {
      setErrorMessage('Lütfen Ad Soyad, E-posta ve Proje Açıklaması alanlarını doldurunuz.');
      return;
    }

    // Prepare mailto link with structured Turkish email subject & body
    const subject = encodeURIComponent(`[Yeni Proje Başvurusu] ${formData.projectType} — ${formData.fullName}`);
    const body = encodeURIComponent(
`Merhaba Crescendo Software Ekibi,

Yeni bir proje için sizinle çalışmak istiyorum. Detaylar aşağıdadır:

• Ad Soyad: ${formData.fullName}
• E-posta: ${formData.email}
• Şirket / Marka: ${formData.company || 'Belirtilmedi'}
• Proje Türü: ${formData.projectType}
• Bütçe Aralığı: ${formData.budgetRange}

PROJE DETAYLARI & HEDEFLER:
${formData.projectDetails}

--
Bu mesaj crescendosoftware.com üzerinden oluşturulmuştur.`
    );

    const mailtoUrl = `mailto:${STUDIO_CONFIG.email}?subject=${subject}&body=${body}`;

    // Trigger user's email client
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section
      id="iletisim"
      className="relative py-24 sm:py-32 border-b border-[#3D4A63]/50 bg-[#141A23] overflow-hidden"
    >
      {/* Background System: Dot Matrix */}
      <div className="absolute inset-0 bg-dot-matrix opacity-35 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#3D4A63]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EDB96F] mb-3">
              <span className="w-2 h-0.5 bg-[#EDB96F]"></span>
              <span>08 // İLETİŞİM & PROJE BAŞVURUSU</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F2] tracking-tight">
              Projenizi konuşmaya <br className="hidden sm:inline" />
              <span className="text-[#EDB96F]">bugün başlayalım.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#9BA7B7] max-w-sm leading-relaxed">
            Formu doldurarak projenizin ihtiyaçlarını iletebilir veya doğrudan e-posta adresimize yazabilirsiniz.
          </div>
        </div>

        {/* 2-Column Layout: Direct Contact Info Left, Clear Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Studio Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-[#1A202C] border-2 border-[#3D4A63] p-6 sm:p-7 shadow-xl">
              <span className="font-mono text-xs text-[#EDB96F] uppercase tracking-wider block mb-2">
                DOĞRUDAN İLETİŞİM
              </span>
              <h3 className="font-['Syne'] text-xl font-bold text-[#F8F7F2] mb-3">
                Resmi Stüdyo E-posta Adresimiz
              </h3>
              <p className="text-xs text-[#9BA7B7] mb-6 leading-relaxed">
                Tüm proje başvuruları ve teknik sorular doğrudan çekirdek mühendislik ekibimiz tarafından incelenir.
              </p>

              {/* Copyable Email Box */}
              <div className="p-3 bg-[#222B3A] border border-[#3D4A63] flex items-center justify-between gap-2 font-mono text-xs mb-4">
                <span className="text-[#F8F7F2] font-semibold truncate select-all">
                  {STUDIO_CONFIG.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-[#2B3446] hover:bg-[#EDB96F] hover:text-[#2B3446] text-[#EDB96F] border border-[#3D4A63] flex items-center gap-1.5 shrink-0 transition-colors"
                  title="E-postayı Kopyala"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#EDB96F]" />
                      <span className="text-[11px] font-bold">Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Kopyala</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2 text-xs font-mono text-[#9BA7B7]">
                <div className="flex items-center justify-between py-1 border-b border-[#3D4A63]/40">
                  <span>Yanıt Süresi (SLA):</span>
                  <span className="text-[#EDB96F] font-semibold">{STUDIO_CONFIG.responseSLA}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#3D4A63]/40">
                  <span>Konum & Saat:</span>
                  <span className="text-[#F8F7F2]">{STUDIO_CONFIG.location} ({STUDIO_CONFIG.timezone})</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span>Durum:</span>
                  <span className="text-[#EDB96F] font-semibold">{STUDIO_CONFIG.status}</span>
                </div>
              </div>
            </div>

            {/* Studio Commitment Box */}
            <div className="bg-[#171D27] border border-[#3D4A63] p-5 font-mono text-xs space-y-2 text-[#9BA7B7]">
              <div className="text-[11px] text-[#EDB96F] font-bold uppercase flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                BAŞVURU SONRASI NE OLUR?
              </div>
              <p className="text-xs leading-relaxed font-sans text-[#9BA7B7]">
                Talebinizi aldıktan sonra projenin teknik ihtiyaçlarını inceliyor ve 24 saat içinde net bir kapsam, yaklaşık bütçe ve takvim içeren bir yol haritasıyla geri dönüyoruz.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 bg-[#1A202C] border-2 border-[#3D4A63] p-6 sm:p-9 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#3D4A63]">
              <span className="font-mono text-xs text-[#EDB96F] tracking-wider font-semibold">
                PROJE BAŞVURU FORMU // SPEC_INPUT
              </span>
              <span className="font-mono text-[10px] text-[#9BA7B7]">
                DOĞRUDAN ENTEGRE
              </span>
            </div>

            {errorMessage && (
              <div className="mb-6 p-3 bg-red-950/40 border border-red-800 text-red-300 font-mono text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {formSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 bg-[#EDB96F] text-[#2B3446] mx-auto flex items-center justify-center font-bold text-xl">
                  ✓
                </div>
                <h3 className="font-['Syne'] text-2xl font-bold text-[#F8F7F2]">
                  E-posta İstemciniz Başlatıldı
                </h3>
                <p className="text-sm text-[#9BA7B7] max-w-md mx-auto leading-relaxed">
                  Proje bilgileriniz yapılandırılmış bir taslak olarak hazırlandı. Eğer e-posta programınız otomatik açılmadıysa, doğrudan <span className="text-[#EDB96F] font-mono">{STUDIO_CONFIG.email}</span> adresine yazabilirsiniz.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2 bg-[#222B3A] border border-[#3D4A63] text-xs font-mono text-[#F8F7F2] hover:border-[#EDB96F]"
                  >
                    Yeni Başvuru Doldur
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 2-Column Personal Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-fullName"
                      className="block font-mono text-xs text-[#F8F7F2] uppercase mb-2 font-semibold"
                    >
                      Ad Soyad <span className="text-[#EDB96F]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-fullName"
                      required
                      placeholder="Örn. Mehmet Yılmaz"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#171D27] border border-[#3D4A63] focus:border-[#EDB96F] text-sm text-[#F8F7F2] outline-none transition-colors font-sans placeholder:text-[#5A687D]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs text-[#F8F7F2] uppercase mb-2 font-semibold"
                    >
                      E-posta Adresi <span className="text-[#EDB96F]">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="adiniz@sirketiniz.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#171D27] border border-[#3D4A63] focus:border-[#EDB96F] text-sm text-[#F8F7F2] outline-none transition-colors font-sans placeholder:text-[#5A687D]"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="contact-company"
                    className="block font-mono text-xs text-[#F8F7F2] uppercase mb-2 font-semibold"
                  >
                    Şirket / Marka Adı <span className="text-[#9BA7B7] text-[11px]">(İsteğe Bağlı)</span>
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    placeholder="Örn. Nova Lojistik A.Ş."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#171D27] border border-[#3D4A63] focus:border-[#EDB96F] text-sm text-[#F8F7F2] outline-none transition-colors font-sans placeholder:text-[#5A687D]"
                  />
                </div>

                {/* Project Type Selector */}
                <div>
                  <label className="block font-mono text-xs text-[#F8F7F2] uppercase mb-2 font-semibold">
                    Proje Türü <span className="text-[#EDB96F]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`p-2.5 text-left font-mono text-xs border transition-all ${
                            isSelected
                              ? 'bg-[#2B3446] border-[#EDB96F] text-[#EDB96F] font-bold'
                              : 'bg-[#171D27] border-[#3D4A63] text-[#9BA7B7] hover:text-[#F8F7F2]'
                          }`}
                        >
                          {isSelected ? '✓ ' : ''}{type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range Selector */}
                <div>
                  <label className="block font-mono text-xs text-[#F8F7F2] uppercase mb-2 font-semibold">
                    Tahmini Bütçe Aralığı
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BUDGET_RANGES.map((range) => {
                      const isSelected = formData.budgetRange === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: range })}
                          className={`p-2 text-left font-mono text-xs border transition-all ${
                            isSelected
                              ? 'bg-[#2B3446] border-[#EDB96F] text-[#F8F7F2] font-semibold'
                              : 'bg-[#171D27] border-[#3D4A63] text-[#9BA7B7] hover:text-[#F8F7F2]'
                          }`}
                        >
                          <span className="text-[#EDB96F] mr-1.5">•</span>
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Details Textarea */}
                <div>
                  <label
                    htmlFor="contact-projectDetails"
                    className="block font-mono text-xs text-[#F8F7F2] uppercase mb-2 font-semibold"
                  >
                    Projeniz & Hedefleriniz <span className="text-[#EDB96F]">*</span>
                  </label>
                  <textarea
                    id="contact-projectDetails"
                    required
                    rows={4}
                    placeholder="İhtiyacınız olan web sitesi veya yazılımın temel özelliklerini, hedef kitlenizi ve varsa teslim takvimi hedefinizi kısaca açıklayınız..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#171D27] border border-[#3D4A63] focus:border-[#EDB96F] text-sm text-[#F8F7F2] outline-none transition-colors font-sans placeholder:text-[#5A687D]"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:translate-y-0.5"
                  >
                    <span>Projeyi İletin & İnceleme Başlatın</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="font-mono text-[10px] text-[#9BA7B7] text-center mt-2.5">
                    * Bilgileriniz gizlilikle korunur. Spam yok, doğrudan stüdyo iletişimi.
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
