import React, { useState } from "react";
import Modal from "react-modal";
import { getPlaylistVideos } from "../service/playlistvideos.service";
import { Link } from "react-router-dom"; // Importar Link do react-router-dom
import "../playlists-games/ListVideosPlayer.css";

const ListVideosPlayer = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = getPlaylistVideos();

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
  };

  const handleBackToCategories = () => {
    setCurrentCategory(null);
  };

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="playlist-container">
      {currentCategory ? (
        <>
          <button className="back-button" onClick={handleBackToCategories}>
            Voltar
          </button>
          <div className="video-grid">
            {currentCategory.videos.map((video, index) => (
              <div key={index} className="video-item">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  onClick={() => openModal(video)}
                />
                <div className="video-info">
                  <h3 onClick={() => openModal(video)}>{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Choose Watch Option"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <h2>{selectedVideo?.title}</h2>
            <p>Escolha onde deseja assistir:</p>
            <button
              className="btn btn-external"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${selectedVideo?.videoId}`,
                  "_blank"
                )
              }
            >
              Assistir no YouTube
            </button>
            <Link
              to={`/watch/${selectedVideo?.videoId}`}
              className="btn btn-internal"
            >
              Assistir na Página
            </Link>
            <button onClick={closeModal}>Fechar</button>
          </Modal>
        </>
      ) : (
        <div className="category-list">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-item"
              onClick={() => handleCategorySelect(category)}
            >
              <img src={category.image} alt={category.name} />
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.videos.length} Vídeos</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListVideosPlayer;
