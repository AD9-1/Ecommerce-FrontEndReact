import React, { useContext } from "react";
import "./Product.scss";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../../Componenets/BreadCrums/BreadCrums";
import ProductDisplay from "../../Componenets/ProductDisplay/ProductDisplay";
import Descriptionbox from "../../Componenets/Descriptionbox/Descriptionbox";
import RelatedProduct from "../../Componenets/RelatedProducts/RelatedProduct";
const Product = () => {
  const { all_data } = useContext(ShopContext);
  const { productId } = useParams(); //string
  console.log(typeof productId);

  const product = all_data.find((item) => {
    console.log(typeof item.id); //number
    return item.id === parseInt(productId);
  });

  return (
    <div>
      {product ? (
        <>
          <BreadCrums product={product} />
          <ProductDisplay product={product} />
          <Descriptionbox />
          <RelatedProduct />
        </>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default Product;
