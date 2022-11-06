import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";
import { useRouter } from "next/router";
import useDir from "hooks/useDir";

function ProjectCard({ project }) {
  const { locale } = useRouter();
  return (
    <div
      className={`flex flex-col max-w-sm md:projects-start mx-auto projects-center 
       md:justify-center`}
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className={`w-full relative rounded-xl border-fun-gray border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink will-change-projectCard`}
      >
        <img className="w-full rounded-md" src={project.img} />
      </a>
      <div className="w-full mt-5">
        <div
          className={`flex justify-between projects-center
           ${locale == "fa" ? "flex-row-reverse" : "flex-row"}
          `}
        >
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold">{project.title[locale]}</h3>
          </a>
          <div className="space-x-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className={`text-sm text-fun-gray text-justify my-2`} dir={useDir()}>
          {project.desc[locale]}
        </p>
        <ul className={`flex flex-wrap items-center t-2 -ml-2 list-none`}>
          {project.tags.map((tag: string) => {
            return (
              <li key={tag}>
                <Link href={`/projects/tag/${kebabCase(tag)}`}>
                  <div className="px-2 py-1 m-1 text-sm rounded-lg cursor-pointer bg-fun-pink-dark hover:opacity-75">
                    {tag}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
