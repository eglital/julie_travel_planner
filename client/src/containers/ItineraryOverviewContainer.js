import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSavedItinerary } from '../actions/itineraryActions';
import LocationOverview from '../components/LocationOverview';
import { Container } from 'reactstrap';

class ItineraryOverviewContainer extends Component {
  componentDidMount() {
    if (!this.props.finalItinerary.length) {
      this.props.getSavedItinerary(this.props.match.params.itineraryId);
    }
  }

  render() {
    if (this.props.finalItinerary && this.props.finalItinerary.length < 1) {
      return null;
      // return <Redirect to="/PageNotFound" />;
    } else {
      return (
        <Container>
          {this.props.finalItinerary && this.props.finalItinerary.length
            ? <LocationOverview finalItinerary={this.props.finalItinerary} />
            : null}
        </Container>
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
