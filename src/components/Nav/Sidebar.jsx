import React from "react";
import { Link } from "react-scroll";
import CloseIcon from "../../assets/svg/CloseIcon";
import logo from "../../assets/img/logo/logo.png";
import "./Sidebar.css"; // Import your CSS file

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <nav className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <div className="sidebar-header flexSpaceCenter">
        <div className="flexNullCenter">
          <img src={logo} alt="" width="100" />
        </div>
        <button
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="close-btn pointer animate"
        >
          <CloseIcon />
        </button>
      </div>

      <ul className="ul-style flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Services
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Projects
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Blog
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Pricing
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul className="ul-style flexSpaceCenter">
        <li className="semiBold font15 pointer">
          <a
            href="/"
            style={{ padding: "10px 30px 10px 0" }}
            className="whiteColor"
          >
            Log in
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="/"
            className="radius8 lightBg"
            style={{ padding: "10px 15px" }}
          >
            Get Started
          </a>
        </li>
      </ul>
    </nav>
  );
}
