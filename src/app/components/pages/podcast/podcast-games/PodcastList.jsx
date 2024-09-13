import React from "react";
import PodcastVideo from "../podcast-games/PodcastVideo";
import "../podcast-games/PodcastVideo.css";

const PodcastList = () => {
  const videos = [
    {
      id: 1,
      thumbnail:
        "https://i.ytimg.com/an_webp/8YVNOXuQuts/mqdefault_6s.webp?du=3000&sqp=CNuTkLcG&rs=AOn4CLBh86kGFxn9bXDjXylVqky7yZuuow",
      title: "Podcast Episode 1",
      duration: "3 min",
      description: "Descrição do primeiro episódio do podcast.",
      videoUrl: "https://www.youtube.com/embed/8YVNOXuQuts",
    },
    {
      id: 2,
      thumbnail: "url-do-thumbnail-2.jpg",
      title: "Podcast Episode 2",
      duration: "4 min",
      description: "Descrição do segundo episódio do podcast.",
      videoUrl: "https://www.youtube.com/embed/another_video_url",
    },
  ];

  return (
    <div className="podcast-list">
      {videos.map((video) => (
        <PodcastVideo
          key={video.id}
          videoThumbnail={video.thumbnail}
          videoTitle={video.title}
          videoDuration={video.duration}
          videoDescription={video.description}
          videoUrl={video.videoUrl}
        />
      ))}
    </div>
  );
};

export default PodcastList;
