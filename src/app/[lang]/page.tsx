import Home from "@templates/Home";
import Footer from "@organisms/Footer";
import Menu from "@organisms/Menu";
import { getProps } from "@client/index";

interface IHomePage {
  params: { lang: string };
}

export default async function HomePage({ params: { lang } }: IHomePage) {
  const { page, global } = await getProps(lang);
  const { alternates } = page;

  return (
    <>
      <header>
        <Menu global={global} />
      </header>
      <main role="main">
        <Home page={page} />
      </main>
      <Footer global={global} langSelectorOptions={alternates} />
    </>
  );
}
