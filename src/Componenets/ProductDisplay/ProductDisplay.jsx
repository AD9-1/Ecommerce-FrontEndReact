import React, { useContext } from "react";
import "./ProductDisplay.scss";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-left-image">
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
          <img src={product.image}></img>
        </div>
        <div className="productdisplay-left-mainimg">
          <img src={product.image}></img>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />
          <span>(122)</span>
        </div>
        <div className="productdisplay-right-price">
          <p className="oldprice">${product.old_price}</p>
          <p className="newprice">${product.new_price}</p>
        </div>
        <div className="productdisplay-right-description">
          A new lightweight shirt close fitting and a round neckline ,worn as
          undershirt
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Sizes</h1>
          <div className="sizes">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>

        <p className="productdisplay-right-category">
          <span>Category :</span> {product.category}, T-Shirt, Crop-Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
