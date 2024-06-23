import type { H3Event } from "h3";
import { createServerClient } from "@@/utils/supabase/server";

export const createSupabaseClient = (event: H3Event) => {
  return createServerClient({
    get: (name: string) => getCookie(event, name),
    set: (name: string, value: string) => setCookie(event, name, value),
    remove: (name: string) => deleteCookie(event, name),
  });
};
