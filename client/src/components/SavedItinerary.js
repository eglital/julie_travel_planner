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
import { connect } from 'react-redux';

import moment from 'moment';
import Dotdotdot from 'react-dotdotdot';
import { deleteItinerary } from '../actions/itineraryActions';
import fbAuthHelper from '../helpers/facebookAuthHelper';

const SingleLocation = props => {
  const { location } = props;
  return (
    <a
      href={location.link}
      style={{ textDecoration: 'none' }}
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
    console.log(e.target.dataset);
    this.toggle();
    this.props.deleteItinerary(
      e.currentTarget.dataset.itineraryId,
      fbAuthHelper.makeFBQS()
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

  render() {
    const { itinerary } = this.props;
    return (
      <div>
        <Card
          onClick={this.toggle}
          style={{ height: '40px', marginBottom: '10px' }}
        >
          <CardBlock style={{ padding: '10px' }}>
            <CardTitle className="text-center" onClick={this.toggle} tag="h6">
              {moment(itinerary.data[0].departureTime).format('MMM Do YY')}
              {' '}
              -
              {' '}
              {itinerary.data.length - 2}
              {' '}
              {itinerary.data.length === 3 ? 'place' : 'places'}
            </CardTitle>
          </CardBlock>
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>
            <span style={{ fontSize: '16px' }}>
              {moment(itinerary.data[0].departureTime).format('MMM Do YY')}
              {' '}
              -
              {' '}
              {itinerary.data.length - 2}
              {' '}
              {itinerary.data.length === 3 ? 'place' : 'places'}
            </span>
            <span
              onClick={this.toggle}
              style={{ position: 'absolute', right: '25px' }}
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
                color="warning"
                size="sm"
                data-itinerary-id={itinerary._id}
                onClick={this.toggleAndDelete}
              >
                Delete Itinerary
              </Button>
            </div>
            <div className="text-center">
              <Button outline color="info" size="sm" onClick={this.toggle}>
                Close Window
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItinerary: (itineraryId, fbqs) => {
      dispatch(deleteItinerary(itineraryId, fbqs));
    }
  };
};

export default connect(null, mapDispatchToProps)(SavedItinerary);
