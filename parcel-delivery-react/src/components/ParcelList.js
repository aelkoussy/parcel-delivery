import React from "react";
import Parcel from "./Parcel";
import { connect } from "react-redux";

// const parcelsArray

const ParcelList = props => {
  return props.parcelsArray.map(parcel => {
    return (
      <Parcel
        id={parcel.id}
        origin={parcel.origin}
        destination={parcel.destination}
        status={parcel.status}
        assignee={parcel.assignee}
        canAssignParcel={props.canAssignParcel}
      />
    );
  });
};

const mapStateToProps = state => {
  return {
    parcelsArray: state.parcels
    // canAssignParcel: state.canAssignParcel
  };
};

// TODO map to reducer actions
// const mapDispatchToProps = state => {

// }

export default connect(
  mapStateToProps,
  null
)(ParcelList);
