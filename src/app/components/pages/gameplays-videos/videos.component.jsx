// videos.component.jsx
import React, { useEffect, useState } from "react";
import { fetchVideos } from "../gameplays-videos/service/youtubeService";
import "../../pages/gameplays-videos/videos.component.css";

const VideosComponent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    };
    getVideos();
  }, []);

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div className="video-item" key={video.id.videoId}>
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <h3>{video.snippet.title}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default VideosComponent;
