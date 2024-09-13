import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "../pages/home/home.component";
import VideosComponent from "../pages/gameplays-videos/videos.component";
import PlaylistsComponent from "../pages/playlists/playlist.component";
import LivesComponent from "../pages/lives/live.component";
import NewsComponent from "../pages/news-games/news.component";
import PodcastVideo from "../pages/podcast/podcast-games/PodcastVideo";
import MemberComponent from "../pages/member/member.component";
import AboutComponent from "../pages/about/about.component";
import HelpComponent from "../pages/help/help.component";
import NavbarComponent from "../pages/navbar/navbar.component";
import FooterComponent from "../pages/footer/footer.component";
import VideoPlayerComponent from "../pages/gameplays-videos/VideoPlayerComponent"; // Importa o player interno

const App = () => {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/videos" element={<VideosComponent />} />
        <Route path="/playlists" element={<PlaylistsComponent />} />
        <Route path="/lives" element={<LivesComponent />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/podcast" element={<PodcastVideo />} />
        <Route path="/member" element={<MemberComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/help" element={<HelpComponent />} />

        {/* Adicionar rota para o player interno */}
        <Route path="/watch/:videoId" element={<VideoPlayerComponent />} />
      </Routes>

      <FooterComponent />
    </Router>
  );
};

export default App;
