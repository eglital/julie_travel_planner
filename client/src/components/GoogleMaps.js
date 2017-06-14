/* global google */
import { default as React, Component } from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import restaurantIcon from "../assets/restaurantIcon.png";
import sightsIcon from "../assets/sightsIcon.png";
//markers = locations(itinerary) from props
export default class GoogleMaps extends Component {
  constructor(props) {
    super();
    this.state = {
      markers: [
        {
          departureTime: "2017-07-12T14:00:00Z",
          arrivalTime: null,
          lng: -87.636393,
          lat: 41.878112,
          showInfo: false
        },
        {
          name: "Revival Food Hall",
          address: "125 S Clark St",
          lat: 41.8797704672721,
          lng: -87.63060092926025,
          category: "Food Court",
          tip: "The chef-driven food hall has a kiosk where Mindy Segal's staff serve her famous hot chocolate that includes the all-important homemade marshmallows. Get it to go.",
          isOpen: true,
          hours: "Open until 7:00 PM",
          departureTime: "2017-07-12T15:00:00Z",
          showInfo: false,
          section: "food"
        },
        {
          name: "Garrett Popcorn Shops",
          address: "27 W Jackson Blvd",
          lat: 41.87816283895944,
          lng: -87.62890752059629,
          category: "Snack Place",
          tip: "Something strange happens when you mix the CaramelCrisp® and CheeseCorn™ together evenly - Garrett's dubs this the Chicago Mix, and it's a huge seller because it's salty and sweet.",
          isOpen: true,
          hours: "Open until 8:00 PM",
          departureTime: "2017-07-12T16:00:00Z",
          showInfo: false,
          section: "sights"
        },
        {
          name: "Cafecito",
          address: "26 E Congress Pkwy",
          lat: 41.87574423890672,
          lng: -87.6264445685823,
          category: "Cuban Restaurant",
          tip: "Wifi pass is cubano01",
          isOpen: true,
          hours: "Open until 9:00 PM",
          departureTime: "2017-07-12T17:00:00Z",
          showInfo: false,
          section: "food"
        },
        {
          departureTime: "2017-07-12T18:00:00Z",
          arrivalTime: null,
          lng: -87.636393,
          lat: 41.878112,
          showInfo: false
        }
      ]
    };
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
        style={{ width: "500px", height: "500px", margin: "0 auto" }}
      >
        <GoogleMapMarkers
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={this.state.markers}
          onMarkerClick={this.handleMarkerClick}
          onMarkerClose={this.handleMarkerClose}
        />
      </div>
    );
  }
}
const GoogleMapMarkers = withGoogleMap(props => {
  const { markers, onMarkerClose, onMarkerClick } = props;

  return (
    <GoogleMap zoom={13} center={{ lat: markers[0].lat, lng: markers[0].lng }}>
      {markersList({ markers, onMarkerClick, onMarkerClose })}

    </GoogleMap>
  );
});
const icon = marker => {
  if (marker.section === "food") {
    return restaurantIcon;
  } else if (marker.section === "sights") {
    return sightsIcon;
  } else {
    return null;
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

/*
 * https://developers.google.com/maps/documentation/javascript/examples/event-simple
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
