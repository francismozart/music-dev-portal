import { Grid, Container } from "@mui/material";
import Title from "@atoms/Title";
import Paragraph from "@atoms/Paragraph";
import { ContentSection } from "@/app/types/Page";

interface INotFound {
  contentSectionProps: ContentSection;
}

export function NotFound({ contentSectionProps }: INotFound) {
  return (
    <section>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <header style={{ padding: "1.5rem" }}>
              <Title tag={"h2"}>{"Section not found"}</Title>
              <Paragraph>
                {`Maybe you didn't create a section for the component '${contentSectionProps.__component}' yet.`}
              </Paragraph>
            </header>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
