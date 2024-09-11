// src/components/navbar/navbar.component.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.component.css'; 
import logo from '../../../assets/images/logo.jpg';
import LoginComponent from '../login/login.component'; // Importa o componente de login

const NavbarComponent = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#videos">Videos</Nav.Link>
            <Nav.Link href="#playlists">Playlists</Nav.Link>
            <Nav.Link href="#lives">Lives</Nav.Link>
            <Nav.Link href="#member">Member</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
          </Nav>
          <LoginComponent /> {/* Adiciona o componente de login ao lado direito */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
