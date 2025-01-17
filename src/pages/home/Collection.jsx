import React, { useState } from "react";
import "./collection.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import featuredItems from "../../assets/featuredItems";

function Collection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState({});


  // Handle quantity changes for each product
  const handleQuantityChange = (id, actionType) => {
    setQuantities((prev) => {
      const currentQuantity = prev[id] || 1;
      const newQuantity =
        actionType === "increment"
          ? currentQuantity + 1
          : Math.max(1, currentQuantity - 1);
      return { ...prev, [id]: newQuantity };
    });
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    dispatch(addToCart({ ...item, quantity }));
    toast.success(`${item.title} added to cart!`);
  };

  return (
    <>
      <h4 style={{ textAlign: "center", fontSize: "23px" }}>New Collection</h4>
      <p style={{ color: "gray", textAlign: "center" }}>
        Our latest collection, where classic and contemporary styles <br />{" "}
        converge in perfect harmony.
      </p>
      <div className="featured-collection-container">
        {featuredItems.map((item) => (
          <div className="featured-item-container" key={item.id}>
            <img
              onClick={() =>
                navigate(`/product/${encodeURIComponent(item.id)}`)
              }
              src={item.image}
              alt={item.title}
            />
            <p className="featured-itemname">{item.title}</p>
            <p className="featured-price">${item.price}</p>
            <div className="quantity-button-container">
              <button
                onClick={() => handleQuantityChange(item.id, "decrement")}
              >
                -
              </button>
              <p>{quantities[item.id] || 1}</p>
              <button
                onClick={() => handleQuantityChange(item.id, "increment")}
              >
                +
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                className="featured-button"
                onClick={() => handleAddToCart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Collection;
