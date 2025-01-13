import React from "react";
import "./collection.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Collection() {
  const dispatch = useDispatch();

  const featuredItems = [
    {
      id: 1,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "",
      category: "men's clothing",
      image: "/images/products/uploaded/dummary_four.png",
      isFeatured: true,
    },
    {
      id: 2,
      title: " Women Sweat Shirt",
      price: 39.99,
      description: "",
      category: "women's clothing",
      image: "/images/products/uploaded/dummy_one.png",
      isFeatured: true,
    },
    {
      id: 3,
      title: "Men Neck T-shirt",
      price: 33.99,
      description: "",
      category: "men's clothing",
      image: "/images/products/uploaded/neck_tshirt.png",
      isFeatured: true,
    },
    {
      id: 4,
      title: "DANVOUY Womens Hoodie",
      price: 12.99,
      description: "",
      category: "women's clothing",
      image: "/images/products/uploaded/dummy_two.png",
      isFeatured: true,
    },
    {
      id: 5,
      title: "Men Plain T-shirt",
      price: 13.99,
      description: "",
      category: "men's clothing",
      image: "/images/products/uploaded/white_tshirt.png",
      isFeatured: true,
    },
    {
      id: 6,
      title: "Women Plain T-shirt",
      price: 13.99,
      description: "",
      category: "men's clothing",
      image: "/images/products/ladies_tshirt.png",
      isFeatured: true,
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
            <img src={value.image} alt={value.title} />
            <p className="featured-itemname">{value.title}</p>
            <p className="featured-price">${value.price}</p>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    title: value.title,
                    image: value.image,
                    price: value.price,
                    description: value.description,
                  })
                )
              }
              className="featured-button"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Collection;
