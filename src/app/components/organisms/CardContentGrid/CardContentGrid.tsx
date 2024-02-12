import { Grid, Container } from "@mui/material";
import Title from "@atoms/Title";
import Paragraph from "@atoms/Paragraph";
import PreTitle from "@atoms/PreTitle";
import FeatureCard from "@molecules/FeatureCard";
import { ContentSection } from "@/app/types/Page";
import { isEmptyArray } from "@lib/util";
import s from "./cardcontentgrid.module.css";

interface ICardContentGrid {
  contentSectionProps: ContentSection;
}

export function CardContentGrid({ contentSectionProps }: ICardContentGrid) {
  const { preTitle, title, description, cards } = contentSectionProps;

  const renderCards = () => {
    if (isEmptyArray(cards)) return;

    return cards?.map((card) => (
      <Grid key={card.id} item xs={12} md={4}>
        <article>
          <header>
            <FeatureCard cardProps={card} />
          </header>
        </article>
      </Grid>
    ));
  };

  return (
    <section className={s.cardcontentgrid}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={6}>
            <header>
              <PreTitle className={s.mbottom}>{preTitle as string}</PreTitle>
              <Title className={s.mbottom} tag={"h2"}>
                {title}
              </Title>
              <Paragraph className={s.paragraph}>{description}</Paragraph>
            </header>
          </Grid>
        </Grid>
        <Grid container>{renderCards()}</Grid>
      </Container>
    </section>
  );
}
