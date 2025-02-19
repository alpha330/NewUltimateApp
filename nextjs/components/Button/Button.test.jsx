import Button from "./Button"
import mountWithTheme from "../../utils/mountWithTheme";
import {render,fireEvent } from '@testing-library/react';
import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../configs/themes";

describe ('Button', () => {
  test(`Render Correctly`,()=>{
    const component = mountWithTheme(<Button>Sample Button</Button>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test(`show loading state`,()=>{
    const component = mountWithTheme(<Button loading>Button with loading</Button>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test(`show disabled state`,()=>{
    const component = mountWithTheme(<Button disabled>Button with loading</Button>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  test("Renders in DOM Correctly", () => {
    const {getByText} = render(
      <ThemeProvider theme={theme}>
        <Button>Sample Button in Dom</Button>
      </ThemeProvider>
    );
    expect(getByText(/Sample/)).toBeTruthy();
  });
  test("Button on clicks works fine", () => {
    let variable = 1
    const {getByText} = render(
      <ThemeProvider theme={theme}>
        <Button handleClick={()=>{ variable += 1}} >Sample Button in Dom</Button>
      </ThemeProvider>
    );
    fireEvent.click(getByText(/Sample/));
    expect(variable).toBe(2);
  });
})
