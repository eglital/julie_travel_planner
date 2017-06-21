import React from 'react';
import fbAuthHelper from '../helpers/facebookAuthHelper';

const LogoutButton = () => {
  return (
    <p
      className="nav-hover"
      style={{ cursor: 'pointer' }}
      onClick={() => fbAuthHelper.unauthUser()}
    >
      Log Out
    </p>
  );
};

export default LogoutButton;
