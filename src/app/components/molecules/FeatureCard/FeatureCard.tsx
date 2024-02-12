import Title from "@atoms/Title";
import Paragraph from "@atoms/Paragraph";
import Icon from "@atoms/Icon";
import { Card } from "@/app/types/Page";
import { Stack } from "@mui/material";
import s from "./featurecard.module.css";

interface IFeatureCard {
  cardProps: Card;
}

export function FeatureCard({ cardProps }: IFeatureCard) {
  const { title, description, icon } = cardProps;

  return (
    <div className={s.featurecard}>
      <Stack flexDirection={"column"} alignItems={"start"}>
        <Icon src={icon} className={s.mbottom} />
        <Title tag="h3" className={`${s.small} ${s.mbottom}`}>
          {title}
        </Title>
        <Paragraph className={s.alignleft}>
          <small>{description}</small>
        </Paragraph>
      </Stack>
    </div>
  );
}
