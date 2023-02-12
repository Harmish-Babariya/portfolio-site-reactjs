import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <Link to="contact">
            <Insta color="white" size={"3rem"} />
          </Link>
          <a
            href="https://www.linkedin.com/in/harmish-babariya-a7444a1a2/"
            target="_blank"
          >
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Harmish-Babariya" target="_blank">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
        <div>
          {" "}
          <span>harmishbabariya@gmail.com || Build with React Js</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
