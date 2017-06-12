import React from 'react';
import { Card, CardBlock, CardTitle, CardText, CardImg } from 'reactstrap';

const LocationSelection = props => {
  const { location, onClick } = props;
  let photo = location.photo || './180.png';

  return (
    <Card style={{ marginBottom: '10px' }} onClick={onClick}>
      <CardBlock style={{ padding: '10px' }}>
        <CardImg
          style={{ float: 'left', paddingRight: '10px' }}
          top
          width="33%"
          src={photo}
          alt="Card image"
        />
        <CardTitle
          className="text-center"
          style={{ fontSize: '18px', marginBottom: '5px' }}
        >
          {location.name}
        </CardTitle>
        <CardText style={{ fontSize: '14px' }}>
          <strong>{location.category}</strong> - {location.tip}
        </CardText>
      </CardBlock>
    </Card>
  );
};

export default LocationSelection;
