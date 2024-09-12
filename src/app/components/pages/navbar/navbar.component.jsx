import React, { useState } from "react";
import "../navbar/navbar.component.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="topbar">
        <nav>
          <ul>
            <li>
              <a href="#theNettko.com">theNettko.com</a>
            </li>

            <li>
              <a href="#theNettkoPlay">theNettko</a>
            </li>
          </ul>
        </nav>
        <div className="account">
          <a href="#assine">Assine Já</a>
          <a href="#conta">Conta theNettko</a>
        </div>
      </div>

      <div className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="icon">&#9776;</span>
          <span className="menu-text">MENU</span>
        </div>
        <div className="brand">
          <h1>THENETTKO</h1>
        </div>
        <div className="login">
          <button>Login</button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>
          X
        </button>
        <nav>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#podcast">PodCasts</a>
            </li>
            <li>
              <a href="#videos">Gameplays</a>
            </li>
            <li>
              <a href="#playlists">Playlists</a>
            </li>
            <li>
              <a href="#live">theNettko ao Vivo</a>
            </li>
            <li>
              <a href="#member">Sejá Membro</a>
            </li>
            <li>
              <a href="#redes">Redes Sociais</a>
            </li>
            <li>
              <a href="#about">Sobre Nós</a>
            </li>
            <hr />
            <li>
              <a href="#assine">Assine Já</a>
            </li>
            <li>
              <a href="#conta">Conta theNettko</a>
            </li>
            <hr />
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
