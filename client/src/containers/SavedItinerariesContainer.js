import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import SavedItinerary from '../components/SavedItinerary';
import { fetchUserItinerariesData } from '../actions/userItinerariesActions';
import { deleteItinerary } from '../actions/userItinerariesActions';

class SavedItinerariesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentDidMount() {
    this.props.fetchUserItinerariesData();
  }

  displaySavedItineraries() {
    let itineraries = this.props.userItineraries.map(itinerary => {
      return (
        <SavedItinerary
          itinerary={itinerary}
          deleteItinerary={this.props.deleteItinerary}
          key={itinerary._id}
        />
      );
    });

    return itineraries;
  }

  render() {
    if (!this.props.userItineraries) {
      return <p className="text-center">Loading...</p>;
    } else {
      return (
        <Container
          style={{
            marginLeft: '5%',
            marginRight: '5%',
            marginTop: '10px'
          }}
        >
          <Row>
            <Col xs="12" md={{ size: '8', offset: '2' }}>
              {this.props.userItineraries.length
                ? <div>
                    <h3
                      className="text-center"
                      style={{
                        color: '#C17DBF',
                        marginBottom: '15px',
                        textDecoration: 'underline darkgrey'
                      }}
                    >
                      Your Itineraries
                    </h3>
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
  return {
    userItineraries: state.userItineraries.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserItinerariesData: () => {
      dispatch(fetchUserItinerariesData());
    },
    deleteItinerary: (itineraryId, itineraries) => {
      dispatch(deleteItinerary(itineraryId, itineraries));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SavedItinerariesContainer
);
