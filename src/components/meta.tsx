import Head from "next/head";
import Script from "next/script";


interface Props {
  pageTitle: string;
  desc: string;
}

const Meta = ({ pageTitle }: any) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/i.ico" />
        <title>{`Lynx | ${pageTitle}`}</title>
        <link rel="icon" href="f.svg" sizes="any" />
        <meta name="description" content="A resume base on Next & my♥!" />
      </Head>
      <Script src="https://unpkg.com/twemoji@latest/dist/twemoji.min.js" crossOrigin="anonymous"></Script>
    </>
  )
}

export default Meta