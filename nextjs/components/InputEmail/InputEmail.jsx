/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "../Input/Input";

const InputEmail = ({type="email",placeholder="email"}) => {
  return(
    <Input type={type} placeholder={placeholder} css={css`
      direction:ltr;
      width:100%;
      `}/>
  )
}

export default InputEmail
