import React from "react";
import "./BreadCrums.scss";
import arrow_icon from "../../Assets/breadcrum_arrow.png";
const BreadCrums = ({ product }) => {
  return (
    <div className="breadcrums">
      Home
      <img src={arrow_icon} />
      Shop
      <img src={arrow_icon} />
      {product.category}
      <img src={arrow_icon} />
      {product.name}
    </div>
  );
};

export default BreadCrums;
