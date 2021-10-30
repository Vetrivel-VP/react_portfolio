import React from "react";

function ImageContainer({ imageName }) {
  return (
    <div className="projects_img">
      <img src={imageName} alt="" />
    </div>
  );
}

export default ImageContainer;
