import React from "react";
import { useSelector } from "react-redux";
import { imageCdnUrl } from "../Utils/constants";
import { useState } from "react";
import store from "../Utils/store";
import { useDispatch } from "react-redux";
import { removeItem } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [filteredCartItems, setFilteredCartItems] = useState(cartItems);
  console.log(cartItems);

  const dispatcher = useDispatch();

  const onRemoveHandler = (removedItem) => {
    const data = filteredCartItems.filter((item) => {
      return item != removedItem;
    });
    setFilteredCartItems(data);
    dispatcher(removeItem(removedItem));
  };

  if (cartItems.length == 0) {
    return <h1>Your cart is empty</h1>;
  } else {
    return (
      <div className="Menu">
        {filteredCartItems.map((item) => {
          return (
            <div className="card">
              <img
                className="card-image"
                src={imageCdnUrl + item.cloudinaryImageId}
              ></img>
              <h1 className="card-title">{item.name}</h1>
              <h2 className="card-rating">Price:{item.price / 100}</h2>
              <button
                className="remove-from-cart"
                onClick={() => {
                  onRemoveHandler(item);
                }}
              >
                Remove from Cart
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default Cart;
