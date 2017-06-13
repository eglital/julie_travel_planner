import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import LocationSelection from '../components/LocationSelection';
import ProgressBar from '../components/Progress';
import locationsExample from './locationsExample';
import { addLocationToItinerary } from '../actions/builderActions';

class LocationSelectionContainer extends Component {
  constructor() {
    super();

    this.state = {
      locations: locationsExample,
      itineraryId: '59404339c6eef4b96d7cb451',
      duration: 40,
      startTime: 0,
      endTime: 100
    };
  }

  componentDidMount() {}

  onClickLocation = e => {
    this.props.addLocationToItinerary(
      e.currentTarget.dataset.location,
      e.currentTarget.dataset.section,
      e.currentTarget.dataset.itineraryId
    );

    if (this.state.endTime - this.state.duration < 10) {
      //this.props.history.push(e.currentTarget.dataset.itineraryId);
    } else {
      this.render();
    }
  };

  displayThreeLocations() {
    let loc1 = this.state.locations.food[
      Math.floor(Math.random() * locationsExample.food.length + 1)
    ];
    let loc2 = this.state.locations.places[
      Math.floor(Math.random() * locationsExample.places.length + 1)
    ];
    let loc3 = this.state.locations.sights[
      Math.floor(Math.random() * locationsExample.sights.length + 1)
    ];

    return (
      <div>
        <LocationSelection
          location={loc1}
          section="food"
          itineraryId={this.state.itineraryId}
          onClick={this.onClickLocation}
        />
        <LocationSelection
          location={loc2}
          section="places"
          itineraryId={this.state.itineraryId}
          onClick={this.onClickLocation}
        />
        <LocationSelection
          location={loc3}
          section="sights"
          itineraryId={this.state.itineraryId}
          onClick={this.onClickLocation}
        />
      </div>
    );
  }

  render() {
    console.log('rendered');
    return (
      <Container>
        <Row>
          <Col>
            <ProgressBar
              startTime={this.state.startTime}
              endTime={this.state.endTime}
              duration={this.state.duration}
            />
          </Col>
        </Row>
        <Row>
          <Col>
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
            <Button>
              Build Itinerary Now
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {

  return {};

};

const mapDispatchToProps = dispatch => {
  return {
    addLocationToItinerary: (location, section, itineraryId) => {
      dispatch(addLocationToItinerary(location, section, itineraryId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  LocationSelectionContainer
);
