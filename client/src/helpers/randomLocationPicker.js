import LocationSelection from "../components/LocationSelection";
import React from "react";
var moment = require("moment");

const isTimeToEat = time => {
  let currentHour = moment(time).hour();
  let timeToEat = false;
  let mealTimes = [[7, 10], [12, 15], [17, 20]];
  //checking if it's time of day for eating
  for (let i = 0; i < 3; i++) {
    if (currentHour >= mealTimes[i][0] && currentHour <= mealTimes[i][1]) {
      timeToEat = true;
    }
  }
  return timeToEat;
};
const isAlreadyIncluded = (location, locationsArray) => {
  let included = false;
  for (let i = 0; i < locationsArray.length; i++) {
    if (locationsArray[i].name === location.name) {
      included = true;
    }
  }
  return included;
};
const displayThreeLocations = (props, onClickLocation) => {
  const { locations, itinerary, builder } = props;
  let { startTime } = itinerary;
  let { duration, mealsIncluded, lastFood } = builder;
  let loc1, loc2, loc3, loc = [], sections = [];

  if (!mealsIncluded || lastFood || !isTimeToEat(startTime + duration)) {
    //no meals selected or last selection was food or it's not time of day to eat
    let choices = ["places", "sights"];
    for (let i = 0; i < 3; i++) {
      while (true) {
        let randomChoice = choices[Math.floor(Math.random() * 2)]; //between places and sights
        let randomPlace =
          locations[randomChoice][
            Math.floor(Math.random() * locations[randomChoice].length)
          ];
        if (!isAlreadyIncluded(randomPlace, loc)) {
          loc.push(randomPlace);
          sections.push(randomChoice);
          break;
        }
      }
    }
  } else {
    //time to eat
    for (let i = 0; i < 3; i++) {
      while (true) {
        let randomPlace =
          locations["food"][
            Math.floor(Math.random() * locations["food"].length)
          ];
        if (!isAlreadyIncluded(randomPlace, loc)) {
          loc.push(randomPlace);
          sections.push("food");
          break;
        }
      }
    }
  }
  loc1 = loc[0];
  loc2 = loc[1];
  loc3 = loc[2];
  return (
    <div>
      <LocationSelection
        location={loc1}
        section={sections[0]}
        itineraryId={props.itinerary.id}
        onClick={onClickLocation}
      />
      <LocationSelection
        location={loc2}
        section={sections[1]}
        itineraryId={props.itinerary.id}
        onClick={onClickLocation}
      />
      <LocationSelection
        location={loc3}
        section={sections[2]}
        itineraryId={props.itinerary.id}
        onClick={onClickLocation}
      />
    </div>
  );
};
export default displayThreeLocations;
