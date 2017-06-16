import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card, CardBlock, CardTitle, Row, Col } from 'reactstrap';

// <img style={{maxWidth:75, maxHeight:75}}src={locationData.photo || "https://placeholdit.co//i/100x100"} alt={locationData.name}/>
let locationImgStyle = function(photo) {
  return {
    width: 75,
    height: 75,
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover',
    flex: '0 0 auto'
  };
};
const LocationSegment = ({ arrivalTime, departureTime, locationData }) => {
  return (
    <Row className="travel" style={{ marginTop: '10px', marginBottom: '10px' }}>
      <Col xs="3">
        <table style={{ fontSize: '14px' }}>
          <tr>
            <td>
              <div style={{ position: 'absolute', top: '0px', right: '0px' }}>
                {' '}{arrivalTime && moment(arrivalTime).format('LT')}
              </div>
              <br />
              <div
                style={{ position: 'absolute', bottom: '0px', right: '0px' }}
              >
                {' '}{departureTime && moment(departureTime).format('LT')}
              </div>
            </td>
          </tr>
        </table>
      </Col>
      <Col xs="9">
        <a href={locationData.link} style={{ textDecoration: 'none' }}>
          <Card style={{ height: '75px' }}>
            <CardBlock style={{ padding: '0px' }}>
              <div
                style={{
                  display: 'inline-block',
                  backgroundImage: `url(${locationData.photo})`,
                  backgroundPosition: '50% 50%',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '75px',
                  width: '33%',
                  height: '75px',
                  float: 'left',
                  marginRight: '5%'
                }}
              />

              <CardTitle
                className="text-center"
                style={{
                  position: 'absolute',
                  height: '75px',
                  width: '70%',
                  left: '30%',
                  top: '10%',
                  fontSize: '18px',
                  marginTop: '15px',
                  marginBottom: '2px'
                }}
              >
                {locationData.name}
              </CardTitle>

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
