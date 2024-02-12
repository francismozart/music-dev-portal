import { Grid, Container } from "@mui/material";
import Title from "@atoms/Title";
import Paragraph from "@atoms/Paragraph";
import Button from "@atoms/Button";
import { ContentSection } from "@/app/types/Page";
import { isEmptyArray } from "@lib/util";
import s from "./centeredcta.module.css";

interface ICenteredCTA {
  contentSectionProps: ContentSection;
}

export function CenteredCTA({ contentSectionProps }: ICenteredCTA) {
  const { title, description, buttons } = contentSectionProps;

  const renderButtons = () => {
    if (isEmptyArray(buttons)) return;

    return buttons?.map((button) => (
      <Button key={button.id} className={s.button} buttonProps={button} />
    ));
  };

  return (
    <section className={s.centeredcta}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <header>
              <Title className={s.title} tag={"h2"}>
                {title}
              </Title>
              <Paragraph className={s.mbottom}>{description}</Paragraph>
            </header>
            {renderButtons()}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
