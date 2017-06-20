import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import SavedItinerary from '../components/SavedItinerary';
// import logo from '../assets/logo.jpg';
//import { getSavedItineraries } from '../actions/itineraryActions';

class ItineraryOverviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.state = {
      lastShown: null,
      collapse: false,
      savedItineraries: [
        { date: Date.now(), locations: ['1', '2', '3'] },
        { date: Date.now() - 3000, locations: ['10', '11'] },
        { date: Date.now() - 5000, locations: ['14', '15', '16', '17'] }
      ]
    };
  }

  componentDidMount() {}

  displaySavedItineraries() {
    let itineraries = this.state.savedItineraries.map(itinerary => {
      return <SavedItinerary itinerary={itinerary} key={itinerary.date} />;
    });

    return itineraries;
  }

  render() {
    // if (!this.props.savedItineraries) {
    //   return <Redirect to="/PageNotFound" />;
    // } else {
    return (
      <Container
        style={{ marginLeft: '5%', marginRight: '5%', marginTop: '10px' }}
      >
        <Row>
          <Col xs="12" md={{ size: '8', offset: '2' }}>
            {this.state.savedItineraries.length
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

const mapStateToProps = state => {
  return {
    // savedItineraries: state.user.savedItineraries,
    //id: state.user.id
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // getSavedItineraries: id => {
    //   dispatch(getSavedItineraries(id));
    //}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ItineraryOverviewContainer
);
