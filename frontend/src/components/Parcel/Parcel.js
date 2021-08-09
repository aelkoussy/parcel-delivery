import "./Parcel.css";

import { Grid, Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";

import FormDialog from "../UI/FormDialog";

const Parcel = (props) => {
  let AssignDialog = null;

  // Open a form & then dispatch the action
  // Here we pass the autocomplete component to be rendered inside the AssignDialog
  AssignDialog =
    props.status === "WAITING" && props.canAssignParcel ? (
      <FormDialog
        title="Assign parcel to biker"
        buttonName="Assign now"
        inputComponent={props.assignAutoSelectComponent}
        dialogSubmitClicked={() => props.dialogSubmitClicked(props.id)}
      />
    ) : null;

  let Assignee = null;

  Assignee = props.assignee ? (
    <div>
      <span>
        <i className="material-icons">assignment_ind</i>
      </span>
      <span className="parcel-assignee">
        {props.assignee.firstName + " " + props.assignee.lastName}
      </span>
    </div>
  ) : null;

  let bikerActionButton = null;

  bikerActionButton =
    props.status === "ASSIGNED" && props.userRole === "biker" ? (
      <FormDialog
        title="Pickup time"
        description="Please enter the time of pickup"
        buttonName="Enter pickup time"
        dialogSubmitClicked={() =>
          props.dialogSubmitPickupTimeClicked(props.id)
        }
        inputComponent={props.choosePickupTimeComponent}
      />
    ) : props.status === "PICKED_UP" && props.userRole === "biker" ? (
      <FormDialog
        title="Delivery time"
        description="Please enter the time of delivery"
        buttonName="Enter delivery time"
        dialogSubmitClicked={() =>
          props.dialogSubmitDeliveryTimeClicked(props.id)
        }
        inputComponent={props.chooseDeliveryTimeComponent}
      />
    ) : null;

  return (
    <div>
      <CssBaseline />
      <Paper className="parcel-paper">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Grid item xs={12} sm={12} md={12} lg={2}>
            <span>Parcel #{props.id} </span>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            <div className="parcel-origin">
              <span>
                <i className="material-icons" style={{ marginRight: 10 }}>
                  flight_takeoff
                </i>
              </span>
              <span> {props.origin} </span>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            <div className="parcel-destination">
              <i className="material-icons" style={{ marginRight: 10 }}>
                flight_land
              </i>
              <span>{props.destination}</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            <span
              className="parcel-status"
              style={
                props.status === "WAITING"
                  ? { color: "red" }
                  : props.status === "DELIVERED"
                  ? { color: "green" }
                  : null
              }
            >
              {props.status}{" "}
            </span>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            {AssignDialog}
            {Assignee}
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            {bikerActionButton}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Parcel;
