import React from 'react';
import HeaderComponent from './Header-Component'; 

import '../css/Home-Component.css'; 
import banner from '../assets/images/channel_banner.jpg';

const HomeComponent = () => {
  return (
    <div className="bg-dark text-light">

      <HeaderComponent /> 
      
      <header>
        <div className="carousel-inner">
          <img src={banner} className="d-block w-100" alt="Banner do Canal" />
        </div>
      </header>

      <main className="container mt-5">
        
        <h2>Conteúdo Principal</h2>
      </main>

    </div>
  );
};

export default HomeComponent;
