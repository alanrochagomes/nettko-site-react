import React, { useState } from "react";
import Modal from "react-modal";
import { videos } from "./service/youtubeService";
import "../../videos/videos-games/videos.component.css";

const VideosComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  const handleWatch = (url) => {
    window.open(url, "_blank");
    closeModal();
  };

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div className="video-item" key={video.id}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            onClick={() => openModal(video)}
          />
          <h3 onClick={() => openModal(video)}>{video.snippet.title}</h3>
          <p className="video-date">{video.snippet.description}</p>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Choose Watch Option"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{selectedVideo?.snippet.title}</h2>
        <p>Escolha onde deseja assistir:</p>
        <button
          className="btn btn-external"
          onClick={() =>
            handleWatch(
              `https://www.youtube.com/watch?v=${selectedVideo?.videoId}`
            )
          }
        >
          Assistir no YouTube
        </button>
        <button
          className="btn btn-internal"
          onClick={() => handleWatch(`/watch/${selectedVideo?.videoId}`)}
        >
          Assistir na Página
        </button>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};

export default VideosComponent;
