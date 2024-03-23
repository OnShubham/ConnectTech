import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import icon from "../Assets/User research-rafiki.png"; // Ensure the path is correct

const SignUp = () => {
  const [user, setUser] = useState({
    name : "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success) {
        alert("User registered successfully");
      } else {
        alert(" User registered successfully ", data.error);
      }
    } catch (error) {
      console.log("SignUp", error);
    }
  };


  return (
    <Container className="p-5">
      <Row className="justify-content-md-center align-items-center login-background">
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={icon} alt="icon" className="img-fluid" />
        </Col>

        <Col xs={12} md={6} className="mb-3 p-1">
          <div className="login-card">
            <h1 className="text-center" style={{ color: "white", fontSize: "3rem" }}>Sign-Up</h1>
            <p className="mb-4" style={{ color: "white", wordSpacing: "2px" }}>Register your account</p>
            <hr />

            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicname">
                <Form.Label>Name address</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  placeholder="Enter name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>


              {/*  */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
