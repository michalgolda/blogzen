import type { SignInBody } from "@@/validation/user.schema";
import type { AuthTokenResponsePassword } from "@supabase/supabase-js";

export const useSignInWithEmailAndPassword = () => {
  const callback = useSignInCallback<AuthTokenResponsePassword>();
  const supabaseClient = useClientSideSupabaseClient();

  return async (credentials: SignInBody) =>
    await supabaseClient.auth.signInWithPassword(credentials).then(callback);
};
