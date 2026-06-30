import { createClient as createSupabaseClient, SupabaseClient } from "@supabase/supabase-js";
import { createServerSupabaseClient, createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { NextApiRequest, NextApiResponse } from "next";
import { useState, useEffect, useCallback } from "react";

// Supabase browser client initialization
export function createClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

// Supabase server client initialization with cookies
export async function createServerClient(): Promise<SupabaseClient> {
  // This will be called in server context with cookie handling
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

// Middleware route client
export function createRouteSupabaseClient() {
  // Initialize route handler client for middleware
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
}

// useUser hook
export function useUser() {
  const [user, setUser] = useState(null as any);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null as Error | null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const client = createClient();
        const { data: { user } } = await client.auth.getUser();
        setUser(user);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return { user, loading, error };
}

// useSession hook
export function useSession() {
  const [session, setSession] = useState(null as any);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = createClient();
    const { data: { subscription } } = client.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { session, loading };
}

// useAuthState hook
export function useAuthState() {
  const { user, loading: userLoading } = useUser();
  const { session, loading: sessionLoading } = useSession();

  return {
    user,
    session,
    loading: userLoading || sessionLoading,
    isAuthenticated: !!user,
  };
}

// signInWithOAuth helper
export async function signInWithOAuth(provider: "google" | "github" | "twitter" | "linkedin") {
  const client = createClient();
  const { data, error } = await client.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) throw error;
  return data;
}

// signInWithMagicLink helper
export async function signInWithMagicLink(email: string) {
  const client = createClient();
  const { data, error } = await client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) throw error;
  return data;
}

// signOut helper
export async function signOut() {
  const client = createClient();
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

// withAuth HOC/wrapper for protected API routes
export function withAuth<T extends {}>(
  handler: (req: NextApiRequest & T, res: NextApiResponse) => Promise<void> | void
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const client = await createServerClient();
      const { data: { session }, error } = await client.auth.getSession();

      if (error || !session) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      }

      await handler({ ...req, session } as NextApiRequest & T, res);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
}