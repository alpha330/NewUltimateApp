import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import theme from "@/configs/themes";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
);
}

export default App
