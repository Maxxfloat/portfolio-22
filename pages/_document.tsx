import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@omid_neshati" />
          <meta name="twitter:title" content="Omid Neshati, react developer" />
          <meta
            name="twitter:description"
            content="junior web developer by react, next, typescript"
          />
          <meta
            name="twitter:image"
            content="https://omidneshati.netlify.app/static/portfolio.png"
          />
          <meta name="twitter:image:alt" content="omid neshati portfolio" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
