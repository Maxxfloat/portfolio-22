import Link from "next/link";
import React, { FC } from "react";
import { Column as ColumnType, pages, social } from "@/data/global";
import Image from "next/image";
import { useRouter } from "next/router";

const Column: FC<{ item: ColumnType }> = ({ item }) => {
  return (
    <div className="mb-5 text-left sm:mb-0">
      <h4 className="text-sm font-bold uppercase text-fun-gray">
        {item.title}
      </h4>
      <div>
        {item.links.map((item, index) => {
          return (
            <div key={index} className="my-4">
              {item.leavesWebsite ? (
                <a
                  href={item.link}
                  target="_blank"
                  className="flex items-center"
                >
                  {item.icon && (
                    <span className="pr-2 -mb-1">
                      <Image src={item.icon} alt="" width={20} height={20} />
                    </span>
                  )}
                  {item.name}
                </a>
              ) : (
                <Link href={item.link}>{item.name}</Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function Footer() {
  const { locale } = useRouter();
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="grid items-start justify-between w-full max-w-4xl grid-cols-2 m-auto sm:grid-cols-3">
        {pages[locale].map((item, index) => (
          <Column key={index} item={item} />
        ))}
        <Column item={social} />
      </div>
      <div className="w-full max-w-4xl pt-8 m-auto mt-8 text-center border-t sm:mt-4 sm:pt-4 text-fun-gray border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center text-xs font-bold tracking-widest uppercase">
            Made with{" "}
            <div className="inline-flex items-center ml-3 -mt-1 space-x-2">
              <span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  height="26"
                  title="React"
                  alt="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  height="40"
                  className="invert"
                  title="NextJS"
                  alt="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  height="26"
                  title="TailwindCSS"
                  alt="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:contact@braydentw.io"
              className="font-medium text-fun-gray-light"
            >
              Omid Neshati
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="inline-flex items-center flex-shrink w-auto px-4 py-2 text-xs font-bold border opacity-50 cursor-pointer sm:w-auto border-fun-pink rounded-xl text-fun-pink"
          href="https://github.com/Maxxfloat/portfolio-22"
          target="_blank"
          rel="nooreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
