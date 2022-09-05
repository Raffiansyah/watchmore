import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" className="border-bottom border-secondary">
      <Container>
        <Navbar.Brand className="fs-2">
          Watch
          <span className="text-primary">More</span>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link to="/" className="nav-link fs-4">
            Home
          </Link>
          <Link to="/movie" className="nav-link fs-4">
            Movie
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
