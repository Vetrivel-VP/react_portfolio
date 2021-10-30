import React from "react";
import "./MainContainer.css";
import Home from "./Home/HomeSection";
import Services from "./Services/ServicesSection";
import Work from "./Work/WorkSection";
import Abouts from "./About/AboutSection";
import Projects from "./Projects/ProjectSection";

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
    </main>
  );
}

export default MainContainer;
