import React from "react";
import { connect } from "react-redux";
import Parcel from "./Parcel";

const BikerLayout = props => {
  // TODO This shall be filtered such that the assignee id is equal to the biker id
  const filteredParcels = props.parcelsArray.filter(parcel => parcel.id < 3);

  const parcelsToDisplay = filteredParcels.map(parcel => {
    return (
      <Parcel
        id={parcel.id}
        origin={parcel.origin}
        destination={parcel.destination}
        status={parcel.status}
        assignee={parcel.assignee}
      />
    );
  });

  // Below we return the component after constructing its parts as shown above

  return (
    <div>
      <h2>Bikers view</h2>
      {parcelsToDisplay}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    parcelsArray: state.parcels
  };
};

// const mapDispatchToProps = state => {

// }

export default connect(
  mapStateToProps,
  null
)(BikerLayout);
