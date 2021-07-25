import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Autocomplete from "./Autocomplete";

configure({ adapter: new Adapter() });

describe("<Autocomplete/>", () => {
  it("should render Autocomplete component with req props autocompleteLabel & suggestions array", () => {
    const wrapper = mount(
      <Autocomplete
        autocompleteLabel="hello"
        suggestions={["Muller", "Mark"]}
      />
    );
    expect(wrapper.find(Autocomplete)).toHaveLength(1);
  });
});
