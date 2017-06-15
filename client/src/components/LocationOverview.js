import React, {
 Component
}
from 'react';
import PropTypes from 'prop-types';
import LocationSegment from './LocationSegment';
import TravelSegment from './TravelSegment';

function makeOverview(finalItinerary) {
 return finalItinerary.map((location, index) => {
  let nextLocation = finalItinerary[index + 1];
  if (index === finalItinerary.length - 1) {
   return (
    <div key={index}>
      <LocationSegment arrivalTime={location.arrivalTime} departureTime={location.departureTime} locationData={{name: location.name, photo: location.photo}}/>
     </div>
   );
  }
  else {
   return (
    <div key={index}>
      <LocationSegment arrivalTime={location.arrivalTime} departureTime={location.departureTime} locationData={{name: location.name, photo: location.photo}}/>
      <TravelSegment duration={nextLocation.arrivalTime - location.departureTime}/>
     </div>
   );

  }
 });
}





const LocationOverview = ({
 finalItinerary
}) => {
 return (
  <div>
   {makeOverview(finalItinerary)}
   <button>Plan a new route</button>
  </div>
 );
};

LocationOverview.propTypes = {
 finalItinerary: PropTypes.array
};


export default LocationOverview;
