import Link from "next/link";
import React from "react";
import SectionTitle from "../global/SectionTitle";

import ProjectCard from "../projects/ProjectCard";
import { useTranslations } from "next-intl";
import { Project } from "types";
import { projects } from "@/data/global";

function Projects() {
  const t = useTranslations("homePage.projects");
  return (
    <div className="relative flex flex-col justify-between pt-8 text-left">
      <div id="learnmore">
        <SectionTitle title={t("title")} />
      </div>
      <div className="grid items-start grid-cols-1 gap-12 md:gap-5 md:grid-cols-3">
        {projects.slice(0, 3).map((item: Project) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="w-full max-w-sm px-8 py-3 mx-auto mt-8 text-center transition-colors border rounded-full cursor-pointer md:max-w-2xl border-fun-pink whitespace-nowrap text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white">
            {t("link")}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
