import { Grid, Container, Stack } from "@mui/material";
import Title from "@atoms/Title";
import Paragraph from "@atoms/Paragraph";
import { ContentSection } from "@/app/types/Page";
import { isEmptyArray } from "@lib/util";
import Button from "@atoms/Button";
import s from "./hero.module.css";

interface IHero {
  contentSectionProps: ContentSection;
}

export function Hero({ contentSectionProps }: IHero) {
  const { title, description, buttons, background } = contentSectionProps;

  const style = {
    backgroundImage: `url(${background?.url})`,
  };

  const renderButtons = () => {
    if (isEmptyArray(buttons)) return;

    return (
      <Stack
        flexDirection={"row"}
        gap={"8px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {buttons?.map((button) => (
          <Button key={button.id} buttonProps={button} />
        ))}
      </Stack>
    );
  };

  return (
    <div className={s.hero} style={style}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <header>
              <Title tag={"h1"} className={s.mbottom}>
                {title}
              </Title>
              <Paragraph className={s.mbottom}>{description}</Paragraph>
            </header>
            {renderButtons()}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
