import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import fbAuthHelper from "../helpers/facebookAuthHelper";
import { Navbar, Nav, NavItem, Collapse, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

class JulieNavbar extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      userLoggedIn: fbAuthHelper.userLoggedIn()
    };
  }

  loginUser = () => {
    this.setState({
      userLoggedIn: true
    });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <Link to="/">
            <img src={logo} alt="Julie Travel Planner" height="40px" />
          </Link>
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.state.userLoggedIn
              ? <Nav
                  className="ml-auto"
                  navbar
                  style={{ textAlign: "right", marginTop: "15px" }}
                >
                  <NavItem>
                    <Link to="/saved" style={{ textDecoration: "none" }}>
                      <p className="nav-hover">
                        Itineraries
                      </p>
                    </Link>
                  </NavItem>
                  <NavItem style={{ paddingLeft: "15px" }}>
                    <LogoutButton />
                  </NavItem>
                </Nav>
              : <Nav
                  className="ml-auto"
                  navbar
                  style={{ textAlign: "right", marginTop: "15px" }}
                >
                  <NavItem>
                    <LoginButton loginUser={this.loginUser} />
                  </NavItem>
                </Nav>}
          </Collapse>
        </Navbar>
        {/* {this.state.userLoggedIn
              ? <Nav className="ml-auto" navbar>

                  <NavItem>
                    <Link to="/saved"><Button>Saved Itineraries</Button></Link>
                  </NavItem>
                  <NavItem>
                    <LogoutButton />
                  </NavItem>

                </Nav>
              : <Nav className="ml-auto" navbar>
                  <NavItem>
                    <LoginButton loginUser={this.loginUser} />
                  </NavItem>
                </Nav>} */}
        {/* </Collapse> */}

      </div>
    );
  }
}

export default JulieNavbar;
