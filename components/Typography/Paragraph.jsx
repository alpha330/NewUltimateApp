/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Paragraph = ({children,align}) => {
  const theme = useTheme()
  const pStyle = css`
  margin:2.75rem 0 1.05rem;
  font-weight:${theme.typography.paragraph.fontWeight};
  line-height:${theme.typography.paragraph.lineHeight};
  margin:0;
  font-size:${theme.typography.paragraph.fontSize}em;
  text-align:${align};
  `;
  return(
    <p css={pStyle}>{children}</p>
  )
}

export default Paragraph
