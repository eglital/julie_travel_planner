import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
const { FacebookShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');

//title, description, picture - optional props, url - required
const shareText = itinerary => {
  let text = '';
  for (let i = 1; i < itinerary.length - 1; i++) {
    text += itinerary[i].name;
    if (i !== itinerary.length - 2) {
      text += ', ';
    }
  }
  return `Checking out ${text} today.`;
};
const ShareFacebookButton = props => {
  const itinerary = props.itinerary || [{}, { name: 'Good Place' }, {}];
  return (
    <FacebookShareButton
      url="https://julie-travel-planner.herokuapp.com/"
      title="Julie Travel Planner"
      description={shareText(itinerary)}
    >
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
  );
};

export default ShareFacebookButton;
