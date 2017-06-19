import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, CardBlock, CardTitle, Row, Col } from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';
import determineColor from '../helpers/timeColor';

let counter = 0;

const LocationSegment = ({ arrivalTime, departureTime, locationData }) => {
  let styles = determineColor(counter);
  counter++;
  return (
    <Row
      className="travel"
      style={{ paddingLeft: '15px', marginTop: '10px', marginBottom: '10px' }}
    >
      <Col xs="2" md={{ size: '4' }}>
        <table style={{ fontSize: '14px' }}>
          <tr>
            <td>
              <div style={styles[0]}>
                {' '}{arrivalTime && moment(arrivalTime).format('LT')}
              </div>
              <br />
              <div style={styles[1]}>
                {' '}{departureTime && moment(departureTime).format('LT')}
              </div>
            </td>
          </tr>
        </table>
      </Col>
      <Col xs="10" sm={{ size: '5' }}>
        <a href={locationData.link} style={{ textDecoration: 'none' }}>
          <Card style={styles[2]}>
            <CardBlock style={{ padding: '5px' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundImage: `url(${locationData.photo})`,
                  backgroundPosition: '50% 50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100%',
                  width: '33%',
                  height: '65px',
                  float: 'left',
                  marginRight: '5%'
                }}
              />
              <div
                style={{
                  display: 'inline-block',
                  width: '60%',
                  height: '75px'
                }}
              >
                <CardTitle className="text-center" style={{ fontSize: '20px' }}>
                  <Dotdotdot clamp={3}>
                    {locationData.name}
                  </Dotdotdot>
                </CardTitle>
              </div>

            </CardBlock>
          </Card>
        </a>
      </Col>
    </Row>
  );
};

LocationSegment.propTypes = {
  arrivalTime: PropTypes.number,
  departureTime: PropTypes.number,
  locationData: PropTypes.object.isRequired
};

export default LocationSegment;
