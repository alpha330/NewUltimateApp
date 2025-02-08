/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FormControl = ({children}) => {
  const formStyles = css`
    display:flex;
    padding:30px;
    margin:1rem;
  `;
  return (
    <div>
      {children}
    </div>
  )
}

export default FormControl
