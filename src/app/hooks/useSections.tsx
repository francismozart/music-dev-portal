import Hero from "@organisms/Hero";
import CardContentGrid from "@organisms/CardContentGrid";
import Modules from "@organisms/Modules";
import CenteredCTA from "@organisms/CenteredCTA";
import NotFound from "@organisms/NotFound";
import { ContentSection } from "@/app/types/Page";

const useSections = () => {
  const componentMap = {
    ["sections.hero-video"]: Hero,
    ["sections.card-content-grid"]: CardContentGrid,
    ["sections.modules"]: Modules,
    ["sections.centered-cta"]: CenteredCTA,
  };

  type ComponentMapItem = keyof typeof componentMap;

  const getSectionComponent = (componentName: string) => {
    const specificComponentName: ComponentMapItem =
      componentName as ComponentMapItem;
    const Component = componentMap[specificComponentName];
    return Component || NotFound;
  };

  const renderSections = (contentSections: ContentSection[]) => {
    return contentSections.map((section) => {
      const SectionComponent = getSectionComponent(section.__component);
      return (
        <SectionComponent key={section.id} contentSectionProps={section} />
      );
    });
  };

  return {
    renderSections,
  };
};

export default useSections;
