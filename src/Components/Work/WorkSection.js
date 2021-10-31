import React from "react";
import "./WorkSection.css";

import BrandImage from "../../img/clients_group.svg";

function WorkSection() {
  return (
    <section className="work section" id="work">
      <div className="circle work_circleOne"></div>
      <div className="circle work_circleThree"></div>

      <h2 className="section_title">Work</h2>

      <div className="work_container bd_grid">
        <div className="work_image">
          <img src={BrandImage} alt="" />
        </div>

        <div className="work_text_section">
          <h2 className="work_subtitle">
            We work for all this <br />
            <span>Brand & Clients</span>
          </h2>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate.Lorem
            ipsum may be final copy is available.Lorem ipsum is a placeholder
            text commonly used to demonstrate.Lorem ipsum may be final copy is
            available.
          </p>

          <a href="#" className="button">
            Details
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
