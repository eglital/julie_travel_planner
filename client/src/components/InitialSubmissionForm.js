import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import moment from 'moment';

function createStartTimeOptions(nextHour) {
    let hours = getHoursInMilliseconds(nextHour);
    return hours.map((hour) => {
        return (
            <option key={hour} value={hour}>{moment(hour).format("HH:MM")}</option>    
        );
    });
}

function getHoursInMilliseconds(nextHour) {
    //warp in moment for functionality
    nextHour = moment(nextHour);
    console.log("nexthour wrapped", nextHour);
    //create an array of times in milliseconds starting with the hour until 22:00 of the same day
    let hours = [];
    while (nextHour.hour() < 23) {
        //push the time in milliseconds
        hours.push(+nextHour);
        //mutate the moment
        nextHour.add(1, 'h');
    }
    console.log("hours", hours);
    return hours;
}


class InitialSubmissionForm extends Component {
    
  render() {
      
      const nextHour = this.props.nextHour;
      
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
                  <Input type="select" name="startingTime" id="startingTime">
                    {createStartTimeOptions(nextHour)}
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="endingTime">Select Ending Time</Label>
                  <Input type="select" name="endingTime" id="endingTime">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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