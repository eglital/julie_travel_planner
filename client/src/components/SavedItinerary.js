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
import moment from 'moment';

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

  displayLocationsFromItinerary = itinerary => {
    let locations = [];
    for (let i = 1; i < itinerary.locations.length - 1; i++) {
      locations.push(<p>This is a location ({itinerary.locations[i]})</p>);
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
              {moment(itinerary.date).format('MMM Do YY')}
              {' '}
              -
              {' '}
              {itinerary.locations.length - 2}
              {' '}
              {itinerary.locations.length === 3
                ? 'place planned'
                : 'places planned'}
            </CardTitle>
          </CardBlock>
        </Card>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>
            <span style={{ fontSize: '16px' }}>
              {moment(itinerary.date).format('MMM Do YY')}
              {' '}
              -
              {' '}
              {itinerary.locations.length - 2}
              {' '}
              {itinerary.locations.length === 3
                ? 'place planned'
                : 'places planned'}
            </span>
            <span
              onClick={this.toggle}
              style={{ position: 'absolute', right: '25px' }}
            >
              x
            </span>
          </ModalHeader>
          <ModalBody>
            <div>
              Locations you visited during this trip:
            </div>
            {this.displayLocationsFromItinerary(itinerary)}
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

export default SavedItinerary;
