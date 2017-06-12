import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import moment from 'moment';

function createTimeOptions(time, offset = 0) {
    //change to milli
    let hours = getHoursInMilliseconds(offsetTime(time, offset));
    return hours.map((hour) => {
        return (
            <option key={hour} value={hour}>{moment(hour).format('H')}</option>    
        );
    });
}


function getHoursInMilliseconds(nextHour) {
    //warp in moment for functionality
    nextHour = moment(nextHour);
    //create an array of times in milliseconds starting with the hour until 22:00 of the same day
    let hours = [];
    while (nextHour.hour() < 23) {
        //push the time in milliseconds
        hours.push(+nextHour);
        //mutate the moment
        nextHour.add(1, 'h');
    }
    return hours;
}

function offsetTime(time, hours) {
    let hoursInMilliseconds = hours * 60 * 60 * 1000;
    return time + +hoursInMilliseconds;
}

class InitialSubmissionForm extends Component {
    
    
  render() {
      
      const { startTime, nextHour, onStartTimeChange, onEndTimeChange } = this.props;

    return (
        <Row>
            <Col xs="12" sm={{offset: 3, size: 6}}>
              <Form>
                <FormGroup>
                  <Label for="startingLocation">Starting Location</Label>
                  <Input type="text" name="startingLocation" id="startingLocation" placeholder="Use current location" />
                </FormGroup>
                <FormGroup>
                  <Label for="startingTime">Select Starting Time</Label>
                  <Input type="select" name="startingTime" id="startingTime" onChange={onStartTimeChange}>
                    {createTimeOptions(nextHour)}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="endingTime">Select Ending Time</Label>
                  <Input type="select" name="endingTime" id="endingTime" onChange={onEndTimeChange}>
                    {createTimeOptions(startTime, 2)}
                  </Input>
                </FormGroup>
                <Button>Get planning!</Button>
              </Form>
            </Col>
         </Row>
    );
  }
}

export default InitialSubmissionForm;