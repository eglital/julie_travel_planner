import LocationSelection from "../components/LocationSelection";
import React from "react";

const displayThreeLocations = (props, onClickLocation) => {
  // need these props
  const { locations, startTime, duration, mealIncluded } = props;
  let loc1, loc2, loc3;
  if (!mealIncluded) {
    let choices = ["places", "sights"];
    let loc = [];
    for (let i = 0; i < 3; i++) {
      let randomChoice = choices[Math.floor(Math.random() * 2)];
      loc.push(
        locations[randomChoice][
          Math.floor(Math.random() * locations[randomChoice].length)
        ]
      );
    }
  } else {
  }
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
