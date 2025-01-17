import React, { useEffect, useState } from "react";
import "./filterpage.css";
import { useParams } from "react-router-dom";
import featuredItems from "../../assets/featuredItems";

function FilterPage() {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({});

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

  //to filter depending on category
  useEffect(() => {
    function filteringCategory() {
      if (category === "clothing") {
        setItems(featuredItems);
      } else {
        const ourCategory = featuredItems.filter(
          (allItems) => allItems.filterCategory === category
        );
        setItems(ourCategory);
      }
    }
    filteringCategory();
  }, [category]);

  return (
    <div className="featured-collection-container">
      {items.map((item, index) => (
        <div className="featured-item-container" key={item.id}>
          <img
            onClick={() => navigate(`/product/${encodeURIComponent(item.id)}`)}
            src={item.image}
            alt={item.title}
          />
          <p className="featured-itemname">{item.title}</p>
          <p className="featured-price">${item.price}</p>
          <div className="quantity-button-container">
            <button onClick={() => handleQuantityChange(item.id, "decrement")}>
              -
            </button>
            <p>{quantities[item.id] || 1}</p>
            <button onClick={() => handleQuantityChange(item.id, "increment")}>
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
  );
}

export default FilterPage;
