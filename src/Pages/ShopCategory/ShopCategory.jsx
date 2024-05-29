import React, { useContext } from "react";
import "./ShopCategory.scss";
import { ShopContext } from "../../Context/ShopContext";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import Item from "../../Componenets/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_data } = useContext(ShopContext);

  return (
    <div className="shopcategory">
      <img src={banner}></img>
      <div className="shopcategory-indexsort">
        <p>Showing 1-12 Out of 36 products</p>
        <div className="shopcategory-indexsort-sort">
          <span>Sort By</span> <ArrowDropDownSharpIcon className="icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_data
          .filter((item) => item.category === category)
          .map((filteredItem) => (
            <Item
              className="shopcategory-products-item"
              id={filteredItem.id}
              name={filteredItem.name}
              image={filteredItem.image}
              old_price={filteredItem.old_price}
              new_price={filteredItem.new_price}
            />
          ))}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
