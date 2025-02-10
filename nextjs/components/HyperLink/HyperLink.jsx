/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import Link from "next/link";

const HyperLink = ({href,children}) => {
  const linkStyle = css`
    width:fit-content;
    font-family:fa-Shabnam;
    text-decoration:none;
    border-bottom:1px solid red;
    cursor:pointer;
    padding:.3rem;
  `;
  return(
    <Link href={href} css={linkStyle}>
      {children}
    </Link>
  )
}

export default HyperLink
