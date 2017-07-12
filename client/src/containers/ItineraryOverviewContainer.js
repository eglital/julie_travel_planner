import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getSavedItinerary } from "../actions/itineraryActions";
import LocationOverview from "../components/LocationOverview";
import { shareByEmail } from "../helpers/emailHelper";

class ItineraryOverviewContainer extends Component {
  componentDidMount() {
    if (!this.props.finalItinerary.length) {
      this.props.getSavedItinerary(this.props.match.params.itineraryId);
    }
  }
  render() {
    if (!this.props.finalItinerary) {
      return <Redirect to="/PageNotFound" />;
    } else {
      return (
        <div>
          {this.props.finalItinerary.length
            ? <LocationOverview
                finalItinerary={this.props.finalItinerary}
                transportation={this.props.transportationMode}
                id={this.props.match.params.itineraryId}
                shareByEmail={this.props.shareByEmail}
              />
            : null}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    finalItinerary: state.itinerary.finalItinerary,
    transportationMode: state.itinerary.transportationMode
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSavedItinerary: itineraryId => {
      dispatch(getSavedItinerary(itineraryId));
    },
    shareByEmail: form => {
      dispatch(shareByEmail(form));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ItineraryOverviewContainer
);
