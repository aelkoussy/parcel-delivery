import "./App.css";

import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import Biker_layout from "./components/BikerLayout";
import LandingPage from "./components/LandingPage";
import Manager_layout from "./components/ManagerLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Route path="/managers" component={Manager_layout} />
          <Route path="/bikers" component={Biker_layout} />
        </div>
        <LandingPage />
      </div>
    );
  }
}

export default withRouter(App);
