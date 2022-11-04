import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: { en: "find the pair", fa: "همسان پیدا کن" },
    desc: {
      en: "Memory Game web app made by Nextjs, Tailwindcss, and Typescript that has an options menu that includes card image kind, number of cards, and number of pairs",
      fa: "بازی حافظه که با Nextjs, Tailwindcss, و Typescript شامل فهرست تنظیم نوع‌ کارت‌ها، تعداد کارت‌ها و تعداد همسان",
    },
    link: "https://find-the-pair.netlify.app",
    img: "/static/projects/find-the-pair.gif",
    github: "https://github.com/Maxxfloat/find-the-pairs",
    tags: ["react", "next", "tailwindcss", "javascript"],
  },
];

export default projects;
