import { Page } from "@/app/types/Page";
import useSections from "@hooks/useSections";

interface IHome {
  page: Page;
}

export function Home({ page }: IHome) {
  const { renderSections } = useSections();
  const { contentSections } = page;

  return <>{renderSections(contentSections)}</>;
}
