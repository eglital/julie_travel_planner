import React from 'react';
import { ShareButtons, generateShareIcon } from 'react-share';
import shareText from '../helpers/shareText';
const { TwitterShareButton } = ShareButtons;
const TwitterIcon = generateShareIcon('twitter');

const ShareTwitterButton = props => {
  const itinerary = props.finalItinerary || [{}, { name: 'Good Place' }, {}];

  return (
    <div
      style={{
        marginLeft: '5px',

        display: 'inline-block',
        textAlign: 'center'
      }}
    >
      <TwitterShareButton
        url="https://julie-travel-planner.herokuapp.com/"
        title={shareText(itinerary)}
        hashtags={['travel', 'julie']}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
    </div>
  );
};

export default ShareTwitterButton;
