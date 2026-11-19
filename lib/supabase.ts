import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, anonKey);

export type Kita = {
  id: string;
  slug: string;
  name: string;
  accent_color: string | null;
  status: "active" | "placeholder";
};

export type Profile = {
  id: string;
  kita_id: string;
  role: "parent" | "staff" | "admin";
  full_name: string | null;
  avatar_url: string | null;
};

export type Conversation = {
  id: string;
  kita_id: string;
  type: "direct" | "group";
  title: string | null;
  child_id: string | null;
  created_at: string;
};

export type Message = {
  id: string;
  conversation_id: string;
  sender_id: string;
  content: string;
  created_at: string;
};

export async function getMyProfile(): Promise<Profile | null> {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return null;
  const { data } = await supabase
    .from("profiles")
    .select("id, kita_id, role, full_name, avatar_url")
    .eq("id", auth.user.id)
    .maybeSingle();
  return data ?? null;
}
