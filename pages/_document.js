import { Html, Head, Main, NextScript } from "next/document";
import Reset from "@/containers/Reset/Reset";
import MainStructure from "@/containers/MainStructure/MainStructure";
import { MenuBtn } from "@/components";

const Document = () => {
  return (

    <Html lang="en">
      <MainStructure/>
      <Head />
      <body>
        <Reset/>
        <MenuBtn/>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document
