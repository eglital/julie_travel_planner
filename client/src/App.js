import React, { Component } from 'react';
import LocationSelectionContainer
  from './containers/LocationSelectionContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationSelectionContainer />
      </div>
    );
  }
}

export default App;
