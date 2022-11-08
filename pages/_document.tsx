import Document, { Head, Html, Main, NextScript } from "next/document";

const title = "Omid Neshati, react developer";
const desc = "junior web developer by react, next, typescript";
const img = "https://omidneshati.netlify.app/static/portfolio.png";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* twitter card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@omid_neshati" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={desc} />
          <meta name="twitter:image" content={img} />
          <meta name="twitter:image:alt" content="omid neshati portfolio" />
          {/* OG */}
          <meta property="og:title" content={title} />
          <meta property="og:url" content="https://omidneshati.netlify.app" />
          <meta property="og:image" content={img} />
          <meta property="og:description" content={desc} />
          <meta property="og:type" content="website" />
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
