import React from "react";
import "./collection.css";

function Collection() {
  const featuredItems = [
    {
      itemName: "Running Shoes",
      description: "Lightweight Running Shoes with Breathable Mesh",
      price: "75",
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },

    {
      itemName: "Running Shoes",
      description: "Lightweight Running Shoes with Breathable Mesh",
      price: "75",
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      itemName: "Running Shoes",
      description: "Lightweight Running Shoes with Breathable Mesh",
      price: "75",
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      itemName: "Running Shoes",
      description: "Lightweight Running Shoes with Breathable Mesh",
      price: "75",
      isFeatured: true,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    
  ];

  return (
    <>
      <h4 style={{ textAlign: "center", fontSize: "23px" }}>New Collection</h4>
      <p style={{ color: "gray", textAlign: "center" }}>
        Our latest collection, where classic and contemporary styles <br />{" "}
        converge in perfect harmony.
      </p>
      <div className="featured-collection-container">
        {featuredItems.map((value, index) => (
          <div className="featured-item-container">
            <img src={value.image} alt={value.itemName} />
            <p className="featured-itemname">{value.itemName}</p>
            <p className="featured-description">{value.description}</p>
            <p className="featured-price">${value.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Collection;
