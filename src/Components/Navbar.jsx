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
          <Nav className="ms-auto">
            <Nav.Link href="/" className="fw-semibold mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="/VillaList" className="fw-semibold mx-2">
              Villas
            </Nav.Link>
            <Nav.Link href="/about" className="fw-semibold mx-2">
              About
            </Nav.Link>
            <Nav.Link href="/contact" className="fw-semibold mx-2">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
