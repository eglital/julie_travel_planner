import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Row, Col, Button } from 'reactstrap';

import LocationSegment from './LocationSegment';
import TravelSegment from './TravelSegment';
import GoogleMaps from './GoogleMaps';

import RouteByJulie from './RouteByJulie';
import SharingAndNewRoute from './SharingAndNewRoute';

import map from '../assets/wideMap.png';

function makeOverview(finalItinerary, transportation) {
  return finalItinerary.map((location, index) => {
    let nextLocation = finalItinerary[index + 1];
    if (index === finalItinerary.length - 1) {
      return (
        <LocationSegment
          key={location.arrivalTime}
          arrivalTime={location.arrivalTime}
          departureTime={location.departureTime}
          locationData={{
            name: 'Ending Location',
            photo: map
          }}
        />
      );
    } else if (index === 0) {
      return (
        <div key={location.arrivalTime}>
          <LocationSegment
            arrivalTime={location.arrivalTime}
            departureTime={location.departureTime}
            locationData={{
              name: 'Starting Location',
              photo: map
            }}
          />
          <TravelSegment
            duration={nextLocation.arrivalTime - location.departureTime}
            transportation={transportation}
            currentLocation={location}
            nextLocation={nextLocation}
          />
        </div>
      );
    } else {
      return (
        <div key={location.arrivalTime}>
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
            transportation={transportation}
            currentLocation={location}
            nextLocation={nextLocation}
          />
        </div>
      );
    }
  });
}

const LocationOverview = ({
  finalItinerary,
  transportation,
  shareByEmail,
  id
}) => {
  return (
    <div className="text-center" style={{ marginBottom: '20px' }}>
      <RouteByJulie />
      <SharingAndNewRoute
        finalItinerary={finalItinerary}
        shareByEmail={shareByEmail}
        id={id}
      />

      {makeOverview(finalItinerary, transportation)}

      <div style={{ marginTop: '20px' }}>
        <SharingAndNewRoute
          finalItinerary={finalItinerary}
          shareByEmail={shareByEmail}
          id={id}
        />
      </div>

      <div className="map-container">
        <GoogleMaps
          finalItinerary={finalItinerary}
          transportation={transportation}
        />
      </div>
    </div>
  );
};

LocationOverview.propTypes = {
  finalItinerary: PropTypes.array
};

export default LocationOverview;
