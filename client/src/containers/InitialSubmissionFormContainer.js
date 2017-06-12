import React, { Component } from 'react';
import InitialSubmissionForm from '../components/InitialSubmissionForm';


function getNextHour() {
    let ROUNDING = 60 * 60 * 1000; /*ms*/
    let start = Date.now();
    return Math.ceil((+start) / ROUNDING) * ROUNDING;
}




class InitialSubmissionFormContainer extends Component{
    
    
    constructor(){
        super();
        
        this.state = {
            nextHour: getNextHour(),
            startTime: getNextHour(),
            endTime: null,
            startingLocation: null
        };
    }
    
    onStartTimeChange = (e) => {
        console.log("e.target.value", e.target.value);
        this.setState({
            startTime: +e.target.value
        });
    }
    
    onEndTimeChange = (e) => {
        this.setState({
            endTime: +e.target.value
        });
    }
    
    
    
    
    render() {
        console.log("rendering");
        
        //create new rounded time to pass to submission form each time
        //consider moving to lifecycle hook to check for changes to avoid rerenders

        return (
            <InitialSubmissionForm onStartTimeChange={this.onStartTimeChange} onEndTimeChange={this.onEndTimeChange} startTime={this.state.startTime} nextHour={this.state.nextHour}/>    
        );
    }
}




export default InitialSubmissionFormContainer;