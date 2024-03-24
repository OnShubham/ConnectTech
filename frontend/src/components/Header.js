import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

function Header() {
  return (
    <Navbar className="Header" expand="lg md ">
      <Container>

        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-bottom"
            alt="Tech" />
          <b> Connect-Tech</b>
          
        
        </Navbar.Brand>
        
        <Nav className="ml-auto">
          <Button className="auth-btn" expand="md ">
            <Nav.Link style={{ color: "white" }} as={Link} to="/login">
              Login
            </Nav.Link>
          </Button>
          <Button className="auth-btn " expand="md ">
            <Nav.Link as={Link} style={{ color: "white" }} to="/signup">
              Signup
            </Nav.Link>
          </Button>
        </Nav>
      </Container>
      <hr />
    </Navbar>
  );
}

export default Header;
