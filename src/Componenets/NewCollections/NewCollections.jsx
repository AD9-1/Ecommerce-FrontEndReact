import React, { useEffect, useState } from "react";
import "./NewCollections.scss";
import newcollections from "../../Assets/new_collections";
import Item from "../Item/Item";
const NewCollections = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:4000/newCollections", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="newcollections">
      <h1>New Collections</h1>
      <hr />
      <div className="newcollections__item">
        {data?.map((item, i) => (
          <Item
            key={i}
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

export default NewCollections;
