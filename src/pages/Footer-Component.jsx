import React from "react";
import logo from "../assets/images/logo.jpg";
import "../css/Footer-Component.css"

const Footer = () => {
  return (
    <footer className="text-center bg-dark p-4 mt-5">
      <img src={logo} alt="Logo" width="80" className="mb-2 rounded-circle" />
      <p className="text-light mb-0">© 2024 theNettko.</p>
    </footer>
  );
};

export default Footer;
