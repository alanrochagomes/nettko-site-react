import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "../pages/home/home.component";
import VideosGames from "../pages/videos/videos-games/videos.component";
import VideoPlayerGames from "../pages/videos/videos-games/VideoPlayerComponent";
import PlaylistsGames from "../pages/playlists/playlists-games/ListVideosPlayer";
import VideoDetailsPage from "../pages/playlists/playlists-games/VideoDetailsPage";
import LivesComponent from "../pages/lives/live.component";
import NewsComponent from "../pages/news/news-games/news.component";
// import PodcastTi from "../pages/podcast/podcast-ti/PodcastTi";
// import PodcastGames from "../pages/podcast/podcast-games/PodcastGames";
import MemberComponent from "../pages/member/member.component";
import AboutComponent from "../pages/about/about.component";
import HelpComponent from "../pages/help/help.component";
import NavbarComponent from "../pages/navbar/navbar.component";
import FooterComponent from "../pages/footer/footer.component";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/videos/gameplays" element={<VideosGames />} />
        <Route path="/playlists/gameplays" element={<PlaylistsGames />} />
        <Route path="/lives" element={<LivesComponent />} />
        <Route path="/news/games" element={<NewsComponent />} />
        <Route path="/member" element={<MemberComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/help" element={<HelpComponent />} />
        <Route path="/watch/:videoId" element={<VideoPlayerGames />} />
        <Route path="/video/:videoId" element={<VideoDetailsPage />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
