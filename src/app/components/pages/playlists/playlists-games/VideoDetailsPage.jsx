import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistVideos } from "../service/playlistvideos.service";
import "../playlists-games/VideoDetailsPage.css";

const VideoDetailsPage = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videos = await getPlaylistVideos();
        const foundVideo = videos.find((v) => v.videoId === videoId);
        setVideo(foundVideo);
      } catch (error) {
        console.error("Erro ao buscar vídeos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [videoId]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!video) {
    return <div>Vídeo não encontrado</div>;
  }

  const { title, description } = video.snippet;

  return (
    <div className="video-details-container">
      <div className="video-player-wrapper">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetailsPage;
