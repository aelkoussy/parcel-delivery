import React from "react";
import { connect } from "react-redux";

import Parcel from "../components/Parcel";
import DateTime from "../components/UI/DateTimePicker";
import * as actions from "../store/actions";

const BikerLayout = props => {
  // This filters parcels such that the assignee id is equal to the biker id
  if (props.bikerParcels.length === 0) {
    props.getBikerParcels();
  }
  const filteredParcels = props.bikerParcels.filter(
    parcel =>
      parcel.status === "ASSIGNED" ||
      parcel.status === "PICKED_UP" ||
      parcel.status === "DELIVERED"
  );

  let pickupTime = new Date();
  let deliveryTime = new Date();

  const pickupTimeChangedHandler = time => {
    pickupTime = time;
    console.log("from Biker: pickup time is:" + pickupTime);
  };

  const deliveryTimeChangedHandler = time => {
    pickupTime = time;
    console.log("from Biker: pickup time is:" + pickupTime);
  };
  // here we assign the time choice component to be loaded in the parcel dialog on clicking the action button

  const choosePickupTimeComponent = (
    <DateTime onDateTimeChosen={pickupTimeChangedHandler} />
  );
  const chooseDeliveryTimeComponent = (
    <DateTime onDateTimeChosen={deliveryTimeChangedHandler} />
  );

  const dialogSubmitPickupTimeClickedHandler = parcelID => {
    // dispatch submitPickupTime action here with the time
    console.log(
      pickupTime + "is chosen for pickup time for parcel: " + parcelID
    );

    props.enterPickupTime(parcelID, pickupTime);
  };
  const dialogSubmitDeliveryTimeClickedHandler = parcelID => {
    // dispatch submitDeliveryTime action here with the time
    console.log(
      deliveryTime + "is chosen for pickup time for parcel: " + parcelID
    );

    props.enterDeliveryTime(parcelID, deliveryTime);
  };

  const parcelsToDisplay = filteredParcels.map(parcel => {
    return (
      <div key={parcel.id}>
        <Parcel
          id={parcel.id}
          origin={parcel.origin}
          destination={parcel.destination}
          status={parcel.status}
          assigneeID={parcel.UserID}
          userRole={props.role}
          dialogSubmitPickupTimeClicked={dialogSubmitPickupTimeClickedHandler}
          dialogSubmitDeliveryTimeClicked={
            dialogSubmitDeliveryTimeClickedHandler
          }
          choosePickupTimeComponent={choosePickupTimeComponent}
          chooseDeliveryTimeComponent={chooseDeliveryTimeComponent}
        />
      </div>
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
    bikerParcels: state.parcels,
    authDetails: state.authDetails,
    role: state.role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    enterPickupTime: (parcelID, pickupTime) => {
      dispatch(actions.enterPickupTimeAsync(parcelID, pickupTime));
    },
    enterDeliveryTime: (parcelID, deliveryTime) => {
      dispatch(actions.enterDeliveryTimeAsync(parcelID, deliveryTime));
    },
    getBikerParcels: () => {
      dispatch(actions.getBikerParcelsAsync());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BikerLayout);
