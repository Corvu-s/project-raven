import { NavLink } from "react-router-dom";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import React from "react";

function Navigation() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Raven Finance</Navbar.Brand>

        <Nav className="mr-auto ">
          <NavLink to="/" class="nav-link ">
            Portfolio
          </NavLink>
          <NavLink to="/details" className="nav-link ">
            Details
          </NavLink>
          <NavLink to="/tools" className="nav-link  ">
            Tools
          </NavLink>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navigation;
