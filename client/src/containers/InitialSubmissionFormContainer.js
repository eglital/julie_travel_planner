import React, {
    Component
}
from 'react';
import InitialSubmissionForm from '../components/InitialSubmissionForm';


function getNextHour() {
    let ROUNDING = 60 * 60 * 1000; /*ms*/
    let start = Date.now();
    return Math.ceil((+start) / ROUNDING) * ROUNDING;
}




class InitialSubmissionFormContainer extends Component {


    constructor() {
        super();

        this.state = {
            nextHour: getNextHour(),
            startTime: getNextHour(),
            endTime: null,
            startingLocation: null
        };
    }

    onStartTimeChange = (e) => {
        this.setState({
            startTime: +e.target.value
        });
    }

    onEndTimeChange = (e) => {
        this.setState({
            endTime: +e.target.value
        });
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        //construct simple json for form submission
        let data = {
            startTime: this.state.startTime,
            endTime: this.state.endTime
        };
        //attempt to get location with geolocation API
        if ("geolocation" in navigator) {
            /* geolocation is available */

            let p = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(function(position) {
                    resolve([position.coords.latitude, position.coords.longitude]);
                }, reject);

            });
            p.then((coordinates) => {
                    data.startingLocation = coordinates;

                }, (navError) => {
                    //prompt with box for starting location and update the state?
                    console.log("Please enter a starting location");
                    data.startingLocation = this.state.startingLocation; //or default values?
                })
                .then((form) => {
                    console.log("updated data", data);
                    //send form to action dispatcher
                    
                    
                    
                    window.history.pushState({}, "ItineraryCreationPage", 'itinerary-creation');
                });

        }
        else {
            /* geolocation IS NOT available */
        }


    }


    render() {

        //create new rounded time to pass to submission form each time
        //consider moving to lifecycle hook to check for changes to avoid rerenders

        return (
            <InitialSubmissionForm onSubmit={this.onFormSubmit} onStartTimeChange={this.onStartTimeChange} onEndTimeChange={this.onEndTimeChange} startTime={this.state.startTime} nextHour={this.state.nextHour}/>
        );
    }
}




export default InitialSubmissionFormContainer;
