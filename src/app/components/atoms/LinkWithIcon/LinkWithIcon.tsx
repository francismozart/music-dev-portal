import { Stack } from "@mui/material";
import Icon from "@atoms/Icon";
import s from "./linkwithicon.module.css";

interface ILinkWithIcon {
  children: string | JSX.Element | JSX.Element[];
  url: string;
  icon: string;
}

export function LinkWithIcon({ children, url, icon }: ILinkWithIcon) {
  return (
    <div>
      <a className={s.linkwithicon} href={url}>
        <Stack flexDirection={"row"} alignItems={"center"} gap={"20px"}>
          <div>{children}</div>
          <Icon src={icon} />
        </Stack>
      </a>
    </div>
  );
}
