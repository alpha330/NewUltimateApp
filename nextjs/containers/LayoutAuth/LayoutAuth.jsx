/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const LayoutAuth = ({children}) =>{
  const mainDivLogin = css`
    display:flex;
    height:100vh;
    align-items:center;
    justify-content:center;
    padding:3rem;
    width:100%;
    flex-direction:column;
  `;
  const imgImageLogo = css`
    width:8rem;
  `;

  const h2NameApp = css`font-size:1rem; text-transform:capitalize; text-align:center; font-weight:500;`;
  return(
    <>
    <div css={mainDivLogin}>
      <div><img src="./images/logo.png" alt="logo" css={imgImageLogo}/></div>
      <h2 css={h2NameApp}>ultimate app</h2>
      <div>
        {children}
      </div>
    </div>
    </>
  )
}

export default LayoutAuth
