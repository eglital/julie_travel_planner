import LocationSelection from '../components/LocationSelection';
import React from 'react';

const displayThreeLocations = (props, onClickLocation) => {
  let loc1 =
    props.locations.food[
      Math.floor(Math.random() * props.locations.food.length)
    ];
  let loc2 =
    props.locations.places[
      Math.floor(Math.random() * props.locations.places.length)
    ];
  let loc3 =
    props.locations.sights[
      Math.floor(Math.random() * props.locations.sights.length)
    ];

  return (
    <div>
      <LocationSelection
        location={loc1}
        section="food"
        itineraryId={props.itinerary.id}
        onClick={onClickLocation}
      />
      <LocationSelection
        location={loc2}
        section="places"
        itineraryId={props.itinerary.id}
        onClick={onClickLocation}
      />
      <LocationSelection
        location={loc3}
        section="sights"
        itineraryId={props.itinerary.id}
        onClick={onClickLocation}
      />
    </div>
  );
};

export default displayThreeLocations;
