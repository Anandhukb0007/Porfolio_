import "./Page3.css";
import {motion} from "framer-motion";
import {fadeIn} from "../variants"

function Page3() {
  return (
    <div className="page-3">
      <div className="education">
        <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className="education-header">
          <h1>EDUCATION</h1>
        </motion.div>
        <div className="education-bar"></div>
        <motion.div 
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className="education-content">
          <div className="education-text">
            <h1>BCA</h1>
            <p>2020-2023</p>
            <p>Yenepoya University</p>
          </div>
          <div className="education-text">
            <h1>12th</h1>
            <p>2018-2020</p>
            <p>SJHSS Vayattuparamba</p>
          </div>
          <div className="education-text">
            <h1>10th</h1>
            <p>2018</p>
            <p>Mary Queen's H S</p>
          </div>
        </motion.div>
      </div>
      <div className="certification">
        <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className="certification-header">
          <h1>CERTIFICATION</h1>
        </motion.div>
        <div className="certification-bar"></div>
        <motion.div 
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className="certification-content">
          <div className="certification-text">
            <h1>Full Stack Development</h1>
            <p>2024</p>
            <p>KGISL MICRO COLLEGE</p>
          </div>
          <div className="certification-text">
            <h1>Frontend Development</h1>
            <p>2024</p>
            <p>COURSERA</p>
          </div>
          <div className="certification-text">
            <h1>Backend Development</h1>
            <p>2024</p>
            <p>COURSERA</p>
          </div>
          <div className="certification-text">
            <h1>Advanced React</h1>
            <p>2021</p>
            <p>COURSERA</p>
          </div>
        </motion.div>
      </div>

      <div className="technologies">
        <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.5}}
        className="technologies-header">
          <h1>TECHNOLOGIES</h1>
        </motion.div>

        <div className="technologies-content">
          <div className="icon-container">
            <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="icon">
              <div className="icon-img">
                <img
                  width="144"
                  height="144"
                  src="https://img.icons8.com/color/144/html-5--v1.png"
                  alt="html-5--v1"
                />
              </div>
              <div className="icon-text">
                <p className="icon-p">HTML</p>
              </div>
            </motion.div>
            <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="icon">
              <div className="icon-img">
                <img
                  width="144"
                  height="144"
                  src="https://img.icons8.com/color/144/css3.png"
                  alt="css3"
                />
              </div>
              <div className="icon-text">
                <p className="icon-p">CSS</p>
              </div>
            </motion.div>
            <motion.div 
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="icon">
              <div className="icon-img">
                <img
                  width="144"
                  height="144"
                  src="https://img.icons8.com/color/144/javascript--v1.png"
                  alt="javascript--v1"
                />
              </div>
              <div className="icon-text">
                <p className="icon-p">JAVASCRIPT</p>
              </div>
            </motion.div>
            <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="icon">
              <div className="icon-img">
                <img
                  width="144"
                  height="144"
                  src="https://img.icons8.com/color/144/react-native.png"
                  alt="react-native"
                />
              </div>
              <div className="icon-text">
                <p className="icon-p">REACT</p>
              </div>
            </motion.div>
            <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="icon">
              <div className="icon-img">
                <img
                  width="144"
                  height="144"
                  src="https://img.icons8.com/color/144/nodejs.png"
                  alt="nodejs"
                />
              </div>
              <div className="icon-text">
                <p className="icon-p">NODEJS</p>
              </div>
            </motion.div>
            <motion.div 
            variants={fadeIn("left", 0.5)}
            initial="hidden" 
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="icon">
              <div className="icon-img">
                <img
                  width="144"
                  height="144"
                  src="https://img.icons8.com/color/144/mongodb.png"
                  alt="mongodb"
                />
              </div>
              <div className="icon-text">
                <p className="icon-p">MONGODB</p>
              </div>
            </motion.div>
            <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}

            className="icon">
              <div className="icon-img">
                <img
                  width="144"
                  height="144"
                  src="https://img.icons8.com/color/144/git.png"
                  alt="git"
                />
              </div>
              <div className="icon-text">
                <p className="icon-p">GIT</p>
              </div>
            </motion.div>
            <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="icon">
              <div className="icon-img">
                <img
                  width="144"
                  height="144"
                  src="https://img.icons8.com/color/144/github--v1.png"
                  alt="github--v1"
                />
              </div>
              <div className="icon-text">
                <p className="icon-p">GITHUB</p>
              </div>
            </motion.div>
            <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="icon">
              <div className="icon-img">
                <img
                  width="144"
                  height="144"
                  src="https://img.icons8.com/color/144/bootstrap.png"
                  alt="bootstrap"
                />
              </div>
              <div className="icon-text">
                <p className="icon-p">BOOTSTRAP</p>
              </div>
            </motion.div>
            <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="icon">
              <div className="icon-img">
              <img width="100" height="100" src="https://img.icons8.com/ios/100/FFFFFF/express-js.png" alt="express-js"/>
              </div>
              <div className="icon-text">
                <p className="icon-p">EXPRESSJS</p>
              </div>
              </motion.div>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
