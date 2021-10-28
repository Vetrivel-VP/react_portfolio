import React from "react";

function ServiceBox({ imageName, box_name }) {
  return (
    <div className="service_box">
      <img src={imageName} alt="" />

      <h2>{box_name}</h2>

      <p>
        Lorem ipsum is a placeholder text commonly used to demonstrate. Lorem
        ipsum may be final copy is available.
      </p>

      <a href="#" className="service_button">
        Learn More
      </a>
    </div>
  );
}

export default ServiceBox;
