import React, { useEffect, useState } from "react";
import "./viewproduct.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function ViewProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const featuredItems = [
    {
      id: 1,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus repudiandae provident ullam commodi. Cum deleniti, iusto repellat corrupti deserunt maiores.",
      category: "men's clothing",
      image: "/images/products/uploaded/dummary_four.png",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Women Sweat Shirt",
      price: 39.99,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus repudiandae provident ullam commodi. Cum deleniti, iusto repellat corrupti deserunt maiores.",
      category: "women's clothing",
      image: "/images/products/uploaded/dummy_one.png",
      isFeatured: true,
    },
    {
      id: 3,
      title: "Men Neck T-shirt",
      price: 33.99,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus repudiandae provident ullam commodi. Cum deleniti, iusto repellat corrupti deserunt maiores.",
      category: "men's clothing",
      image: "/images/products/uploaded/neck_tshirt.png",
      isFeatured: true,
    },
    {
      id: 4,
      title: "DANVOUY Womens Hoodie",
      price: 12.99,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus repudiandae provident ullam commodi. Cum deleniti, iusto repellat corrupti deserunt maiores.",
      category: "women's clothing",
      image: "/images/products/uploaded/dummy_two.png",
      isFeatured: true,
    },
    {
      id: 5,
      title: "Men Plain T-shirt",
      price: 13.99,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus repudiandae provident ullam commodi. Cum deleniti, iusto repellat corrupti deserunt maiores.",
      category: "men's clothing",
      image: "/images/products/uploaded/white_tshirt.png",
      isFeatured: true,
    },
    {
      id: 6,
      title: "Women Plain T-shirt",
      price: 13.99,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus repudiandae provident ullam commodi. Cum deleniti, iusto repellat corrupti deserunt maiores.",
      category: "men's clothing",
      image: "/images/products/ladies_tshirt.png",
      isFeatured: true,
    },
  ];

  useEffect(() => {
    function filterItem() {
      const selected = featuredItems.find((item) => item.id === parseInt(id));
      setSelectedItem(selected);
    }

    filterItem();
  }, [id]);

  const handleAddToCart = () => {
    if (selectedItem) {
      dispatch(addToCart({ ...selectedItem, quantity }));
    }
  };

  const handleQuantityChange = (actionType) => {
    if (actionType === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (actionType === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      {selectedItem ? (
        <div className="view-product-container">
          <div className="product-image-container">
            <img src={selectedItem.image} alt={selectedItem.title} />
          </div>
          <div className="product-description-container">
            <p style={{ fontSize: "20px" }}>{selectedItem.category}</p>
            <p style={{ fontSize: "25px" }}>{selectedItem.title}</p>
            <p style={{ fontSize: "15px" }}>{selectedItem.description}</p>
            <div className="quantity-button-container">
              <button
                onClick={() => {
                  handleQuantityChange("increment");
                }}
              >
                +
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => {
                  handleQuantityChange("decrement");
                }}
              >
                -
              </button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3>No selected item</h3>
        </div>
      )}
    </>
  );
}

export default ViewProduct;
