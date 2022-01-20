import { shallow } from "../enzyme";
import React from "react";
import { Title } from "../Title";

describe("title Tests", () => {
  it("Title component is defined", () => {
    const wrapper = shallow(React.createElement(Title));
    expect(wrapper).toBeDefined();
  });
  it("it displays correct title", () => {
    const wrapper = shallow(React.createElement(Title));
    expect(wrapper.find("p").text()).toEqual("Vending Machine");
  });
});
