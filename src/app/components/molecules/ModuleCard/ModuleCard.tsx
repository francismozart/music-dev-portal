import Title from "@atoms/Title";
import Paragraph from "@atoms/Paragraph";
import LinkWithIcon from "@atoms/LinkWithIcon";
import { Card } from "@/app/types/Page";
import { Stack } from "@mui/material";
import s from "./modulecard.module.css";

interface IModuleCard {
  cardProps: Card;
}

export function ModuleCard({ cardProps }: IModuleCard) {
  const { title, description, button } = cardProps;
  const icon = "top-right";

  return (
    <div className={s.modulecard}>
      <Stack
        flexDirection={"column"}
        alignItems={"start"}
        justifyContent={"space-between"}
        className={s.cardcontent}
      >
        <Stack flexDirection={"column"} alignItems={"start"}>
          <Title tag="h3" className={s.mbottom}>
            {title}
          </Title>
          <Paragraph className={s.paragraph}>{description}</Paragraph>
        </Stack>
        <LinkWithIcon icon={icon} url={button?.url as string}>
          {button?.text as string}
        </LinkWithIcon>
      </Stack>
    </div>
  );
}
