import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./CartItems.scss";
import { ShopContext } from "../../Context/ShopContext";

export default function CartItems() {
  const { cartItems, all_data, removeFromCart } = useContext(ShopContext);

  const itemsInCart = Object.entries(cartItems)
    .filter(([itemId, quantity]) => quantity > 0)
    .map(([itemId, quantity]) => {
      let itemDetails = all_data.find((item) => item.id === parseInt(itemId));
      console.log("itemdetails before quantity added", itemDetails);
      itemDetails = { ...itemDetails, quantity };
      console.log("itemdetails after quantity added", itemDetails);
      return itemDetails;
    });
    console.log("itemsincart",itemsInCart)
  let total = 0;
  let subtotal = 0;
  itemsInCart.forEach((item) => (total += item.new_price * item.quantity));
  subtotal = total;

  return (
    <div className="cartitems">
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {itemsInCart.map((item) => {
        return (
          <div>
            <div className=" cartitems-main cartitems-value" key={item.id}>
              <img
                src={item.image}
                className="cartitems-value-icon"
                alt={item.name}
              />
              <p className="cartitems-value-title">{item.name}</p>
              <p className="cartitems-value-price">${item.new_price}</p>
              <button className="cartitems-value-quantity">
                {item.quantity}
              </button>
              <p className="cartitems-value-total">
                ${item.new_price * item.quantity}
              </p>
              <div className="cartitems-value-delete">
                <DeleteIcon onClick={() => removeFromCart(item.id)} />
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="cartitems-down">
        <div className="cartitems-down-total">
          <h1>Cart Totals</h1>

          <div>
            <div className="cartitems-down-total-subtotal">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>

            <div className="cartitems-down-total-subtotal">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="hr" />
            <div className="cartitems-down-total-subtotal">
              <h3>Total</h3>
              <h3>${total}</h3>
            </div>

            <button>Proceed To Checkout</button>
          </div>
        </div>

        <div className="cartitems-down-promo">
          <p>Enter promotion code</p>
          <div className="cartitems-down-promo-code">
            <input type="text" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
