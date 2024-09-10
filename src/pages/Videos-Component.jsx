import React, { useEffect } from "react";
import "../css/Videos-Component.css";

const VideosPage = () => {
  useEffect(() => {
    const contentRow = document.querySelector(".content-row");

    const checkScroll = () => {
      const contentHeight = contentRow.scrollHeight;
      const scrollPosition = contentRow.scrollTop + contentRow.clientHeight;

      if (scrollPosition >= contentHeight - 10) {
        contentRow.classList.add("show-scroll-indicator");
      } else {
        contentRow.classList.remove("show-scroll-indicator");
      }
    };

    contentRow.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => {
      contentRow.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className="container" id="videos">
      <h2>Vídeos</h2>
      <a
        href="https://www.youtube.com/@Nettko/videos"
        className="btn btn-info mb-4"
      >
        + Vídeos
      </a>

      <div className="content-row">
        <div className="row gx-4 gy-4">
          <div className="col-md-3 col-sm-6">
            <iframe
              src="https://www.youtube.com/embed/Wy_TSJIKdq0?si=UspfxVubCwfQyJr2"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-3 col-sm-6">
            <iframe
              src="https://www.youtube.com/embed/vxwt3n7VBfU?si=F6tk-ciy4Nylt_qH"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-3 col-sm-6">
            <iframe
              src="https://www.youtube.com/embed/g6E0jshwsac?si=s5QQoHAMOI9RQpoC"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-3 col-sm-6">
            <iframe
              src="https://www.youtube.com/embed/612cjAypXxw?si=SqHmqa5O44SlgUrK"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>↘️ Scroll para ver mais</span>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
