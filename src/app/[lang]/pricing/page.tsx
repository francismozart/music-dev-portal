import { Container, Grid } from "@mui/material";
import Footer from "@organisms/Footer";
import { getProps } from "@client/index";

interface IPricing {
  params: { lang: string };
}

export default async function Pricing({ params: { lang } }: IPricing) {
  const { page, global } = await getProps(lang);
  const { alternates } = page;

  const style = {
    padding: "32px 0",
  };

  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3} style={style}>
            <h1>Pricing</h1>
            <p style={{ margin: "24px 0" }}>Teste para o seletor de idioma</p>
          </Grid>
        </Grid>
      </Container>
      <Footer global={global} langSelectorOptions={alternates} />
    </>
  );
}
