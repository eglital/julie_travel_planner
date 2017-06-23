import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import shareText from '../helpers/shareText';

const { FacebookShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');

const ShareFacebookButton = props => {
  const itinerary = props.finalItinerary || [{}, { name: 'Good Place' }, {}];
  return (
    <div
      style={{
        marginRight: '5px',
        display: 'inline-block',
        textAlign: 'center'
      }}
    >
      <FacebookShareButton
        url="https://julie-travel-planner.herokuapp.com/"
        title="Julie Travel Planner"
        description={shareText(itinerary)}
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </div>
  );
};

export default ShareFacebookButton;
