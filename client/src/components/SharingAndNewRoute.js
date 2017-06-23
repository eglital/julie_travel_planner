import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ShareTwitterButton from './ShareTwitterButton';
import ShareFacebookButton from './ShareFacebookButton';
import ShareEmailButton from './ShareEmailButton';

const SharingAndNewRoute = props => {
  console.log('Final itin:', props.finalItinerary);
  return (
    <div>
      <Link to="/">
        <Button outline color="info" size="sm">Plan New Route</Button>
      </Link>
      <div style={{ marginTop: '10px' }}>
        <ShareFacebookButton
          finalItinerary={props.finalItinerary}
          style={{ display: 'inline' }}
        />
        <ShareTwitterButton finalItinerary={props.finalItinerary} />
        <ShareEmailButton
          itinerary={props.finalItinerary}
          shareByEmail={props.shareByEmail}
          id={props.id}
        />
      </div>
    </div>
  );
};

export default SharingAndNewRoute;
