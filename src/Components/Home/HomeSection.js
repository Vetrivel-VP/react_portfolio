import React from "react";
import "./HomeSection.css";

// Social Links
import HomeSocial from "./HomeSocial.js";

// Image
import LadyImage from "../../img/lady_img.png";
import Smiley from "../../img/smiley_1.svg";
import LadyBgPath from "../../img/lady_bgpath.svg";
import Star1 from "../../img/star.svg";
import Star2 from "../../img/star_2.svg";
import Star3 from "../../img/star_3.svg";

function HomeSection() {
  return (
    <section className="home bd_grid">
      <div className="circle circleOne"></div>
      <div className="circle circleTwo"></div>
      <div className="circle circleThree"></div>
      <div className="home_data">
        <h1 className="home_title">
          Hi, I'am <br /> <span>Cathy James</span> <br /> Web Designer
        </h1>

        <a href="#" className="button">
          Contact
        </a>
      </div>

      <div className="homeSocial">
        {HomeSocial &&
          HomeSocial.map((social) => (
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
          ))}
      </div>

      <div className="home_img">
        <img src={LadyImage} alt="" className="profileImg" />
        <img src={LadyBgPath} alt="" className="profileBg" />

        <img src={Smiley} alt="" className="smiley" />
        <img src={Star1} alt="" className="Star1" />
        <img src={Star2} alt="" className="Star2" />
        <img src={Star3} alt="" className="Star3" />
      </div>
    </section>
  );
}

export default HomeSection;
