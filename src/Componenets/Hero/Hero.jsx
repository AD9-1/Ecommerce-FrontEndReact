import React from "react";
import "./Hero.scss";
import handIcon from "../../Assets/hand_icon.png";
import heroImg from "../../Assets/hero_image.png";
import arrow from "../../Assets/arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <h2>New Arrivals Here</h2>
        <div>
          <div className="hero__left__hand">
            <div>
              <p>new </p>
              <p>collections</p>
              <p>for everyone</p>
            </div>
            <img src={handIcon} className="image" />
          </div>
        </div>
        <div className="hero__left__latest">
          <div>Latest Collections</div>
          <img src={arrow}></img>
        </div>
      </div>
      <div className="hero__right">
        <img src={heroImg}></img>
      </div>
    </div>
  );
};

export default Hero;
