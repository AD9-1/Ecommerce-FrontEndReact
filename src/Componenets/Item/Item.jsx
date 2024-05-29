import React from "react";
import "./Item.scss";
import { Link } from "react-router-dom";
const Item = (props) => {

  return (
    <div className="item">
      <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={props.image}></img>
      </Link>
      <p>{props.name}</p>
      <div className="item__prices">
        <div className="item__prices__old">${props.old_price}</div>
        <div className="item__prices__new">${props.new_price}</div>
      </div>
    </div>
  );
};

export default Item;
