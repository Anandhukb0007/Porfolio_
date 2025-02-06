import "./Page4.css";
import spotify from "../images/Spotify.jpg";
import todolist from "../images/to-do-list.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Page4() {
  return (
    <div className="page-4">
      <div className="project">
        <div className="project-header">
          <h1 className="">PROJECTS</h1>
        </div>
        <div className="project-container">
          <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="project1">
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
                    Spotify's sleek and intuitive interface.
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
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="project1">
            <div className="project-title">
              <h1>TODO APP</h1>
            </div>
            <div className="project-details">
              <div className="p-lcolumn">
                <div className="project-image">
                  <img src={todolist} alt="ToDo" />
                </div>
              </div>
              <div className="p-rcolumn">
                <div className="project-description">
                  <p>
                    A Todo app with user authentication and task management. Built
                    a responsive and user-friendly interface for adding,
                    updating, and deleting tasks.
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
