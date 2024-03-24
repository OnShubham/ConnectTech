import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="mt-auto bg-light footer">
      <Container>
        <Row>
          <Col className="text-center">
            <span className="text-muted">© 2024 Connect-Tech </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
