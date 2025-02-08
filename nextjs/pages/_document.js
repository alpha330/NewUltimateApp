import { Html, Head, Main, NextScript } from "next/document";
import Reset from "@/containers/Reset/Reset";

const Document = () => {
  return (

    <Html lang="en">
      <Head />
      <body>
        <Reset/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document
