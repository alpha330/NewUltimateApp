import { ThemeProvider } from "@emotion/react";
import theme from "../configs/themes";
import renderer from 'react-test-renderer';
import React from "react";

const mountWithTheme = (children) => {
  return renderer.create(
    <ThemeProvider theme={theme}>
          {children}
    </ThemeProvider>
  )

}

export default mountWithTheme
