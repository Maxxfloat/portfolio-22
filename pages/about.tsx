import Page from "@/components/utility/Page";
import useDir from "hooks/useDir";
import { useTranslations } from "next-intl";
import { GetStaticProps } from "next/types";
import React from "react";

const About = () => {
  const t = useTranslations("about");

  return (
    <Page currentPage="Skills" desc="hello">
      <div className="flex justify-center pt-20">
        <div
          className="flex flex-col items-start p-2 border border-white rounded-md md:w-1/2 "
          dir={useDir()}
        >
          <h1 className="mb-5 text-6xl font-bold">{t("title")}</h1>
          <div className="p-1 border border-blue-300 rounded-md">
            <p className="p-1 text-xl leading-relaxed text-justify bg-[#072241] rounded-md">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    messages: (await import(`../data/locales/${locale}.json`)).default,
  },
});
export default About;
