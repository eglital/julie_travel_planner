import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import moment from 'moment';

function createTimeOptions(time, startOffset = 0, endOffset = 0) {
    //change to milli
    let hours = getHoursInMilliseconds(offsetTime(time, startOffset), endOffset);
    return hours.map((hour) => {
        return (
            <option key={hour} value={hour}>{moment(hour).format('H')}</option>    
        );
    });
}


function getHoursInMilliseconds(nextHour, endOffset) {
    //warp in moment for functionality
    nextHour = moment(nextHour);
    //create an array of times in milliseconds starting with the hour until 22:00 of the same day
    let hours = [];
    while (nextHour.hour() < (24 - endOffset)) {
        //push the time in milliseconds
        hours.push(+nextHour);
        //mutate the moment
        nextHour.add(1, 'h');
        if (nextHour.hour() === 23) {
          break;
        }
    }
    //push the last hour
    hours.push(+nextHour);
    return hours;
}

function offsetTime(time, startOffset) {
    let hoursInMilliseconds = startOffset * 60 * 60 * 1000;
    return time + +hoursInMilliseconds;
}

class InitialSubmissionForm extends Component {
    
    
  render() {
      
      const { startTime, nextHour, onStartTimeChange, onEndTimeChange, onSubmit } = this.props;

    return (
        <Row>
            <Col xs="12" sm={{offset: 3, size: 6}}>
              <Form onSubmit={onSubmit}>
                <FormGroup>
                  <Label for="startingLocation">Starting Location</Label>
                  <Input type="text" name="startingLocation" id="startingLocation" placeholder="Use current location" />
                </FormGroup>
                <FormGroup>
                  <Label for="startingTime">Select Starting Time</Label>
                  <Input type="select" name="startingTime" id="startingTime" onChange={onStartTimeChange}>
                    {createTimeOptions(nextHour, 0, 2)}
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