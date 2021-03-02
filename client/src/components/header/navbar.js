import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/profile">Healthy Habits</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/profile">Profile</Nav.Link>
          <NavDropdown title="Goals" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/goals">Create/View Goals</NavDropdown.Item>
          <NavDropdown.Item href="/checkin">Check-In</NavDropdown.Item>
          <NavDropdown.Item href="/progress">Progress</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/resources">Resources</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Logout
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;
