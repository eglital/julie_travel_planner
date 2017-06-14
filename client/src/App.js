import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LocationSelectionContainer
  from "./containers/LocationSelectionContainer";

import InitialSubmissionFormContainer
  from "./containers/InitialSubmissionFormContainer";

import GoogleMaps from "./components/GoogleMaps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/itinerary-creation"
              component={LocationSelectionContainer}
            />
            <Route exact path="/" component={InitialSubmissionFormContainer} />
            <Route path="/itinerary-overview" component={GoogleMaps} />
            <Route path="*" render={() => <div>Page Not Found</div>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
