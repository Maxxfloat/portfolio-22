import React from "react";
import Image from "next/image";
import skills from "@/data/skills";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

function Skills() {
  const { locale } = useRouter();
  const t = useTranslations("skill");
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
        <Image
          className="sqD bottom-[-80px] left-[-50px] lg:bottom-[120px] lg:left-[-10px] z-[-10]"
          src="/static/doodles/skills/laptop.svg"
          alt="laptop"
          width={200}
          height={200}
        />

        <Image
          className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
          src="/static/doodles/skills/coding.svg"
          alt="coding"
          width={100}
          height={100}
        />
        <Image
          className="sqD hidden lg:block top-[180px] right-[150px] lg:top-[130px] lg:right-[140px]"
          src="/static/doodles/skills/youtube.svg"
          alt="youtube"
          width={120}
          height={120}
        />
        <Image
          className="sqD top-[-15px] right-[-15px]"
          src="/static/doodles/skills/fillStar.svg"
          alt="fillStar"
          width={100}
          height={100}
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
              <Image
                src={item.icon}
                style={item.style}
                alt={item.title}
                width={50}
                height={50}
              />
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
