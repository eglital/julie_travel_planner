import React, { Component } from 'react';
import InitialSubmissionForm from '../components/InitialSubmissionForm';

import moment from 'moment';


function getNextHour() {
    let ROUNDING = 60 * 60 * 1000; /*ms*/
    let start = moment();
    start = moment(Math.ceil((+start) / ROUNDING) * ROUNDING);
    return start.milliseconds();
}


class InitialSubmissionFormContainer extends Component{
    
    
    
    
    
    
    render() {
        
        //create new rounded time to pass to submission form each time
        //consider moving to lifecycle hook to check for changes to avoid rerenders
        let nextHour = getNextHour();
        
        
        
        return (
            <InitialSubmissionForm nextHour={nextHour}/>    
        );
    }
}




export default InitialSubmissionFormContainer;