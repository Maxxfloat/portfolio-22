import { Project } from "types";

type Route = {
  title: string;
  path: string;
};

export type Column = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};
export type Pages = {
  [a: string]: Column[];
};

type Skill = {
  title: string;
  icon: string;
  style?: object;
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  { title: "About", path: "/about" },
];

export const pages: Pages = {
  fa: [
    {
      title: "صفحات",
      links: [
        { name: "خانه", link: "/", leavesWebsite: false },
        { name: "پروژه‌ها", link: "/projects", leavesWebsite: false },
        { name: "مهارت‌ها", link: "/skills", leavesWebsite: false },
      ],
    },
  ],
  en: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        { name: "Skills", link: "/skills", leavesWebsite: false },
      ],
    },
  ],
};

export const social: Column = {
  title: "Social",
  links: [
    {
      name: "GitHub",
      link: "https://github.com/Maxxfloat",
      icon: "/static/icons/github-f.svg",
      leavesWebsite: true,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/omid-neshati/",
      icon: "/static/icons/linkedin-f.svg",
      leavesWebsite: true,
    },
    {
      name: "Email",
      link: "mailto:startomid2020@gmail.com",
      icon: "/static/icons/mail-f.svg",
      leavesWebsite: true,
    },
  ],
};

export const projects: Project[] = [
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

export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "Sass",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    style: { filter: "invert(1)" },
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const personalAttributes: { [a: string]: string[] } = {
  fa: [
    `من باور دارم هر مسئله‌ای قابل پاسخ است، هیچ غیر ممکنی وجود ندارد. شاید زمان ببرد ولی در آخر حل می‌شود`,
    `”دو سر از یکی بهتر عمل می‌کنند نه برای آنکه هر یک از آن‌ها خطاناپذیر است، بلکه بعید است هردو در یک جهت اشتباه کنند“ C.S. Lewis`,
    `مدیریت زمان و خود انضباتی: روز کار کن، شب آموزش ببین`,
  ],
  en: [
    "I believe any problem can be solved, there’s no impossible. Maybe take time but it always gets done",
    ,
    "“Two heads are better than one, not because either is infallible, but because they are unlikely to go wrong in the same direction.” C.S. Lewis",
    ,
    "Time Management And Self-discipline: work at day and learn at night",
  ],
};
