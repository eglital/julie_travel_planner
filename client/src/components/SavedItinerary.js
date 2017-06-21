import React from 'react';
import {
  Card,
  CardBlock,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import Dotdotdot from 'react-dotdotdot';

const SingleLocation = props => {
  const { location } = props;
  return (
    <a
      href={location.link}
      style={{ textDecoration: 'none', cursor: 'pointer' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card
        className="hoverable"
        style={{
          marginBottom: '10px',
          maxWidth: '500px',
          borderColor: '#C17DBF',
          cursor: 'pointer'
        }}
      >
        <CardBlock style={{ padding: '10px' }}>
          <div
            style={{
              display: 'inline-block',
              backgroundImage: `url(${location.photo})`,
              backgroundPosition: '50% 50%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '150px',
              width: '33%',
              height: '100px',
              float: 'left',
              marginRight: '5%'
            }}
          />
          <div style={{ display: 'inline-block', float: 'left', width: '60%' }}>
            <CardTitle
              className="text-center"
              style={{
                color: 'black',
                fontSize: '18px',
                marginTop: '-2px',
                marginBottom: '2px'
              }}
            >
              <Dotdotdot clamp={1}>
                {location.name}
              </Dotdotdot>
            </CardTitle>
            <div
              style={{
                color: 'black',
                fontSize: '14px',
                height: '81px',
                overflow: 'hidden'
              }}
            >
              <Dotdotdot clamp={4}>
                <strong>{location.category}</strong> - {location.tip}
              </Dotdotdot>
            </div>
          </div>
        </CardBlock>
      </Card>
    </a>
  );
};

class SavedItinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleAndDelete = e => {
    this.toggle();
    this.props.deleteItinerary(
      e.currentTarget.dataset.itineraryId,
      this.props.userItineraries
    );
  };

  displayLocationsFromItinerary = itinerary => {
    let locations = [];
    for (let i = 1; i < itinerary.length - 1; i++) {
      locations.push(
        <SingleLocation
          location={itinerary[i]}
          key={itinerary[i].departureTime}
        />
      );
    }

    return locations;
  };

  // seeFullItinerary = itineraryId => {
  //   history.push(`/itinerary-overview/${itineraryId}`);
  // };

  render() {
    const { itinerary } = this.props;
    console.log('id:', itinerary._id);

    return (
      <div>
        <Card
          className="hoverable"
          onClick={this.toggle}
          style={{ height: '40px', marginBottom: '10px', cursor: 'pointer' }}
        >
          <CardBlock style={{ padding: '10px' }}>
            <CardTitle className="text-center" onClick={this.toggle} tag="h6">
              {itinerary.city} - {' '}
              {moment(itinerary.data[0].departureTime).format('MMM Do YY')}
            </CardTitle>
          </CardBlock>
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>
            <span style={{ fontSize: '16px' }}>
              {itinerary.city} - {' '}
              {moment(itinerary.data[0].departureTime).format('MMM Do YY')}
            </span>
            <span
              onClick={this.toggle}
              style={{ position: 'absolute', right: '25px', cursor: 'pointer' }}
            >
              x
            </span>
          </ModalHeader>
          <ModalBody>
            <div className="text-center" style={{ marginBottom: '15px' }}>
              Places you visited during this trip:
            </div>
            {this.displayLocationsFromItinerary(itinerary.data)}
            <div className="text-center" style={{ marginBottom: '10px' }}>
              <Button
                outline
                color="secondary"
                size="sm"
                // onClick={() => {
                //   this.props.history.push(
                //     `/itinerary-overview/${itinerary._id}`
                //   );
                // }}
                style={{ cursor: 'pointer' }}
              >
                <Link to={`/itinerary-overview/${itinerary._id}`}>
                  See Full Itinerary
                </Link>!

              </Button>

            </div>
            <div className="text-center" style={{ marginBottom: '10px' }}>

              <Button
                outline
                color="warning"
                size="sm"
                data-itinerary-id={itinerary._id}
                onClick={this.toggleAndDelete}
                style={{ cursor: 'pointer' }}
              >
                Delete Itinerary
              </Button>
            </div>
            <div className="text-center">
              <Button
                outline
                color="info"
                size="sm"
                onClick={this.toggle}
                style={{ cursor: 'pointer' }}
              >
                Close Window
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userItineraries: state.userItineraries.data
  };
};

export default withRouter(connect(mapStateToProps, null)(SavedItinerary));
