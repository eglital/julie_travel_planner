import React, { Component } from "react";
import InitialSubmissionForm from "../components/InitialSubmissionForm";
import { fetchLocationsData, setFetching } from "../actions/locationsActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ItineraryHelper from "../helpers/itineraryHelper";
import "../stylesheets/loading.css";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

function getNextHour() {
  let ROUNDING = 60 * 60 * 1000; /*ms*/
  let start = Date.now();
  return Math.ceil(+start / ROUNDING) * ROUNDING;
}

const Loader = () => <div className="loader">Loading...</div>;

class InitialSubmissionFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      nextHour: getNextHour(),
      startTime: getNextHour(),
      endTime: getNextHour() + 2 * 60 * 60 * 1000,
      startingLocation: null,
      address: "",
      addressError: "",
      error: null,
      validItinerary: false
    };
  }

  componentDidMount() {
    //check localStorage for itinerary: id
    console.log("component did mount");
    if (ItineraryHelper.validItinerary()) {
      this.setState({
        validItinerary: ItineraryHelper.getItineraryObj()
      });
    } else {
      this.setState({
        validItinerary: false
      });
    }
  }

  componentWillReceiveProps(newProps) {
    //if locations.data is now populated, redirect them to itinerary-creation
    if (Object.keys(newProps.locations.data).length > 0) {
      this.props.history.push("/itinerary-creation");
    }
    //if error in form
    if (newProps.locations.error) {
      this.setState({
        error: newProps.locations.error
      });
    }
  }

  onStartTimeChange = e => {
    //if the endTime would be less than two hours after the new startTime
    //advance it to at least two hours
    if (this.state.endTime - +e.target.value < 2) {
      this.setState({
        startTime: +e.target.value,
        endTime: +e.target.value + 2
      });
    } else {
      this.setState({
        startTime: +e.target.value
      });
    }
  };

  onEndTimeChange = e => {
    this.setState({
      endTime: +e.target.value
    });
  };

  onChangeAddress = address => this.setState({ address, addressError: "" });
  onAddressError = status => {
    this.setState({ addressError: "No results" });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.setFetching();

    //construct simple json for form submission
    let data = {
      startTime: this.state.startTime,
      endTime: this.state.endTime
    };

    if (this.state.address) {
      //if user entered address
      geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          console.log("Success", latLng);
          data.startingLocation = [latLng.lat, latLng.lng];
        })
        .then(() => {
          console.log("FROM AUTOCOMPLETE", data);
          this.props.fetchLocationsData({
            formSubmission: data
          });
        })
        .catch(error => console.error("Error", error));
    } else if ("geolocation" in navigator) {
      //attempt to get location with geolocation API if user didn't enter address
      /* geolocation is available */

      let p = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(function(position) {
          resolve([position.coords.latitude, position.coords.longitude]);
        }, reject);
      });
      p
        .then(
          coordinates => {
            data.startingLocation = coordinates;
          },
          navError => {
            //prompt with box for starting location and update the state?
            console.log("Please enter a starting location");
            data.startingLocation = this.state.startingLocation; //or default values?
          }
        )
        .then(form => {
          console.log("updated data", data);
          //send form to action dispatcher
          this.props.fetchLocationsData({
            formSubmission: data
          });
        });
    } else {
      /* geolocation IS NOT available */
    }
  };
  render() {
    if (this.props.locations.isFetching) {
      return <Loader />;
    } else {
      //create new rounded time to pass to submission form each time
      //consider moving to lifecycle hook to check for changes to avoid rerenders
      return (
        <InitialSubmissionForm
          onSubmit={this.onFormSubmit}
          onStartTimeChange={this.onStartTimeChange}
          onEndTimeChange={this.onEndTimeChange}
          onAddressError={this.onAddressError}
          onChangeAddress={this.onChangeAddress}
          {...this.state}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLocationsData: form => {
      dispatch(fetchLocationsData(form));
    },
    setFetching: () => {
      dispatch(setFetching());
    }
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InitialSubmissionFormContainer)
);
