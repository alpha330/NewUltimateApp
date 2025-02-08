/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "../Input/Input";

const InputText = ({type="text",placeholder}) => {
  return(
    <Input type={type} placeholder={placeholder}/>
  )
}

export default InputText
