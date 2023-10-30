import React from "react";
import "./Services.css"; // Import your CSS file
import ClientSlider from "../../Elements/ClientSlider";
import ServiceBox from "../../Elements/ServiceBox";
import TestimonialSlider from "../../Elements/TestimonialSlider";

export default function Services() {
  const services = [
    {
      icon: "roller",
      title: "Web Design",
      subtitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      icon: "monitor",
      title: "Web Development",
      subtitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      icon: "browser",
      title: "Graphic Design",
      subtitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      icon: "printer",
      title: "Print",
      subtitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <div
            className="header-info"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div
            className="service-box-row"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {services.map((service, index) => (
              <ServiceBox
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            ))}
          </div>
        </div>
        <div className="lightBg">
          <div
            className="container"
            style={{ padding: "60px 0" }}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
