import React from "react";
import "./Shop.scss";
import Hero from "../../Componenets/Hero/Hero";
import Popular from "../../Componenets/Popular/Popular";
import Offers from "../../Componenets/Offers/Offers";
import NewCollections from "../../Componenets/NewCollections/NewCollections";
import NewsLetter from "../../Componenets/NewsLetter/NewsLetter";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
