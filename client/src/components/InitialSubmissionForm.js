import React from 'react';
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
import PreferencesDropDown from '../components/PreferencesDropDown';
import PlacesAutocomplete from 'react-places-autocomplete';
import moment from 'moment';
import Hero from './Hero';
import FA from 'react-fontawesome';
import TimeHelper from '../helpers/timeHelper';
import walking from '../assets/walking.png';

function createTimeOptions(time, startOffset = 0) {
  //change to milli
  let hours = getHoursInMilliseconds(TimeHelper.offsetTime(time, startOffset));
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

//it could be any react functional component

const AutocompleteItem = ({ formattedSuggestion }) => (
  <div>
    <i className="fa fa-map-marker" />{' '}
    <strong>{formattedSuggestion.mainText}</strong>
    {' '}
    <small>{formattedSuggestion.secondaryText}</small>
  </div>
);
const cssClasses = {
  root: 'form-group autoRoot',
  input: 'form-control',
  autocompleteContainer: 'autoContainer'
};
const InitialSubmissionForm = ({
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
  validItinerary,
  onPrefChange,
  preferences,
  onMealsChange,
  includeMeals,
  onTransporationModeChange,
  modesOfTransportation,
  currentModeOfTransportation,
  requireAddress
}) => {
  return (
    <Container style={{ marginBottom: '15px', marginTop: '10px' }}>
      <Row>
        <Col xs="12" md={{ offset: 3, size: 6 }}>
          {error &&
            <UncontrolledAlert className="text-center" color="warning">
              <strong>Whoops!</strong>
              {' '}
              {error}
            </UncontrolledAlert>}
          {validItinerary &&
            <UncontrolledAlert
              className="text-center"
              style={{ padding: '3px', height: '55px' }}
              color="info"
            >
              <p style={{ marginTop: '10px', marginLeft: '37px' }}>
                See your last itinerary{' '}
                <Link to={`/itinerary-overview/${validItinerary.id}`}>
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
              <br />
              {addressError ? addressError : null}
              <PlacesAutocomplete
                inputProps={{
                  value: address,
                  onChange: onChangeAddress,
                  placeholder: 'Use current location',
                  required: requireAddress
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
                  float: 'left',
                  width: '40%',
                  marginLeft: '0%',
                  marginRight: '10%',
                  marginBottom: '25px'
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
                  marginLeft: '10%',
                  marginRight: '0%',
                  marginBottom: '25px'
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
                  Must be at least 2 hours after starting time!
                </UncontrolledTooltip>
              </FormGroup>

              <div>
                {/* <div className="transportation-modes"> */}
                <div>
                  {/* {generateTransportation(
                    currentModeOfTransportation,
                    modesOfTransportation,
                    onTransporationModeChange
                  )} */}
                  <FormGroup key="driving" style={{ display: 'inline-block' }}>
                    <label>
                      <FA name="car" style={{ marginRight: '5px' }} />
                      <input
                        checked={currentModeOfTransportation === 'driving'}
                        type="radio"
                        name="transportation"
                        value="driving"
                        onChange={onTransporationModeChange}
                      />
                    </label>
                  </FormGroup>
                  <span> -or- </span>
                  <FormGroup key="walking" style={{ display: 'inline-block' }}>
                    <label>
                      <img
                        src={walking}
                        alt="walking"
                        height="15px"
                        style={{ marginRight: '5px' }}
                      />
                      <input
                        checked={currentModeOfTransportation === 'walking'}
                        type="radio"
                        name="transportation"
                        value="walking"
                        onChange={onTransporationModeChange}
                      />
                    </label>
                  </FormGroup>

                </div>
              </div>
              <div>
                <PreferencesDropDown
                  preferences={preferences}
                  onPrefChange={onPrefChange}
                />
              </div>
            </div>
            <div
              style={{
                marginTop: '20px',
                clear: 'both',
                marginBottom: '20px'
              }}
            >
              <Button
                className="hoverable"
                style={{ clear: 'both', border: '1px solid pink' }}
              >
                Get planning!
              </Button>
            </div>

            <div>
              <p className="text-center" style={{ color: '#C17DBF' }}>
                ______________________________
              </p>
              {/* <img
                alt="map"
                src="oldMap.png"
                style={{
                  marginTop: '-15px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginBottom: '5px',
                  transform: 'rotate(30deg)',
                  height: '50px',
                  width: '50px'
                }}
              /> */}
            </div>
          </Form>
        </Col>

      </Row>
      <Row />
    </Container>
  );
};

export default InitialSubmissionForm;
