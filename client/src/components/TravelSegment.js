import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import TimeHelper from '../helpers/timeHelper';

var FA = require('react-fontawesome');

const TravelSegment = ({ duration, transportation }) => {
  let modeOfTransportation = transportation;
  return (
    <Row>
      <Col xs="2" md={{ size: '4' }} />
      <Col xs="10" sm={{ size: '5' }}>
        <div className="text-center">
          <FA name="long-arrow-down fa" />
          {modeOfTransportation === 'driving'
            ? <FA
                name="car fa"
                style={{ marginRight: '15px', marginLeft: '15px' }}
              />
            : <FA
                name="user fa"
                style={{ marginRight: '15px', marginLeft: '15px' }}
              />}
          {TimeHelper.millisecondsToSeconds(duration)}{' '}min{' '}
        </div>

      </Col>
    </Row>
  );
};

TravelSegment.propTypes = {
  duration: PropTypes.number.isRequired
};

export default TravelSegment;
