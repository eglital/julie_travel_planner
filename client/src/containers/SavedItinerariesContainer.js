import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import SavedItinerary from "../components/SavedItinerary";
// import logo from '../assets/logo.jpg';
import { fetchUserItinerariesData } from "../actions/userItinerariesActions";

class ItineraryOverviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    // this.state = {
    //   lastShown: null,
    //   collapse: false,
    //   savedItineraries: [
    //     { date: Date.now(), locations: ['1', '2', '3'] },
    //     { date: Date.now() - 3000, locations: ['10', '11'] },
    //     { date: Date.now() - 5000, locations: ['14', '15', '16', '17'] }
    //   ]
    // };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUserItinerariesData();
  }

  displaySavedItineraries() {
    let itineraries = this.props.userItineraries.map(itinerary => {
      console.log(itinerary);
      return <SavedItinerary itinerary={itinerary} key={itinerary._id} />;
    });

    return itineraries;
  }

  render() {
    if (!this.props.userItineraries) {
      return <p>Fetching</p>;
    } else {
      return (
        <Container
          style={{ marginLeft: "5%", marginRight: "5%", marginTop: "10px" }}
        >
          <Row>
            <Col xs="12" md={{ size: "8", offset: "2" }}>
              {this.props.userItineraries.length
                ? <div>
                    <h4 className="text-center">Your previous itineraries:</h4>
                    {this.displaySavedItineraries()}
                  </div>
                : <h3 className="text-center">
                    You haven't created any itineraries yet!
                  </h3>}
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    userItineraries: state.userItineraries.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserItinerariesData: () => {
      dispatch(fetchUserItinerariesData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ItineraryOverviewContainer
);
