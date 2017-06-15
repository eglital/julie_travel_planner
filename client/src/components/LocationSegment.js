import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

let timeboxStyle = {
 display: "flex",
 flexDirection: "column",
 justifyContent: "space-around",
 alignItems: "center",
 marginRight: 10,
 minWidth: 75
};

const LocationSegment = ({ arrivalTime, departureTime, locationData }) => {
locationData = {
 url: "https://placeholdit.co//i/100x100",
 title: "BooBoo Palace Burgers"
};
 
 return (
        <div className="location-segment" style={{display: "flex", padding: 10, margin: 10, alignItems: "center"}}>
             <div style={timeboxStyle}><span>{arrivalTime && moment(arrivalTime).format('LT')}</span><span>{arrivalTime && departureTime ? "-" : null}</span><span>{departureTime && moment(departureTime).format('LT')}</span></div>
             <div className="location-segment-info" style={{display: "flex", flexGrow: 1}}>
              <img style={{maxWidth:75, maxHeight:75}}src={locationData.url} alt={locationData.title}/>
              <p style={{flexGrow:1}}>{locationData.title}</p>
             </div>
        </div>
     );   
};
LocationSegment.propTypes = {
 arrivalTime: PropTypes.number,
 departureTime: PropTypes.number,
 locationData: PropTypes.object.isRequired
};

export default LocationSegment;