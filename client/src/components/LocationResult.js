import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardBlock,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';

const LocationResult = props => {
  return (
    <Card style={{ marginBottom: '10px' }}>
      <CardBlock style={{ padding: '10px' }}>
        <CardImg
          style={{ float: 'left', paddingRight: '10px' }}
          top
          width="33%"
          src="./180.png"
          alt="Card image"
        />
        <CardTitle
          className="text-center"
          style={{ fontSize: '18px', marginBottom: '5px' }}
        >
          Umi Sake House
        </CardTitle>
        <CardText style={{ fontSize: '14px' }}>
          <strong>Sushi</strong>
          {' '}
          - Places with arcade games are popular in Seattle, and this is one of the best
        </CardText>
      </CardBlock>
    </Card>
  );
};

export default LocationResult;
