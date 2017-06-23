//// React
import React from 'react';
import { Link } from 'react-router-dom';

//// Reactstrap
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

//// Components
import PreferencesDropDown from '../components/PreferencesDropDown';
import Hero from '../components/Hero';

//// Dependencies
import PlacesAutocomplete from 'react-places-autocomplete';
import moment from 'moment';
import FA from 'react-fontawesome';

//// Helpers
import TimeHelper from '../helpers/timeHelper';

//// Assets
import map from '../assets/map.png';
import walking from '../assets/walking.png';

//// Functions
function createTimeOptions(time, startOffset = 0) {
  // Change time to milliseconds
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

const AutocompleteItem = ({ formattedSuggestion }) => (
  <div>
    <i className="fa fa-map-marker" />{' '}
    <strong>{formattedSuggestion.mainText}</strong>
    {' '}
    <small>{formattedSuggestion.secondaryText}</small>
  </div>
);

///// Submission form component
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

          {/*** Error Messages & Saved Itinerary Message ***/}
          {error &&
            <UncontrolledAlert className="alert" color="warning">
              <p className="alert-text">
                Whoops! {error}
              </p>
            </UncontrolledAlert>}
          {validItinerary &&
            <UncontrolledAlert className="alert" color="info">
              <p className="alert-text">
                See your last itinerary{' '}
                <Link to={`/itinerary-overview/${validItinerary.id}`}>
                  <strong>here</strong>
                </Link>!
              </p>

            </UncontrolledAlert>}

          <Hero />

          <Form className="text-center" onSubmit={onSubmit}>

            {/*** Address ***/}
            <FormGroup>
              <Label for="startingLocation">Starting/Ending Location</Label>
              {addressError ? addressError : null}
              <PlacesAutocomplete
                inputProps={{
                  value: address,
                  onChange: onChangeAddress,
                  placeholder: 'Use current location',
                  required: requireAddress
                }}
                styles={{
                  root: {
                    zIndex: '2'
                  },
                  input: {
                    textAlign: 'center',
                    border: '1px solid lightgrey',
                    borderRadius: '5px'
                  }
                }}
                autocompleteItem={AutocompleteItem}
                onError={onAddressError}
                clearItemsOnError={true}
              />
            </FormGroup>

            {/*** Start/End Times ***/}
            <FormGroup className="start-time">
              <Label for="startingTime">Start Time</Label>
              <Input
                className="time-input clickable"
                type="select"
                name="startingTime"
                id="startingTime"
                onChange={onStartTimeChange}
              >
                {createTimeOptions(nextHour, 0)}
              </Input>
            </FormGroup>
            <FormGroup className="end-time">
              <Label for="endingTime">End Time</Label>
              <Input
                className="time-input clickable"
                type="select"
                name="endingTime"
                id="endingTime"
                onChange={onEndTimeChange}
              >
                {createTimeOptions(startTime, 2)}
              </Input>
              <UncontrolledTooltip placement="left" target="endingTime">
                Must be at least 2 hours after starting time!
              </UncontrolledTooltip>
            </FormGroup>

            {/*** Transportation Method ***/}
            <FormGroup key="driving" style={{ display: 'inline-block' }}>
              <FA name="car" style={{ marginRight: '5px' }} />
              <input
                checked={currentModeOfTransportation === 'driving'}
                type="radio"
                name="transportation"
                value="driving"
                onChange={onTransporationModeChange}
                style={{ marginRight: '5px' }}
              />
            </FormGroup>

            <span> -or- </span>

            <FormGroup
              key="walking"
              style={{ display: 'inline-block', marginLeft: '2px' }}
            >
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
            </FormGroup>

            {/*** Preferences ***/}
            <PreferencesDropDown
              preferences={preferences}
              onPrefChange={onPrefChange}
            />

            <Button className="reverse-hoverable plan-itinerary">
              Get planning!
            </Button>

            <div>
              <p className="text-center julie-purple">
                ______________________________
              </p>
              <img alt="map" src={map} className="map-icon" />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default InitialSubmissionForm;
