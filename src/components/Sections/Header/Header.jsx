import React from "react";
import FullButton from "../../Buttons/FullButton";
import HeaderImage from "../../../assets/img/header-img.png";
import QuotesIcon from "../../../assets/svg/Quotes";
import Dots from "../../../assets/svg/Dots";
import "./Header.css"; // Import your CSS file

export default function Header() {
  return (
    <section id="home" className="header">
      <div className="container flexSpaceCenter">
        <div
          className="left-side flexCenter"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div>
            <h1 className="extraBold font60">We are Digital Agency.</h1>
            <p className="font13 semiBold header-p">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <div className="btn-wrapper">
              <FullButton title="Get Started" />
            </div>
          </div>
        </div>
        <div
          className="right-side"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="image-wrapper">
            <img
              className="radius8"
              src={HeaderImage}
              alt="office"
              style={{ zIndex: 9 }}
            />
            <div className="quote-wrapper flexCenter darkBg radius8">
              <div className="quotes-icon">
                <QuotesIcon />
              </div>
              <div>
                <p className="font15 whiteColor">
                  <em>
                    Friends, such as we desire, are dreams and fables.
                    Friendship demands the ability to do without it.
                  </em>
                </p>
                <p
                  className="font13 orangeColor textRight"
                  style={{ marginTop: "10px" }}
                >
                  Ralph Waldo Emerson
                </p>
              </div>
            </div>
            <div className="dots-wrapper">
              <Dots />
            </div>
          </div>
          <div className="grey-div lightBg"></div>
        </div>
      </div>
    </section>
  );
}
