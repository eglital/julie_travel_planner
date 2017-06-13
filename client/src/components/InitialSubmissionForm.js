import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, Col, Row, Alert, UncontrolledTooltip } from 'reactstrap';
import moment from 'moment';

function createTimeOptions(time, startOffset = 0) {
    //change to milli
    let hours = getHoursInMilliseconds(offsetTime(time, startOffset));
    return hours.map((hour) => {
        return (
            <option key={hour} value={hour}>{moment(hour).format('MMMM Do YYYY, h:mm:ss a')}</option>    
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
      
      const { startTime, nextHour, onStartTimeChange, onEndTimeChange, onSubmit, error } = this.props;

    return (
        <Row>
            <Col xs="12" sm={{offset: 3, size: 6}}>
            {error && <Alert color="warning"><strong>Whoops!</strong> Something happened on the server. Try again later</Alert> }
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="startingLocation">Starting Location</Label>
                  <Input type="text" name="startingLocation" id="startingLocation" placeholder="Use current location" />
                </FormGroup>
                <FormGroup>
                  <Label for="startingTime">Select Starting Time</Label>
                  <Input type="select" name="startingTime" id="startingTime" onChange={onStartTimeChange}>
                    {createTimeOptions(nextHour, 0)}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="endingTime">Select Ending Time</Label>
                  <Input type="select" name="endingTime" id="endingTime" onChange={onEndTimeChange}>
                    {createTimeOptions(startTime, 2)}
                  </Input>
                  <UncontrolledTooltip placement="top" target="endingTime">
                    Ending time must be at least 2 hours after starting time!
                  </UncontrolledTooltip>
                </FormGroup>
                <Button>Get planning!</Button>
              </Form>
            </Col>
         </Row>
    );
  }
}

export default InitialSubmissionForm;