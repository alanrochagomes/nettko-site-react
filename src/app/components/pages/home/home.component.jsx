import React from "react";
import banner from "../../../../assets/images/channel_banner.jpg";
import "../home/home.component.css";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        {/* <img src={banner} alt="Banner" className="banner" /> */}
        <h1 className="hero-title">Bem-vindo ao nosso site!</h1>
        <p className="hero-subtitle">Vídeos Exclusivos para Membros!</p>
        <a href="#games" className="cta-button">
          Assine Já
        </a>
      </header>

      <section id="games" className="games-section">
        <h2 className="section-title">Trending Games</h2>
        <div className="game-grid">
          <div className="game-card">
            <img src={banner} alt="Game 1" className="game-image" />
            <h3 className="game-title">Game Title 1</h3>
            <p className="game-description">An epic adventure awaits...</p>
          </div>
          <div className="game-card">
            <img
              src="https://via.placeholder.com/300"
              alt="Game 2"
              className="game-image"
            />
            <h3 className="game-title">Game Title 2</h3>
            <p className="game-description">
              Experience a new level of action...
            </p>
          </div>
          <div className="game-card">
            <img
              src="https://via.placeholder.com/300"
              alt="Game 3"
              className="game-image"
            />
            <h3 className="game-title">Game Title 3</h3>
            <p className="game-description">
              Immerse yourself in this world...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
