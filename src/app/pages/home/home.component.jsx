import React from "react";
import "../home/home.component.css";
import channelBanner from "../../../assets/images/channel_banner.jpg";
import FooterComponent from "../footer/footer.component";
import NavbarComponent from "../navbar/navbar.component";

const HomeComponent = () => {
  return (
    <div className="bg-dark text-light">
      <NavbarComponent />

      <header className="mt-5 pt-5">
        <div className="banner-inner">
          <img src={channelBanner} alt="Banner do Canal" />
        </div>
      </header>

      <main className="container mt-5">
        <h1>Teste</h1>
      </main>

      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
