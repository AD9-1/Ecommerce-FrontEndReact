import React from "react";
import "./Footer.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import logo_big from "../../Assets/logo_big.png";
const Footer = () => {
  return (
    <>
      <hr className="horizontal" />
      <div className="footer">
        <div className="footer-logo">
          <img src={logo_big}></img>
          <p>ShopZone</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <div className="footer-container">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
      </div>

      <div className="copyright">
        <p>Copyright @ 2023 - All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
