import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Parcel from "./Parcel";
import FormDialog from "./UI/FormDialog";

configure({ adapter: new Adapter() });

describe("<Parcel/>", () => {
  it("should render parcel component", () => {
    const wrapper = mount(<Parcel />);
    expect(wrapper.find(Parcel)).toHaveLength(1);
  });

  it("For manager, it shows the assign button that has a dialog", () => {
    const wrapper = shallow(<Parcel status="WAITING" canAssignParcel />);
    expect(wrapper.find(FormDialog)).toHaveLength(1);
  });

  it("For biker, it shows submit pickup timestamp button that has a dialog if parcel status is ASSIGNED", () => {
    const wrapper = shallow(<Parcel userRole="biker" status="ASSIGNED" />);
    expect(wrapper.find(FormDialog)).toHaveLength(1);
  });

  it("For biker, it shows submit delivery timestamp button that has a dialog if parcel status is PICKED_UP", () => {
    const wrapper = shallow(<Parcel userRole="biker" status="PICKED_UP" />);
    expect(wrapper.find(FormDialog)).toHaveLength(1);
  });

  it("For biker, if given assignee object with firstName & lastName it will display them ", () => {
    const assignee = { firstName: "Muller", lastName: "Karl" };
    const wrapper = shallow(
      <Parcel userRole="biker" status="PICKED_UP" assignee={assignee} />
    );
    expect(
      wrapper.contains(<span className="parcel-assignee">Muller Karl</span>)
    ).toBeTruthy();
  });
});
