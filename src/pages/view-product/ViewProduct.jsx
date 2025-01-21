import React, { useEffect, useState } from "react";
import "./viewproduct.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import featuredItems from "../../assets/featuredItems";

function ViewProduct() {
  const { id } = useParams();
  //Objectid : 67dlajfdkal201dld

  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

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
            <p style={{ fontSize: "20px", color: "gray" }}>
              {selectedItem.category}
            </p>
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
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="feature-button" onClick={handleAddToCart}>
                  Add to cart
                </button>
              </div>
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

/*

api 
node.js


const Items = require('../../items);

const getItem = async (req , res) => {
  const {id} = req.body;

  if(!id){
  return res.status(400).json({message : "Cannot Get Id"}
  )}

  const findItem = await Items.findById({id});

  if(!findItem){
    return res.status(400).json({message : "Cannot Get Id"}
  }

  return res.status(200).json({message : "Item found sucessfully! " , findItem})

}






router.post('/getItem' , getItem)
*/
