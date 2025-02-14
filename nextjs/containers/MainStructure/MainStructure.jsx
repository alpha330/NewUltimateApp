/** @jsxImportSource @emotion/react */
import { Global,css } from "@emotion/react";

const MainStructure = () =>{

  return(
    <Global styles={css`
      main{
        font-family:fa-Shabnam;
        direction:rtl;
        display: grid;
        grid-template-columns:5rem repeat(8,1fr) 5rem;
        grid-template-rows: 5rem repeat(4,1fr) 5rem;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        background-color: rgba(250, 235, 215, 0.247);
      }
    `}/>
  )
}

export default MainStructure
