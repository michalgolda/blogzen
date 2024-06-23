import type { OAuthResponse } from "@supabase/supabase-js";

export const useSignInWithGithub = () => {
  const callback = useSignInCallback<OAuthResponse>();
  const githubSignIn = useSignInWithOAuth("github");

  return async () => await githubSignIn().then(callback);
};
