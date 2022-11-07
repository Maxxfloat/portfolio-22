import { NextIntlProvider } from "next-intl";
import { useRouter } from "next/router";

import "tailwindcss/tailwind.css";
import "@/styles/main.css";

import { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />;
      </NextIntlProvider>
    </>
  );
}
