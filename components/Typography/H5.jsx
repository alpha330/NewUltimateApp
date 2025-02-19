/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const H5 = ({children,align}) => {
  const theme = useTheme()
  const h5Style = css`
  margin:2.75rem 0 1.05rem;
  font-weight:${theme.typography.h5.fontWeight};
  line-height:${theme.typography.h5.lineHeight};
  margin:0;
  font-size:${theme.typography.h5.fontSize}em;
  text-align:${align};
  `;
  return(
    <h5 css={h5Style}>{children}</h5>
  )
}

export default H5
