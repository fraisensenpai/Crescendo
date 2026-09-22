import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Crescendo Software — merkezi Supabase istemcisi.
 *
 * Tek bir client instance'ı burada oluşturulur; uygulamanın herhangi bir yerinde
 * ikinci bir client yaratmayın, bunun yerine `getSupabase()` fonksiyonunu kullanın.
 *
 * Güvenlik: burada yalnızca herkese açık (publishable) anahtar kullanılır. Veri erişimi
 * Supabase tarafındaki Row Level Security politikalarıyla sınırlandırılır.
 * secret / service_role anahtarı asla istemci koduna konmaz.
 */

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.trim();
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();

/** Supabase ortam değişkenleri tanımlı mı? (credentials yoksa istemci oluşturulmaz.) */
export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);

let client: SupabaseClient | null = null;

/**
 * Paylaşılan Supabase istemcisini döndürür (ilk çağrıda oluşturulur).
 * Yapılandırma eksikse açıklayıcı bir hata fırlatır.
 */
export function getSupabase(): SupabaseClient {
  if (!supabaseUrl || !supabasePublishableKey) {
    throw new Error(
      'Supabase yapılandırılmamış: VITE_SUPABASE_URL ve VITE_SUPABASE_PUBLISHABLE_KEY ortam değişkenlerini tanımlayın (.env.example dosyasına bakın).'
    );
  }

  if (!client) {
    client = createClient(supabaseUrl, supabasePublishableKey);
  }

  return client;
}
