import Footer from "../global/Footer";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import React from "react";

function Page({ children }: PageProps) {
  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen m-auto overflow-hidden text-white opening-box-animate-paddin md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
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
  children?: JSX.Element | JSX.Element[];
};
