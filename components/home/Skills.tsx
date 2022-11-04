import React from "react";
import skills from "@/data/skills";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

function Skills() {
  const { locale } = useRouter();
  const t = useTranslations("skillPage");
  return (
    <div
      className={`${
        locale == "fa" ? "md:flex-row-reverse" : "md:flex-row"
      } ative flex flex-col justify-between `}
    >
      <h2
        className={`${
          locale == "fa" ? "md:text-center" : "md:text-left"
        } relative w-full mb-10 mr-0 text-3xl font-bold text-center md:max-w-lg md:mr-10 md:mb-0 md:w-max `}
      >
        {t("title")}
        <br />
        {t("subtitle")}
        <img
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
        />
        <img
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
        />
        <img
          className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
          src="/static/doodles/skills/youtube.svg"
        />
        <img
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/skills/fillStar.svg"
        />
      </h2>
      <div className="relative grid items-center w-full max-w-lg grid-cols-3 mx-auto md:mx-none gap-x-8 gap-y-12 sm:gap-8 md:gap-12 sm:grid-cols-6 place-content-center">
        {skills.map((item, index) => {
          return (
            <div
              title={item.title}
              key={index}
              className="flex flex-col items-center justify-center w-10 mx-auto"
            >
              <img src={item.icon} style={item.style} />
              <p className="mt-3 text-xs font-bold text-fun-gray opacity-80">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
