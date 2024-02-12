"use client";

import { useState } from "react";
import Paragraph from "@atoms/Paragraph";
import { Stack } from "@mui/material";
import { MenuItem } from "@/app/types/Global";
import { isEmptyArray } from "@lib/util";
import s from "./menuitem.module.css";

interface IMenuItem {
  menuItemProps: MenuItem;
}

export function MenuItem({ menuItemProps }: IMenuItem) {
  const { title, link, openNewWindow, dropdown } = menuItemProps;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (title === "Login") return null;

  const menuDropdownClasses = `${s.dropdown} ${
    isDropdownOpen ? s.dropdown_active : ""
  }`;

  const handleMenuItemClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const renderDropDown = () => {
    if (isEmptyArray(dropdown)) return;

    return (
      <ul className={menuDropdownClasses}>
        {dropdown?.map((item) => (
          <li key={`top-menu-${item.id}-item`} className={s.menuitem_item}>
            <a href={item.link as string}>
              <Paragraph className={s.paragraph}>{item.title}</Paragraph>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const renderItem = () => {
    if (link) {
      return (
        <a href={link} target={`${openNewWindow ? "_blank" : "_top"}`}>
          <Paragraph className={s.title}>{title}</Paragraph>
        </a>
      );
    }

    return <Paragraph className={s.title}>{title}</Paragraph>;
  };

  return (
    <li className={s.menuitem}>
      <button onClick={handleMenuItemClick} className={s.menuitem_not_btn}>
        <Stack flexDirection={"column"} alignItems={"start"}>
          {renderItem()}
          {renderDropDown()}
        </Stack>
      </button>
    </li>
  );
}
