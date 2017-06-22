import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import ProgressBar from "../components/Progress";
import { addLocationToItinerary } from "../actions/builderActions";
import { getFinalItinerary } from "../actions/itineraryActions";
import displayThreeLocations from "../helpers/randomLocationPicker";

class LocationSelectionContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.itinerary.endTime -
        nextProps.itinerary.startTime -
        nextProps.builder.duration <=
      60 * 60 * 1000
    ) {
      return false;
    }
    return true;
  }

  onClickLocation = e => {
    this.props.addLocationToItinerary(
      JSON.parse(e.currentTarget.dataset.loc),
      e.currentTarget.dataset.section,
      e.currentTarget.dataset.itineraryId,
      this.props.itinerary,
      this.props.builder
    );
  };

  onClickBuildItinerary = () => {
    this.props.getFinalItinerary(this.props.itinerary.id);
  };

  render() {
    if (!this.props.locations.food) {
      return <Redirect to="/PageNotFound" />;
    }
    return (
      <Container style={{ marginBottom: "50px" }}>
        <Row>
          <Col lg={{ size: 8, offset: 2 }}>
            <ProgressBar
              startTime={this.props.itinerary.startTime}
              endTime={this.props.itinerary.endTime}
              duration={this.props.builder.duration}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={{ size: 6, offset: 3 }}>
            <p className="text-center">
              Select one of the following to add it to your itinerary, and
              {" "}
              <span style={{ color: "#C17DBF", fontWeight: "bold" }}>
                Julie
              </span>
              {" "}
              will connect the dots.
            </p>
            {displayThreeLocations(this.props, this.onClickLocation)}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              Don't feel like any of these locations?
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            style={{ marginBottom: "15px" }}
            className="text-center"
            xs={{ size: 6, push: 2, pull: 2, offset: 1 }}
          >
            <Button
              outline
              color="info"
              size="sm"
              onClick={() => {
                this.forceUpdate();
              }}
            >
              Get New Options
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">
              Don't want to add anything else?
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center"
            xs={{ size: 6, push: 2, pull: 2, offset: 1 }}
          >
            <Button
              outline
              color="warning"
              size="sm"
              onClick={this.onClickBuildItinerary}
            >
              Build Itinerary Now
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.locations.data,
    itinerary: state.itinerary,
    builder: state.builder
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addLocationToItinerary: (location, section, itineraryId, itinerary) => {
      dispatch(
        addLocationToItinerary(
          location,
          section,
          itineraryId,
          itinerary,
          ownProps.history
        )
      );
    },
    getFinalItinerary: (itineraryId, fbqs) => {
      dispatch(getFinalItinerary(itineraryId, ownProps.history));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LocationSelectionContainer)
);
