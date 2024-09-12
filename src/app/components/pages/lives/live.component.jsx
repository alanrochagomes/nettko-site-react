import React, { useEffect, useState, useCallback } from "react";
import { fetchVideos } from "../gameplays-videos/service/youtubeService";
import "../../pages/gameplays-videos/videos.component.css";

const VideosComponent = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMoreVideos = useCallback(async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    const { fetchedVideos, newNextPageToken } = await fetchVideos(
      nextPageToken
    );
    setVideos((prevVideos) => [...prevVideos, ...fetchedVideos]);
    setNextPageToken(newNextPageToken);
    setHasMore(!!newNextPageToken);
    setLoading(false);
  }, [hasMore, loading, nextPageToken]);

  useEffect(() => {
    loadMoreVideos();
  }, [loadMoreVideos]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreVideos();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreVideos]);

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
      {hasMore && (
        <button
          className="load-more-button"
          onClick={loadMoreVideos}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Carregar mais"}
        </button>
      )}
    </div>
  );
};

export default VideosComponent;
