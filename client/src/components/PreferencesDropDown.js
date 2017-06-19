import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function generatePreferences(preferences, onChange) {
  return Object.keys(preferences).map((pref) => {
    return (
        <DropdownItem key={pref}>
            <div>
                <label>{pref}
                  <input checked={preferences[pref]} type="checkbox" onChange={onChange} value={pref}/>
                </label>
                {" "}
            </div>
        </DropdownItem>
    );
  });
}





export default class PreferencesDropDown extends React.Component {
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

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={() => {return}}>
        <DropdownToggle caret onClick={() => {
            this.toggle();
        }}>
          Preferences
        </DropdownToggle>
        <DropdownMenu className="centered-axis-x">
            {generatePreferences(this.props.preferences, this.props.onPrefChange)}
        </DropdownMenu>
      </Dropdown>
    );
  }
}