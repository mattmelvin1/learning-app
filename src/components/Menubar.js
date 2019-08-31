import React from "react";
import { Nav, Navbar, NavDropdown, MenuItem } from "react-bootstrap";

export default class Menubar extends React.Component {


  render() {
    return (
      <Navbar inverse fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Learning-app</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>          
        <Navbar.Collapse>
          <Nav pullRight>
             <NavDropdown eventKey={3} title="Options" id="basic-nav-dropdown" pullRight>
              <MenuItem eventKey={3.1} href="/signup">Signup</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}href="/login">Login</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}href="/">Logout</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}href="/">Help</MenuItem>
            </NavDropdown>       
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
