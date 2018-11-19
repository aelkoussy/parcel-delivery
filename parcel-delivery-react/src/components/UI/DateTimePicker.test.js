import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import DateTimePicker from "./DateTimePicker";

configure({ adapter: new Adapter() });

describe("<DateTimePicker/>", () => {
  it("should render DateTimePicker component", () => {
    const wrapper = mount(<DateTimePicker />);
    expect(wrapper.find(DateTimePicker)).toHaveLength(1);
  });
});
