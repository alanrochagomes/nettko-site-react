import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./pages/Header-Component";
import Home from "./pages/Home-Component";
import Footer from "./pages/Footer-Component";
import Videos from "./pages/Videos-Component";
import Playlists from "./pages/Playlists-Component";
import About from "./pages/About-Page";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Home />
    <Videos />
    <Playlists />
    <About />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
