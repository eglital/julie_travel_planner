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
      <DropdownItem key={pref} style={{ height: '25px' }}>
        <div data-button="true">
          {pref}
          <input
            data-button="true"
            checked={preferences[pref]}
            type="checkbox"
            onChange={onChange}
            value={pref}
            style={{ marginTop: '5px', float: 'right' }}
          />
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

  handleClickOutside(e) {
    if (!e.target.dataset.button) {
      this.setState({ dropdownOpen: false });
    }
  }

  render() {
    return (
      <FormGroup className="preferences">
        <Dropdown
          tether="true"
          isOpen={this.state.dropdownOpen}
          toggle={() => {
            return;
          }}
        >
          <DropdownToggle caret onClick={this.toggle}>
            Preferences
          </DropdownToggle>
          <DropdownMenu>
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
