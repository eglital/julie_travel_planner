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
      <div style={{ margin: '0 auto' }} key={pref}>
        <DropdownItem key={pref} style={{ height: '25px' }}>
          <div data-button="true">
            {pref}
            <input
              data-button="true"
              checked={preferences[pref]}
              type="checkbox"
              onChange={onChange}
              value={pref}
              style={{ marginTop: '5px', float: 'right', cursor: 'pointer' }}
            />
          </div>
        </DropdownItem>
      </div>
    );
  });
}

class PreferencesDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.togglePref = this.togglePref.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  togglePref() {
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
      <FormGroup className="preferences" style={{ cursor: 'pointer' }}>
        <Dropdown
          tether="true"
          isOpen={this.state.dropdownOpen}
          toggle={() => {
            return;
          }}
          style={{ cursor: 'pointer' }}
        >
          <DropdownToggle
            caret
            onClick={this.togglePref}
            style={{ cursor: 'pointer' }}
          >
            Preferences
          </DropdownToggle>
          <DropdownMenu style={{ cursor: 'pointer' }}>
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
