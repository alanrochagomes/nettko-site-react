import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.component.css'; 
import logo from '../../../assets/images/logo.jpg';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
          {' '}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#videos">Videos</Nav.Link>
          <Nav.Link href="#playlists">Playlists</Nav.Link>
          <Nav.Link href="#member">Member</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#help">Help</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
