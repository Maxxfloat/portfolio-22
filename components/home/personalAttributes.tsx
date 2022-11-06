import React from "react";
import SectionTitle from "../global/SectionTitle";
import personalAttributes from "@/data/personalAtrributes";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import useDir from "hooks/useDir";

function Testimonials() {
  const { locale } = useRouter();
  const t = useTranslations("personalAttributes");
  return (
    <div className="flex flex-col w-full max-w-md m-auto text-left md:max-w-full">
      <SectionTitle title={t("sectionTitle")} />
      <div className="max-w-5xl pb-10 m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-3 items-start">
        {personalAttributes[locale].map((item, index) => {
          return (
            <div
              key={index}
              className="relative flex flex-col justify-between h-full p-5 border rounded-lg bg-rich-black border-fun-pink-light"
            >
              {index === 0 && (
                <>
                  <img
                    className="sqD top-[-50px] left-0 bottom-auto right-auto md:bottom-[-50px] md:top-auto md:right-[-25px] md:left-auto w-20 z-[-100]"
                    src="/static/doodles/testimonials/yay.svg"
                  />
                </>
              )}
              <p
                className={`${
                  locale == "fa" ? "text-justify" : "text-left"
                } relative text-base text-justify testimonialQuote`}
                dir={useDir()}
              >
                {item}
              </p>
              {index === 2 && (
                <img
                  className="sqD top-[-30px] right-[-15px] w-11"
                  src="/static/doodles/testimonials/squiggle2.svg"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
