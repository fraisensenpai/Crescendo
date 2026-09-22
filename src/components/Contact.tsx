import React, { useEffect, useState } from 'react';
import { Copy, Check, Send, AlertCircle, Loader2 } from 'lucide-react';
import { STUDIO_CONFIG, PROJECT_TYPES, BUDGET_RANGES } from '../data/studioData.ts';
import { ContactFormData, ProjectType } from '../types.ts';
import { SectionHeader } from './SectionHeader.tsx';

interface ContactProps {
  initialProjectType?: ProjectType;
}

const FIELD_CLASS =
  'w-full px-3.5 py-2.5 bg-[#171D27] border border-[#3D4A63] focus:border-[#EDB96F] text-sm text-[#F8F7F2] outline-none transition-colors placeholder:text-[#8A97A8]';

export const Contact: React.FC<ContactProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: initialProjectType || 'Web Sitesi',
    budgetRange: '1.000 ₺ – 5.000 ₺',
    projectDetails: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionChannel, setSubmissionChannel] = useState<'supabase' | 'mailto' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Hizmet/proje CTA'larından gelen proje türünü forma yansıt
  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_CONFIG.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error('E-posta kopyalanamadı', err);
    }
  };

  // Supabase yapılandırılmadıysa site çalışmaya devam etsin: başvuru doğrudan e-posta istemcisine aktarılır.
  const openMailtoDraft = () => {
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

    window.location.href = `mailto:${STUDIO_CONFIG.email}?subject=${subject}&body=${body}`;
    setSubmissionChannel('mailto');
    setFormSubmitted(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMessage('');

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const projectDetails = formData.projectDetails.trim();

    if (!fullName || !email || !projectDetails) {
      setErrorMessage('Lütfen ad soyad, e-posta ve proje açıklaması alanlarını doldurun.');
      return;
    }

    if (fullName.length < 2) {
      setErrorMessage('Lütfen ad ve soyadınızı eksiksiz girin.');
      return;
    }

    if (projectDetails.length < 10) {
      setErrorMessage('Lütfen projenizi ve hedeflerinizi en az 10 karakterle özetleyin.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Supabase istemcisi yalnızca form gerçekten gönderildiğinde yüklenir;
      // böylece ilk sayfa açılış paketi şişmez.
      const { getSupabase, isSupabaseConfigured } = await import('../lib/supabase.ts');

      // Yapılandırma yoksa (ör. ortam değişkenleri tanımlanmamışsa) e-posta istemcisine düş.
      if (!isSupabaseConfigured) {
        openMailtoDraft();
        return;
      }

      const { error } = await getSupabase()
        .from('project_inquiries')
        .insert({
          full_name: fullName,
          email,
          company: formData.company.trim() || null,
          project_type: formData.projectType,
          budget_range: formData.budgetRange,
          project_details: projectDetails,
        });

      if (error) throw error;

      setSubmissionChannel('supabase');
      setFormSubmitted(true);
    } catch (err) {
      console.error('Proje başvurusu kaydedilemedi', err);
      setErrorMessage(
        `Başvurunuz şu anda kaydedilemedi. Lütfen tekrar deneyin veya doğrudan ${STUDIO_CONFIG.email} adresine yazın.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="iletisim" className="relative py-24 sm:py-32 bg-[#141A23]">
      <div className="absolute inset-0 bg-dot-matrix opacity-30 pointer-events-none" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="08 — İletişim"
          title={
            <>
              Projenizi <span className="text-[#EDB96F]">konuşalım.</span>
            </>
          }
          note="Formu doldurun ya da doğrudan e-posta gönderin. İkisinde de mesajı yazan ekibiz."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* İletişim bilgileri */}
          <div className="lg:col-span-5 min-w-0 space-y-6">

            <div className="bg-[#1A202C] border border-[#3D4A63] p-6 sm:p-7">
              <h3 className="font-['Syne'] text-xl font-bold text-[#F8F7F2] mb-2">
                Bize doğrudan yazın
              </h3>
              <p className="text-sm text-[#9BA7B7] mb-6 leading-relaxed">
                Tüm başvurular ve teknik sorular, projeyi geliştirecek ekip tarafından okunur.
              </p>

              <div className="p-3 bg-[#222B3A] border border-[#3D4A63] flex items-center justify-between gap-2 mb-6">
                <span className="text-sm text-[#F8F7F2] font-medium truncate select-all">
                  {STUDIO_CONFIG.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-[#2B3446] hover:bg-[#EDB96F] hover:text-[#2B3446] text-[#EDB96F] border border-[#3D4A63] flex items-center gap-1.5 shrink-0 transition-colors text-xs"
                  aria-label="E-posta adresini kopyala"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Kopyala</span>
                    </>
                  )}
                </button>
              </div>

              <dl className="space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#9BA7B7]">Yanıt süresi</dt>
                  <dd className="text-[#EDB96F] font-medium text-right">{STUDIO_CONFIG.responseSLA}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#9BA7B7]">Konum</dt>
                  <dd className="text-[#F8F7F2] text-right">
                    {STUDIO_CONFIG.location} ({STUDIO_CONFIG.timezone})
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#9BA7B7]">Durum</dt>
                  <dd className="text-[#EDB96F] font-medium text-right">{STUDIO_CONFIG.status}</dd>
                </div>
              </dl>
            </div>

            <div className="border-l-2 border-[#EDB96F]/60 pl-5">
              <h3 className="text-sm font-semibold text-[#F8F7F2] mb-2">Başvurudan sonra ne olur?</h3>
              <p className="text-sm text-[#9BA7B7] leading-relaxed">
                Talebinizi inceleyip kapsam, yaklaşık bütçe ve takvim içeren kısa bir yol haritasıyla
                geri dönüyoruz. Uygun olursa görüşüp detayları netleştiriyoruz.
              </p>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7 min-w-0 bg-[#1A202C] border border-[#3D4A63] p-6 sm:p-9">
            <h3 className="font-['Syne'] text-lg sm:text-xl font-bold text-[#F8F7F2] mb-6">
              Proje başvuru formu
            </h3>

            {errorMessage && (
              <div
                role="alert"
                aria-live="assertive"
                className="mb-6 p-3.5 bg-[#2A1519] border border-red-800/70 text-red-200 text-sm flex items-start gap-2.5"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{errorMessage}</span>
              </div>
            )}

            {formSubmitted ? (
              <div className="py-10 text-center" aria-live="polite">
                <div className="w-12 h-12 bg-[#EDB96F] text-[#2B3446] mx-auto flex items-center justify-center font-bold text-xl mb-5">
                  ✓
                </div>
                <h4 className="font-['Syne'] text-2xl font-bold text-[#F8F7F2] mb-3">
                  {submissionChannel === 'supabase' ? 'Başvurunuz bize ulaştı' : 'E-posta taslağınız hazır'}
                </h4>
                {submissionChannel === 'supabase' ? (
                  <p className="text-sm text-[#9BA7B7] max-w-md mx-auto leading-relaxed">
                    Proje detaylarınız kaydedildi. Ekibimiz inceleyip size dönüş yapacak. Yanıt süresi
                    taahhüdümüz: <span className="text-[#EDB96F]">{STUDIO_CONFIG.responseSLA}</span>.
                  </p>
                ) : (
                  <p className="text-sm text-[#9BA7B7] max-w-md mx-auto leading-relaxed">
                    Bilgileriniz hazır bir e-posta taslağına dönüştürüldü. E-posta programınız açılmadıysa
                    doğrudan <span className="text-[#EDB96F]">{STUDIO_CONFIG.email}</span> adresine yazabilirsiniz.
                  </p>
                )}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setSubmissionChannel(null);
                    }}
                    className="px-5 py-2.5 bg-[#222B3A] border border-[#3D4A63] text-sm text-[#F8F7F2] hover:border-[#EDB96F] transition-colors"
                  >
                    Yeni başvuru doldur
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="min-w-0">
                    <label
                      htmlFor="contact-fullName"
                      className="block text-xs font-semibold text-[#F8F7F2] mb-2"
                    >
                      Ad soyad <span className="text-[#EDB96F]">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-fullName"
                      name="fullName"
                      required
                      maxLength={120}
                      autoComplete="name"
                      placeholder="Örn. Mehmet Yılmaz"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={FIELD_CLASS}
                    />
                  </div>

                  <div className="min-w-0">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#F8F7F2] mb-2"
                    >
                      E-posta <span className="text-[#EDB96F]">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      placeholder="adiniz@sirketiniz.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={FIELD_CLASS}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-company"
                    className="block text-xs font-semibold text-[#F8F7F2] mb-2"
                  >
                    Şirket / marka <span className="text-[#9BA7B7] font-normal">(isteğe bağlı)</span>
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    maxLength={160}
                    autoComplete="organization"
                    placeholder="Örn. Nova Lojistik A.Ş."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={FIELD_CLASS}
                  />
                </div>

                <div role="group" aria-labelledby="contact-projectType-label">
                  <span id="contact-projectType-label" className="block text-xs font-semibold text-[#F8F7F2] mb-2">
                    Proje türü <span className="text-[#EDB96F]">*</span>
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`p-2.5 text-left text-xs border transition-colors ${
                            isSelected
                              ? 'bg-[#2B3446] border-[#EDB96F] text-[#EDB96F] font-semibold'
                              : 'bg-[#171D27] border-[#3D4A63] text-[#9BA7B7] hover:text-[#F8F7F2]'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div role="group" aria-labelledby="contact-budget-label">
                  <span id="contact-budget-label" className="block text-xs font-semibold text-[#F8F7F2] mb-2">
                    Tahmini bütçe <span className="text-[#9BA7B7] font-normal">(bilmiyorsanız sorun değil)</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {BUDGET_RANGES.map((range) => {
                      const isSelected = formData.budgetRange === range;
                      return (
                        <button
                          key={range}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setFormData({ ...formData, budgetRange: range })}
                          className={`px-3 py-2.5 text-left text-xs border transition-colors ${
                            isSelected
                              ? 'bg-[#2B3446] border-[#EDB96F] text-[#F8F7F2] font-semibold'
                              : 'bg-[#171D27] border-[#3D4A63] text-[#9BA7B7] hover:text-[#F8F7F2]'
                          }`}
                        >
                          {range}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-projectDetails"
                    className="block text-xs font-semibold text-[#F8F7F2] mb-2"
                  >
                    Projeniz ve hedefleriniz <span className="text-[#EDB96F]">*</span>
                  </label>
                  <textarea
                    id="contact-projectDetails"
                    name="projectDetails"
                    required
                    rows={5}
                    maxLength={5000}
                    placeholder="Ne yapmak istiyorsunuz, kime hitap edecek, elinizde hazır içerik/tasarım var mı ve hedeflediğiniz bir tarih var mı?"
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className={FIELD_CLASS}
                  ></textarea>
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] text-sm font-bold tracking-wide transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Gönderiliyor…' : 'Başvuruyu Gönder'}</span>
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                    ) : (
                      <Send className="w-4 h-4" aria-hidden="true" />
                    )}
                  </button>
                  <p className="text-xs text-[#9BA7B7] text-center mt-3">
                    Bilgileriniz yalnızca projenizi değerlendirmek için kullanılır; üçüncü taraflarla paylaşılmaz.
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
