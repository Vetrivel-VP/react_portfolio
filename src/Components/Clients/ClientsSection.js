import React from "react";
import "./ClientsSection.css";

import SwiperSlider from "./SwiperSlider";

function ClientsSection() {
  return (
    <section className="clients section" id="clients">
      <div className="circle clients_circleOne"></div>
      <div className="circle clients_circleThree"></div>

      <h2 class="section_title">Clients</h2>

      <div className="clients_container bd_grid">
        <div className="clients_text_section">
          <h2 className="clients_subtitle">
            Client's always get exceptional work <br />
            <span>from me</span>
          </h2>
        </div>

        <div className="clients_image">
          <SwiperSlider />
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
