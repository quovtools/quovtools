import { createClient as createSupabaseBrowserClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
import { postgres } from "postgres";

const url =
  process.env.SUPABASE_POOLER_URL ||
  "postgresql://postgres.dtxudbvhxdxzuozmlyrv:[YOUR-PASSWORD]@aws-0-eu-west-1.pooler.supabase.com:5432/postgres?pgbouncer=true";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dtxudbvhxdxzuozmlyrv.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export * from "./schema";

let browserClient: SupabaseClient | null = null;
let sqlClient: ReturnType<typeof postgres> | null = null;

export function createClient(): SupabaseClient {
  if (browserClient) {
    return browserClient;
  }

  browserClient = createSupabaseBrowserClient(supabaseUrl, supabaseAnonKey);
  return browserClient;
}

export function createSupabaseClient(
  supabaseClientUrl?: string,
  supabaseClientKey?: string
): SupabaseClient {
  const clientUrl = supabaseClientUrl || supabaseUrl;
  const clientKey = supabaseClientKey || supabaseAnonKey;

  return createSupabaseBrowserClient(clientUrl, clientKey);
}

export async function createServerSupabaseClient(): Promise<SupabaseClient> {
  const url = process.env.SUPABASE_URL || supabaseUrl;
  const key = supabaseServiceRoleKey || supabaseAnonKey;

  if (!url || !key) {
    throw new Error("Missing Supabase server-side configuration");
  }

  return createSupabaseBrowserClient(url, key);
}

export function createPostgresPoolerClient() {
  if (!sqlClient) {
    sqlClient = postgres(url, { prepare: true });
  }

  return sqlClient;
}
