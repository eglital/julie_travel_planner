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
// <img style={{maxWidth:75, maxHeight:75}}src={locationData.photo || "https://placeholdit.co//i/100x100"} alt={locationData.name}/>
let locationImgStyle = function(photo){
 return {
  width: 75,
  height: 75,
  backgroundImage: `url(${photo})`,
  backgroundSize: 'cover',
  flex: '0 0 auto'
 };
};
const LocationSegment = ({ arrivalTime, departureTime, locationData }) => {
 return (
        <div className="location-segment" style={{display: "flex", padding: 10, margin: 10, alignItems: "center"}}>
             <div style={timeboxStyle}><span>{arrivalTime && moment(arrivalTime).format('LT')}</span><span>{arrivalTime && departureTime ? "-" : null}</span><span>{departureTime && moment(departureTime).format('LT')}</span></div>
             <div className="location-segment-info" style={{display: "flex", flexGrow: 1}}>
              <div style={locationImgStyle(locationData.photo)}></div>
              <p>{locationData.name}</p>
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