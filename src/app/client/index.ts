const SERVER_URL = "http://localhost:4000";
const DEFAULT_LOCALE = "en";

export async function getProps(lang: string) {
  const locale = lang ?? DEFAULT_LOCALE;
  const globalRes = await fetch(`${SERVER_URL}/global?locale=${locale}`);
  const global = await globalRes.json();

  const pageRes = await fetch(`${SERVER_URL}/pages?locale=${locale}`);
  const page = await pageRes.json();

  return {
    page,
    global,
  };
}
