import React from 'react';
import PropTypes from 'prop-types';
import LocationSegment from './LocationSegment';
import TravelSegment from './TravelSegment';
import GoogleMaps from './GoogleMaps';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import ShareTwitterButton from './ShareTwitterButton';
import ShareFacebookButton from './ShareFacebookButton';

function makeOverview(finalItinerary) {
  return finalItinerary.map((location, index) => {
    let nextLocation = finalItinerary[index + 1];
    if (index === finalItinerary.length - 1) {
      return (
        <div key={index}>
          <LocationSegment
            arrivalTime={location.arrivalTime}
            departureTime={location.departureTime}
            locationData={{
              name: 'Ending Location',
              photo: '/map.png'
            }}
          />
        </div>
      );
    } else if (index === 0) {
      return (
        <div key={index}>
          <LocationSegment
            arrivalTime={location.arrivalTime}
            departureTime={location.departureTime}
            locationData={{
              name: 'Starting Location',
              photo: '/map.png'
            }}
          />
          <TravelSegment
            duration={nextLocation.arrivalTime - location.departureTime}
          />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <LocationSegment
            arrivalTime={location.arrivalTime}
            departureTime={location.departureTime}
            locationData={{
              link: location.link,
              name: location.name,
              photo: location.photo,
              category: location.category
            }}
          />
          <TravelSegment
            duration={nextLocation.arrivalTime - location.departureTime}
          />
        </div>
      );
    }
  });
}

const LocationOverview = ({ finalItinerary }) => {
  return (
    <div
      className="LocationOverview"
      style={{
        marginBottom: 20 /*Should be equal to the height of the footer*/
      }}
    >
      <Row style={{ marginTop: '15px', marginBottom: '15px' }}>
        <Col className="text-center">
          <Link to="/">
            <Button outline color="info" size="sm">Plan New Route</Button>
          </Link>
        </Col>
        {/* <Col className="text-center">
        <ShareTwitterButton />
          <ShareFacebookButton />
        </Col> */}
      </Row>

      <Row>
        <Col />
        <Col />
      </Row>
      {makeOverview(finalItinerary)}
      <GoogleMaps finalItinerary={finalItinerary} />

      <div>
        Share my route:
      </div>
      <Link to="/">
        <Button outline color="info" size="sm">Plan New Route</Button>
      </Link>
    </div>
  );
};

LocationOverview.propTypes = {
  finalItinerary: PropTypes.array
};

export default LocationOverview;
