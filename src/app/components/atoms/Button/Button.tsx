import { Button as MUIButton } from "@mui/material";
import { Button } from "@/app/types/Page";
import s from "./button.module.css";
import Icon from "@atoms/Icon";

interface IButton {
  buttonProps: Button;
  className?: string;
}

export function Button({ buttonProps, className }: IButton) {
  const { color, url, text, endIcon } = buttonProps;

  type Colors = {
    [key: string]: string;
  };

  const colorMap: Colors = {
    ["blue"]: "#1040FF",
    ["white"]: "transparent",
  };

  const style = {
    backgroundColor: colorMap[color as string] || color,
  };

  const classNames = `${s.button} ${className}`;

  return (
    <MUIButton
      className={classNames}
      style={style}
      href={url}
      endIcon={endIcon ? <Icon src={endIcon} className={s.mleft} /> : null}
    >
      {text}
    </MUIButton>
  );
}
