import React from "react";
import { Link } from "react-router-dom";
import "../css/Header-Component.css";

const HeaderComponent = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="../assets/images/logo.jpg" alt="Logo" className="navbar-logo" />
        <span>Nettko</span>
      </div>
      <div className="navbar-menu">
        <Link to="/Home" className="navbar-link">Início</Link>
        <Link to="/Videos" className="navbar-link">Vídeos</Link>
        <Link to="/Playlists" className="navbar-link">Playlists</Link>
        <Link to="/Member" className="navbar-link">Membro</Link>
        <Link to="/About" className="navbar-link">Sobre</Link>
      </div>
      <button className="navbar-toggler" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">☰</span>
      </button>
    </nav>
  );
};

export default HeaderComponent;
