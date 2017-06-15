import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Alert,
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
      <Row>
        <Col xs="12" sm={{ offset: 3, size: 6 }}>
          {error &&
            <Alert className="text-center" color="warning">
              <strong>Whoops!</strong>
              {' '}
              Something happened on the server. Try again later
            </Alert>}
          {validItinerary &&
            <Alert
              className="text-center"
              style={{ padding: '3px', height: '55px' }}
              color="info"
            >
              <p style={{ marginBottom: '0px' }}>
                It looks like you've already created an itinerary...
              </p>
              <p>
                You can access it <Link
                  to={`/itinerary-overview/${validItinerary.id}`}
                >
                  <strong>here</strong>
                </Link>!
              </p>

            </Alert>}

          <Hero />
          <Form className="text-center" onSubmit={onSubmit}>
            <FormGroup>
              <Label for="startingLocation">Starting/Ending Location</Label>
              <Input
                style={{ maxWidth: '300px', margin: 'auto' }}
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
                  style={{ maxWidth: '300px', margin: 'auto' }}
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
                  style={{ maxWidth: '300px', margin: 'auto' }}
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
            <div>
              <Button style={{ clear: 'both' }}>Get planning!</Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default InitialSubmissionForm;
