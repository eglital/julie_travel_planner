import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
const PreferencesCheckbox = () => {
  return <FormGroup check>{checkboxes()}</FormGroup>;
};

const checkboxes = () => {
  return [
    'shops',
    'arts',
    'outdoors',
    'sights',
    'trending',
    'meals'
  ].map(type => {
    return (
      <Label check key={type}>
        <Input defaultChecked type="checkbox" />{' '}
        {type}{' '}
      </Label>
    );
  });
};
export default PreferencesCheckbox;
