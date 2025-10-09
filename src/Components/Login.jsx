import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { SiGmail } from "react-icons/si";
import { FcLock } from "react-icons/fc";

function Login() {
  return (
    <Container
      fluid
      className="d-flex vh-100 justify-content-center align-items-center"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <h2 className="text-center mb-4">Login to Your Account</h2>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>
                <SiGmail className="mx-2" />
                Email address
              </Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>
                <FcLock className="mx-2" />
                Password
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
