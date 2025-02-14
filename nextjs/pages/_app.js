import { ThemeProvider } from "@emotion/react";
import theme from "@/configs/themes";
import { Provider } from "react-redux";
import store from "@/configs/store";
import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
);
}

export default App
