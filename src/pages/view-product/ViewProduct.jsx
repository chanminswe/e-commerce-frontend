import React, { useEffect, useState } from "react";
import "./viewproduct.css";
import { useParams } from "react-router-dom";

function ViewProduct() {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

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
  return (
    <>
      {selectedItem ? (
        <div className="view-product-container">
          <div className="product-image-container">
            <img src={selectedItem.image} alt={selectedItem.title} />
          </div>
          <div className="product-description-container">
            <p>{selectedItem.category}</p>
            <p>{selectedItem.title}</p>
            <p>{selectedItem.category}</p>
            
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
