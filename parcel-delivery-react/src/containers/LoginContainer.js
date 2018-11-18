import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router";

class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
    valid: true // just to avoid displaying error message in the beginning, before login is submitted it is checked again
  };

  render() {
    const validationMsg = this.state.valid ? null : (
      <p style={{ color: "red" }}>Please enter valid data</p>
    );
    // redirecting based on user role
    switch (this.props.role) {
      case "manager":
        this.props.getParcels();
        this.props.getBikers();
        break;
      case "biker":
        this.props.getBikerParcels();
        break;

      default:
    }

    if (this.props.parcels.length > 0 && this.props.bikers.length > 0) {
      return <Redirect to="/managers" />;
    }

    if (this.props.parcels.length > 0 && this.props.role === "biker") {
      return <Redirect to="/bikers" />;
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

          {validationMsg}

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

    var simpleEmailCheck = /\S+@\S+\.\S+/;
    let validation = simpleEmailCheck.test(this.state.email);
    validation = validation && (this.state.password != null || "");

    validation
      ? this.setState({
          valid: true
        })
      : this.setState({ valid: false });

    if (validation) {
      this.props.login(this.state.email, this.state.password);
    }
  };
}

const mapStateToProps = state => {
  return {
    parcels: state.parcels,
    userRole: state.userRole,
    userID: state.userID,
    bikers: state.bikers,
    authDetails: state.authDetails,
    role: state.role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getParcels: () => {
      dispatch(actions.getParcelsAsync());
    },
    getBikers: () => {
      dispatch(actions.getBikersAsync());
    },
    login: (email, password) => {
      dispatch(actions.loginAsync(email, password));
    },
    getBikerParcels: () => {
      dispatch(actions.getBikerParcelsAsync());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
