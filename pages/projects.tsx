import Heading from "components/projects/Heading";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import MetaTags from "@/components/global/MetaTags";

function projects() {
  const t = useTranslations("projectsPage");
  return (
    <Page>
      <MetaTags pageTitle={t("meta.title")} pageDescription={t("meta.desc")} />
      <Heading />
      <Projects />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../data/locales/${locale}.json`)).default,
    },
  };
};

export default projects;
