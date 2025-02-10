/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Button = ({type="button",children}) => {
  const theme = useTheme()
  const btnStyle = css`
    width:100%;
    padding:10px;
    background-color:${theme.color.primary}
  `;
  return(
    <button type={type} css={btnStyle}>{children}</button>
  )
}

export default Button
