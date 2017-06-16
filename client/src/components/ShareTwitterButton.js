import React from "react";
import { ShareButtons, generateShareIcon } from "react-share";
const { TwitterShareButton } = ShareButtons;
const TwitterIcon = generateShareIcon("twitter");

// title: Title of the shared page (string)
// via: (string)
// hashtags: (array)
const shareText = itinerary => {
  let text = "";
  for (let i = 1; i < itinerary.length - 1; i++) {
    text += itinerary[i].name;
    if (i !== itinerary.length - 2) {
      text += ", ";
    }
  }
  return `Checking out ${text} today.`;
};
const ShareTwitterButton = props => {
  const itinerary = props.finalItinerary || [{}, { name: "Good Place" }, {}];

  return (
    <TwitterShareButton
      url="https://julie-travel-planner.herokuapp.com/"
      title={shareText(itinerary)}
      hashtags={["travel", "julie"]}
    >
      <TwitterIcon size={32} round={true} />
    </TwitterShareButton>
  );
};

export default ShareTwitterButton;
