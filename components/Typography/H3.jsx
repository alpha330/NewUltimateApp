/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const H3 = ({children,align}) => {
  const theme = useTheme()
  const h3Style = css`
  margin:2.75rem 0 1.05rem;
  font-weight:${theme.typography.h3.fontWeight};
  line-height:${theme.typography.h3.lineHeight};
  margin:0;
  font-size:${theme.typography.h3.fontSize}em;
  text-align:${align};
  `;
  return(
    <h3 css={h3Style}>{children}</h3>
  )
}

export default H3
