import React from "react";
import "./Alert.css";
import { FaCheck } from "react-icons/fa";

function Alert() {
  return (
    <div className="Alert" id="Alert">
      <div className="iconBox">
        <FaCheck />
      </div>

      <p className="alertText">Your message sent successfully</p>
    </div>
  );
}

export default Alert;
