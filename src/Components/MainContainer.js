import React from "react";
import "./MainContainer.css";
import Home from "./Home/HomeSection";
import Services from "./Services/ServicesSection";
import Work from "./Work/WorkSection";
import Clients from "./Clients/ClientsSection";

function MainContainer() {
  return (
    <main>
      {/* Home Section */}
      <Home />

      {/* Service Section */}
      <Services />

      {/* Work Section */}
      <Work />

      {/* Clients Section */}
      <Clients />
    </main>
  );
}

export default MainContainer;
