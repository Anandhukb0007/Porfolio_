import "./Page5.css";
import email from "../images/email.png";
import insta from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

function Page5() {
  return (
    <div className="page-5">
      <div className="page-header">
        <div className="header">CONTACTS</div>
      </div>
      <div className="contact-container">
        <div className="contact">
          <div className="contact-icon">
            <img src={email} alt="email" />
            
          </div>
        </div>
        <div className="contact">
            <div className="contact-icon">
                <img src={insta} alt="instagram" />
                
            </div>
        </div>
        <div className="contact">
            <div className="contact-icon">
                <img src={linkedin} alt="linkedin" />
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;
