import { Locale } from "@/app/types/I18n";

export type MenuItem = {
  id: number;
  title: string;
  link: string | null;
  openNewWindow: boolean;
  dropdown?: MenuItem[];
};

export type Social = {
  facebook: string;
  instagram: string;
  twitter: string;
  youTube: string;
  tikTok: string;
  linkedIn: string;
};

export type Global = {
  id: number;
  locale: Locale;
  siteName: string;
  helpText: string;
  copyright: string;
  metadata: Metadata;
  menu: MenuItem[];
  social: Social;
  footerMenu: MenuItem[];
};

export type Metadata = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  robots: string;
  shareImage: string | null;
};
