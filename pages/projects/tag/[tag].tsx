import Page from "components/utility/Page";

import { GetStaticProps, GetStaticPaths } from "next";
import projects from "@/data/projects";

import { kebabCase, kebabArray } from "@/utils/utils";
import Projects from "components/projects/Projects";
import Heading from "components/projects/Heading";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const allTags = [];
  projects.forEach((project) =>
    project.tags.forEach((tag) => {
      allTags.push(tag);
    })
  );
  const allTagsPaths = allTags
    .map((path) =>
      locales.map((locale) => ({
        params: { tag: `${kebabCase(path)}` },
        locale,
      }))
    )
    .flat();
  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: {
  params: { tag: string };
  locale: string;
}) => {
  const tag = params.tag;
  const filteredProjects = projects.filter((project) =>
    [...kebabArray(project.tags)].includes(tag)
  );
  return {
    props: JSON.parse(
      JSON.stringify({
        filteredProjects,
        tag,
        messages: (await import(`../../../data/locales/${locale}.json`))
          .default,
      })
    ),
  };
};

function PostPage({ filteredProjects, tag }) {
  const t = useTranslations("homePage.projects");
  const capsTag = allTags[allKebabTags.indexOf(tag)];
  return (
    <Page
      currentPage="Projects"
      desc={`A showcase for all of my ${capsTag} projects.`}
    >
      <Heading tag={capsTag} />
      <Projects overwriteProjects={filteredProjects} />

      <Link href="/projects">
        <div className="w-full max-w-sm px-8 py-3 mx-auto mt-8 text-center transition-colors border rounded-full cursor-pointer md:max-w-2xl border-fun-pink whitespace-nowrap text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white">
          {t("link")}
        </div>
      </Link>
    </Page>
  );
}

export default PostPage;
