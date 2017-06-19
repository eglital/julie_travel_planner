import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Collapse,
  ListGroup,
  Card,
  CardBlock
} from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import { getSavedItineraries } from '../actions/itineraryActions';

class ItineraryOverviewContainer extends Component {
  constructor() {
    super();
    this.state = {
      lastShown: null,
      collapse: false,
      savedItineraries: [
        { date: 'something', locations: ['1', '2', '3'] },
        { date: 'different', locations: ['4', '5', '6'] }
      ]
    };
  }

  componentDidMount() {}

  // toggle = () => {
  //   this.setState({ collapse: !this.state.collapse });
  // };

  onClick = e => {
    console.log(e.target);
    if (this.state.lastShown) {
      this.state.lastShown.classList.remove('show');
    }
    e.target.classList.add('show');
    this.setState({
      lastShown: e.target
    });
  };

  displaySavedItineraries() {
    let itineraries = this.state.savedItineraries.map(itinerary => {
      return (
        <div>
          {/* <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: '1rem' }}
          > */}
          Toggle
          {/* </Button> */}
          <Collapse onClick={this.onClick}>
            <Card>
              <CardBlock>
                Anim pariatur cliche reprehenderit,
              </CardBlock>
            </Card>
          </Collapse>
        </div>
      );
    });

    return itineraries;
  }

  render() {
    // if (!this.props.savedItineraries) {
    //   return <Redirect to="/PageNotFound" />;
    // } else {
    console.log(this.state.savedItineraries.length);
    return (
      <Container>
        <Row>
          <Col xs="12">

            {this.state.savedItineraries.length
              ? this.displaySavedItineraries()
              : <h3>You haven't created any itineraries yet!</h3>}
          </Col>
        </Row>
      </Container>
    );
  }
}
//}

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
