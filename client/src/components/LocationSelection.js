import React from 'react';
import { Card, CardBlock, CardTitle, CardText, CardImg } from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';
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
            display: 'inline-block',
            backgroundImage: `url(${location.photo || 'nophoto'})`,
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '150px',
            width: '33%',
            height: '100px',
            float: 'left',
            marginRight: '5%'
          }}
        />
        <div style={{ display: 'inline-block', float: 'left', width: '60%' }}>
          <CardTitle
            className="text-center"
            style={{ fontSize: '18px', marginTop: '-2px', marginBottom: '2px' }}
          >
            <Dotdotdot clamp={1}>
              {location.name}
            </Dotdotdot>
          </CardTitle>
          <CardText
            style={{
              fontSize: '14px',
              height: '81px',
              overflow: 'hidden'
            }}
          >
            <Dotdotdot clamp={4}>
              <p>
                <strong>{location.category}</strong> - {location.tip}
              </p>
            </Dotdotdot>

          </CardText>
        </div>
      </CardBlock>
    </Card>
  );
};

export default LocationSelection;
