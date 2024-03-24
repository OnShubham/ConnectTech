import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../Assets/3081614.jpg";

function Landing() {
  return (

   

    <Container className="mt-5 pt-5 "  >
      <Row>
        <Col xs={12} md={6}>
          <img src={logo} alt="logo" className="img-fluid" />
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div>
            <h1 style={{ color: "#0046fc" }}>
              {" "}
              Welcome to <b> Connect - Tech </b>
            </h1>{" "}
            <br />
            <h3> Where Developers Connect and Innovate Together </h3> <br />
            <p>
              {" "}
              At ConnectTech, we're passionate about fostering collaboration and
              innovation in the world of technology. Our platform serves as a
              dynamic hub where developers from diverse backgrounds come
              together to connect, share ideas, and build meaningful networks.{" "}
            </p>
          </div>
        </Col>
      </Row>
      
    </Container>

   
  );
}

export default Landing;
