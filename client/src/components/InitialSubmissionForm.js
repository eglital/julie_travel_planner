import React, { Component } from "react";
import { Link } from "react-router-dom";
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
} from "reactstrap";
import PlacesAutocomplete from "react-places-autocomplete";
import moment from "moment";
import Hero from "./Hero";
import googleLogo from "../assets/powered_by_google_on_white.png";

function createTimeOptions(time, startOffset = 0) {
  //change to milli
  let hours = getHoursInMilliseconds(offsetTime(time, startOffset));
  return hours.map(hour => {
    return (
      <option key={hour} value={hour}>
        {moment(hour).format("h a")}
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
    nextHour.add(1, "h");
    ++i;
  }
  return hours;
}

function offsetTime(time, startOffset) {
  let hoursInMilliseconds = startOffset * 60 * 60 * 1000;
  return time + +hoursInMilliseconds;
}

//it could be any react functional component

const AutocompleteItem = ({ formattedSuggestion }) => (
  <div>
    <i className="fa fa-map-marker" />{" "}
    <strong>{formattedSuggestion.mainText}</strong>
    {" "}
    <small>{formattedSuggestion.secondaryText}</small>
  </div>
);
const cssClasses = {
  root: "form-group autoRoot",
  input: "form-control",
  autocompleteContainer: "autoContainer"
};
class InitialSubmissionForm extends Component {
  render() {
    const {
      startTime,
      nextHour,
      onStartTimeChange,
      onEndTimeChange,
      onSubmit,
      error,
      address,
      onChangeAddress,
      onAddressError,
      addressError,
      validItinerary
    } = this.props;
    console.log("validItinerary", validItinerary);
    return (
      <Row>
        <Col xs="12" sm={{ offset: 3, size: 6 }}>
          {error &&
            <Alert className="text-center" color="warning">
              <strong>Whoops!</strong>
              {" "}
              Something happened on the server. Try again later
            </Alert>}
          {validItinerary &&
            <Alert
              className="text-center"
              style={{ padding: "3px", height: "55px" }}
              color="info"
            >
              <p style={{ marginBottom: "0px" }}>
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
            <FormGroup style={{ maxWidth: "300px", margin: "auto" }}>
              <img
                src={googleLogo}
                alt=""
                style={{ display: "inline-block" }}
              />
              <Label for="startingLocation">Starting/Ending Location</Label>
              {addressError ? addressError : null}
              <PlacesAutocomplete
                inputProps={{
                  value: address,
                  onChange: onChangeAddress,
                  placeholder: "Use current location"
                }}
                autocompleteItem={AutocompleteItem}
                classNames={cssClasses}
                onError={onAddressError}
                clearItemsOnError={true}
              />

            </FormGroup>
            <div>
              <FormGroup
                style={{
                  float: "left",
                  width: "40%",
                  marginLeft: "8%",
                  marginRight: "2%"
                }}
              >
                <Label for="startingTime">Start Time</Label>
                <Input
                  style={{ maxWidth: "300px", margin: "auto" }}
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
                  float: "left",
                  width: "40%",
                  marginLeft: "2%",
                  marginRight: "8%"
                }}
              >
                <Label for="endingTime">End Time</Label>
                <Input
                  style={{ maxWidth: "300px", margin: "auto" }}
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
              <Button style={{ clear: "both" }}>Get planning!</Button>
            </div>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default InitialSubmissionForm;
