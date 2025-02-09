/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Small = ({children,align}) => {
  const theme = useTheme()
  const smallStyle = css`
  margin:2.75rem 0 1.05rem;
  font-weight:${theme.typography.small.fontWeight};
  line-height:${theme.typography.small.lineHeight};
  margin:0;
  font-size:${theme.typography.small.fontSize}em;
  text-align:${align};
  `;
  return(
    <small css={smallStyle}>{children}</small>
  )
}
export default Small
