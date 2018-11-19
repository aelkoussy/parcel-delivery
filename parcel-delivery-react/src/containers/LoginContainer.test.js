import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { Redirect } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import { LoginContainer } from "./LoginContainer";

configure({ adapter: new Adapter() });

describe("<LoginContainer/>", () => {
  it("should render LoginContainer component", () => {
    const wrapper = mount(
      <LoginContainer parcels={[{}, {}]} bikers={[{}, {}]} />
    );
    expect(wrapper.find(LoginContainer)).toHaveLength(1);
  });
  it("should render LoginContainer component", () => {
    const wrapper = mount(
      <Router>
        <LoginContainer
          parcels={[{}, {}]}
          bikers={[{}, {}]}
          role="manager"
          getParcels={() => {}}
          getBikers={() => {}}
        />
      </Router>
    );
    expect(wrapper.find(LoginContainer));
    expect(wrapper.contains(<Redirect to="/managers" />)).toBeTruthy();
  });
  it("should render LoginContainer component & Redirect to /bikers if role is biker", () => {
    const wrapper = mount(
      <Router>
        <LoginContainer
          parcels={[{}, {}]}
          bikers={[{}, {}]}
          role="biker"
          getBikerParcels={() => {}}
        />
      </Router>
    );
    expect(wrapper.find(LoginContainer));
    expect(wrapper.contains(<Redirect to="/bikers" />)).toBeTruthy();
  });
});
