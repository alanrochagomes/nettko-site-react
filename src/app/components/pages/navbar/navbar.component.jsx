import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../navbar/navbar.component.css";
import logo from "../../../../assets/images/logo.jpg";
import LoginComponent from "../../../components/pages/login/login.component";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/videos">Videos</Nav.Link>
            <Nav.Link href="/playlists">Playlists</Nav.Link>
            <Nav.Link href="/lives">Lives</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/member">Member</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <LoginComponent /> {/* TODO: Adicionar componente de login */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
