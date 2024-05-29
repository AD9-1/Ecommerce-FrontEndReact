import React from "react";
import "./Offers.scss";
import exclusive from "../../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers__left">
        <h1>Exclusive Offers</h1>
        <h1>For you</h1>
        <button>Check Now</button>
      </div>
      <div className="offers__right">
        <img src={exclusive} />
      </div>
    </div>
  );
};

export default Offers;
