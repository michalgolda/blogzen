import type { OAuthResponse } from "@supabase/supabase-js";

export const useSignInWithGoogle = () => {
  const callback = useSignInCallback<OAuthResponse>();
  const googleSignIn = useSignInWithOAuth("google");

  return async () => await googleSignIn().then(callback);
};
