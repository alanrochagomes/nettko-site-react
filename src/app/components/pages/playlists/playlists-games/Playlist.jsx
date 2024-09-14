import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../playlists-games/Playlist.css"; // Import your CSS file for styling
import { playlists } from "../service/playlist.service"; // Import the playlists from the service

const Playlist = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const navigate = useNavigate();

  const handleViewPlaylist = (id) => {
    // Navigate to the specific playlist page
    navigate(`/playlist/${id}`);
  };

  const handlePlaylistClick = (id) => {
    setSelectedPlaylist(id === selectedPlaylist ? null : id); // Toggle the playlist selection
  };

  return (
    <div className="playlist-container">
      {playlists.map((playlist) => (
        <div
          key={playlist.id}
          className="playlist-card"
          onClick={() => handlePlaylistClick(playlist.id)}
        >
          <img
            src={playlist.image}
            alt={playlist.title}
            className="playlist-image"
          />
          <div className="playlist-info">
            <h3>{playlist.title}</h3>
            <p>{playlist.videos} videos</p>
            <button
              className="view-playlist-button"
              onClick={(e) => {
                e.stopPropagation(); // Prevent collapsing the playlist card
                handleViewPlaylist(playlist.id);
              }}
            >
              Ver playlist completa
            </button>
          </div>
          {/* Show the list of videos when playlist is clicked */}
          {selectedPlaylist === playlist.id && (
            <div className="playlist-list">
              <p>Show video list here...</p>
              {/* You will populate this with actual video data */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Playlist;
