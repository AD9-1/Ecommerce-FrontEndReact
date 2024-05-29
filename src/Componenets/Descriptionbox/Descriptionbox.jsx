import React from "react";
import "./Descriptionbox.scss";
const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navigator-navbox">Description</div>
        <div className="descriptionbox-navigator-navbox fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          {" "}
          E-commerce (electronic commerce) is the website which facilitates the
          exchange of goods and services and the transmission of funds and data
          over the internet. E-commerce relies on technology and digital
          platforms, including websites, mobile apps and social media to make
          buying and selling possible.
        </p>
        <p>
          {" "}
          E-commerce websites typically display products or services with a
          detailed description ,images,prices and available in selective colors
          and sizes
        </p>
      </div>
    </div>
  );
};

export default Descriptionbox;
