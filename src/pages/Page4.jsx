import "./Page4.css";
import spotify from "../images/Spotify.jpg";

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
            <div className="project-image">
                <img src={spotify} alt="Spotify UI" />
            </div>
            <div className="project-description">
              <p>Spotify UI clone using React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
