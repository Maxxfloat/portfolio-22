import Head from "next/head";
import React, { FC } from "react";

type MetaTagsType = { pageTitle: string; pageDescription: string };

const MetaTags: FC<MetaTagsType> = ({ pageTitle, pageDescription }) => {
  return (
    <Head>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
    </Head>
  );
};

export default MetaTags;
