import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Home from "./app/pages/home/home.component";
import App from "./components/routes/app.component.routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>
);

reportWebVitals();
