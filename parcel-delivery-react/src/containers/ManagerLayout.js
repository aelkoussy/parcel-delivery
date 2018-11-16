import React from "react";
import { connect } from "react-redux";

import Parcel from "../components/Parcel";
import AutoSelect from "../components/UI/AutoSelect";
import * as actions from "../store/actions";

let autoCompleteValue;

// here we keep track of the typed/chosen value in the autocomplete in a local variable to use on submit
const handleAutoSelectValueChosen = value => {
  autoCompleteValue = value;
  console.log(autoCompleteValue);
};

const ManagerLayout = props => {
  // building the AutoSelect component that will be passed to the dialog

  const assignAutoSelectComponent = (
    <AutoSelect
      autoSelectPlaceholder="Please select a biker, type to narrow down the names"
      suggestions={props.bikerNames}
      onValueChosen={handleAutoSelectValueChosen}
    />
  );

  // here this shall check that the chosen biker name match one of the biker names & dispatch the reducer action to assign to biker
  const assignSubmitClickedHandler = parcelID => {
    let chosenElement =
      autoCompleteValue !== undefined && autoCompleteValue !== null
        ? props.bikerNames.filter(
            bikerName => bikerName.name === autoCompleteValue.value
          )
        : [];

    // if he tries to submit with a name that is not in the bikers, we won't assign
    // TODO dispatch assign action here, with the parcelID & the bikerID or biker Name
    chosenElement.length !== 0
      ? props.assignParcel(parcelID, chosenElement[0].name)
      : console.log("No valid biker chosen"); // TODO use snackbar notification here or a div

    // resetting the chosen value after dispatching the action, so that the chosen name won't stick & will be reset when dialog is closed
    autoCompleteValue = null;
  };

  const managerParcelList = props.parcelsArray.map(parcel => {
    return (
      <Parcel
        key={parcel.id}
        id={parcel.id}
        origin={parcel.origin}
        destination={parcel.destination}
        status={parcel.status}
        assignee={parcel.assignee}
        canAssignParcel
        assignAutoSelectComponent={assignAutoSelectComponent}
        dialogSubmitClicked={assignSubmitClickedHandler}
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
    userID: state.userID,
    bikerNames: state.bikerNames
  };
};

const mapDispatchToProps = dispatch => {
  return {
    assignParcel: (parcelID, bikerID) => {
      dispatch(actions.assignParcel(parcelID, bikerID));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerLayout);
