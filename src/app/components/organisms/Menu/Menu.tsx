"use client";

import { useState, useLayoutEffect } from "react";
import { Grid, Container, Stack } from "@mui/material";
import Image from "next/image";
import Logo from "@atoms/Logo";
import Button from "@atoms/Button";
import MenuItem from "@molecules/MenuItem";
import { Global } from "@/app/types/Global";
import s from "./menu.module.css";

interface IMenu {
  global: Global;
}

export function Menu({ global }: IMenu) {
  const [isOpen, setIsOpen] = useState(false);
  const { siteName, menu } = global;

  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "unset";
    }
  }, [isOpen]);

  const handleMenuBarsClick = () => {
    setIsOpen(true);
  };

  const handleMenuCloseClick = () => {
    setIsOpen(false);
  };

  const renderMenuItems = () =>
    menu.map((menuItem) => (
      <MenuItem key={`top-menu-${menuItem.id}`} menuItemProps={menuItem} />
    ));

  const logoClasses = `${isOpen ? s.logo_menu_open : ""}`;
  const menuClasses = `${s.menuinner} ${isOpen ? s.menuinner_active : ""}`;
  const loginClasses = `hide-sm ${s.login_wrapper}`;

  const loginBtnProps = {
    id: 999,
    text: "Login",
    url: "/login",
    endIcon: "arrow-right",
  };

  return (
    <nav className={s.menu}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className={s.menuinner_wrapper}>
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Logo
                  alt={siteName}
                  width={103.9}
                  height={21.15}
                  className={logoClasses}
                  priority={true}
                />
                <Image
                  src={"/assets/images/icons/menu-bars.svg"}
                  width={18}
                  height={12}
                  alt=""
                  onClick={handleMenuBarsClick}
                  className="hide-sm"
                />
              </Stack>

              <div className={menuClasses}>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  sx={{ width: "100%" }}
                >
                  <Image
                    src={"/assets/images/icons/close.svg"}
                    width={13.17}
                    height={13.17}
                    alt=""
                    onClick={handleMenuCloseClick}
                    className="hide-sm"
                  />
                </Stack>
                <menu className={s.menuitem_wrapper}>{renderMenuItems()}</menu>
                <div className={loginClasses}>
                  <Button buttonProps={loginBtnProps} className={s.loginbtn} />
                </div>
              </div>

              <div className="hide-xs">
                <Button buttonProps={loginBtnProps} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}
