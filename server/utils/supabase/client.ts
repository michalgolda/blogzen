import type { H3Event } from "h3";
import { createServerClient } from "@@/utils/supabase/server";

export const createSupabaseClient = (event: H3Event) => {
  const runtimeConfig = useRuntimeConfig();
  const sessionCookieName = runtimeConfig.public.sessionCookieName;

  return createServerClient({
    get: () => getCookie(event, sessionCookieName),
    set: (_, value: string) => setCookie(event, sessionCookieName, value),
    remove: () => setCookie(event, sessionCookieName, ""),
  });
};
