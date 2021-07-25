import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import { BikerLayout } from "./BikerLayout";

configure({ adapter: new Adapter() });

describe("<BikerLayout/>", () => {
  it("should render BikerLayout component", () => {
    const wrapper = mount(<BikerLayout bikerParcels={[{}, {}]} history={[]} />);
    expect(wrapper.find(BikerLayout)).toHaveLength(1);
  });
});
