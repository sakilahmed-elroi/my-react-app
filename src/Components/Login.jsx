import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { SiGmail } from "react-icons/si";
import { FaUser } from "react-icons/fa6";
import { FcLock } from "react-icons/fc";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";

function Login() {
  const [key, setKey] = useState("Login");

  return (
    <Container
      fluid
      className="d-flex vh-100 justify-content-center align-items-center"
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 fw-bold"
            justify
          >
            {/* ------------------- LOGIN TAB ------------------- */}
            <Tab eventKey="Login" title="Login">
              <h2 className="text-center text-primary mb-4">
                Login to Your Account
              </h2>
              <Form>
                <Form.Group
                  controlId="formBasicEmail"
                  className="mb-3 fw-semibold"
                >
                  <Form.Label>
                    <SiGmail className="mx-2" />
                    Email Address
                  </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group
                  controlId="formBasicPassword"
                  className="mb-3 fw-semibold"
                >
                  <Form.Label>
                    <FcLock className="mx-2" />
                    Password
                  </Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Tab>

            {/* ------------------- SIGNUP TAB ------------------- */}
            <Tab eventKey="SignUp" title="Sign Up">
              <h2 className="text-center text-success mb-4">
                Create New Account
              </h2>
              <Form>
                <Form.Group className="mb-3 fw-semibold">
                  <Form.Label>
                    <FaUser className="mx-2" />
                    User Name
                  </Form.Label>
                  <Form.Control type="text" placeholder="Enter User Name" />
                </Form.Group>

                <Form.Group className="mb-3 fw-semibold">
                  <Form.Label>
                    <SiGmail className="mx-2" />
                    Email Address
                  </Form.Label>
                  <Form.Control type="email" placeholder="example@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-3 fw-semibold">
                  <Form.Label>
                    <RiLockPasswordFill className="mx-2" />
                    New Password
                  </Form.Label>
                  <Form.Control type="password" placeholder="Create Password" />
                </Form.Group>

                <Form.Group className="mb-3 fw-semibold">
                  <Form.Label>
                    <RiLockPasswordLine className="mx-2" />
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  Register
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
