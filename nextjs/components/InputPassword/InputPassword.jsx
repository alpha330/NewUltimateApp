/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "../Input/Input";

const InputPassword = ({type="password",placeholder="password"}) => {
  return(
    <Input type={type} placeholder={placeholder} css={css`
      direction:ltr;
      width:100%;
      `}/>
  )
}

export default InputPassword
