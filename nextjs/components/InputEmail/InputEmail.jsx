/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "../Input/Input";

const InputEmail = (props) => {

  return(
    <Input {...props} css={css`
      direction:ltr;
      width:100%;
      `}/>
  )
}

export default InputEmail
