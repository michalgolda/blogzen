import type { Provider } from "@supabase/supabase-js";

export const useSignInWithOAuth = (provider: Provider) => {
  const supabaseClient = useClientSideSupabaseClient();
  return () =>
    supabaseClient.auth.signInWithOAuth({
      provider,
    });
};
