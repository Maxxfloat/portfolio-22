import useDir from "hooks/useDir";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  const { locale } = useRouter();
  const t = useTranslations("projectsPage");
  return (
    <div
      className={`${
        tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"
      } w-full text-center relative`}
    >
      {tag ? (
        <>
          <h1
            className="relative inline-block w-auto mx-auto mb-8 text-3xl sm:text-4xl"
            dir={useDir()}
          >
            {t("heading.title")} <b>{tag}</b>
            <img
              className="absolute w-8 sqD sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8"
              src="/static/doodles/hero/code.svg"
            />
          </h1>
        </>
      ) : (
        <h1 className="relative inline-block w-auto mx-auto mb-8 text-4xl sm:text-6xl">
          {t("heading.noTitle")}
          <img
            className="absolute w-10 sqD -top-8 -right-8"
            src="/static/doodles/hero/code.svg"
          />
        </h1>
      )}
      {!tag && (
        <p className="max-w-3xl m-auto text-xl text-fun-gray sm:text-2xl">
          {t("heading.description")}
        </p>
      )}
    </div>
  );
}

export default Heading;
