import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import PersonalAttributes from "@/components/home/personalAttributes";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import MetaTags from "@/components/global/MetaTags";

export default function Home() {
  const t = useTranslations("homePage");
  return (
    <Page>
      <MetaTags pageTitle={t("meta.title")} pageDescription={t("meta.desc")} />
      <Hero />
      <div className="mt-20 space-y-32">
        <Projects />
        <Skills />
        <PersonalAttributes />
      </div>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    messages: (await import(`../data/locales/${locale}.json`)).default,
  },
});
