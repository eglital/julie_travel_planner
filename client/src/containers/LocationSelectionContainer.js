import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LocationSelection from "../components/LocationSelection";
import ProgressBar from "../components/Progress";
import {
  addLocationToItinerary,
  getFinalItinerary
} from "../actions/builderActions";

class LocationSelectionContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  onClickLocation = e => {
    this.props.addLocationToItinerary(
      JSON.parse(e.currentTarget.dataset.loc),
      e.currentTarget.dataset.section,
      e.currentTarget.dataset.itineraryId
    );

    if (
      this.props.itinerary.endTime -
        this.props.itinerary.startTime -
        this.props.builder.duration <=
      7200000
    ) {
      this.props.getFinalItinerary(e.currentTarget.dataset.itineraryId);

      this.props.history.push(
        `/itinerary-overview/${e.currentTarget.dataset.itineraryId}`
      );
    }
  };

  onClickBuildItinerary = () => {
    this.props.getFinalItinerary(this.props.itinerary.id);

    this.props.history.push(`/itinerary-overview/${this.props.itinerary.id}`);
  };

  displayThreeLocations() {
    let loc1 = this.props.locations.food[
      Math.floor(Math.random() * this.props.locations.food.length + 1)
    ];
    let loc2 = this.props.locations.places[
      Math.floor(Math.random() * this.props.locations.places.length + 1)
    ];
    let loc3 = this.props.locations.sights[
      Math.floor(Math.random() * this.props.locations.sights.length + 1)
    ];

    return (
      <div>
        <LocationSelection
          location={loc1}
          section="food"
          itineraryId={this.props.itinerary.id}
          onClick={this.onClickLocation}
        />
        <LocationSelection
          location={loc2}
          section="places"
          itineraryId={this.props.itinerary.id}
          onClick={this.onClickLocation}
        />
        <LocationSelection
          location={loc3}
          section="sights"
          itineraryId={this.props.itinerary.id}
          onClick={this.onClickLocation}
        />
      </div>
    );
  }

  render() {
    console.log('Current state:', this.props);
    return (
      <Container>
        <Row>
          <Col lg={{ size: 8, offset: 2 }}>
            <ProgressBar
              startTime={this.props.itinerary.startTime}
              endTime={this.props.itinerary.endTime}
              duration={this.props.builder.duration}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <p className="text-center">
              Select one of the following to add it to your itinerary, and we'll figure out how to get you there.
            </p>
            {this.displayThreeLocations()}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              Don't want to add anything else?
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center"
            xs={{ size: 6, push: 2, pull: 2, offset: 1 }}
          >
            <Button onClick={this.onClickBuildItinerary}>
              Build Itinerary Now
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.locations.data,
    itinerary: state.itinerary,
    builder: state.builder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addLocationToItinerary: (location, section, itineraryId) => {
      dispatch(addLocationToItinerary(location, section, itineraryId));
    },
    getFinalItinerary: itineraryId => {
      dispatch(getFinalItinerary(itineraryId));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LocationSelectionContainer)
);
