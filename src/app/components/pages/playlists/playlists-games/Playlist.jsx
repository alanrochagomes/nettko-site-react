import React, { useState } from "react";
import "../playlists-games/Playlist.css"; // Import your CSS file for styling

const Playlist = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const playlists = [
    {
      id: 1,
      title: "Tom Clancy's Rainbow Six Siege",
      image: "rainbow-six-siege.jpg", // Add your images accordingly
      videos: 140,
    },
    {
      id: 2,
      title: "Euro Truck Simulator 2",
      image: "euro-truck-simulator-2.jpg",
      videos: 2,
    },
    {
      id: 3,
      title: "Assassin's Creed III Remastered",
      image: "assassins-creed-3.jpg",
      videos: 13,
    },
    // Add other playlists here...
  ];

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
            <button className="view-playlist-button">
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
