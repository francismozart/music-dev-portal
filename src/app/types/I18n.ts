import { i18n, localesMap } from "../../i18n-config";

export type Locale = (typeof i18n)["locales"][number];

export type LocaleName = keyof typeof localesMap;
