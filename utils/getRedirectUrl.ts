export const getRedirectUrl = () => {
  let url: string | undefined =
    process?.env?.NUXT_PUBLIC_SITE_URL ?? process?.env?.NUXT_PUBLIC_VERCEL_URL;

  if (url) {
    url = url.startsWith("http") ? url : `https://${url}`;
    url = url.endsWith("/") ? url : `${url}/`;
  }

  return url;
};
