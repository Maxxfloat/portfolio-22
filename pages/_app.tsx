import { NextIntlProvider } from "next-intl";
import { useRouter } from "next/router";

import "tailwindcss/tailwind.css";
import "@/styles/main.css";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />;
    </NextIntlProvider>
  );
}
