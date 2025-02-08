/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Input = ({type="text",placeholder}) => {
  const mainInputDiv = css`
    width:100%;
  `;
  return(
    <input type={type} placeholder={placeholder} css={mainInputDiv} />
  )
}

export default Input
