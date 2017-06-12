import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = props => {
  return (
    <div style={{ marginTop: '5px', marginBottom: '15px' }}>
      <div className="text-center">
        2 of 5 locations selected
      </div>
      <div style={{ marginTop: '10px' }}>
        <Progress value="2" max="5" />
      </div>
    </div>
  );
};

export default ProgressBar;
