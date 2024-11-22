import "../../css/header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="fas fa-university"></i> Dom Con <br />
            <small>Tutors</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar__nav ml-auto">
              <Nav.Link as={NavLink} to="/" exact className="navbar__item">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="navbar__item">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/courses" className="navbar__item">
                Courses
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/tutors"
                className="navbar__item"
                activeClassName="active"
              >
                Tutors
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contact"
                className="navbar__item"
                activeClassName="active"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/signup"
                className="navbar__item cta"
                activeClassName="active"
              >
                <span>Sign up</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
