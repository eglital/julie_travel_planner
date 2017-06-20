/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
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
} from "reactstrap";
import FaEnvelopeO from "react-icons/lib/fa/envelope-o";

class ShareEmailButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <h3 onClick={this.toggle}><FaEnvelopeO /></h3>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Share Your Itinerary By Email
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="email">Who do you want to send it to</Label>
                <Input type="email" name="email" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>
            {" "}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ShareEmailButton;
