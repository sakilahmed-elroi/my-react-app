import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
      <Container>
        <Navbar.Brand href="/" className="fw-bold fs-3">
          <i id="brandicon" className="bi bi-house-heart-fill"></i> Paradise
          Villas
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* LEFT SIDE LINKS */}
          <Nav className="me-auto">
            <Nav.Link href="/" className="fw-semibold mx-0">
              Home
            </Nav.Link>
            <Nav.Link href="/VillaList" className="fw-semibold mx-0">
              Villas
            </Nav.Link>
          </Nav>

          {/* RIGHT SIDE LOGIN */}
          <Nav>
            <Nav.Link
              href="/Login"
              className="fw-semibold text-info mx-2 d-flex align-items-center"
            >
              <i className="bi bi-person-circle text-white px-1"></i> Login /
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
