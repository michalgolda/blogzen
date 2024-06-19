import { createBrowserClient } from "@@/utils/supabase/browser";
import { createServerClient } from "@@/utils/supabase/server";

export const useServerSideSupabaseClient = () => {
  const runtimeConfig = useRuntimeConfig();
  const cookie = useCookie(runtimeConfig.public.sessionCookieName);

  return createServerClient({
    get: () => {
      return cookie.value;
    },
    set: (value: string) => {
      cookie.value = value;
    },
    remove() {
      cookie.value = "";
    },
  });
};

export const useClientSideSupabaseClient = () => createBrowserClient();
