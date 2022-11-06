import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="twitter:card" content="portfolio image" />
          <meta name="twitter:site" content="https://omidneshati.netlify.app" />
          <meta
            name="twitter:title"
            content="Omid Neshati, web developer by react"
          />
          <meta
            name="twitter:description"
            content="junior web developer by react, next, typescript"
          />
          <meta name="twitter:image" content="/static/portfolio.png" />
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
