import React, { useState } from "react";
import { connect } from "react-redux";

import Parcel from "../components/Parcel/Parcel";
import AutoSelect from "../components/UI/AutoSelect";
import * as actions from "../store/actions";

export const ManagerLayout = (props) => {
  const [autoCompleteValue, setAutoCompleteValue] = useState(null);
  // if the (parcel/bikers) array in state is empty, we will redirect to login page to login & load them
  if (props.parcelsArray.length === 0 || props.bikers.length === 0) {
    props.history.push("/");
  }

  // here we keep track of the typed/chosen value in the autocomplete in the state to use on submit
  const handleAutoSelectValueChosen = (value) => {
    setAutoCompleteValue(value);
  };

  // building the AutoSelect component that will be passed to the dialog
  const assignAutoSelectComponent = (
    <AutoSelect
      autoSelectPlaceholder="Click to select biker, type to narrow down names"
      suggestions={props.bikers}
      onValueChosen={handleAutoSelectValueChosen}
    />
  );

  // here this shall check that the chosen biker name match one of the biker names & dispatch the reducer action to assign to biker
  const assignSubmitClickedHandler = (parcelID) => {
    let chosenBiker =
      autoCompleteValue !== undefined && autoCompleteValue !== null
        ? props.bikers.filter((biker) => biker.id === autoCompleteValue.value)
        : [];

    // if he tries to submit with a name that is not in the bikers, we won't assign
    // TODO dispatch assign action here, with the parcelID & the bikerID or biker Name
    chosenBiker.length !== 0
      ? props.assignParcel(parcelID, chosenBiker[0])
      : console.log("No valid biker chosen"); // TODO use snackbar notification here or a div

    // resetting the chosen value after dispatching the action, so that the chosen name won't stick & will be reset when dialog is closed
    setAutoCompleteValue(null);
  };

  let managerParcelList = props.parcelsArray.map((parcel) => {
    const assignee = props.bikers.find(
      (biker) => String(biker.id) === parcel.UserID
    );

    return (
      <Parcel
        key={parcel.id}
        id={parcel.id}
        origin={parcel.origin}
        destination={parcel.destination}
        status={parcel.status}
        assignee={assignee}
        assigneeID={parcel.UserID}
        canAssignParcel
        assignAutoSelectComponent={assignAutoSelectComponent}
        dialogSubmitClicked={assignSubmitClickedHandler}
        bikers={props.bikers}
      />
    );
  });
  // TODO , possible feature add filters that a manager can use to narrow down the parcels (for example: status, origin , destination ..)

  return (
    <div>
      <h2>Managers panel</h2>
      {managerParcelList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    parcelsArray: state.parcels,
    userRole: state.userRole,
    userID: state.userID,
    bikers: state.bikers,
    firstName: state.userFirstName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    assignParcel: (parcelID, bikerID) => {
      dispatch(actions.assignParcelAsync(parcelID, bikerID));
    },
    getParcels: () => {
      dispatch(actions.getParcelsAsync());
    },
    getBikers: () => {
      dispatch(actions.getBikersAsync());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManagerLayout);
