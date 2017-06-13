import React, { Component } from "react";

import LocationSelectionContainer
  from "./containers/LocationSelectionContainer";

import InitialSubmissionFormContainer
  from "./containers/InitialSubmissionFormContainer";

import GoogleMapsContainer from "./containers/GoogleMapsContainer";

class App extends Component {
  render() {
    return (
      <div className="App">

        <LocationSelectionContainer />

        <InitialSubmissionFormContainer />
        <GoogleMapsContainer />
      </div>
    );
  }
}

export default App;
