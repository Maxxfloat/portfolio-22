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
      link: "https://github.com/omidneshati",
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
