import React from "react";
import { Link } from "react-scroll";
import logo from "../../../assets/img/logo/logof.png";
import "./Footer.css";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-wrapper">
      <div className="darkBg">
        <div className="container">
          <div
            className="inner-wrapper flex-space-center"
            style={{ padding: "30px 0" }}
          >
            <Link className="logo-link flex-center animate pointer" to="#home">
              <img src={logo} alt="" width="100" />
            </Link>
            <p className="white-color font-13">
              © {getCurrentYear()} -{" "}
              <span className="purple-color font-13">NITEX</span> All Right
              Reserved
            </p>
            <Link
              id="myElementId"
              onClick={scrollToTop}
              className="white-color animate pointer font-13"
            >
              Back to top
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
