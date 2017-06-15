import React from 'react';
import PropTypes from 'prop-types';
import LocationSegment from './LocationSegment';
import TravelSegment from './TravelSegment';
import GoogleMaps from './GoogleMaps';
import { Link } from 'react-router-dom';

function makeOverview(finalItinerary) {
 return finalItinerary.map((location, index) => {
  let nextLocation = finalItinerary[index + 1];
  if (index === finalItinerary.length - 1) {
   return (
    <div key={index}>
      <LocationSegment arrivalTime={location.arrivalTime} departureTime={location.departureTime} locationData={{name: "Ending Location", photo: "https://placeholdit.co//i/555x150"}}/>
     </div>
   );
  }
  else if (index === 0) {
   return (
    <div key={index}>
      <LocationSegment arrivalTime={location.arrivalTime} departureTime={location.departureTime} locationData={{name: "Starting Location", photo: "https://placeholdit.co//i/555x150"}}/>
     </div>
   );
  }
  else {
   return (
    <div key={index}>
      <LocationSegment arrivalTime={location.arrivalTime} departureTime={location.departureTime} locationData={{link: location.link, name: location.name, photo: location.photo, category: location.category}}/>
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
  <div className="LocationOverview" style={{marginBottom: 20/*Should be equal to the height of the footer*/}}>
   {makeOverview(finalItinerary)}
   <Link to="/"><button>Plan a new route</button></Link>
   <GoogleMaps finalItinerary={finalItinerary}/>
  </div>
 );
};

LocationOverview.propTypes = {
 finalItinerary: PropTypes.array
};


export default LocationOverview;
