import React, { createContext, useEffect, useState } from "react";
// import all_products from "../Assets/all_product";

export const ShopContext = createContext(null);

const getdefaultCart = () => {
  let cart = {};
  for (let index = 1; index <= 40; index++) cart[index] = 0;
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getdefaultCart());
  const [all_products, setAll_Product] = useState([]);
  const token = localStorage.getItem("auth-token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/allProducts", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok != true) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAll_Product(data);
        if (token) {
          const resp = await fetch(
            "http://localhost:4000/getCartDataForParticularUser",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (resp.ok) {
            const data = await resp.json();
            console.log("The cartItems for particular user", data);
            setCartItems(data);
          }
        }
      } catch (err) {
        console.log("Error occurred :", err.message);
      }
    };
    fetchData();
  }, []);
  const getTotalCartItems = () => {
    let sum = 0;
    Object.values(cartItems).forEach((quantity) => {
      if (quantity > 0) sum += quantity;
    });
    console.log("The total", sum);
    return sum;
  };

  const addToCart = async (itemId) => {
   //setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //console.log(cartItems);it cannot print the cartItem due to the asynchronous behavoiur of useState
    try {
      const res = await fetch(`http://localhost:4000/addToCart/${itemId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.message);
      } else {
        alert(data.message);
        console.log("After adding the Items into Cart Data",data.cartData);
        setCartItems(data.cartData);
      }
    } 
    
    catch (error) {
      console.log("Error", error);
    }
  };

  const removeFromCart = async (itemId) => {
   // setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    try {
      const response = await fetch(
        `http://localhost:4000/removeFromCart/${itemId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      alert(data.message);
      setCartItems(data.cartData)
    } catch (error) {
      console.log("Error", error);
    }
  };
  //creating endpoint to get all cart data for a particular user

  return (
    <ShopContext.Provider
      value={{
        all_data: all_products,
        cartItems: cartItems,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        getTotalCartItems: getTotalCartItems,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
