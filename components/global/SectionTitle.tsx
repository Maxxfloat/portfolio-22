import { useRouter } from "next/router";
import React from "react";

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  const { locale } = useRouter();
  return (
    <div className="w-full pt-5">
      <div
        className={`${
          locale == "fa"
            ? "md:flex-row-reverse md:text-right"
            : "md:flex-row md:text-left"
        } flex items-center text-center justify-center h-24 gap-8`}
      >
        <span className="text-3xl font-bold whitespace-nowrap">{title}</span>
        <div className="hidden w-full h-2 bg-[#00ffff] -z-10 md:block" />
      </div>
    </div>
  );
}

export default SectionTitle;
