import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const TransportationRadioButton = () => {
  return (
    <div>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="transportation" />{" "}
          Walking
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="transportation" />{" "}
          Driving
        </Label>
      </FormGroup>
    </div>
  );
};
export default TransportationRadioButton;
