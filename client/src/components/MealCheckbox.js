import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const MealCheckbox = () => {
  return (
    <FormGroup check>
      <Label check>
        <Input defaultChecked type="checkbox" />{" "}
        include meals?{" "}
      </Label>
    </FormGroup>
  );
};

export default MealCheckbox;
