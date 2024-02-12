import Title from "@atoms/Title";
import Paragraph from "@atoms/Paragraph";
import { Stack } from "@mui/material";
import { MenuItem } from "@/app/types/Global";
import { isEmptyArray } from "@lib/util";
import s from "./footermenucolumn.module.css";

interface IFooterMenuColumn {
  title: string;
  items?: MenuItem[];
}

export function FooterMenuColumn({ title, items }: IFooterMenuColumn) {
  const renderFooterMenuItems = () => {
    if (isEmptyArray(items)) return;

    return items?.map((item) => (
      <a key={`footer-menu-${item.id}-item`} href={item.link as string}>
        <Paragraph className={s.paragraph}>{item.title}</Paragraph>
      </a>
    ));
  };

  return (
    <div className={s.footermenucolumn}>
      <Stack flexDirection={"column"} alignItems={"start"}>
        <Title tag="h3" className={s.title}>
          {title}
        </Title>
        <nav>
          <Stack flexDirection={"column"} alignItems={"start"}>
            {renderFooterMenuItems()}
          </Stack>
        </nav>
      </Stack>
    </div>
  );
}
