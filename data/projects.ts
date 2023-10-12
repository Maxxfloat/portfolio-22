import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: { en: "Find The Pair", fa: "همسان را پیدا کن" },
    desc: {
      en: "Memory Game web app made by Nextjs, Tailwindcss, and Typescript that has an options menu that includes card image kind, number of cards, and number of pairs",
      fa: "بازی حافظه که با Nextjs, Tailwindcss, و Typescript شامل فهرست تنظیم نوع‌ کارت‌ها، تعداد کارت‌ها و تعداد همسان",
    },
    link: "https://find-the-pair.netlify.app",
    img: "/static/projects/find-the-pairs.png",
    github: "https://github.com/omidneshati/find-the-pairs",
    tags: ["react", "next", "tailwindcss", "typescript", "game"],
  },
  {
    id: 1,
    title: { en: "Cryptocurrency Tracker", fa: "ردیاب رمز ارز" },
    desc: {
      en: "The technology used includes Nextjs, Tailwindcss, and Typescript. That gets data from third-party API",
      fa: "تکنولوژی های استفاده شده شامل Nextjs, Tailwindcss و Typescript است. دیتا از API دریافت می‌شود.",
    },
    img: "/static/projects/cryptocurrency-tracker.png",
    tags: ["typescript", "next", "react", "tailwindcss"],
    github: "https://github.com/omidneshati/cryptocurrency-price-tracker",
    link: "https://maxxfloatcryptotracker.netlify.app",
  },
  {
    id: 2,
    title: { en: "QR-Code", fa: "کیو آر کد" },
    desc: { en: "QR-Code generator", fa: "تولید کننده کیو آر کد" },
    img: "/static/projects/qr-code.png",
    tags: ["next", "react", "tailwindcss", "REST API"],
    github: "https://github.com/omidneshati/qr-code-generator",
    link: "https://maxxfloatqrcode.netlify.app",
  },
  {
    id: 3,
    title: { en: "ma-commerce", fa: "ماکامرس" },
    desc: {
      en: "eccomerce website made by Nextjs, Tailwindcss, and Typescript",
      fa: "یک وبسایت فروشگاهی با Nextjs, Tailwindcss و Typescript",
    },
    img: "/static/projects/ma-commerce.png",
    tags: ["next", "react", "tailwindcss", "ecommerce", "typescript"],
    github: "https://github.com/omidneshati/maxxfloat.github.io",
    link: "https://maxxfloat.github.io",
  },
];

export default projects;
