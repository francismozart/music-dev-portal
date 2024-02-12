import { Metadata } from "@/app/types/Global";

export type Alternates = {
  locale: string;
  path: string;
};

export type Button = {
  id: number;
  url: string;
  text: string;
  appearance?: string;
  size?: string;
  color?: string;
  subText?: string | null;
  fluid?: boolean;
  newTab?: boolean;
  startIcon?: string | null;
  endIcon?: string | null;
};

type Background = {
  id: number;
  alternativeText: string | null;
  width: number;
  height: number;
  url: string;
};

export type Card = {
  id: number;
  title: string;
  description: string;
  icon: string;
  button?: Button;
};

export type ContentSection = {
  id: number;
  __component: string;
  theme: string;
  full?: boolean;
  preTitle?: string | null;
  title: string;
  description: string;
  buttons?: Button[];
  cards?: Card[];
  background: Background;
};

export type Page = {
  id: number;
  slug: string;
  path: string;
  locale: string;
  alternates: Alternates[];
  metadata: Metadata;
  contentSections: ContentSection[];
};
