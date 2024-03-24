import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="Header" expand="lg " style={{background: "#d6d6d6"}}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Connect - Tech
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Button className="auth-btn">
            <Nav.Link style={{ color: "white" }} as={Link} to="/login">
              Login
            </Nav.Link>
          </Button>
          <Button className="auth-btn ">
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
