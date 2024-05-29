import React from "react";
import "./NewsLetter.scss";
const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter</p>
      <div className="newsletter__email">
        <input type="email" placeholder="Enter Your email id"></input>
        <button>Subscribe   </button>
      </div>
    </div>
  );
};

export default NewsLetter;
