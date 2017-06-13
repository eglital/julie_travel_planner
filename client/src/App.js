import React, { Component } from 'react';

import LocationSelectionContainer
  from './containers/LocationSelectionContainer';

import InitialSubmissionFormContainer from './containers/InitialSubmissionFormContainer';



class App extends Component {
  render() {
    return (
      <div className="App">

        <LocationSelectionContainer />

        <InitialSubmissionFormContainer />

      </div>
    );
  }
}

export default App;
