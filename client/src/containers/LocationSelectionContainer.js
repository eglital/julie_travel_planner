import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import LocationSelection from '../components/LocationSelection';
import ProgressBar from '../components/Progress';
//import locationsExample = require('.../helpers/locationsExample');
import locationsExample from './locationsExample';

class LocationSelectionContainer extends Component {
  constructor() {
    super();

    this.state = {
      locations: locationsExample
    };
  }

  componentDidMount() {}

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
        <LocationSelection location={loc1} />
        <LocationSelection location={loc2} />
        <LocationSelection location={loc3} />
      </div>
    );
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ProgressBar />
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
  return {
    locations: state.location
  };
};

export default connect(mapStateToProps)(LocationSelectionContainer);
