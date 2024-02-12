import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { getProps } from "@client/index";
import { i18n } from "../../i18n-config";
import { Locale } from "@/app/types/I18n";
import "./global.css";
import "./helpers.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <body>{children}</body>
      </AppRouterCacheProvider>
    </html>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}) {
  const { page } = await getProps(params.lang);
  const { metaTitle, metaDescription, robots } = page.metadata;

  return {
    title: metaTitle,
    description: metaDescription,
    robots: robots,
  };
}
