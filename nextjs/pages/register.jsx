/** @jsxImportSource @emotion/react */
import Head from "next/head";
import { css } from "@emotion/react";
import LayoutAuth from "@/containers/LayoutAuth/LayoutAuth";
import {InputEmail,InputPassword,Button,H2,Space} from "@/components";
import FormControl from "@/containers/FormControl/FormControl";
import { useState } from "react";

export default function Register() {
  const mainDivMainPage = css`
      width:100%;
      height:100%;
      text-align:center;
    `;

  const [formValue,setFormValue] = useState({})

  const handleSubmit=(event)=>{
    if(event){
      event.preventDefault()
    }
    console.log("login page on submit",formValue)
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
        <title>ثبت نام</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={mainDivMainPage}>
        <LayoutAuth>
          <Space/>
          <H2 align={"center"}>لطفا برای ثبتا نام اطلاعات خود را وارد کنید</H2>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <InputEmail onChange={(value)=> handleOnChange('name',value)} type="text" placeholder="نام"/>
            </FormControl>
            <FormControl>
              <InputEmail onChange={(value)=> handleOnChange('email',value)} type="email" placeholder="ایمیل"/>
            </FormControl>
            <FormControl>
              <InputPassword  onChange={(value)=> handleOnChange('password',value)} type="password" placeholder="رمز عبور"/>
            </FormControl>
            <FormControl>
              <InputPassword  onChange={(value)=> handleOnChange('password2',value)} type="password" placeholder="تکرار رمز عبور"/>
            </FormControl>
            <FormControl>
              <Button type="submit">ثبت نام</Button>
            </FormControl>
          </form>
        </LayoutAuth>
      </main>
    </>
  );
}
