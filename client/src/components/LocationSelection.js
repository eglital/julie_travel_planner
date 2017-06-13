import React from 'react';
import { Card, CardBlock, CardTitle, CardText, CardImg } from 'reactstrap';

const LocationSelection = props => {
  const { location, section, itineraryId, onClick } = props;

  return (
    <Card
      style={{ marginBottom: '10px', maxWidth: '500px' }}
      onClick={onClick}
      data-loc={JSON.stringify(location)}
      data-section={section}
      data-itinerary-id={itineraryId}
    >
      <CardBlock style={{ padding: '10px' }}>
        <div
          style={{
            display: 'inline-block',
            backgroundImage: `url(${location.photo})`,
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '150px',
            width: '33%',
            height: '100px',
            float: 'left',
            marginRight: '7%'
          }}
        />
        <div style={{ display: 'inline-block', float: 'left', width: '60%' }}>
          <CardTitle
            className="text-center"
            style={{ fontSize: '18px', marginBottom: '5px' }}
          >
            {location.name}
          </CardTitle>
          <CardText
            style={{
              fontSize: '14px',
              height: '63px',
              overflow: 'hidden',
              textOverflow: 'ellipses'
            }}
          >
            <strong>{location.category}</strong> - {location.tip}
          </CardText>
        </div>
      </CardBlock>
    </Card>
  );
};

export default LocationSelection;
