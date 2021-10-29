import React from "react";
import "./MainContainer.css";
import Home from "./Home/HomeSection";
import Services from "./Services/ServicesSection";
import Work from "./Work/WorkSection";
import Abouts from "./About/AboutSection";

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
    </main>
  );
}

export default MainContainer;
