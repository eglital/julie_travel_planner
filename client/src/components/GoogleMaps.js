/* global google */
import { default as React, Component } from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer
} from "react-google-maps";
import restaurantIcon from "../assets/restaurantIcon.png";
import sightsIcon from "../assets/sightsIcon.png";
import placesIcon from "../assets/placesIcon.png";
import blankIcon from "../assets/blankIcon.png";
import ShareTwitterButton from "./ShareTwitterButton";
import ShareFacebookButton from "./ShareFacebookButton";

//props needs to have itinerary array
export default class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    console.log(props.finalItinerary);
    // let markers = props.finalItinerary.forEach(marker => {
    //   return { ...marker, showInfo: false };
    // });
    this.state = {
      // markers,
      markers: [
        {
          departureTime: new Date(2017, 6, 12, 14, 0, 0).valueOf(),
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
          departureTime: new Date(2017, 6, 12, 15, 0, 0).valueOf(),
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
          departureTime: new Date(2017, 6, 12, 16, 0, 0).valueOf(),
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
          departureTime: new Date(2017, 6, 12, 17, 0, 0).valueOf(),
          showInfo: false,
          section: "places"
        },
        {
          departureTime: new Date(2017, 6, 12, 18, 0, 0).valueOf(),
          arrivalTime: null,
          lng: -87.636393,
          lat: 41.878112,
          showInfo: false
        }
      ],
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
      <div>
        <ShareTwitterButton />
        <ShareFacebookButton />
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
            directions={this.state.directions}
          />
        </div>
      </div>
    );
  }
}
const GoogleMapMarkers = withGoogleMap(props => {
  const { markers, onMarkerClose, onMarkerClick, directions } = props;

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: markers[0].lat, lng: markers[0].lng }}
    >
      {markersList({ markers, onMarkerClick, onMarkerClose })}
      {directions &&
        <DirectionsRenderer
          directions={directions}
          options={{ suppressMarkers: true }}
        />}
    </GoogleMap>
  );
});

const icon = marker => {
  switch (marker.section) {
    case "food":
      return restaurantIcon;
    case "sights":
      return sightsIcon;
    case "places":
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
  let request = { travelMode: "DRIVING" };
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
