import React from 'react';
import {
    Button
}
from 'reactstrap';
import PropTypes from 'prop-types';
import fbAuthHelper from '../helpers/facebookAuthHelper';


const LogoutButton = () => {
    return (
        <Button onClick={() => fbAuthHelper.unauthUser()}>Logout</Button>
    );
};

LogoutButton.propTypes = {};

export default LogoutButton;

