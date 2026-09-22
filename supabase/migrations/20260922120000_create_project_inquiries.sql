-- Crescendo Software — project_inquiries (web sitesi proje başvuru formu)
--
-- Amaç: src/components/Contact.tsx içindeki "Proje Başvuru Formu" verisinin, RLS ile
-- korunan tek bir tabloya güvenli şekilde yazılması.
--
-- Çalıştırma: Supabase Dashboard > SQL Editor > New query > bu dosyanın tamamını yapıştır > Run.
-- Betik idempotent'tir: tekrar çalıştırılabilir.

create table if not exists public.project_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  full_name text not null,
  email text not null,
  company text,
  project_type text not null,
  budget_range text,
  project_details text not null,

  -- Ekip takibi için (form göndermez, varsayılan 'new' atanır)
  status text not null default 'new',

  constraint project_inquiries_full_name_len check (char_length(trim(full_name)) between 2 and 120),
  constraint project_inquiries_email_len check (char_length(trim(email)) between 5 and 254),
  constraint project_inquiries_email_format check (trim(email) ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'),
  constraint project_inquiries_company_len check (company is null or char_length(trim(company)) <= 160),
  constraint project_inquiries_type_len check (char_length(trim(project_type)) between 2 and 60),
  constraint project_inquiries_budget_len check (budget_range is null or char_length(trim(budget_range)) <= 60),
  constraint project_inquiries_details_len check (char_length(trim(project_details)) between 10 and 5000),
  constraint project_inquiries_status_valid check (status in ('new', 'contacted', 'won', 'archived'))
);

comment on table public.project_inquiries is 'Web sitesi proje başvuru formundan gelen talepler.';

-- Ekip listelemesi için indeksler
create index if not exists project_inquiries_created_at_idx on public.project_inquiries (created_at desc);
create index if not exists project_inquiries_status_idx on public.project_inquiries (status);

-- Row Level Security: politika olmadan hiçbir erişim yoktur (varsayılan kapalı).
alter table public.project_inquiries enable row level security;

-- Tablo seviyesi yetkileri daralt: anon/authenticated yalnızca INSERT edebilir.
revoke all on table public.project_inquiries from anon, authenticated;
grant insert on table public.project_inquiries to anon, authenticated;

-- Public form: yalnızca yeni kayıt ekleyebilir, hiçbir kaydı okuyamaz/güncelleyemez/silemez.
drop policy if exists "public can submit project inquiry" on public.project_inquiries;
create policy "public can submit project inquiry"
  on public.project_inquiries
  for insert
  to anon, authenticated
  with check (true);

-- NOT — Okuma politikası BİLİNÇLİ olarak açılmadı:
-- Sitede henüz giriş yapan bir ekip kullanıcısı yok. Yönetim paneli eklendiğinde, TÜM
-- authenticated kullanıcılara okuma izni vermek yerine ekip üyeliğini doğrulayan bir koşul yazın:
--
--   create policy "staff can read project inquiries"
--     on public.project_inquiries for select
--     to authenticated
--     using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff');
--
-- secret / service_role anahtarı RLS'i baypas ettiği için verileri Dashboard'da zaten görebilirsin.
--
-- SPAM / ABUSE: bu politika herkese açık INSERT'e izin verir. İleride Cloudflare Turnstile
-- doğrulaması veya rate-limit uygulayan bir Edge Function eklenmesi önerilir.
