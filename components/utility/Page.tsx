import Footer from "../global/Footer";
import Head from "next/head";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import React from "react";

function Page({ currentPage, desc, children }: PageProps) {
  const pageTitle = `${currentPage} - Omid Neshati`;

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen m-auto overflow-hidden text-white opening-box-animate-paddin md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      <Head>
        <title>{pageTitle}</title>

        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />
      </Head>

      <main className="flex-1 w-full p-5 text-center">
        <div className="hidden sm:block z-100">
          <Navbar />
        </div>
        <div className="block -m-5 sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  desc: string;
  children?: JSX.Element | JSX.Element[];
};
