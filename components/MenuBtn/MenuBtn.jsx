/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState,useRef } from "react";

const MenuBtn = () => {
  const mainMenuRef = useRef(null)
  const [click,setClick] = useState(false)

  const menuDiv = css`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    padding: .2rem;
    position: fixed;
    background-color: white;
    top:2.5%;
    left:95%;
    box-shadow:1rem 1rem 1rem rgba(0, 0, 0, 0.39);
    cursor:pointer;
    transition: all 700ms ease-out;
    z-index:1000;
    &:hover{
      scale:1.1;
    }
  `;
  const spanDiv= css`
    border:1px solid black;
    width:60%;
    display:block;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  `;

  const mainMenu = css`
    width:95%;
    height:3.8rem;
    padding:.5rem;
    position:fixed;
    background-color:green;
    margin:1.1rem 2rem;
    border-radius:35px;
    display:none;
  `;

  const onClickMenu = () =>{
    console.log("useRef",mainMenuRef)
  }

  return (
    <>
    <div onClick={onClickMenu()} css={menuDiv}>
      <span css={spanDiv}></span>
    </div>
    <div useref={mainMenuRef} css={mainMenu}>
    </div>
    </>

  )
}

export default MenuBtn
