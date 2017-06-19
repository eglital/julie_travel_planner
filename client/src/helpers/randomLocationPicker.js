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
const checkIfOpen = (location, currentTime) => {
  if (
    location.hours &&
    location.hours.close &&
    currentTime >= location.hours.close + 60 * 60 * 1000
  ) {
    //checking if there is info about hours, if it has a closing time (means currently open) and if current time is more than one hour before closing
    //Then we don't want to send our user there
    return false;
  } else if (
    location.hours &&
    location.hours.open &&
    currentTime + 30 * 60 * 1000 < location.hours.open
  ) {
    //checking if there is info about hours, if it has an opening time (means currently closed) and if current time is less than 30 minutes before opening
    //Again we don't want to send our user there
    return false;
  } else {
    return true;
  }
};
const displayThreeLocations = (props, onClickLocation) => {
  const { locations, itinerary, builder } = props;
  let { startTime } = itinerary;
  let { duration, mealsIncluded, lastFood } = builder;
  let loc = [], sections = [];
  //filter the ones that are open at this time
  let openLocations = {
    places: locations["places"].filter(location =>
      checkIfOpen(location, startTime + duration)
    ),
    sights: locations["sights"].filter(location =>
      checkIfOpen(location, startTime + duration)
    ),
    food: locations["food"].filter(location =>
      checkIfOpen(location, startTime + duration)
    )
  };
  console.log("OPEN", openLocations);
  if (!mealsIncluded || lastFood || !isTimeToEat(startTime + duration)) {
    //no meals selected or last selection was food or it's not time of day to eat
    let choices = ["places", "sights"];
    if (openLocations["places"].length + openLocations["sights"].length <= 3) {
      //check if in total we have only 3 or less options
      loc.concat(openLocations["places"], openLocations["sights"]);
      sections.concat(
        Array(openLocations["places"].length).fill("places"),
        Array(openLocations["sights"].length).fill("sights")
      );
    } else {
      for (let i = 0; i < 3; i++) {
        while (true) {
          let randomChoice = choices[Math.floor(Math.random() * 2)]; //between places and sights
          let randomPlace =
            openLocations[randomChoice][
              Math.floor(Math.random() * openLocations[randomChoice].length)
            ];
          if (!isAlreadyIncluded(randomPlace, loc)) {
            loc.push(randomPlace);
            sections.push(randomChoice);
            break;
          }
        }
      }
    }
  } else {
    //time to eat
    if (openLocations["food"].length <= 3) {
      loc = openLocations["food"];
      sections = Array(openLocations["food"].length).fill("food");
    } else {
      for (let i = 0; i < 3; i++) {
        while (true) {
          let randomPlace =
            openLocations["food"][
              Math.floor(Math.random() * openLocations["food"].length)
            ];
          if (!isAlreadyIncluded(randomPlace, loc)) {
            loc.push(randomPlace);
            sections.push("food");
            break;
          }
        }
      }
    }
  }
  return (
    <div>
      {locationSelectionList(
        loc,
        sections,
        props.itinerary.id,
        onClickLocation
      )}
    </div>
  );
};
const locationSelectionList = (loc, sections, itineraryId, onClick) => {
  if (loc.length === 0) {
    return <div>No locations available</div>;
  }
  return loc.map(location => {
    return (
      <LocationSelection
        location={location}
        section={sections[0]}
        itineraryId={itineraryId}
        onClick={onClick}
        key={location.name}
      />
    );
  });
};
export default displayThreeLocations;
