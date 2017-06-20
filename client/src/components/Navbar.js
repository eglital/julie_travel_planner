import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import fbAuthHelper from '../helpers/facebookAuthHelper';
import {
    Navbar,
    Nav,
    NavItem,
    Button
}
from 'reactstrap';
import {
    Link
}
from 'react-router-dom';


class JulieNavbar extends React.Component {
    
    constructor(){
        super();
        
        this.state({
            userLoggedIn : fbAuthHelper.userLoggedIn()
        });
    }
    
    
    loginUser = () => {
        this.setState({
            userLoggedIn: true
        });
    }
    
    
    render() {
        return (
            <div>
            <Navbar color="faded" light toggleable>
                {this.state.userLoggedIn ?
                (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/saved"><Button>Saved Itineraries</Button></Link>
                        </NavItem>
                        <NavItem>
                            <LogoutButton />
                        </NavItem>
                    </Nav>
                )
                :
                (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <LoginButton loginUser={this.loginUser}/>
                        </NavItem>
                    </Nav>
                )}
            </Navbar>
        </div>
        );
    }
};

export default JulieNavbar;
