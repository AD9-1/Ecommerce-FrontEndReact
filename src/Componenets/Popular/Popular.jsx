import React, { useEffect, useState } from "react";
import "./Popular.scss";
import Item from "../Item/Item";
import data from "../../Assets/data";
const Popular = () => {
  const [popular, setPopular] = useState([]);
  const category = "women";
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://localhost:4000/popular/${category}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => setPopular(data))
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <div className="popular__item">
        {popular.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
