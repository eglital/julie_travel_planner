// import LocationSelection from "../components/LocationSelection";
// import React from "react";
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
const displayThreeLocations = props => {
  // need these props
  // const { locations, startTime, duration, mealIncluded, lastFood } = props;
  let locations = {
    food: [{ name: "food1" }, { name: "food2" }, { name: "food3" }],
    places: [{ name: "places1" }, { name: "places2" }, { name: "places3" }],
    sights: [{ name: "sights1" }, { name: "sights2" }, { name: "sights3" }]
  };
  let startTime = 1497693600;
  let duration = 11 * 60 * 60 * 1000;
  let mealIncluded = true;
  let lastFood = true;
  let loc1, loc2, loc3, loc = [];
  if (!mealIncluded || lastFood || !isTimeToEat(startTime + duration)) {
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
          break;
        }
      }
    }
  }
  return loc;
};
console.log(displayThreeLocations());
