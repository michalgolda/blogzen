export const getRedirectUrl = () => {
  let url: string | undefined = process?.env?.VERCEL_PROJECT_PRODUCTION_URL;

  if (url) {
    url = url.startsWith("http") ? url : `https://${url}`;
    url = url.endsWith("/") ? url : `${url}/`;
  }

  return url;
};
