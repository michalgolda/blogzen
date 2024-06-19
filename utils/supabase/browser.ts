import { createBrowserClient as $createBrowserClient } from "@supabase/ssr";

export const createBrowserClient = () => {
  const runtimeConfig = useRuntimeConfig();

  return $createBrowserClient(
    runtimeConfig.public.supabaseUrl,
    runtimeConfig.public.supabaseAnonKey,
    {
      cookieOptions: {
        name: runtimeConfig.public.sessionCookieName,
      },
    }
  );
};
