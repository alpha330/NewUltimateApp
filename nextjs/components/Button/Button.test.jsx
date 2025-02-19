import Button from "./Button"
import mountWithTheme from "../../utils/mountWithTheme";
import React from "react";

describe ('Button', () => {
  test(`Render Correctly`,()=>{
    const component = mountWithTheme(<Button>Sample Button</Button>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
