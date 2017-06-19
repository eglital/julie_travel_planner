/* global google */
import { default as React, Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer
} from 'react-google-maps';
import restaurantIcon from '../assets/restaurantIcon.png';
import sightsIcon from '../assets/sightsIcon.png';
import placesIcon from '../assets/placesIcon.png';
import blankIcon from '../assets/blankIcon.png';

//props needs to have itinerary array
export default class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    console.log('PROPS', props);
    let markers = props.finalItinerary.map(marker => {
      return { ...marker, showInfo: false };
    });
    this.state = {
      markers,
      directions: null
    };
  }
  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();
    const request = directionsRequest({ markers: this.state.markers });
    DirectionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({ directions: result });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  handleMarkerClick = targetMarker => {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true
          };
        } else {
          return {
            ...marker,
            showInfo: false
          };
        }
      })
    });
  };

  handleMarkerClose = targetMarker => {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false
          };
        }
        return marker;
      })
    });
  };
  render() {
    return (
      <div
        className="googleMap"
        style={{
          maxWidth: '600px',
          width: '100%',
          height: '500px',
          margin: '0 auto',
          padding: 20
        }}
      >
        <GoogleMapMarkers
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
          directions={this.state.directions}
        />
      </div>
    );
  }
}
const GoogleMapMarkers = withGoogleMap(props => {
  const { markers, onMarkerClose, onMarkerClick, directions } = props;

  return (
    <div>
      {markers
        ? <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: markers[0].lat, lng: markers[0].lng }}
          >
            {markersList({ markers, onMarkerClick, onMarkerClose })}
            {directions &&
              <DirectionsRenderer
                directions={directions}
                options={{ suppressMarkers: true }}
              />}
          </GoogleMap>
        : null}
    </div>
  );
});

const icon = marker => {
  switch (marker.section) {
    case 'food':
      return restaurantIcon;
    case 'sights':
      return sightsIcon;
    case 'places':
      return placesIcon;
    default:
      return blankIcon;
  }
};

const markersList = ({ markers, onMarkerClick, onMarkerClose }) => {
  return markers.map(marker => {
    return (
      <Marker
        position={{ lat: marker.lat, lng: marker.lng }}
        key={marker.departureTime}
        onClick={() => onMarkerClick(marker)}
        icon={icon(marker)}
      >
        {marker.showInfo &&
          <InfoWindow onCloseClick={() => onMarkerClose(marker)}>
            {infoContent(marker)}
          </InfoWindow>}
      </Marker>
    );
  });
};

const infoContent = marker => {
  return (
    <div>
      {marker.name
        ? <div><strong>Name: </strong> {marker.name} </div>
        : <div><strong>Current Location</strong></div>}
      {marker.address
        ? <div><strong>Address: </strong> {marker.address} </div>
        : null}

    </div>
  );
};
const directionsRequest = ({ markers }) => {
  let request = { travelMode: 'DRIVING' };
  request.origin = {
    lat: markers[0].lat,
    lng: markers[0].lng
  };
  request.destination = {
    lat: markers[markers.length - 1].lat,
    lng: markers[markers.length - 1].lng
  };
  request.waypoints = [];
  for (let i = 1; i < markers.length - 1; i++) {
    request.waypoints.push({
      location: {
        lat: markers[i].lat,
        lng: markers[i].lng
      },
      stopover: true
    });
  }
  return request;
};

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
