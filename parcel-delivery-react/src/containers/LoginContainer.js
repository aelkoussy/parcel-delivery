import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    // redirecting based on user role
    switch (this.props.role) {
      case "manager":
        this.props.history.push("/managers");
        break;
      case "biker":
        this.props.history.push("/bikers");
        break;

      default:
    }

    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <h2>Please enter your credentials to login</h2>
          <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange("email")}
            margin="normal"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
            margin="normal"
          />
          <Button onClick={() => this.validateThenLogin()} color="primary">
            Submit
          </Button>
        </Grid>
      </div>
    );
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  validateThenLogin = () => {
    // TODO add some validation logic before calling login here
    this.props.login(this.state.email, this.state.password);
  };
}

const mapStateToProps = state => {
  return {
    parcelsArray: state.parcels,
    userRole: state.userRole,
    userID: state.userID,
    bikers: state.bikers,
    authDetails: state.authDetails,
    role: state.role
  };
};

const mapDispatchToProps = dispatch => {
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
    login: (email, password) => {
      dispatch(actions.loginAsync(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
