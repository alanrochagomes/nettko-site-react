import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "../pages/home/home.component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomeComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
