import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ShareTwitterButton from './ShareTwitterButton';
import ShareFacebookButton from './ShareFacebookButton';
import ShareEmailButton from './ShareEmailButton';

const SharingAndNewRoute = (finalItinerary, shareByEmail, id) => {
  return (
    <div>
      <Link to="/">
        <Button outline color="info" size="sm">Plan New Route</Button>
      </Link>
      <div style={{ marginTop: '10px' }}>
        <ShareFacebookButton
          finalItinerary={finalItinerary}
          style={{ display: 'inline' }}
        />
        <ShareTwitterButton finalItinerary={finalItinerary} />
        <ShareEmailButton
          itinerary={finalItinerary}
          shareByEmail={shareByEmail}
          id={id}
        />
      </div>
    </div>
  );
};

export default SharingAndNewRoute;
