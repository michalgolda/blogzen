import type { CookieOptions } from "#app";
import { createBrowserClient } from "@@/utils/supabase/browser";
import { createServerClient } from "@@/utils/supabase/server";

export const useServerSideSupabaseClient = () => {
  const nuxtApp = useNuxtApp();
  const $useCookie = async (name: string, options?: CookieOptions) =>
    await nuxtApp.runWithContext(() => useCookie(name));

  return createServerClient({
    get: async (name: string) => {
      const cookie = await $useCookie(name);
      return cookie.value;
    },
    set: async (name: string, value: string) => {
      const cookie = await $useCookie(name);
      cookie.value = value;
    },
    remove: async (name: string) => {
      const cookie = await $useCookie(name, {
        maxAge: -1,
      });
      cookie.value = "";
    },
  });
};

export const useClientSideSupabaseClient = () => createBrowserClient();
