/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FormControl = ({children}) => {
  const formStyles = css`
    display:flex;
    padding:10px;
    align-items:center;
    justify-content:center;
  `;
  return (
    <div css={formStyles}>
      {children}
    </div>
  )
}

export default FormControl
