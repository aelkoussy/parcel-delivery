import "./App.css";

import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import Biker_layout from "./components/BikerLayout";
import LandingPage from "./components/LandingPage";
import Manager_layout from "./components/ManagerLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route path="/managers" component={Manager_layout} />
            <Route path="/bikers" component={Biker_layout} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
