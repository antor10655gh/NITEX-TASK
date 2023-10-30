import React from "react";
import FullButton from "../../Buttons/FullButton";
import "./Blog.css";
import BlogBox from "../../Elements/BlogBox";
import TestimonialSlider from "../../Elements/TestimonialSlider";

function Blog() {
  return (
    <section id="blog" className="wrapper">
      <div className="whiteBg">
        <div className="container" data-aos="fade-up" data-aos-duration="1500">
          <div className="headerInfo">
            <h1 className="font40 extraBold">Our Blog Stories</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Office!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Another Blog Post"
                text="This is another sample blog post text."
                tag="technology"
                author="Darth Vader, 3 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Exciting News!"
                text="Stay tuned for our exciting updates."
                tag="news"
                author="Princess Leia, 4 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Fourth Blog Post"
                text="This is the content of the fourth blog post."
                tag="general"
                author="Han Solo, 5 days ago"
                action={() => alert("clicked")}
              />
            </div>
            {/* Add more BlogBox components as needed */}
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Fifth Blog Post"
                text="This is the content of the fifth blog post."
                tag="technology"
                author="Yoda, 6 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Sixth Blog Post"
                text="This is the content of the sixth blog post."
                tag="company"
                author="Chewbacca, 7 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div
          className="container"
          style={{ paddingBottom: "100px" }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="headerInfo">
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
}

export default Blog;
