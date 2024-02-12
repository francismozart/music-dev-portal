"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import Title from "@atoms/Title";
import Paragraph from "@atoms/Paragraph";
import ModuleCard from "@molecules/ModuleCard";
import useEmblaCarousel from "embla-carousel-react";
import { isEmptyArray } from "@lib/util";
import { ContentSection } from "@/app/types/Page";
import s from "./modules.module.css";
import sc from "./modulecardcarousel.module.css";
import Image from "next/image";

interface IModules {
  contentSectionProps: ContentSection;
}

export function Modules({ contentSectionProps }: IModules) {
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const { title, description, cards } = contentSectionProps;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    breakpoints: { "(min-width: 600px)": { slidesToScroll: 2 } },
  });

  const sliderBtnNext = "/assets/images/icons/next.svg";

  const renderCards = () => {
    if (isEmptyArray(cards)) return;

    return cards?.map((card) => (
      <div key={`module-card-${card.id}`} className={sc.embla__slide}>
        <article>
          <header>
            <ModuleCard cardProps={card} />
          </header>
        </article>
      </div>
    ));
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const verifyScrolling = useCallback(() => {
    if (emblaApi) {
      setCanScrollNext(emblaApi.canScrollNext());
      setCanScrollPrev(emblaApi.canScrollPrev());
    }
  }, [emblaApi]);

  useLayoutEffect(() => {
    verifyScrolling();
  }, [verifyScrolling]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", verifyScrolling);
    }
  }, [emblaApi, verifyScrolling]);

  const btnPrevClasses = `${sc.embla__btn} ${sc.embla__btn_prev} ${
    canScrollPrev ? "" : sc.embla__btn_disabled
  }`;
  const btnNextClasses = `${sc.embla__btn} ${sc.embla__btn_next} ${
    canScrollNext ? "" : sc.embla__btn_disabled
  }`;

  return (
    <section className={s.modules}>
      <Container>
        <Grid container className={s.gridcontainer}>
          <Grid item xs={12} md={6} className={s.content}>
            <header>
              <Title className={s.title} tag={"h2"}>
                {title}
              </Title>
              <Paragraph className={s.paragraph}>{description}</Paragraph>
            </header>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
          <Grid item xs={12} md={3}>
            <div className={sc.embla__btns_wrapper}>
              <button className={btnPrevClasses} onClick={scrollPrev}>
                <Image src={sliderBtnNext} width={44} height={44} alt="" />
              </button>
              <button className={btnNextClasses} onClick={scrollNext}>
                <Image src={sliderBtnNext} width={44} height={44} alt="" />
              </button>
            </div>
          </Grid>

          <div className={sc.embla} ref={emblaRef}>
            <div className={sc.embla__container}>{renderCards()}</div>
          </div>
        </Grid>
      </Container>
    </section>
  );
}
