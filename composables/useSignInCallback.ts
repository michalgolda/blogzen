import { push as toast } from "notivue";
import type { AuthTokenResponse, OAuthResponse } from "@supabase/supabase-js";

export const useSignInCallback =
  <T extends AuthTokenResponse | OAuthResponse>() =>
  async ({ error }: T) => {
    const isOk = !error;
    const isUnexpectedError = error ? error.status === 500 : false;

    if (isOk) {
      toast.success("Successfully logged in");
      await navigateTo("/");
    }

    isUnexpectedError &&
      toast.error("Something went wrong, please try again later");
    !isUnexpectedError && !isOk && toast.info(error.message);
  };
