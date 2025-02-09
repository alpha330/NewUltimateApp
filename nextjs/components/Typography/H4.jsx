/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const H4 = ({children,align}) => {
  const theme = useTheme()
  const h4Style = css`
  margin:2.75rem 0 1.05rem;
  font-weight:${theme.typography.h4.fontWeight};
  line-height:${theme.typography.h4.lineHeight};
  margin:0;
  font-size:${theme.typography.h4.fontSize}em;
  text-align:${align};
  `;
  return(
    <h4 css={h4Style}>{children}</h4>
  )
}

export default H4
