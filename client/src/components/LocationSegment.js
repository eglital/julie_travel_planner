import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Card } from 'reactstrap';



let departureTime = Date.now();
let arrivalTime = Date.now() + 100000000;
let locationData = {
 url: "https://placeholdit.co//i/100x100",
 title: "BooBoo"
};

let timeboxStyle = {
 display: "flex",
 flexDirection: "column",
 justifyContent: "space-around",
 alignItems: "center",
 marginRight: 10,
};



const LocationSegment = () => {
 return (
        <div className="location-segment" style={{display: "flex", padding: 10, margin: 10, alignItems: "center"}}>
             <div style={timeboxStyle}><span>{moment(departureTime).format('LT')}</span><span>-</span><span>{moment(arrivalTime).format('LT')}</span></div>
             <div style={{display: "flex", flexGrow: 1}}>
              <img style={{maxWidth:75, maxHeight:75, flexShrink: 1}}src={locationData.url} alt={locationData.title}/>
              <p style={{flexGrow:1}}>{locationData.title}</p>
             </div>
        </div>
     );   
};

LocationSegment.propTypes = {
    
};


export default LocationSegment;