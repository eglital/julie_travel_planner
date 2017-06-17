// import LocationSelection from "../components/LocationSelection";
// import React from "react";
var moment = require("moment");

const displayThreeLocations = props => {
  // need these props
  // const { locations, startTime, duration, mealIncluded } = props;
  let locations = {
    food: ["food1", "food2", "food3"],
    places: ["places1", "places2", "places3"],
    sights: ["sights1", "sights2", "sights3"]
  };
  let startTime = 1497693600;
  let duration = 11 * 60 * 60 * 1000;
  let mealIncluded = true;
  let loc1, loc2, loc3, loc = [];
  if (!mealIncluded) {
    //no meals selected
    let choices = ["places", "sights"];
    for (let i = 0; i < 3; i++) {
      while (true) {
        let randomChoice = choices[Math.floor(Math.random() * 2)]; //between places and sights
        let randomPlace =
          locations[randomChoice][
            Math.floor(Math.random() * locations[randomChoice].length)
          ];
        if (!loc.includes(randomPlace)) {
          loc.push(randomPlace);
          break;
        }
      }
    }
  } else {
    //meals included
    let mealTimes = [[7, 9], [12, 14], [17, 19]];
    let currentTime = startTime + duration;
    let currentHour = moment(currentTime).hour();
    let timeToEat = false;
    //checking if it's time of day for eating
    for (let i = 0; i < 3; i++) {
      if (currentHour >= mealTimes[i][0] && currentHour <= mealTimes[i][1]) {
        timeToEat = true;
      }
    }
    if (timeToEat) {
      //if it is breakfast or lunch or dinner time
      for (let i = 0; i < 3; i++) {
        while (true) {
          let randomPlace =
            locations["food"][
              Math.floor(Math.random() * locations["food"].length)
            ];
          if (!loc.includes(randomPlace)) {
            loc.push(randomPlace);
            break;
          }
        }
      }
    } else {
      let choices = ["places", "sights"];
      for (let i = 0; i < 3; i++) {
        while (true) {
          let randomChoice = choices[Math.floor(Math.random() * 2)]; //between places and sights
          let randomPlace =
            locations[randomChoice][
              Math.floor(Math.random() * locations[randomChoice].length)
            ];
          if (!loc.includes(randomPlace)) {
            loc.push(randomPlace);
            break;
          }
        }
      }
    }
  }
  return loc;
};
console.log(displayThreeLocations());
