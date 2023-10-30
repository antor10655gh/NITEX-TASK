import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import logo from "../../assets/img/logo/logo.png";
import "./TopNavbar.css"; // Import your CSS file
import Backdrop from "../Elements/Backdrop";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <nav className={`nav ${y > 100 ? "short-nav" : "tall-nav"}`}>
        <div className="container flexSpaceCenter nav-inner">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img src={logo} alt="" width="100" />
          </Link>
          <button
            className="pointer burder-wrapper"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </button>
          <ul className="flexNullCenter ul-wrapper">
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Services
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Projects
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="blog"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Blog
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="pricing"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Pricing
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
            {/* Add the rest of your navigation links here */}
          </ul>
          <ul className="flexNullCenter ul-wrapper-right">
            <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li>
            <li className="semiBold font15 pointer flexCenter">
              <Link
                href="/"
                className="radius8"
                style={{ padding: "10px 15px" }}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
