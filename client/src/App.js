import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LocationSelectionContainer
  from "./containers/LocationSelectionContainer";

import InitialSubmissionFormContainer
  from "./containers/InitialSubmissionFormContainer";

import ItineraryOverviewContainer
  from "./containers/ItineraryOverviewContainer";

import PageNotFoundComponent from "./components/PageNotFoundComponent";

import TermsOfService from "./components/TermsOfService";

import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route
                path="/itinerary-creation"
                component={LocationSelectionContainer}
              />
              <Route
                exact
                path="/"
                component={InitialSubmissionFormContainer}
              />
              <Route
                path="/itinerary-overview/:itineraryId"
                component={ItineraryOverviewContainer}
              />
              <Route exact path="/terms" component={TermsOfService} />
              <Route component={PageNotFoundComponent} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
