import React from "react";
import Parcel from "../components/Parcel";
import { connect } from "react-redux";

const ManagerLayout = props => {
  const managerParcelList = props.parcelsArray.map(parcel => {
    return (
      <Parcel
        id={parcel.id}
        origin={parcel.origin}
        destination={parcel.destination}
        status={parcel.status}
        assignee={parcel.assignee}
        canAssignParcel
      />
    );
  });

  // TODO , possible feature add filters that a manager can use to narrow down the parcels (for example: status, origin , destination ..)

  return (
    <div>
      <h2>Manager panel</h2>
      {managerParcelList}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    parcelsArray: state.parcels,
    userRole: state.userRole,
    userID: state.userID
  };
};

export default connect(
  mapStateToProps,
  null
)(ManagerLayout);
