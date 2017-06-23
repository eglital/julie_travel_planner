import React from 'react';
import { Card, CardBlock, CardTitle } from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';
import map from '../assets/map.png';

const LocationSelection = props => {
  const { location, section, itineraryId, onClick } = props;
  if (!location.photo) {
    location.photo = map;
  }

  return (
    <Card
      className="hoverable location-card"
      onClick={onClick}
      data-loc={JSON.stringify(location)}
      data-section={section}
      data-itinerary-id={itineraryId}
    >
      <CardBlock style={{ padding: '10px' }}>
        <div
          className="location-image"
          style={{
            backgroundImage: `url(${location.photo})`
          }}
        />
        <div
          style={{ display: 'inline-block', float: 'left', width: '60%' }}
          className="location-info"
        >
          <CardTitle className="text-center location-info-title bold">
            <Dotdotdot clamp={1}>
              {location.name}
            </Dotdotdot>
          </CardTitle>
          <div className="location-info-description">
            <Dotdotdot clamp={4}>
              <strong>{location.category}</strong> - {location.tip}
            </Dotdotdot>
          </div>
        </div>
      </CardBlock>
    </Card>
  );
};

export default LocationSelection;
