import "./Page2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import professioanal from "../images/professional1.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Page2() {
  return (
    <div className="page2">
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="page2-header"
      >
        <h1>ABOUT ME</h1>
      </motion.div>
      <div className="page2-content">
        <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className="prof-img-container">
          <img src={professioanal} className="prof-img" />
        </motion.div>
        <motion.p
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className="about-text">
          Dedicated BCA student specializing in Big Data Analytics and Cloud
          Computing. Proficient in html, css, Javascript, react, Java, node.js,
          express, mongodb. Proficient in building responsive web applications
          from concept to production, with expertise in front-end and back-end
          development. Eager to contribute analytical and technical expertise to
          a dynamic team environment.
        </motion.p>
      </div>
    </div>
  );
}

export default Page2;
