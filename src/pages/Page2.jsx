import "./Page2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import professioanal from "../images/professional1.png";

function Page2() {
  return (
    <div className="page2">
      <div className="page2-header">
        <h1>ABOUT ME</h1>
      </div>
      <div className="page2-content">
        <div className="prof-img-container">
          <img
            src={professioanal} className="prof-img"/>
            </div>
        <p className="about-text">

        Dedicated BCA student specializing in Big Data Analytics and Cloud
        Computing. Proficient in html, css, Javascript, react, Java, node.js,
        express, mongodb. Proficient in building responsive web applications
        from concept to production, with expertise in front-end and back-end
        development. Eager to contribute analytical and technical expertise to a
        dynamic team environment.
        </p>
      </div>
    </div>
  );
}

export default Page2;
