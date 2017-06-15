import React, { Component } from "react";
import { connect } from "react-redux";
import { getSavedItinerary } from "../actions/builderActions";
import LocationOverview from "../components/LocationOverview";
import GoogleMaps from "../components/GoogleMaps";

class ItineraryOverviewContainer extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    if (!this.props.finalItinerary.length) {
      this.props.getSavedItinerary(this.props.match.params.itineraryId);
    }
  }

  render() {
    return (
      <div>
        {this.props.finalItinerary && this.props.finalItinerary.length
          ? <div>
              <LocationOverview />
              <GoogleMaps finalItinerary={this.props.finalItinerary} />
            </div>
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    finalItinerary: state.builder.finalItinerary
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSavedItinerary: itineraryId => {
      dispatch(getSavedItinerary(itineraryId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ItineraryOverviewContainer
);
