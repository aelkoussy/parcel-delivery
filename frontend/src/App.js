import "./App.css";

import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import Biker_layout from "./containers/BikerLayout";
import Manager_layout from "./containers/ManagerLayout";
import LoginContainer from "./containers/LoginContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route path="/managers" component={Manager_layout} />
            <Route path="/bikers" component={Biker_layout} />
            <Route path="/" component={LoginContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
