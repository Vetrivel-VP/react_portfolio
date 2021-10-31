import React from "react";
import "./MainContainer.css";
import Home from "./Home/HomeSection";
import Services from "./Services/ServicesSection";
import Work from "./Work/WorkSection";
import Abouts from "./About/AboutSection";
import Projects from "./Projects/ProjectSection";
import Contact from "./ContactUs/ContactSection";
import Footer from "./Footer";

function MainContainer() {
  return (
    <main>
      {/* Home Section */}
      <Home />
      {/* Service Section */}
      <Services />
      {/* Work Section */}
      <Work />
      {/* About Section */}
      <Abouts />
      {/* Project Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </main>
  );
}

export default MainContainer;
