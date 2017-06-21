import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getSavedItinerary } from '../actions/itineraryActions';
import LocationOverview from '../components/LocationOverview';
import { shareByEmail } from '../helpers/emailHelper';

class ItineraryOverviewContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
            ? <div>
                <LocationOverview
                  finalItinerary={this.props.finalItinerary}
                  transportation={this.props.transportationMode}
                  shareByEmail={this.props.shareByEmail}
                />
              </div>
            : null}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    finalItinerary: state.itinerary.finalItinerary,
    transportationMode: state.itinerary.transportationMode,
    id: state.itinerary.id
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
