export type Project = {
  id: number;
  title: { [a: string]: string };
  desc: { [a: string]: string };
  img: string;
  link?: string;
  github?: string;
  tags: string[];
};
