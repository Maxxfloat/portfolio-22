import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  const t = useTranslations("homePage.hero");

  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center w-full pt-20 pb-40 m-auto text-center heroElem z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="mb-5 text-xl">{t("title")}</p>
        <h1 className="relative inline-block w-auto max-w-2xl mb-10 text-5xl font-bold tracking-tighter heroTitle lg:max-w-4xl md:text-6xl lg:text-7xl heroShinyBg">
          {t("description.1")}{" "}
          <span className="heroShiny1 text-fun-pink">{t("description.2")}</span>{" "}
          {t("description.3")}{" "}
          <span className="heroShiny2 text-fun-pink">{t("description.4")}</span>{" "}
          {t("description.5")}{" "}
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/html.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[400px]"
            style={{ animationDelay: "0.3s" }}
            src="/static/doodles/hero/brayden.svg"
          />
          <img
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/hero/coder.svg"
          />
          <img
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: "0.5s" }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/dino.svg"
          />
          <img
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/paintbrush.svg"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/hero/pop1.svg"
          />
          <img
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/code.svg"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div className="px-10 py-4 text-xl font-bold transition-colors border-2 rounded-full cursor-pointer whitespace-nowrap text-fun-white border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink">
            {t("scrollLink")}
          </div>
        </ScrollLink>
      </div>
    </>
  );
}

export default Hero;
