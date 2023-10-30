import React from "react";
import TopNavbar from "../components/Nav/TopNavbar";
import Blog from "../components/Sections/Blog/Blog";
import Header from "../components/Sections/Header/Header";
import Contact from "../components/Sections/Contact/Contact";
import Pricing from "../components/Sections/Pricing/Pricing";
import Projects from "../components/Sections/Projects/Projects";
import Services from "../components/Sections/Services/Services";
import Footer from "../components/Sections/Footer/Footer";
// Sections

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
