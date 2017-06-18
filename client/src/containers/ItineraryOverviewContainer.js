import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getSavedItinerary } from "../actions/itineraryActions";
import LocationOverview from "../components/LocationOverview";

class ItineraryOverviewContainer extends Component {
  componentDidMount() {
    if (!this.props.finalItinerary.length) {
      this.props.getSavedItinerary(this.props.match.params.itineraryId);
    }
  }

  render() {
    console.log(this.props.finalItinerary);
    if (!this.props.finalItinerary) {
      return <Redirect to="/PageNotFound" />;
    } else {
      return (
        <div>
          {this.props.finalItinerary.length
            ? <div>
                <LocationOverview finalItinerary={this.props.finalItinerary} />
              </div>
            : null}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    finalItinerary: state.itinerary.finalItinerary
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
