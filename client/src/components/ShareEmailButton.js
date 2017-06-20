/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class ShareEmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      name: ''
    };

    this.toggle = this.toggle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      email: '',
      name: ''
    });
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onEmailSubmit = e => {
    e.preventDefault();
    let form = {
      email: this.state.email,
      name: this.state.name,
      itinerary: this.props.itinerary,
      id: this.props.id
    };
    this.props.shareByEmail(form);
    this.toggle();
  };

  render() {
    return (
      <div
        style={{
          display: 'inline-block',
          marginLeft: '9px',
          textAlign: 'center'
        }}
      >
        <div>
          <img
            alt="email"
            src="../emailicon.png"
            height="35px"
            width="35px"
            style={{ marginTop: '-23px', cursor: 'pointer' }}
            onClick={this.toggle}
          />
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Share Your Itinerary By Email
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="email">Who do you want to send it to</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your friend's email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Your Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={this.onEmailSubmit}>
              Send Email
            </Button>
            {' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
    // <div style={{ display: 'inline-block' }}>
    //   <span onClick={this.toggle}><FaEnvelopeO /></span>

    // </div>
  }
}

export default ShareEmailButton;
