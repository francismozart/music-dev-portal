"use client";

import { ChangeEvent } from "react";
import { localesMap } from "../../../../i18n-config";
import { LocaleName } from "@/app/types/I18n";
import { Alternates } from "@/app/types/Page";
import { useRouter, usePathname } from "next/navigation";
import s from "./languageselector.module.css";

interface ILanguageSelector {
  options: Alternates[];
  locale: string;
}

export function LanguageSelector({ options, locale }: ILanguageSelector) {
  const router = useRouter();
  const pathname = usePathname();

  const removeLocaleFromPathname = () => {
    return pathname.replace(`/${locale}`, "");
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const newPathName = removeLocaleFromPathname();
    router.push(`/${value}${newPathName}`);
  };

  return (
    <select
      className={s.languageselector}
      onChange={handleChange}
      defaultValue={locale}
    >
      {options.map((option: Alternates) => (
        <option className={s.option} key={option.locale} value={option.locale}>
          {localesMap[option.locale as LocaleName]}
        </option>
      ))}
    </select>
  );
}
