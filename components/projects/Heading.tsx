import useDir from "hooks/useDir";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
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
            <Image
              className="absolute -top-6 -right-2 sm:-right-8 sm:-top-8"
              src="/static/doodles/hero/code.svg"
              alt="code"
              width={32}
              height={32}
            />
          </h1>
        </>
      ) : (
        <h1 className="relative inline-block w-auto mx-auto mb-8 text-4xl sm:text-6xl">
          {t("heading.noTitle")}
          <Image
            className="absolute w-10 sqD -top-8 -right-8"
            src="/static/doodles/hero/code.svg"
            alt="code"
            width={40}
            height={40}
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
