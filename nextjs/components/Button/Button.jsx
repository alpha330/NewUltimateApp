/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const Button = ({type="button",children,loading}) => {
  const theme = useTheme()
  const btnStyle = css`
    width:100%;
    padding:10px;
    background-color:${theme.color.primary}
  `;
  console.log("button",loading)
  return(
    <button type={type} css={btnStyle}>
      {loading && "loading"}
      {!loading && children}
      </button>
  )
}

export default Button
