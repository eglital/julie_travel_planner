import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LocationSelectionContainer
  from "./containers/LocationSelectionContainer";
import InitialSubmissionFormContainer
  from "./containers/InitialSubmissionFormContainer";
import ItineraryOverviewContainer
  from "./containers/ItineraryOverviewContainer";
import SavedItinerariesContainer from "./containers/SavedItinerariesContainer";
import PageNotFoundComponent from "./components/PageNotFoundComponent";
import About from "./components/About";
import TermsOfService from "./components/TermsOfService";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <div className="app-body">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/saved" component={SavedItinerariesContainer} />
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
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
