import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import FormDialog from "./FormDialog";

configure({ adapter: new Adapter() });

describe("<FormDialog/>", () => {
  it("should render FormDialog component", () => {
    const wrapper = mount(<FormDialog />);
    expect(wrapper.find(FormDialog)).toHaveLength(1);
  });
});
