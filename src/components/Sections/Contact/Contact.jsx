import React from "react";
import "./Contact.css"; // Import the external CSS file
import Lottie from "lottie-react";
import contactLottie from "../../../assets/lottie/contactlottie.json";

export default function Contact() {
  return (
    <section id="contact" className="wrapper">
      <div className="lightBg">
        <div className="container">
          <div
            className="headerInfo"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div
              className="col-xs-12 col-sm-12 col-md-6 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <form class="form">
                <div class="title">Contact us</div>
                <input type="text" placeholder="Your name" class="input" />
                <input type="text" placeholder="Your email" class="input" />
                <input type="text" placeholder="Your Phone" class="input" />
                <textarea placeholder="Your message"></textarea>

                <button>Submit</button>
              </form>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <Lottie animationData={contactLottie} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
