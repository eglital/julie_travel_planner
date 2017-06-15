import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LocationSelectionContainer
  from "./containers/LocationSelectionContainer";

import InitialSubmissionFormContainer
  from "./containers/InitialSubmissionFormContainer";


import ItineraryOverviewContainer
  from "./containers/ItineraryOverviewContainer";


import Footer from "./components/Footer";

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
            <Route
              path="/itinerary-overview/:itineraryId"
              component={ItineraryOverviewContainer}
            />
            <Route path="*" render={() => <div>Page Not Found</div>} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
