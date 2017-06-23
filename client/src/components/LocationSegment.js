import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, CardBlock, CardTitle, Row, Col } from 'reactstrap';
import Dotdotdot from 'react-dotdotdot';
import determineColor from '../helpers/timeColor';

let counter = 0;

const LocationSegment = ({ arrivalTime, departureTime, locationData }) => {
  console.log('location:', locationData);
  let styles = determineColor(counter);
  counter++;
  return (
    <Row className="location-row">
      <Col xs="2" md={{ size: '4' }}>
        <table style={{ fontSize: '13px' }}>
          <tbody>
            <tr>
              <td>
                <div style={styles[3]} />
                <div style={styles[0]}>
                  {' '}{arrivalTime && moment(arrivalTime).format('LT')}
                </div>
                <br />
                <div style={styles[1]}>
                  {' '}{departureTime && moment(departureTime).format('LT')}
                </div>
              </td>
            </tr>
          </tbody>

        </table>

      </Col>

      <Col xs="10" md={{ size: '5' }}>
        {!locationData.category
          ? <Card style={styles[2]}>
              <CardBlock style={{ padding: '5px' }}>
                <div
                  style={{
                    backgroundImage: `url(${locationData.photo})`
                  }}
                  className="location-segment-image"
                />
                <div className="location-segment-title-container">
                  <CardTitle className="location-segment-title">
                    <Dotdotdot clamp={3}>
                      {locationData.name}
                    </Dotdotdot>
                  </CardTitle>
                </div>

              </CardBlock>
            </Card>
          : <a href={locationData.link}>
              <Card style={styles[2]}>
                <CardBlock style={{ padding: '5px' }}>
                  <div
                    style={{
                      backgroundImage: `url(${locationData.photo})`
                    }}
                    className="location-segment-image"
                  />
                  <div className="location-segment-title-container">
                    <CardTitle className="location-segment-title-link clickable">
                      <Dotdotdot clamp={3}>
                        {locationData.name}
                      </Dotdotdot>
                    </CardTitle>
                  </div>

                </CardBlock>
              </Card>
            </a>}
        {/* <a href={locationData.link}>
          <Card style={styles[2]}>
            <CardBlock style={{ padding: '5px' }}>
              <div
                style={{
                  backgroundImage: `url(${locationData.photo})`
                }}
                className="location-segment-image"
              />
              <div className="location-segment-title-container">
                <CardTitle className="location-segment-title clickable">
                  <Dotdotdot clamp={3}>
                    {locationData.name}
                  </Dotdotdot>
                </CardTitle>
              </div>

            </CardBlock>
          </Card>
        </a> */}
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
