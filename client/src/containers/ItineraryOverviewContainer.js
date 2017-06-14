import React, { Component } from "react";
import { connect } from "react-redux";
import { getFinalItinerary } from "../actions/builderActions";
import LocationOverview from "../components/LocationOverview";
import GoogleMaps from "../components/GoogleMaps";

class ItineraryOverviewContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return <div><LocationOverview /><GoogleMaps /></div>;
  }
}

const mapStateToProps = state => {
  return;
};
const mapDispatchToProps = dispatch => {
  return;
};

export default connect(null, null)(ItineraryOverviewContainer);
