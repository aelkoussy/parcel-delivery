import "./Parcel.css";

import { Grid, Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import React from "react";

import FormDialog from "./UI/FormDialog";
import IntegrationAutosuggest from "./UI/Autocomplete";

// import styled from "styled-components";

// const assignClickHandler = myMsg => console.log("Assign now " + myMsg);

const Parcel = props => {
  let AssignDialog = null;
  const textField = (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="hey"
      type="email"
      fullWidth
    />
  );

  const suggestions = [
    { label: "Afghanistan" },
    { label: "Aland Islands" },
    { label: "Albania" },
    { label: "Algeria" },
    { label: "American Samoa" },
    { label: "Andorra" },
    { label: "Angola" },
    { label: "Anguilla" },
    { label: "Antarctica" },
    { label: "Antigua and Barbuda" },
    { label: "Argentina" },
    { label: "Armenia" },
    { label: "Aruba" },
    { label: "Australia" },
    { label: "Austria" },
    { label: "Azerbaijan" },
    { label: "Bahamas" },
    { label: "Bahrain" },
    { label: "Bangladesh" },
    { label: "Barbados" },
    { label: "Belarus" },
    { label: "Belgium" },
    { label: "Belize" },
    { label: "Benin" },
    { label: "Bermuda" },
    { label: "Bhutan" },
    { label: "Bolivia, Plurinational State of" },
    { label: "Bonaire, Sint Eustatius and Saba" },
    { label: "Bosnia and Herzegovina" },
    { label: "Botswana" },
    { label: "Bouvet Island" },
    { label: "Brazil" },
    { label: "British Indian Ocean Territory" },
    { label: "Brunei Darussalam" }
  ];

  const AssignAutocomplete = (
    <IntegrationAutosuggest
      suggestion={suggestions}
      autocompleteLabel="type to search bikers, click to select"
    />
  );

  // Open a form & then dispatch the action
  // Here we pass the autocomplete component to be rendered inside the AssignDialog
  AssignDialog =
    props.status === "WAITING" && props.canAssignParcel ? (
      <FormDialog
        title="Assign parcel to biker"
        description="Please type the biker name to assign this parcel to"
        buttonName="Assign now"
        inputComponent={AssignAutocomplete}
      />
    ) : null;

  let Assignee = null;

  Assignee = props.assignee ? (
    <span className="parcel-assignee">{props.assignee} </span>
  ) : null;

  let bikerActionButton = null;

  bikerActionButton =
    props.status === "ASSIGNED" && props.userRole === "biker" ? (
      <FormDialog
        title="Pickup time"
        description="Please enter the time of pickup"
        buttonName="Enter pickup time"
      />
    ) : props.status === "PICKED_UP" && props.userRole === "biker" ? (
      <FormDialog
        title="Delivery time"
        description="Please enter the time of delivery"
        buttonName="Enter delivery time"
      />
    ) : null;

  return (
    <div>
      <CssBaseline />
      <Paper
        className="parcel-paper"
        // style={props.status === "WAITING" ? { backgroundColor: "red" } : null}
      >
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
            <span className="parcel-origin">From: {props.origin} </span>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            <span className="parcel-destination">To: {props.destination} </span>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            <span className="parcel-status">{props.status} </span>
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
