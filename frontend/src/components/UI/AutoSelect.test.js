import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import AutoSelect from "./AutoSelect";

configure({ adapter: new Adapter() });

describe("<AutoSelect/>", () => {
  it("should render AutoSelect component with req props autoSelectPlaceholder & suggestions array", () => {
    const wrapper = mount(
      <AutoSelect
        autoSelectPlaceholder="hello"
        suggestions={[{ id: "123", firstName: "Karl", lastName: "David" }]}
      />
    );
    expect(wrapper.find(AutoSelect)).toHaveLength(1);
  });
});
