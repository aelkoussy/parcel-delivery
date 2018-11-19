import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import { ManagerLayout } from "./ManagerLayout";

configure({ adapter: new Adapter() });

describe("<ManagerLayout/>", () => {
  it("should render ManagerLayout component", () => {
    const wrapper = mount(
      <ManagerLayout parcelsArray={[{}, {}]} bikers={[{}, {}]} />
    );
    expect(wrapper.find(ManagerLayout)).toHaveLength(1);
  });
});
