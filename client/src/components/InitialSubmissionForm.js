import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Row,
  UncontrolledAlert,
  UncontrolledTooltip
} from 'reactstrap';
import moment from 'moment';
import Hero from './Hero';

function createTimeOptions(time, startOffset = 0) {
  //change to milli
  let hours = getHoursInMilliseconds(offsetTime(time, startOffset));
  return hours.map(hour => {
    return (
      <option key={hour} value={hour}>
        {moment(hour).format('h a')}
      </option>
    );
  });
}

function getHoursInMilliseconds(nextHour) {
  //warp in moment for functionality
  nextHour = moment(nextHour);
  //create an array of times in milliseconds starting with the hour until 22:00 of the same day
  let hours = [];
  let i = 0;
  while (i < 12) {
    //push the time in milliseconds
    hours.push(+nextHour);
    //mutate the moment
    nextHour.add(1, 'h');
    ++i;
  }
  return hours;
}

function offsetTime(time, startOffset) {
  let hoursInMilliseconds = startOffset * 60 * 60 * 1000;
  return time + +hoursInMilliseconds;
}

class InitialSubmissionForm extends Component {
  render() {
    const {
      startTime,
      nextHour,
      onStartTimeChange,
      onEndTimeChange,
      onSubmit,
      error,
      validItinerary
    } = this.props;
    console.log('validItinerary', validItinerary);
    return (
      <Container>
        <Row>
          <Col xs="12" sm={{ offset: 3, size: 6 }}>
            {error &&
              <UncontrolledAlert className="text-center" color="warning">
                <strong>Whoops!</strong>
                {' '}
                Something happened on the server. Try again later
              </UncontrolledAlert>}
            {validItinerary &&
              <UncontrolledAlert
                className="text-center"
                style={{ padding: '3px', height: '55px' }}
                color="info"
              >
                <p style={{ marginBottom: '0px' }}>
                  Looks like you already have an itinerary...
                </p>
                <p>
                  You can see it <Link
                    to={`/itinerary-overview/${validItinerary.id}`}
                  >
                    <strong>here</strong>
                  </Link>!
                </p>

              </UncontrolledAlert>}
            <Hero />

            <Form className="text-center" onSubmit={onSubmit}>
              <FormGroup
                style={{
                  maxWidth: '600px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              >
                <Label for="startingLocation">Starting/Ending Location</Label>
                <Input
                  style={{
                    textAlign: 'center',
                    width: '84%',
                    maxWidth: '600px',
                    marginLeft: '8%',
                    marginRight: '8%'
                  }}
                  type="text"
                  name="startingLocation"
                  id="startingLocation"
                  placeholder="Use current location"
                />
              </FormGroup>
              <div>
                <FormGroup
                  style={{
                    float: 'left',
                    width: '40%',
                    marginLeft: '8%',
                    marginRight: '2%'
                  }}
                >
                  <Label for="startingTime">Start Time</Label>
                  <Input
                    style={{
                      maxWidth: '300px',
                      margin: 'auto',
                      textAlignLast: 'center'
                    }}
                    type="select"
                    name="startingTime"
                    id="startingTime"
                    onChange={onStartTimeChange}
                  >
                    {createTimeOptions(nextHour, 0)}
                  </Input>
                </FormGroup>
                <FormGroup
                  style={{
                    float: 'left',
                    width: '40%',
                    marginLeft: '2%',
                    marginRight: '8%'
                  }}
                >
                  <Label for="endingTime">End Time</Label>
                  <Input
                    style={{
                      maxWidth: '300px',
                      margin: 'auto',
                      textAlignLast: 'center'
                    }}
                    type="select"
                    name="endingTime"
                    id="endingTime"
                    onChange={onEndTimeChange}
                  >
                    {createTimeOptions(startTime, 2)}
                  </Input>
                  <UncontrolledTooltip placement="top" target="endingTime">
                    Ending time must be at least 2 hours after starting time!
                  </UncontrolledTooltip>
                </FormGroup>
              </div>
              <div
                style={{
                  marginTop: '20px',
                  clear: 'both',
                  marginBottom: '20px'
                }}
              >
                <Button>Get planning!</Button>
              </div>

              <div>
                <p className="text-center" style={{ color: '#C17DBF' }}>
                  ______________________________
                </p>
                <img
                  src="map.png"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    transform: 'rotate(30deg)',
                    height: '50px',
                    width: '50px'
                  }}
                />
              </div>
            </Form>
          </Col>

        </Row>
        <Row />
      </Container>
    );
  }
}

export default InitialSubmissionForm;
