/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "../Input/Input";

const InputEmail = ({type="email",placeholder="email"}) => {
  return(
    <Input type={type} placeholder={placeholder}/>
  )
}

export default InputEmail
