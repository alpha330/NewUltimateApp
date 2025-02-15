import { ThemeProvider } from "@emotion/react";
import theme from "@/configs/themes";
import { Provider } from "react-redux";
import store from "@/configs/store";
import React from "react";
import App from "next/app";

const myApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
);
}

myApp.getInitialProps = async(appContext) => {
 appContext.ctx.reduxStore = store
 const pageProps = await App.getInitialProps(appContext)
 return {
    ...pageProps
 }
}

export default myApp
