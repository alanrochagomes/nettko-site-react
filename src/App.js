import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./pages/Home-Component";
import VideosComponent from "./pages/Videos-Component";
import PlaylistsComponent from "./pages/Playlists-Component";
import MemberComponent from "./pages/Member-Component";
import AboutPage from "./pages/About-Page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<HomeComponent />} />
        <Route path="/Videos" element={<VideosComponent />} />
        <Route path="/Playlists" element={<PlaylistsComponent />} />
        <Route path="/Member" element={<MemberComponent />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
