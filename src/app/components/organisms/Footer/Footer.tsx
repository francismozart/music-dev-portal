import { Grid, Container, Stack } from "@mui/material";
import Logo from "@atoms/Logo";
import Paragraph from "@atoms/Paragraph";
import LanguageSelector from "@atoms/LanguageSelector";
import SystemStatus from "@atoms/SystemStatus";
import FooterMenuColumn from "@molecules/FooterMenuColumn";
import SocialList from "@molecules/SocialList";
import { Global } from "@/app/types/Global";
import { Alternates } from "@/app/types/Page";
import s from "./footer.module.css";

interface IFooter {
  global: Global;
  langSelectorOptions: Alternates[];
}

export async function Footer({ global, langSelectorOptions }: IFooter) {
  const { locale, siteName, helpText, social, footerMenu, copyright } = global;

  return (
    <footer className={s.footer}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <div className={s.columnscontainer}>
              <div className={s.logoandsocial}>
                <Logo alt={siteName} />
                <Paragraph className={s.paragraph}>{helpText}</Paragraph>
                <LanguageSelector
                  options={langSelectorOptions}
                  locale={locale}
                />

                <SocialList socialProps={social} />
              </div>

              <div className={s.footermenu}>
                {footerMenu.map((menuItem) => (
                  <FooterMenuColumn
                    key={menuItem.id}
                    title={menuItem.title}
                    items={menuItem.dropdown}
                  />
                ))}
              </div>
            </div>

            <aside className={s.footerbottom}>
              <SystemStatus locale={locale} />
              <Paragraph className={s.finalparagraph}>{copyright}</Paragraph>
            </aside>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
