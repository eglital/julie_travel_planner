import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup
} from 'reactstrap';
const enhanceWithClickOutside = require('react-click-outside');

function generatePreferences(preferences, onChange) {
  return Object.keys(preferences).map(pref => {
    return (
      <DropdownItem key={pref}>
        <div>
          <label>
            {pref}
            <input
              checked={preferences[pref]}
              type="checkbox"
              onChange={onChange}
              value={pref}
            />
          </label>
          {' '}
        </div>
      </DropdownItem>
    );
  });
}

class PreferencesDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleClickOutside() {
    console.log('Clicked outside');
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <FormGroup className="preferences">
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={() => {
            return;
          }}
        >
          <DropdownToggle
            caret
            onClick={() => {
              this.toggle();
            }}
          >
            Preferences
          </DropdownToggle>
          <DropdownMenu className="centered-axis-x">
            {generatePreferences(
              this.props.preferences,
              this.props.onPrefChange
            )}
          </DropdownMenu>
        </Dropdown>
      </FormGroup>
    );
  }
}

export default enhanceWithClickOutside(PreferencesDropDown);
