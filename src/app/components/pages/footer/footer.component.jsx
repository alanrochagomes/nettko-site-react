import React from "react";
import logo from "../../../../assets/images/logo.jpg";
import "./footer.component.css";

const FooterComponent = () => {
  return (
    <footer className="text-center bg-dark p-4 mt-5">
      <img src={logo} alt="Logo" width="80" className="mb-2 rounded-circle" />
      <p className="text-light mb-0">
        © Copyright 2015-2024 theNettko Gameplays e News S.A.
      </p>
    </footer>
  );
};

export default FooterComponent;
