import {
  createServerClient as $createServerClient,
  type CookieMethods,
} from "@supabase/ssr";

export const createServerClient = (cookies: CookieMethods) => {
  const runtimeConfig = useRuntimeConfig();

  return $createServerClient(
    runtimeConfig.public.supabaseUrl,
    runtimeConfig.public.supabaseAnonKey,
    {
      cookies,
    }
  );
};
