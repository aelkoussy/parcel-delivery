import React from "react";
import { Card, Grid, Button, Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./Parcel.css";
// import styled from "styled-components";

const Parcel = props => {
  let AssignButton = null;

  AssignButton =
    props.status === "WAITING" && props.canAssignParcel ? (
      <Button color="primary" onClick={() => console.log("Assign now")}>
        Assign now
      </Button>
    ) : null;

  let Assignee = null;

  Assignee = props.assignee ? (
    <span className="parcel-assignee">{props.assignee} </span>
  ) : null;

  let bikerActionButton = null;

  bikerActionButton =
    props.status === "ASSIGNED" && props.userRole === "biker" ? (
      <Button color="primary" onClick={() => console.log("pick up timestamp")}>
        Enter pick up timestamp
      </Button>
    ) : props.status === "PICKED_UP" && props.userRole === "biker" ? (
      <Button color="primary" onClick={() => console.log("delivery timestamp")}>
        Enter delivery timestamp
      </Button>
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
            <span className="parcel-origin">From: {props.origin} </span>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            <span className="parcel-destination">To: {props.destination} </span>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            <span className="parcel-status">{props.status} </span>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={2}>
            {AssignButton}
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
