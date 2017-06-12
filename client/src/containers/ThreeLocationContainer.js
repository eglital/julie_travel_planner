import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import LocationResult from '../components/LocationResult';
import ProgressBar from '../components/Progress';

class ThreeLocationContainer extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

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
            <LocationResult />
            <LocationResult />
            <LocationResult />
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

export default ThreeLocationContainer;
