import React from "react";
import "../playlists-games/VideosPlaylist.css"; // Import your CSS file for styling

const VideosPlaylist = ({ playlist }) => {
  // Example video data; replace this with your actual data
  const videos = [
    {
      id: 1,
      title: "Assassin’s Creed Valhalla Parte 1 Gameplay",
      duration: "30:10",
      views: 21,
      uploaded: "há 1 ano",
      thumbnail: "video1.jpg",
    },
    {
      id: 2,
      title: "Assassin’s Creed Valhalla Parte 2 Gameplay",
      duration: "17:32",
      views: 13,
      uploaded: "há 1 ano",
      thumbnail: "video2.jpg",
    },
    // Add other video data here
  ];

  return (
    <div className="videos-playlist-container">
      <div className="playlist-cover">
        <img
          src={playlist.coverImage}
          alt={playlist.title}
          className="cover-image"
        />
        <h3>{playlist.title}</h3>
        <p>{playlist.channelName}</p>
        <p>
          {playlist.videoCount} vídeos • {playlist.views} visualizações
        </p>
        <p>Última atualização em {playlist.lastUpdated}</p>
        <div className="playlist-actions">
          <button className="play-all-btn">Reproduzir tudo</button>
          <button className="shuffle-btn">Ordem aleatória</button>
        </div>
      </div>

      <div className="video-list">
        {videos.map((video, index) => (
          <div key={video.id} className="video-item">
            <div className="video-index">{index + 1}</div>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="video-info">
              <h4>{video.title}</h4>
              <p>
                {video.views} visualizações • {video.uploaded}
              </p>
              <p className="video-duration">{video.duration}</p>
            </div>
            <button className="more-options-btn">⋮</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosPlaylist;
