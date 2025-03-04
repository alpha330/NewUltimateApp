/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const LayoutAuth = ({children}) =>{
  const mainDivLogin = css`
    display:flex;
    height:100%;
    align-items:center;
    justify-content:center;
    padding:3rem;
    width:100%;
    flex-direction:column;
    grid-row: 2/6;
    grid-column: 2/10;
  `;
  const imgImageLogo = css`
    width:8rem;
  `;

  const h2NameApp = css`font-size:1rem; text-transform:capitalize; text-align:center; font-weight:500;`;
  return(
    <>
    <div css={mainDivLogin}>
      <div><img src="./images/logo.png" alt="logo" css={imgImageLogo}/></div>

      <div>
        {children}
      </div>
    </div>
    </>
  )
}

export default LayoutAuth
