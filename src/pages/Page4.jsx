import "./Page4.css";
import spotify from "../images/Spotify.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Page4() {
  return (
    <div className="page-4">
      <div className="project">
        <div className="project-header">
          <h1 className="">PROJECTS</h1>
        </div>
        <div className="project-container">
          <div className="project1">
            <div className="project-title">
              <h1>Spotify UI</h1>
            </div>
            <div className="project-details">
              <div className="p-lcolumn">
                <div className="project-image">
                  <img src={spotify} alt="Spotify UI" />
                </div>
              </div>
              <div className="p-rcolumn">
                <div className="project-description">
                  <p>
                    My Spotify UI front-end project is a responsive web
                    application built using React, designed to replicate
                    Spotify's sleek and intuitive interface. It features a home
                    page for playlists and recommendations, a search page to
                    find songs and artists, and a library section for managing
                    user playlists. The app includes a persistent music player
                    with playback controls and incorporates smooth animations to
                    enhance the user experience.
                  </p>
                </div>
                <div className="project-btn">
                  <button className="p-btn">VIEW CODE</button>
                  <button className="p-btn">
                    <FontAwesomeIcon icon={faPlay} className="play" /> LIVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
