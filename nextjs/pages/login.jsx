/** @jsxImportSource @emotion/react */
import Head from "next/head";
import { css } from "@emotion/react";
import LayoutAuth from "@/containers/LayoutAuth/LayoutAuth";
import {InputEmail,InputPassword,Button,H2,Space} from "@/components";
import FormControl from "@/containers/FormControl/FormControl";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import actionTypse from "@/configs/actionTypes";

export default function Login() {
  const mainDivMainPage = css`
      width:100%;
      height:100%;
      text-align:center;
    `;

  const [formValue,setFormValue] = useState({})
  const router = useRouter()
  const dispatch = useDispatch()

  const handleSubmit=(event)=>{
    if(event){
      event.preventDefault()
    }
    // handleing calling api
    console.log("login page on submit",formValue)
    dispatch({
      type:actionTypse.LOGIN,
      logged:true,
      email:formValue.email,
    })
    //if success
    router.push('/')

  }

  const handleOnChange = (name,value) =>{
    setFormValue({
      ...formValue,
      [name]:value,
    })
  }


  return (
    <>
      <Head>
        <title>ورود</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={mainDivMainPage}>
        <LayoutAuth>
          <Space/>
          <H2 align={"center"}>ریموت جاب</H2>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputEmail onChange={(value)=> handleOnChange('email',value)} type="email" placeholder="ایمیل"/>
            </FormControl>
            <FormControl>
              <InputPassword  onChange={(value)=> handleOnChange('password',value)} type="password" placeholder="رمز عبور"/>
            </FormControl>
            <FormControl>
              <Button type="submit">ارسال</Button>
            </FormControl>
          </form>
        </LayoutAuth>
      </main>
    </>
  );
}
