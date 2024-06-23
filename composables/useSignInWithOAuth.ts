import type { Provider } from "@supabase/supabase-js";
import { getRedirectUrl } from "@@/utils/getRedirectUrl";

export const useSignInWithOAuth = (provider: Provider) => {
  const supabaseClient = useClientSideSupabaseClient();
  return () =>
    supabaseClient.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: getRedirectUrl(),
      },
    });
};
