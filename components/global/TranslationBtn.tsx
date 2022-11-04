import { useRouter } from "next/router";
import React from "react";

const TranslationBtn = () => {
  const router = useRouter();
  const { pathname, query, asPath, locale } = router;
  const pushHandler = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };
  return (
    <div className="flex gap-1 p-1 bg-gray-800 border rounded-md w-min">
      <button
        className={`${
          locale == "en" ? "bg-white text-black" : "bg-none"
        } px-2 rounded-l-sm`}
        onClick={() => pushHandler("en")}
        disabled={locale == "en"}
      >
        <a>EN</a>
      </button>
      <button
        className={`${
          locale == "fa" ? "bg-white text-black" : "bg-none"
        } px-2 rounded-r-sm`}
        onClick={() => pushHandler("fa")}
        disabled={locale == "fa"}
      >
        <a>FA</a>
      </button>
    </div>
  );
};

export default TranslationBtn;
