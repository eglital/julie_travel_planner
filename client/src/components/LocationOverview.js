import React, {
 Component
}
from 'react';
import PropTypes from 'prop-types';
import LocationSegment from './LocationSegment';
import TravelSegment from './TravelSegment';

function makeOverview(finalItinerary) {
 return finalItinerary.map((location, index) => {
  if (index === finalItinerary.length - 1) {
   return (
    <div>
      <LocationSegment arrivalTime={location.arrivalTime} departureTime={location.departureTime}/>
     </div>
   );
  }
  else {
   return (
    <div>
      <LocationSegment arrivalTime={location.arrivalTime} departureTime={location.departureTime}/>
      <TravelSegment />
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
   <button>Button Placeholder</button>
  </div>
 );
};

LocationOverview.propTypes = {
 finalItinerary: PropTypes.array
};


export default LocationOverview;
