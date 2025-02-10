/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Input = ({type="text",placeholder,onChange}) => {

  const handleOnChange = (event) =>{
    onChange(event.target.value)
  }

  const mainInputDiv = css`
    width:100%;
    direction:ltr;
  `;
  return(
    <input onChange={handleOnChange} type={type} placeholder={placeholder} css={mainInputDiv} />
  )
}

export default Input
