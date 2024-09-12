import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importando Link do react-router-dom
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
              <a href="https://youtube.theNettko.com">youtube.theNettko.com</a>
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
          <span className="menu-text">Menu</span>
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
              <Link to="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/videos" onClick={closeMenu}>
                Gameplays
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={closeMenu}>
                News sobre Games
              </Link>
            </li>
            <li>
              <Link to="/podcasts" onClick={closeMenu}>
                PodCasts sobre Games
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={closeMenu}>
                News sobre Programaçao
              </Link>
            </li>
            <li>
              <Link to="/podcasts" onClick={closeMenu}>
                PodCasts sobre Programação
              </Link>
            </li>

            <li>
              <Link to="/playlists" onClick={closeMenu}>
                Playlists das Gameplays
              </Link>
            </li>
            <li>
              <Link to="/lives" onClick={closeMenu}>
                theNettko ao Vivo sobre Games
              </Link>
            </li>
            <li>
              <Link to="/lives" onClick={closeMenu}>
                theNettko ao Vivo sobre Programação
              </Link>
            </li>
            <li>
              <Link to="/member" onClick={closeMenu}>
                Seja Membro
              </Link>
            </li>
            <li>
              <Link to="/redes" onClick={closeMenu}>
                Redes Sociais
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                Sobre Nós
              </Link>
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
