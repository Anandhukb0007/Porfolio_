import "./Page1.css";
import hero from "../images/heo-ed.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {motion} from "framer-motion";
import {fadeIn} from "../variants"

function Page1() {
  return (
    <div className="page1">
      <div className="nav">
        <h1>ABOUT</h1>
        <h1>PROJECTS</h1>
        <h1>CONTACT</h1>
      </div>
      <div className="hero-page1">
        <motion.div 
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className="hero-text">
          <h1>Hi I'm ANANDHU K B</h1>
          <p>FULL STACK DEVELOPER</p>
          <div className="social-icons">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#ffffff" }}
              className="icons"
            />
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#ffffff" }}
              className="icons"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              style={{ color: "#ffffff" }}
              className="icons"
            />
          </div>
          <div className="hero-btn">
            <button className="btn">DOWNLOAD CV</button>
            <button className="btn">HIRE ME</button>
          </div>
        </motion.div>
        <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        className="hero-img-container">
          <img src={hero} alt="hero" className="hero-img" />
        </motion.div>
      </div>
    </div>
  );
}

export default Page1;
