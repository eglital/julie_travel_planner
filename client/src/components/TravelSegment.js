import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import TimeHelper from '../helpers/timeHelper';

var FA = require('react-fontawesome');

const TravelSegment = ({
  duration,
  transportation,
  currentLocation,
  nextLocation
}) => {
  return (
    <Row>
      <Col xs="2" md={{ size: '4' }}>
        <div style={{ textAlignLast: 'right', marginRight: '-5px' }}>
          <p>-</p>
        </div>
      </Col>
      <Col xs="10" sm={{ size: '5' }}>
        <div className="text-center">

          <FA name="long-arrow-down fa" />
          {transportation === 'driving'
            ? <FA
                name="car fa"
                style={{ marginRight: '15px', marginLeft: '15px' }}
              />
            : <FA
                name="user fa"
                style={{ marginRight: '15px', marginLeft: '15px' }}
              />}
          {TimeHelper.millisecondsToSeconds(duration)}
          {' '}
          min
          {' '}
          <a
            href={`https://maps.google.com?saddr=${currentLocation.lat},${currentLocation.lng}&daddr=${nextLocation.lat},${nextLocation.lng}&travelmode=${transportation}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#5bc0de' }}
          >
            (directions)
          </a>
        </div>
      </Col>
    </Row>
  );
};

TravelSegment.propTypes = {
  duration: PropTypes.number.isRequired
};

export default TravelSegment;
