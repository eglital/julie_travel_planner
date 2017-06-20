import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import fbAuthHelper from '../helpers/facebookAuthHelper';
import { Navbar, Nav, NavItem } from 'reactstrap';


/**
 * 
 * Something like component did mount, then check if user is logged in 
 * If user is authed, then we should send a request for a user's itineries if it's not already in the state
 * 
 * 
 * 
 **/





class JulieNavbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        {fbAuthHelper.userLoggedIn() ? <LogoutButton /> : <LoginButton />}
                      </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default JulieNavbar;