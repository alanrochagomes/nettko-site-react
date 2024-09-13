import React from "react";
import "../podcast-games/PodcastList";

const PodcastVideo = ({
  videoUrl,
  duration,
  title,
  subtitle,
  description,
  date,
  location,
}) => {
  return (
    <div className="podcast-container">
      <div className="video-wrapper">
        <div className="video-overlay">
          <span className="play-button">▶</span>
          <span className="duration">{duration}</span>
        </div>
        <video className="video-player" src={videoUrl} />
      </div>
      <div className="podcast-info">
        <h3 className="podcast-title">{title}</h3>
        <p className="podcast-subtitle">{subtitle}</p>
        <p className="podcast-date">
          {date} — {location}
        </p>
        <p className="podcast-description">{description}</p>
      </div>
    </div>
  );
};

export default PodcastVideo;
