import type { Provider } from "@supabase/supabase-js";

export const useSignInWithOAuth = (provider: Provider) => {
  const runtimeConfig = useRuntimeConfig();
  const supabaseClient = useClientSideSupabaseClient();

  return () =>
    supabaseClient.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: runtimeConfig.public.redirectTo,
      },
    });
};
