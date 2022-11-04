import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
// import Posts from "@/components/home/Posts";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import PersonalAttributes from "@/components/home/personalAttributes";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
// import { GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       allPosts: allPosts.sort(({date: dateA}: any, {date: dateB}: any) => dateB - dateA),
//     },
//   };
// }

export default function Home() {
  const t = useTranslations("homePage");
  return (
    <Page currentPage={t("currentPage")} desc={t("desc")}>
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
