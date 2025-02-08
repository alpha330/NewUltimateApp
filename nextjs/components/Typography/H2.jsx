/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const H2 = ({children,align}) => {
  const theme = useTheme()
  const h1Style = css`
  margin:2.75rem 0 1.05rem;
  font-weight:${theme.typography.h2.fontWeight};
  line-height:${theme.typography.h2.lineHeight};
  margin:0;
  font-size:${theme.typography.h2.fontSize}em;
  text-align:${align};
  `;
  return(
    <h1 css={h1Style}>{children}</h1>
  )
}

export default H2
